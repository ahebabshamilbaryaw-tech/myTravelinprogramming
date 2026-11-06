import db from "../../../../db/db.config.js";

// Validate conversation ID
const validateConversationId = (conversationId) => {
    const id = Number(conversationId);

    if (!Number.isSafeInteger(id) || id <= 0) {
        const error = new Error("Invalid conversation ID");
        error.statusCode = 400;
        throw error;
    }

    return id;
};

// Check if conversation exists
const checkConversationExists = async (connection, conversationId) => {
    const [rows] = await connection.execute(
        "SELECT id FROM conversation WHERE id = ?",
        [conversationId]
    );

    if (rows.length === 0) {
        const error = new Error("Conversation not found");
        error.statusCode = 404;
        throw error;
    }
};

// Get recent conversations
export const getRecentConversationsService = async (limit = 5) => {
    const [rows] = await db.execute(
        `SELECT
            c.id,
            c.title,
            c.created_at,
            c.updated_at,
            (
                SELECT m.content
                FROM message AS m
                WHERE m.conversation_id = c.id
                ORDER BY m.created_at DESC, m.id DESC
                LIMIT 1
            ) AS last_message
        FROM conversation AS c
        ORDER BY c.updated_at DESC
        LIMIT ?`,
        [limit]
    );

    return rows;
};

// Get a single conversation by ID
export async function getConversationByIdService(conversationId) {
    const id = validateConversationId(conversationId);

    const [rows] = await db.execute(
        `SELECT
            id,
            title,
            created_at,
            updated_at
         FROM conversation
         WHERE id = ?`,
        [id]
    );

    if (rows.length === 0) {
        const error = new Error("Conversation not found");
        error.statusCode = 404;
        throw error;
    }

    return rows[0];
}

// Create a new conversation with the first user message
export async function createConversationService(question) {
    if (typeof question !== "string" || !question.trim()) {
        const error = new Error("Question is required");
        error.statusCode = 400;
        throw error;
    }

    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        const [conversationResult] = await connection.execute(
            "INSERT INTO conversation (title) VALUES (?)",
            [question.trim().slice(0, 50)]
        );

        const conversationId = conversationResult.insertId;

        const [messageResult] = await connection.execute(
            `INSERT INTO message
                (conversation_id, role, content)
             VALUES (?, ?, ?)`,
            [conversationId, "user", question.trim()]
        );

        await connection.commit();

        return {
            conversationId,
            messageId: messageResult.insertId,
            title: question.trim().slice(0, 50),
            content: question.trim()
        };

    } catch (error) {
        await connection.rollback();
        throw error;

    } finally {
        connection.release();
    }
}

// Send a message to an existing conversation
export async function sendMessageService(conversationId, content) {
    const id = validateConversationId(conversationId);

    if (typeof content !== "string" || !content.trim()) {
        const error = new Error("Message content is required");
        error.statusCode = 400;
        throw error;
    }

    await checkConversationExists(db, id);

    const messageContent = content.trim();

    const [result] = await db.execute(
        `INSERT INTO message
            (conversation_id, role, content)
         VALUES (?, ?, ?)`,
        [id, "user", messageContent]
    );

    // Update conversation activity
    await db.execute(
        "UPDATE conversation SET updated_at = CURRENT_TIMESTAMP WHERE id = ?",
        [id]
    );

    return {
        messageId: result.insertId,
        conversationId: id,
        role: "user",
        content: messageContent
    };
}

// Get all messages in a conversation
export async function getMessagesService(conversationId) {
    const id = validateConversationId(conversationId);

    await checkConversationExists(db, id);

    const [messages] = await db.execute(
        `SELECT
            id,
            conversation_id,
            role,
            content,
            token_count,
            created_at
         FROM message
         WHERE conversation_id = ?
         ORDER BY created_at ASC, id ASC`,
        [id]
    );

    return messages;
}

// Rename an existing conversation
export async function renameConversationService(conversationId, title) {
    const id = validateConversationId(conversationId);

    if (typeof title !== "string" || !title.trim()) {
        const error = new Error("Conversation title is required");
        error.statusCode = 400;
        throw error;
    }

    const newTitle = title.trim();

    if (newTitle.length > 255) {
        const error = new Error("Title must not exceed 255 characters");
        error.statusCode = 400;
        throw error;
    }

    await checkConversationExists(db, id);

    await db.execute(
        `UPDATE conversation
         SET title = ?, updated_at = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [newTitle, id]
    );

    return {
        conversationId: id,
        title: newTitle
    };
}

// Delete an existing conversation
export async function deleteConversationService(conversationId) {
    const id = validateConversationId(conversationId);

    await checkConversationExists(db, id);

    await db.execute(
        "DELETE FROM conversation WHERE id = ?",
        [id]
    );

    return {
        conversationId: id
    };
}

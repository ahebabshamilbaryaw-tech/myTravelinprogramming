
import db from "../../../../db/db.config.js";

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

        // Create conversation
        const [conversationResult] = await connection.execute(
            "INSERT INTO conversation (title) VALUES (?)",
            [question.trim().slice(0, 50)]
        );

        const conversationId = conversationResult.insertId;

        // Save user message
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

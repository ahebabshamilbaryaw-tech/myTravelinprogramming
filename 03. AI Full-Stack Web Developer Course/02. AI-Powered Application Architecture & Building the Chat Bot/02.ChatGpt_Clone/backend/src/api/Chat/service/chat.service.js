import db from "../../../../db/db.config.js";

export const getRecentConversationsService = async (limit=5) =>  {
    const [rows] = await db.execute("SELECT * FROM conversation ORDER BY created_at DESC LIMIT ?", [limit]);
    return rows;
};

export async function createConversationService(question) {
    try {
        if (!question.trim()) {
            const error = new Error("Question is required");
            error.statusCode = 400;
            throw error;
        }

        await db.execute("INSERT INTO conversation (role, content) VALUES (?, ?)", 
            ["user", question],
        );
        return `chat saved to db with question: ${question}`;
    } catch (error) {
        throw error;
    }
}
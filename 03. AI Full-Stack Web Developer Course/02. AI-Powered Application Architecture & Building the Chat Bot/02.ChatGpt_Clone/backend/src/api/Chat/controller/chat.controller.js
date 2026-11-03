
import {
    createConversationService,
    getRecentConversationsService
} from "../service/chat.service.js";

export async function createConversationController(req, res) {
    try {
        const { question } = req.body;

        const result = await createConversationService(question);

        res.status(201).json({
            success: true,
            message: "chat created successfully",
            data: result
        });
    } catch (error) {
        throw error;
    }
}

export async function getConversationController(req, res) {
    try {
        const conversations = await getRecentConversationsService();

        res.status(200).json({
            success: true,
            message: "conversations retrieved successfully",
            data: conversations
        });
    } catch (error) {
        throw error;
    }
}

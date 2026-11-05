import {
    createConversationService,
    getRecentConversationsService
} from "../service/chat.service.js";

export async function createConversationController(req, res) {
    const { question } = req.body;

    const result = await createConversationService(question);

    res.status(201).json({
        success: true,
        message: "chat created successfully",
        data: result
    });
}

export async function getConversationController(req, res) {
    const conversations = await getRecentConversationsService();

    res.status(200).json({
        success: true,
        message: "conversations retrieved successfully",
        data: conversations
    });
}
import {
    createConversationService,
    getRecentConversationsService,
    getConversationByIdService,
    renameConversationService,
    deleteConversationService,
    sendMessageService,
    getMessagesService
} from "../service/chat.service.js";

// Create a new conversation
export async function createConversationController(req, res) {
    const { question } = req.body;

    const result = await createConversationService(question);

    res.status(201).json({
        success: true,
        message: "conversation created successfully",
        data: result
    });
}

// Get recent conversations
export async function getConversationController(req, res) {
    const conversations = await getRecentConversationsService();

    res.status(200).json({
        success: true,
        message: "conversations retrieved successfully",
        data: conversations
    });
}

// Get a single conversation
export async function getConversationByIdController(req, res) {
    const { conversationId } = req.params;

    const conversation = await getConversationByIdService(conversationId);

    res.status(200).json({
        success: true,
        message: "conversation retrieved successfully",
        data: conversation
    });
}

// Rename a conversation
export async function renameConversationController(req, res) {
    const { conversationId } = req.params;
    const { title } = req.body;

    const result = await renameConversationService(conversationId, title);

    res.status(200).json({
        success: true,
        message: "conversation renamed successfully",
        data: result
    });
}

// Delete a conversation
export async function deleteConversationController(req, res) {
    const { conversationId } = req.params;

    const result = await deleteConversationService(conversationId);

    res.status(200).json({
        success: true,
        message: "conversation deleted successfully",
        data: result
    });
}

// Send a message
export async function sendMessageController(req, res) {
    const { conversationId } = req.params;
    const { content } = req.body;

    const result = await sendMessageService(conversationId, content);

    res.status(201).json({
        success: true,
        message: "message sent successfully",
        data: result
    });
}

// Get all messages in a conversation
export async function getMessagesController(req, res) {
    const { conversationId } = req.params;

    const messages = await getMessagesService(conversationId);

    res.status(200).json({
        success: true,
        message: "messages retrieved successfully",
        data: messages
    });
}

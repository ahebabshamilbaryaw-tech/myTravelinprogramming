
import {
    createConversationService,
    getRecentConversationsService,
    getConversationByIdService,
    renameConversationService,
    deleteConversationService,
    sendMessageService,
    saveAIResponseService,
    getMessagesService
} from "../service/chat.service.js";

import { generateAIResponse } from "../service/ai.service.js";

// Create a new conversation
export async function createConversationController(req, res) {
    const { question } = req.body;

    const conversation = await createConversationService(question);

    res.status(201).json({
        success: true,
        message: "conversation created successfully",
        data: conversation
    });
}

// Get recent conversations
export async function getConversationController(req, res) {
    const conversations = await getRecentConversationsService();

    res.status(200).json({
        success: true,
        data: conversations
    });
}

// Get a single conversation
export async function getConversationByIdController(req, res) {
    const { conversationId } = req.params;

    const conversation = await getConversationByIdService(conversationId);

    res.status(200).json({
        success: true,
        data: conversation
    });
}

// Rename conversation
export async function renameConversationController(req, res) {
    const { conversationId } = req.params;
    const { title } = req.body;

    const conversation = await renameConversationService(
        conversationId,
        title
    );

    res.status(200).json({
        success: true,
        message: "conversation renamed successfully",
        data: conversation
    });
}

// Delete conversation
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

    // Save user message
    const userMessage = await sendMessageService(
        conversationId,
        content
    );

    // Generate mock AI response
    const aiResponse = await generateAIResponse(content);

    // Save AI response
    const assistantMessage = await saveAIResponseService(
        conversationId,
        aiResponse
    );

    res.status(201).json({
        success: true,
        message: "message sent successfully",
        data: {
            userMessage,
            assistantMessage
        }
    });
}

// Get all messages
export async function getMessagesController(req, res) {
    const { conversationId } = req.params;

    const messages = await getMessagesService(conversationId);

    res.status(200).json({
        success: true,
        data: messages
    });
}

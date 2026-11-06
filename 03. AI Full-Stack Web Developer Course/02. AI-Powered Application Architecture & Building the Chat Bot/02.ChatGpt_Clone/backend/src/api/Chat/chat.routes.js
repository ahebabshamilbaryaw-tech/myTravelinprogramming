import express from "express";

const chatRoutes = express.Router();

import {
    createConversationController,
    getConversationController,
    getConversationByIdController,
    renameConversationController,
    deleteConversationController,
    sendMessageController,
    getMessagesController
} from "./controller/chat.controller.js";

// Conversation routes
chatRoutes.post("/conversations", createConversationController);
chatRoutes.get("/conversations", getConversationController);

// Get a single conversation
chatRoutes.get(
    "/conversations/:conversationId",
    getConversationByIdController
);

// Rename a conversation
chatRoutes.put(
    "/conversations/:conversationId",
    renameConversationController
);

// Delete a conversation
chatRoutes.delete(
    "/conversations/:conversationId",
    deleteConversationController
);

// Message routes
chatRoutes.post(
    "/conversations/:conversationId/messages",
    sendMessageController
);

chatRoutes.get(
    "/conversations/:conversationId/messages",
    getMessagesController
);

export default chatRoutes;

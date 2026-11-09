
import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

export async function generateAIResponse(question) {
  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash-lite',
    contents: question,
  })

  return response.text
}

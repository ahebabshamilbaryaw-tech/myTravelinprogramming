
import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const GEMINI_EMBEDDING_MODEL =
    process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

// Validate API Key
if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
}

// Initialize Gemini AI
const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY
});

// Cosine Similarity Function
function cosineSimilarity(vec1, vec2) {

    // Validate vector length
    if (vec1.length !== vec2.length) {
        throw new Error('Vectors must have the same length');
    }

    // Dot product and Magnitude
    let dotProduct = 0;
    let magnitudeVec1 = 0;
    let magnitudeVec2 = 0;

    for (let i = 0; i < vec1.length; i++) {
        dotProduct += vec1[i] * vec2[i];

        magnitudeVec1 += vec1[i] * vec1[i];

        magnitudeVec2 += vec2[i] * vec2[i];
    }

    // Calculate Magnitude using Square Root
    magnitudeVec1 = Math.sqrt(magnitudeVec1);
    magnitudeVec2 = Math.sqrt(magnitudeVec2);

    // Prevent division by zero
    if (magnitudeVec1 === 0 || magnitudeVec2 === 0) {
        throw new Error(
            'Cannot calculate cosine similarity for zero vectors'
        );
    }

    // Cosine Similarity Formula
    return dotProduct / (magnitudeVec1 * magnitudeVec2);
}

// Compare Text Using Embeddings
async function compareText() {

    const text1 = 'my name is bilal';

    const text2 = 'i want to build mosque by name of my mom';

    const text3 = 'Addis ababa is the capital city of ethiopia';

    try {

        // Generate Embeddings for Text 1
        const result1 = await ai.models.embedContent({
            model: GEMINI_EMBEDDING_MODEL,
            contents: text1,
            config: {
                taskType: 'SEMANTIC_SIMILARITY'
            }
        });

        // Generate Embeddings for Text 2
        const result2 = await ai.models.embedContent({
            model: GEMINI_EMBEDDING_MODEL,
            contents: text2,
            config: {
                taskType: 'SEMANTIC_SIMILARITY'
            }
        });

        // Generate Embeddings for Text 3
        const result3 = await ai.models.embedContent({
            model: GEMINI_EMBEDDING_MODEL,
            contents: text3,
            config: {
                taskType: 'SEMANTIC_SIMILARITY'
            }
        });

        // Extract Embedding Vectors
        const v1 = result1.embeddings[0].values;
        const v2 = result2.embeddings[0].values;
        const v3 = result3.embeddings[0].values;

        // Compare Text 1 and Text 2
        const V1AndV2 = cosineSimilarity(v1, v2);
        console.log('V1AndV2 Similarity:', V1AndV2);

        // Compare Text 1 and Text 3
        const V1AndV3 = cosineSimilarity(v1, v3);
        console.log('V1AndV3 Similarity:', V1AndV3);

        // Compare Text 2 and Text 3
        const V2AndV3 = cosineSimilarity(v2, v3);
        console.log('V2AndV3 Similarity:', V2AndV3);

    } catch (error) {
        console.error('Error comparing text:', error.message);
    }
}

// Run the function
compareText();

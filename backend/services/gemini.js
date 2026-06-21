const {
GoogleGenerativeAI
} =
require("@google/generative-ai");

const buildPrompt =
require("../utils/promptBuilder");

const genAI =
new GoogleGenerativeAI(
process.env.GEMINI_API_KEY
);

async function generateIdea(
studentName,
branch,
year,
domain,
difficulty
){

const model =
genAI.getGenerativeModel({
model:"gemini-1.5-flash"
});

const prompt =
buildPrompt(
studentName,
branch,
year,
domain,
difficulty
);

const result =
await model.generateContent(prompt);

return result.response.text();
}

module.exports =
generateIdea;
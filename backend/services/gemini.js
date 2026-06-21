async function generateIdea(
studentName,
branch,
year,
domain,
difficulty
){

return `
🚀 Project Name:
AI ${domain} Project Generator

📖 Description:
An AI-powered platform that helps ${branch}
students generate innovative project ideas.

✨ Features:
• Project Idea Generation
• Tech Stack Suggestions
• Architecture Diagrams
• README Generator
• Difficulty Analysis

🛠 Tech Stack:
HTML
CSS
JavaScript
Node.js
Express.js

🏗 Architecture:
Frontend → Backend → AI Engine

📅 Roadmap:
Phase 1 - UI Development
Phase 2 - Backend APIs
Phase 3 - AI Integration
Phase 4 - Deployment

🔮 Future Scope:
Mobile Application
Cloud Deployment
Team Collaboration
`;
}

module.exports = generateIdea;
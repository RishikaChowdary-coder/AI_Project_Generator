function buildPrompt(
    studentName,
    branch,
    year,
    domain,
    difficulty
) {

return `

Generate 10 innovative project ideas.

Student Details:
Name: ${studentName}
Branch: ${branch}
Year: ${year}
Domain: ${domain}
Difficulty: ${difficulty}

For each project include:

1. Project Name
2. Description
3. Problem Solved
4. Features
5. Tech Stack
6. Architecture Overview
7. Development Roadmap
8. Future Scope
9. GitHub README Summary

Make all 10 projects unique.

Format:

=========================
PROJECT 1
=========================

Project Name:
Description:
Problem Solved:
Features:
Tech Stack:
Architecture:
Roadmap:
Future Scope:
README Summary:

=========================
PROJECT 2
=========================

...

Continue until PROJECT 10.

`;
}

module.exports = buildPrompt;
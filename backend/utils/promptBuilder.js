function buildPrompt(
studentName,
branch,
year,
domain,
difficulty
){

return `

Generate a unique student project.

Student:
${studentName}

Branch:
${branch}

Year:
${year}

Domain:
${domain}

Difficulty:
${difficulty}

Return:

1. Project Name

2. Description

3. Features

4. Tech Stack

5. Architecture Diagram

6. Development Roadmap

7. GitHub README

8. Future Scope

`;

}

module.exports =
buildPrompt;
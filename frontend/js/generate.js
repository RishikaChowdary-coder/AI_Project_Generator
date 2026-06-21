async function generateProject() {

    const studentName =
        document.getElementById("studentName").value;

    const branch =
        document.getElementById("branch").value;

    const year =
        document.getElementById("year").value;

    const domain =
        document.getElementById("domain").value;

    const difficulty =
        document.getElementById("difficulty").value;

    if (!branch || !year || !domain) {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("projectOutput").innerHTML =
        "Generating Project... ⏳";

    try {

        const response = await fetch(
            "http://localhost:5000/api/project/generate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    studentName,
                    branch,
                    year,
                    domain,
                    difficulty
                })
            }
        );

        const data = await response.json();

        document.getElementById("projectOutput").innerHTML =
`
<div class="generated-content">
${data.project.replace(/\n/g,"<br>")}
</div>
`;

        localStorage.setItem(
            "latestProject",
            data.project
        );

    } catch (error) {

        document.getElementById("projectOutput").innerHTML =
            "Failed to generate project.";

        console.error(error);
    }
}
function saveProject() {

    const project =
        localStorage.getItem("latestProject");

    if (!project) {
        alert("Generate a project first!");
        return;
    }

    let savedProjects =
        JSON.parse(
            localStorage.getItem("savedProjects")
        ) || [];

    savedProjects.push({
        id: Date.now(),
        project
    });

    localStorage.setItem(
        "savedProjects",
        JSON.stringify(savedProjects)
    );

    alert("Project Saved Successfully ✅");
}

function displaySavedProjects() {

    const container =
        document.getElementById("savedProjects");

    if (!container) return;

    const savedProjects =
        JSON.parse(
            localStorage.getItem("savedProjects")
        ) || [];

    if (savedProjects.length === 0) {

        container.innerHTML =
            "<h3>No Saved Projects Yet</h3>";

        return;
    }

    container.innerHTML = "";

    savedProjects.forEach((item) => {

        const card =
            document.createElement("div");

        card.classList.add("project-card");

        card.innerHTML = `
            <pre>${item.project}</pre>
            <button onclick="deleteProject(${item.id})">
                Delete
            </button>
        `;

        container.appendChild(card);
    });
}

function deleteProject(id) {

    let projects =
        JSON.parse(
            localStorage.getItem("savedProjects")
        ) || [];

    projects =
        projects.filter(
            project => project.id !== id
        );

    localStorage.setItem(
        "savedProjects",
        JSON.stringify(projects)
    );

    displaySavedProjects();
}
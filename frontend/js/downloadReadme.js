function downloadReadme() {

    const project =
        localStorage.getItem("latestProject");

    if (!project) {
        alert("Generate a project first!");
        return;
    }

    const blob =
        new Blob(
            [project],
            { type: "text/markdown" }
        );

    const url =
        window.URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download = "README.md";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(url);
}
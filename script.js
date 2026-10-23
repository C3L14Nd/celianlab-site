const sections = [
    ["hero", "hero"],
    ["creator", "creator"],
    ["maker", "maker"],
    ["shops", "shops"],
    ["projects", "parcours"],
    ["reviews", "avis"],
    ["socials", "reseaux"],
    ["contact", "contact"]
];

async function loadSections() {
    await Promise.all(
        sections.map(async ([containerId, fileName]) => {
            const container = document.getElementById(containerId);

            if (!container) return;

            try {
                const response = await fetch(`sections/${fileName}.html`);

                if (!response.ok) {
                    throw new Error(`Erreur lors du chargement de ${fileName}.html`);
                }

                container.innerHTML = await response.text();

            } catch (error) {
                console.error(error);
            }
        })
    );
}

loadSections();

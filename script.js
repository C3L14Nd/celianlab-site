const sections = [
    "hero",
    "about",
    "montage",
    "parcours",
    "avis",
    "reseaux",
    "contact"
];

async function loadSections() {

    for (const section of sections) {

        const container = document.getElementById(section);

        if (!container) continue;

        try {

            const response = await fetch(`sections/${section}.html`);

            if (!response.ok) {
                throw new Error(`Impossible de charger ${section}`);
            }

            container.innerHTML = await response.text();

        } catch (error) {

            console.error(error);

        }
    }
}

loadSections();

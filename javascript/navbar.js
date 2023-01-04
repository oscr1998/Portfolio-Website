const toggleNav = () => {
    document.body.dataset.nav =
        document.body.dataset.nav === "true" ? "false" : "true";
};

document.getElementById("nav-links").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("grid-item")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};

const toggleAbout = () => {
    document.body.dataset.about =
        document.body.dataset.about === "true" ? "false" : "true";
};

const toggleProject = () => {
    document.body.dataset.project =
        document.body.dataset.project === "true" ? "false" : "true";
};

const toggleContact = () => {
    document.body.dataset.contact =
        document.body.dataset.contact === "true" ? "false" : "true";
};

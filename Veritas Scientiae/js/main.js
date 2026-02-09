function displayCards(data, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
        container.appendChild(card);
    });
}

displayCards(researchPapers, "research-list");
displayCards(newsArticles, "news-list");
displayCards(videos, "video-list");

const writersContainer = document.getElementById("writers-list");
if (writersContainer) {
    writers.forEach(w => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <img src="${w.img}" width="80" style="float:left;margin-right:15px;border-radius:50%">
            <h3>${w.name}</h3>
            <p>${w.bio}</p>
            <p><b>Contact:</b> ${w.email}</p>
        `;
        writersContainer.appendChild(div);
    });
}

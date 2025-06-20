function goto(path) {
  window.location.href = "/modules/" + path + "/index.html";
}

window.addEventListener("DOMContentLoaded", () => {
  fetch("/data/apps.json")
    .then(res => res.json())
    .then(apps => {
      const container = document.getElementById("apps-container");
      apps.forEach(app => {
        const div = document.createElement("div");
        div.className = "app-card";
        div.innerHTML = `<a href="/modules/${app.path}">${app.name}</a>`;
        container.appendChild(div);
      });
    });
});
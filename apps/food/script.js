document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("food-form");
  const table = document.getElementById("food-table").querySelector("tbody");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const food = document.getElementById("food-input").value.trim();
    const calorie = document.getElementById("calorie-input").value;

    if (!food || !calorie) return;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food}</td>
      <td>${calorie}</td>
      <td><button onclick="this.closest('tr').remove()">删除</button></td>
    `;
    table.appendChild(row);
    form.reset();
  });
});

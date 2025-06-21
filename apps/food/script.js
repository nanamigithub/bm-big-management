document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("food-form");
  const table = document.getElementById("food-table").querySelector("tbody");

  // 从 localStorage 加载数据
  const data = JSON.parse(localStorage.getItem("foodRecords") || "[]");
  data.forEach(({ name, calorie }) => addRow(name, calorie));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const food = document.getElementById("food-input").value.trim();
    const calorie = document.getElementById("calorie-input").value;
    const date = document.getElementById("date-input").value || new Date().toISOString().split("T")[0];// 添加当前日期
    const meal = document.getElementById("meal-select").value; // 可以未来扩展为早餐/午餐/晚餐选择项

    if (!food || !calorie) return;

    addRow(food, calorie);
    saveData();
    // === 添加新的存储结构（含日期）===
    const newRecord = {
    food: food,
    calories: calorie,
    date: date,
    meal: meal
  };

  const saved = JSON.parse(localStorage.getItem("foodRecords") || "[]");
  saved.push(newRecord);
  localStorage.setItem("foodRecords", JSON.stringify(saved));
    form.reset();
  });

  function addRow(food, calorie) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food}</td>
      <td>${calorie}</td>
      <td><button class="delete-btn">删除</button></td>
    `;
    row.querySelector(".delete-btn").addEventListener("click", () => {
      row.remove();
      saveData();
    });
    table.appendChild(row);
  }

  function saveData() {
    const rows = table.querySelectorAll("tr");
    const data = Array.from(rows).map(row => {
      const cells = row.querySelectorAll("td");
      return {
        name: cells[0].textContent,
        calorie: cells[1].textContent
      };
    });
    localStorage.setItem("foodRecords", JSON.stringify(data));
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("food-form");
  const table = document.getElementById("food-table").querySelector("tbody");

  // 从 localStorage 加载数据
  const data = JSON.parse(localStorage.getItem("foodRecords") || "[]");
  data.forEach(({ food, calories, date, meal }) => {
  if (food && calories && date && meal) {
    addRow(food, calories, date, meal);
  }
});

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const food = document.getElementById("food-input").value.trim();
    const calories = document.getElementById("calories-input").value;
    const date = document.getElementById("date-input").value || new Date().toISOString().split("T")[0];// 添加当前日期
    const meal = document.getElementById("meal-select").value; // 可以未来扩展为早餐/午餐/晚餐选择项

    if (!food || !calories) return;

    addRow(food, calories,date,meal);
    saveData();
    // === 添加新的存储结构（含日期）===
    const newRecord = {
    food: food,
    calories: calories,
    date: date,
    meal: meal
  };

const saved = JSON.parse(localStorage.getItem("foodRecords") || "[]");

// ⚠️ 过滤掉旧结构的数据
//const cleaned = saved.filter(r => r.food && r.date && r.meal);

// 添加新记录
cleaned.push(newRecord);

// 覆盖写入
localStorage.setItem("foodRecords", JSON.stringify(saved));

    form.reset();
  });

  function addRow(food, calories,date,meal) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${food}</td>
      <td>${calories}</td>
      <td>${date}</td>
      <td>${meal}</td>
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
        calories: cells[1].textContent
      };
    });
    localStorage.setItem("foodRecords", JSON.stringify(data));
  }
});

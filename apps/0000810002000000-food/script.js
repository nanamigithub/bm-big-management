// const data = Array.from({ length: 30 }).map((_, i) => ({
//   id: i + 1,
//   name: "サンプル" + (i + 1),
//   loginDate: "2025/06/01",
//   updateDate: "2025/06/20",
//   remark: "備考"
// }));
let data = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then(response => response.json())
    .then(json => {
      data = json;
      renderTable();
      renderPagination();
    })
    .catch(error => console.error("加载 data.json 出错：", error));
});


const rowsPerPage = 10;
let currentPage = 1;

function renderTable() {
  const table = document.getElementById("data-table");
  table.innerHTML = "";
  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const visible = data.slice(start, end);

  visible.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.id}</td>
      <td>${row.name}</td>
      <td>${row.loginDate}</td>
      <td>${row.updateDate}</td>
      <td>${row.remark}</td>
      <td><a href="detail.html?id=${row.id}">🔍</a> <a href="form.html?id=${row.id}">✏️</a> <a href="delete.html?id=${row.id}">🗑️</a></td>
    `;
    table.appendChild(tr);
  });
}

function renderPagination() {
  const pageCount = Math.ceil(data.length / rowsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderTable();
      renderPagination();
    });
    pagination.appendChild(btn);
  }
}

renderTable();
renderPagination();
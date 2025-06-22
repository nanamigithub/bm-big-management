let data = [];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  fetch("data.json")
    .then(response => response.json())
    .then(json => {
      data = json;
      if (document.getElementById("data-table")) {
        renderTable();
        renderPagination();
      }
      if (id) {
        const target = data.find(d => d.id == id);
        if (target) {
          document.getElementById("id").value = target.id;
          document.getElementById("name").value = target.name;
          document.getElementById("loginDate").value = target.loginDate;
          document.getElementById("updateDate").value = target.updateDate;
          document.getElementById("remark").value = target.remark;
        }
      }
    });

  const form = document.getElementById("edit-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("保存機能は未実装（静的JSON）");
    });
  }
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
      <td>${row.id}</td><td>${row.name}</td><td>${row.loginDate}</td><td>${row.updateDate}</td><td>${row.remark}</td>
      <td>
        <a href="detail.html?id=${row.id}">🔍</a>
        <a href="form.html?id=${row.id}">✏️</a>
        <a href="delete.html?id=${row.id}">🗑️</a>
      </td>`;
    table.appendChild(tr);
  });
}

function renderPagination() {
  const pageCount = Math.ceil(data.length / rowsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    if (i === currentPage) btn.disabled = true;
    btn.onclick = () => {
      currentPage = i;
      renderTable();
    };
    pagination.appendChild(btn);
  }
}
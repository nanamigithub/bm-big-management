document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("image-input");
  const preview = document.getElementById("preview");
  const result = document.getElementById("result");

  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.style.display = "block";

      const name = file.name.toLowerCase();
      let food = "未知食物";
      let nutrition = "";

      if (name.includes("apple")) {
        food = "苹果";
        nutrition = "热量：52 kcal<br>蛋白质：0.3g<br>脂肪：0.2g<br>碳水：14g";
      } else if (name.includes("banana")) {
        food = "香蕉";
        nutrition = "热量：89 kcal<br>蛋白质：1.1g<br>脂肪：0.3g<br>碳水：23g";
      } else if (name.includes("pizza")) {
        food = "披萨";
        nutrition = "热量：285 kcal<br>蛋白质：12g<br>脂肪：10g<br>碳水：36g";
      } else {
        nutrition = "未识别出具体营养信息，请尝试更清晰的文件名如 apple.jpg";
      }

      result.innerHTML = `
        <h3>识别结果：${food}</h3>
        <div class="nutrition-box">${nutrition}</div>
      `;
    };
    reader.readAsDataURL(file);
  });
});

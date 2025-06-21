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
      // 模拟识别结果
      setTimeout(() => {
        result.innerHTML = `
          <h3>识别结果：🍕 披萨</h3>
          <ul>
            <li>热量：285 kcal</li>
            <li>蛋白质：12g</li>
            <li>脂肪：10g</li>
            <li>碳水：36g</li>
          </ul>
        `;
      }, 1000);
    };
    reader.readAsDataURL(file);
  });
});

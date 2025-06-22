
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const foodId = params.get("id");

  const saveBtn = document.getElementById("saveBtn");
  if (!saveBtn) return;

  saveBtn.addEventListener("click", async function () {
    const user_name = document.getElementById("name").value;
    const loginDate = document.getElementById("login_date").value;
    const updateDate = document.getElementById("update_date").value;
    const remark = document.getElementById("notes").value;

    const { data: { user } } = await supabase.auth.getUser();
    const user_id = user?.id;

    const { error } = await supabase
      .from("foodlist")
      .update({
        user_name,
        loginDate,
        updateDate,
        remark,
        user_id,
      })
      .eq("id", foodId);

    if (error) {
      alert("保存失败: " + error.message);
    } else {
      alert("保存成功");
      window.location.href = "list.html";
    }
  });
});

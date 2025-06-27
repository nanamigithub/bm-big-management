
const supabaseUrl = 'https://iwdyzfsunnyqcwipttql.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3ZHl6ZnN1bm55cWN3aXB0dHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1ODk1NzAsImV4cCI6MjA2NjE2NTU3MH0.A9b8BxZLeFK1ZPeIBwSppn8r8Oz9nIN1pR8cDqAreH8';  // 请替换为有效KEY
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('saveBtn').addEventListener('click', async () => {
  const user = await supabase.auth.getUser();
  const userId = user.data?.user?.id;
  if (!userId) {
    alert("请先登录");
    return;
  }

  const data = {
    user_name: document.getElementById('user_name').value,
    loginDate: document.getElementById('loginDate').value,
    updateDate: document.getElementById('updateDate').value,
    remark: document.getElementById('remark').value,
    food_id: parseInt(document.getElementById('food_id').value),
    food_name: document.getElementById('food_name').value,
    user_id: userId
    };

    document.getElementById('back').addEventListener('click', () => {
        window.location.href = "index.html"; // 如果你是从 index.html 来的
    });


  const { error } = await supabase.from('foodlist').insert([data]);
  if (error) {
    alert('保存失败：' + error.message);
  } else {
    alert('保存成功！');
  }
});

// ===== 🌐 多语言切换功能 =====
const translations = {
    ja: {
        title: "編集ページ",
        save: "保存",
        back: "戻る",
        user_name: "名前：",
        loginDate: "ログイン日：",
        updateDate: "更新日：",
        remark: "備考：",
        food_id: "食品ID：",
        food_name: "食品名："
    },
    zh: {
        title: "编辑页面",
        save: "保存",
        back: "返回",
        user_name: "名称：",
        loginDate: "登录日：",
        updateDate: "更新日：",
        remark: "备注：",
        food_id: "食品ID：",
        food_name: "食品名称："
    },
    en: {
        title: "Edit Page",
        save: "Save",
        back: "Back",
        user_name: "Name:",
        loginDate: "Login Date:",
        updateDate: "Update Date:",
        remark: "Remark:",
        food_id: "Food ID:",
        food_name: "Food Name:"
    }
};

const langSelect = document.getElementById('lang');
if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        const t = translations[lang];
        document.title = t.title;
        const $ = (sel) => document.querySelector(sel);
        $("h1").innerText = t.title;
        $("label[for='user_name']").innerText = t.user_name;
        $("label[for='loginDate']").innerText = t.loginDate;
        $("label[for='updateDate']").innerText = t.updateDate;
        $("label[for='remark']").innerText = t.remark;
        $("label[for='food_id']").innerText = t.food_id;
        $("label[for='food_name']").innerText = t.food_name;
        $("#saveBtn").innerText = t.save;
        $("#back").innerText = t.back;
    });
}

// ===== 🎨 主题切换功能 =====
const themeSelect = document.getElementById('theme');
if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
        document.body.className = e.target.value;
    });
}


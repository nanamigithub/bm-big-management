import supabase from './auth.js';

const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');
const type = urlParams.get('type');
const statusEl = document.getElementById("status");

// Debug 输出
console.log("Token:", token);
console.log("Type:", type);

async function confirmEmail() {
  if (!token || !type) {
    statusEl.textContent = "⚠️ トークン情報が不足しています。無効なリンクです。";
    statusEl.className = 'error';
    return;
  }

  const { error } = await supabase.auth.verifyOtp({
    type,
    token,
  });

  if (error) {
    console.error("認証エラー:", error);
    statusEl.textContent = `❌ メール確認に失敗しました：${error.message}`;
    statusEl.className = 'error';
  } else {
    statusEl.textContent = "✅ メール確認に成功しました。ログインページに移動します...";
    statusEl.className = 'success';
    setTimeout(() => {
      window.location.href = "/bm-big-management/auth/login.html";
    }, 2000);
  }
}

confirmEmail();

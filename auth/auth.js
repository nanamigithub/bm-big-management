import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://iwdyzfsunnyqcwipttql.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3ZHl6ZnN1bm55cWN3aXB0dHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1ODk1NzAsImV4cCI6MjA2NjE2NTU3MH0.A9b8BxZLeFK1ZPeIBwSppn8r8Oz9nIN1pR8cDqAreH8';  // 请替换为有效KEY
 // ⚠️ 本番用には環境変数で管理
const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("loginBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert('ログイン失敗: ' + error.message);
    window.location.href = '/bm-big-management/apps/0000810002000000-food/auth/signup.html';
  } else {
    window.location.href = '/bm-big-management/pulic/index.html';
  }
});

document.getElementById("signupBtn")?.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
    alert('ログイン失敗: ' + error.message);
  } else {
    alert('登録成功！ログインしてください');
    window.location.href = '/bm-big-management/apps/0000810002000000-food/auth/login.html';
  }
  console.log('user signed up:', error);
});

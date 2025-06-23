import { supabase } from './auth.js';

supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    alert('メール認証が完了しました。ログインしてください。');
    window.location.href = '/bm-big-management/auth/login.html';
  }
});

// 強制ログインチェック（メールリンクの token を検出）
supabase.auth.getSession().then(({ data, error }) => {
  if (data?.session) {
    window.location.href = '/bm-big-management/auth/login.html';
  }
});

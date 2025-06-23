// models/db_user.js

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// TODO: 替换为你的真实项目地址和 public anon key
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-anon-public-api-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

// 获取当前登录用户的 profile 信息
export async function getCurrentUserProfile() {
  const { data: user, error: userError } = await supabase.auth.getUser();
  if (userError) return { error: userError };

  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user?.user?.id)
    .single();

  return { data, error };
}

// 注册新用户（可选功能）
export async function createUserProfile(userId, name, role = 'user') {
  const { data, error } = await supabase
    .from('user_profiles')
    .insert([{ id: userId, name, role }]);
  return { data, error };
}


const supabaseUrl = 'https://wiydzfsunnycwqiptql.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';  // 请替换为有效KEY
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

  const { error } = await supabase.from('foodlist').insert([data]);
  if (error) {
    alert('保存失败：' + error.message);
  } else {
    alert('保存成功！');
  }
});

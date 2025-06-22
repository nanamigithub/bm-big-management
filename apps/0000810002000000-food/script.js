
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

  const { error } = await supabase.from('foodlist').insert([data]);
  if (error) {
    alert('保存失败：' + error.message);
  } else {
    alert('保存成功！');
  }
});

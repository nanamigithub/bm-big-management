const languageSelect = document.getElementById('language-select');

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('title').textContent = data.title || '';
      document.getElementById('description').textContent = data.description || '';
    })
    .catch(err => console.error('语言文件加载失败:', err));
}

const defaultLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
languageSelect.value = defaultLang;
loadLanguage(defaultLang);

languageSelect.addEventListener('change', () => {
  loadLanguage(languageSelect.value);
});

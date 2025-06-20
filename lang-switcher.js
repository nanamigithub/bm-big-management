document.getElementById('lang-select').addEventListener('change', function () {
  const lang = this.value;
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(dict => {
      document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (dict[key]) el.innerText = dict[key];
      });
    });
});
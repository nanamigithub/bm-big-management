import React from 'react';
import { useTranslation } from 'react-i18next';

function AppView() {
  const { t } = useTranslation();
  const data = { name: '示例数据A', value: 123 };
  return (
    <div>
      <h2>{t('app.title')} - Linux</h2>
      <p>{t('form.name')}: {data.name}</p>
      <p>{t('form.value')}: {data.value}</p>
    </div>
  );
}

export default AppView;

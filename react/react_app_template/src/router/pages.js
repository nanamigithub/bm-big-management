import React from 'react';

const pages = [
  {
    path: '/0002000002-blood-sugar',
    component: React.lazy(() => import('../pages/0002000002-blood-sugar')),
  },
  {
    path: '/0002000003-blood-pressure',
    component: React.lazy(() => import('../pages/0002000003-blood-pressure')),
  },
  {
    path: '/0002000004-medicine-health',
    component: React.lazy(() => import('../pages/0002000004-medicine-health')),
  },
  // ... 可以批量生成更多页面
];

export default pages;

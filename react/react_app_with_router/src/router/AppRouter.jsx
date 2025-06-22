import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/apps/0000000000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000001-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000002-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000003-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000004-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000005-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000006-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000007-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000008-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000000009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010001-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010002-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010003-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010004-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010005-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010006-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010007-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010008-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000010009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020001-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020002-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020003-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020004-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020005-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020006-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020007-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020008-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000020009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0000030909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0101000000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001000909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001010909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001020909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0001030909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002000000-food"
          element={React.createElement(lazy(() => import('../pages/food.jsx')))}
        />
        <Route
          path="/apps/0002000001-fitness"
          element={React.createElement(lazy(() => import('../pages/fitness.jsx')))}
        />
        <Route
          path="/apps/0002000002-blood-sugar"
          element={React.createElement(lazy(() => import('../pages/blood-sugar.jsx')))}
        />
        <Route
          path="/apps/0002000003-blood-pressure"
          element={React.createElement(lazy(() => import('../pages/blood-pressure.jsx')))}
        />
        <Route
          path="/apps/0002000004-medicine-health"
          element={React.createElement(lazy(() => import('../pages/medicine-health.jsx')))}
        />
        <Route
          path="/apps/0002000005-hair-health"
          element={React.createElement(lazy(() => import('../pages/hair-health.jsx')))}
        />
        <Route
          path="/apps/0002000006-eye-health"
          element={React.createElement(lazy(() => import('../pages/eye-health.jsx')))}
        />
        <Route
          path="/apps/0002000007-teeth-health"
          element={React.createElement(lazy(() => import('../pages/teeth-health.jsx')))}
        />
        <Route
          path="/apps/0002000008-skin-health"
          element={React.createElement(lazy(() => import('../pages/skin-health.jsx')))}
        />
        <Route
          path="/apps/0002000009-nose-health"
          element={React.createElement(lazy(() => import('../pages/nose-health.jsx')))}
        />
        <Route
          path="/apps/0002000100-body-beauty"
          element={React.createElement(lazy(() => import('../pages/body-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000101-skin-beauty"
          element={React.createElement(lazy(() => import('../pages/skin-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000102-hair beauty"
          element={React.createElement(lazy(() => import('../pages/hair-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000103-eyebrow-beauty"
          element={React.createElement(lazy(() => import('../pages/eyebrow-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000104-eye-beauty"
          element={React.createElement(lazy(() => import('../pages/eye-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000105-nose-beauty"
          element={React.createElement(lazy(() => import('../pages/nose-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000106-lip-beauty"
          element={React.createElement(lazy(() => import('../pages/lip-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000107-teeth-beauty"
          element={React.createElement(lazy(() => import('../pages/teeth-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000108-hands-beauty"
          element={React.createElement(lazy(() => import('../pages/hands-beauty.jsx')))}
        />
        <Route
          path="/apps/0002000109-foot-beauty"
          element={React.createElement(lazy(() => import('../pages/foot-beauty.jsx')))}
        />
        <Route
          path="/apps/0002010000-daily-Object"
          element={React.createElement(lazy(() => import('../pages/daily-object.jsx')))}
        />
        <Route
          path="/apps/0002010101-clothes"
          element={React.createElement(lazy(() => import('../pages/clothes.jsx')))}
        />
        <Route
          path="/apps/0002010202-books"
          element={React.createElement(lazy(() => import('../pages/books.jsx')))}
        />
        <Route
          path="/apps/0002010303-Electronics"
          element={React.createElement(lazy(() => import('../pages/electronics.jsx')))}
        />
        <Route
          path="/apps/0002010404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002010505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002010606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002010707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002010808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002010909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002020000-family"
          element={React.createElement(lazy(() => import('../pages/family.jsx')))}
        />
        <Route
          path="/apps/0002020101-friends"
          element={React.createElement(lazy(() => import('../pages/friends.jsx')))}
        />
        <Route
          path="/apps/0002020202-colleague"
          element={React.createElement(lazy(() => import('../pages/colleague.jsx')))}
        />
        <Route
          path="/apps/0002020303-classmate"
          element={React.createElement(lazy(() => import('../pages/classmate.jsx')))}
        />
        <Route
          path="/apps/0002020404-Repairer"
          element={React.createElement(lazy(() => import('../pages/repairer.jsx')))}
        />
        <Route
          path="/apps/0002020505-customer"
          element={React.createElement(lazy(() => import('../pages/customer.jsx')))}
        />
        <Route
          path="/apps/0002020606-Cleaner"
          element={React.createElement(lazy(() => import('../pages/cleaner.jsx')))}
        />
        <Route
          path="/apps/0002020707-Tax accountant"
          element={React.createElement(lazy(() => import('../pages/tax-accountant.jsx')))}
        />
        <Route
          path="/apps/0002020808-lawer"
          element={React.createElement(lazy(() => import('../pages/lawer.jsx')))}
        />
        <Route
          path="/apps/0002020909-Administrative Staff"
          element={React.createElement(lazy(() => import('../pages/administrative-staff.jsx')))}
        />
        <Route
          path="/apps/0002030000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0002030909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003010909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020202-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020303-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020404-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020505-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020606-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020707-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020808-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003020909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030000-Chinese"
          element={React.createElement(lazy(() => import('../pages/chinese.jsx')))}
        />
        <Route
          path="/apps/0003030001-Japnese"
          element={React.createElement(lazy(() => import('../pages/japnese.jsx')))}
        />
        <Route
          path="/apps/0003030002-English"
          element={React.createElement(lazy(() => import('../pages/english.jsx')))}
        />
        <Route
          path="/apps/0003030003-Korean"
          element={React.createElement(lazy(() => import('../pages/korean.jsx')))}
        />
        <Route
          path="/apps/0003030004-France"
          element={React.createElement(lazy(() => import('../pages/france.jsx')))}
        />
        <Route
          path="/apps/0003030005-Germen"
          element={React.createElement(lazy(() => import('../pages/germen.jsx')))}
        />
        <Route
          path="/apps/0003030006-Portuguese"
          element={React.createElement(lazy(() => import('../pages/portuguese.jsx')))}
        />
        <Route
          path="/apps/0003030007-Spanish"
          element={React.createElement(lazy(() => import('../pages/spanish.jsx')))}
        />
        <Route
          path="/apps/0003030008-Arabic"
          element={React.createElement(lazy(() => import('../pages/arabic.jsx')))}
        />
        <Route
          path="/apps/0003030009-Russian"
          element={React.createElement(lazy(() => import('../pages/russian.jsx')))}
        />
        <Route
          path="/apps/0003030000-Thai"
          element={React.createElement(lazy(() => import('../pages/thai.jsx')))}
        />
        <Route
          path="/apps/0003030001-AI"
          element={React.createElement(lazy(() => import('../pages/ai.jsx')))}
        />
        <Route
          path="/apps/0003030002-C#"
          element={React.createElement(lazy(() => import('../pages/c#.jsx')))}
        />
        <Route
          path="/apps/0003030003-JAVA"
          element={React.createElement(lazy(() => import('../pages/java.jsx')))}
        />
        <Route
          path="/apps/0003030004-Linux"
          element={React.createElement(lazy(() => import('../pages/linux.jsx')))}
        />
        <Route
          path="/apps/0003030005-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030006-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030007-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030008-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030001-PHD"
          element={React.createElement(lazy(() => import('../pages/phd.jsx')))}
        />
        <Route
          path="/apps/0003030002-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030003-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030004-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030005-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030006-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030007-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030008-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030001-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030002-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030003-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030004-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030005-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030006-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030007-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030008-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030000-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030001-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030002-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030003-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030004-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030005-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030006-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030007-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030008-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000109-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000102-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000103-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000104-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000105-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000106-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000107-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000108-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000109-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000102-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000103-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000104-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000105-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000106-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000107-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000108-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000109-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000102-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000103-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000104-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000105-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000106-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000107-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000108-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000109-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000101-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000102-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000103-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000104-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000105-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000106-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000107-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000108-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003030908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000009-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000100-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000201-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000302-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000403-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000504-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000605-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000706-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000807-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000908-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
        <Route
          path="/apps/0003000909-default"
          element={React.createElement(lazy(() => import('../pages/default.jsx')))}
        />
      </Routes>
    </Suspense>
  </Router>
);

export default AppRouter;

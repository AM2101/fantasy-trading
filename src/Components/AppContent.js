import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from '../routes';

const AppContent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, idx) => (
          route.element && (
            <Route
              key={idx}
              path={route.path}
              element={<route.element />}
            />
          )
        ))}
        <Route path="/" element={<Navigate to="Dashboard" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppContent;

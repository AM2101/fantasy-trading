import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from "../Layout/Home"
import routes from '../routes';
import load from '../assets/Images/giphy.gif'
import "./AppContent.css";

const AppContent = () => {
  return (
    <Suspense fallback={<div className='load'><img className="load" src={load}/></div>}>
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
      </Routes>
    </Suspense>
  );
};

export default AppContent;

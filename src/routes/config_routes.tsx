import Register from '@pages/auth/register';
import Boards from '@pages/boards';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './private_routes';

function RoutesConfig() {
  const componentsProtected = [
    {
      name: 'path_protected',
      path: '/dashboard',
      element: <div>Dasboard</div>
    }
  ];

  const components = [
    {
      name: 'register',
      path: 'auth/register',
      element: <Register />
    },
    {
      name: 'login',
      path: 'auth/login',
      element: <Register />
    },
    {
      name: 'boards',
      path: '/boards',
      element: <Boards />
    }
  ];

  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        {componentsProtected.map((component: any) => (
          <Route key={component.name} path={component.path} element={component.element} />
        ))}
      </Route>

      {components.map((component: any) => (
        <Route key={component.name} path={component.path} element={component.element} />
      ))}
    </Routes>
  );
}

export default RoutesConfig;

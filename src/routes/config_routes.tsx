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
      name: 'path_login',
      path: '/',
      element: <div>Login</div>
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

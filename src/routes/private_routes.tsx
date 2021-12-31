import React from 'react';

import { Navigate, useLocation, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const auth = false;
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default PrivateRoute;

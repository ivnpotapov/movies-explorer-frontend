import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = (props) => {
  return props.isPreloader && !props.isLogined ? (
    <Preloader />
  ) : props.isLogined ? (
    <Outlet />
  ) : (
    <Navigate to={routes.home} />
  );
};

export default ProtectedRoute;

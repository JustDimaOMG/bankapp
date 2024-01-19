import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routers.data.js'
import { useAuth } from '../auth/AuthWrapper.js';





const Router = () => {
  const { logUser } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.isAuth && !logUser.isAuth ? <Navigate to="/" /> : <route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
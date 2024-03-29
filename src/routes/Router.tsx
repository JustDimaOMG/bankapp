import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes } from './routers.data.js'
import { useAppSelector } from 'hooks/useActions.js';





const Router = () => {

	const isAuth = useAppSelector(state => state.auth.userState.isAuth)
    

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.isAuth && !isAuth ? <Navigate to="/login" /> : <route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
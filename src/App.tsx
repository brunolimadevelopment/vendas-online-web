import type { Router as RemixRouter } from '@remix-run/router';
import { useEffect } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

// ROTAS
import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { productScreens } from './modules/product/routes';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
// OTHER
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useGlobalContext } from './shared/hooks/useGlogbalContext';
import { useNotification } from './shared/hooks/useNotification';
import { useRequests } from './shared/hooks/useRequests';

// users logged out
const routes: RouteObject[] = [...loginRoutes];
// users logged in
const routesLoggedIn: RouteObject[] = [
  ...productScreens,
  ...firstScreenRoutes,
  ...productScreens,
].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequests();

  useEffect(() => {
    request(URL_USER, MethodsEnum.GET, setUser);
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "../layout/Layout";
import PrivateRouter from "./PrivateRouter";
// Pages
import { Login, Register, Home } from "../pages";
// Path
import { HOME, LOGIN, REGISTER } from "./route-path";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<Layout />}>
      <Route index element={
        <PrivateRouter>
          <Home />
        </PrivateRouter>
      } />
      <Route path={LOGIN} element={<Login />} />
      <Route path={REGISTER} element={<Register />} />
    </Route>
  )
);

export default router;

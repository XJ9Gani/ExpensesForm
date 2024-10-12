import { useRoutes } from "react-router-dom";
import FormApp from "./FormApp";
import Expenses from "./Expenses";
export default function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <FormApp /> },
    { path: "/expenses", element: <Expenses /> },
  ]);
  return routes;
}

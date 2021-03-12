import { RouteProps } from "react-router-dom";
import AppMap from "./AppMap";
import Home from "./Home";

const Routes: RouteProps[] = [
  { path: AppMap.Home, component: Home, exact: true },
];

export { Routes };

import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  children?: Route[];
}

const LazyPage01 = lazy(() => import(/*webpackChunkName: "LazyPage01" */"../01-lazyload/pages/LazyPage01"));
const LazyPage02 = lazy(() => import(/*webpackChunkName: "LazyPage02" */"../01-lazyload/pages/LazyPage02"));
const LazyPage03 = lazy(() => import(/*webpackChunkName: "LazyPage03" */"../01-lazyload/pages/LazyPage03"));

export const routes: Route[] = [
  {
    path: "/lazy1",
    Component: LazyPage01,
    name: "Lazy Page 1",
  },
  {
    path: "/lazy2",
    Component: LazyPage02,
    name: "Lazy Page 2",
  },
  {
    path: "/lazy3",
    Component: LazyPage03,
    name: "Lazy Page 3",
  },
];

import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: "/lazyload",
    Component: lazy(() => import(/* webpackChunkName: "LazyLoad" */ "../01-lazyload/layout/LazyLayout" )),
    name: "Lazy Loading Nested",
  },
  {
    path: "/nolazy",
    Component: NoLazy,
    name: "No Lazy Loading",
  },
];

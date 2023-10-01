import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import LazyLayout from "../01-lazyload/layout/LazyLayout";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
  name: string;
}

const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/layout/LazyLayout"))
const lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"))
const lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"))
const lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"))

export const routes:Route[] = [
  {
    path : "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name : "LazyLayout"
  },
  {
    to: "/no-lazy",
    path : "no-lazy",
    Component: NoLazy,
    name : "No Lazy"
  },
  
]
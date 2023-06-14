import MODULE_PAGES from "../pages";


export const ROUTER_PAGE = [
  {
    key: "home",
    name: "Việc làm",
    exact: true,
    path: "/",
    component: MODULE_PAGES.Home,
    private: false
  },
  {
    key: "about",
    name: "Thư viện",
    exact: true,
    path: "/about",
    component: MODULE_PAGES.About,
    private: false
  },
  {
    key: "news",
    name: "Tin tức",
    exact: true,
    path: "/news",
    component: MODULE_PAGES.News,
    private: false
  },
  {
    key: "contact",
    name: "Liên hệ",
    exact: true,
    path: "/contact",
    component: MODULE_PAGES.Contact,
    private: false
  },
  {
    key: "error",
    component: MODULE_PAGES.Error
  }
];


import MODULE_PAGES from "../pages";


export const ROUTER_PAGE = [
  {
    key: "home",
    name: "Trang chủ",
    isSupNav: false,
    exact: true,
    path: "/",
    component: MODULE_PAGES.Home,
    private: false
  },
  {
    key: "about",
    name: "Thư viện",
    isSupNav: false,
    exact: true,
    path: "/about",
    component: MODULE_PAGES.About,
    private: false
  },
  {
    key: "resource",
    name: "Các nguồn",
    isSupNav: true,
    exact: true,
    path: "/resource",
    component: MODULE_PAGES.Resource,
    private: false
  },
  {
    key: "contact",
    name: "Liên hệ",
    isSupNav: false,
    exact: true,
    path: "/contact",
    component: MODULE_PAGES.Contact,
    private: false
  },
  {
    key: "error",
    isSupNav: false,
    component: MODULE_PAGES.Error
  }
];


export default {
  npmClient: "pnpm",
  routes: [
    { path: "/", redirect: "/homepage" },
    { path: "/homepage", component: "homepage" },
    { path: "/detail", component: "detail" },
  ],
};

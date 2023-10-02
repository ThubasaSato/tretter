const menuRoutes = {
  dashboard: "/dashboard",
  MyTodo: "/my_todo",
  SignUp: "/sign_up",
  hoge: "/hoge",
} as const;

export const routeMap = {
  ...menuRoutes,
} as const;

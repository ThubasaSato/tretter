const menuRoutes = {
  dashboard: '/dashboard',
  MyTodo: '/mytodo'
} as const;

export const routeMap = {
  ...menuRoutes
} as const;
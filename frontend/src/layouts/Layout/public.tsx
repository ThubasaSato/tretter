import type { FC, ReactNode } from "react";

type IProps = {
  children: ReactNode;
};

export const LayoutPublic: FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

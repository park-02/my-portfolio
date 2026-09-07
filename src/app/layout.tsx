import type { ReactNode } from "react";
import Gnb from "../components/common/Gnb";

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-wrapper">
      <Gnb />
      <main>{children}</main>
    </div>
  );
}

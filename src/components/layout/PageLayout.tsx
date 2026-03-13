import { ReactNode } from "react";
import Navbar from "./Navbar";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background gradient-mesh">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default PageLayout;

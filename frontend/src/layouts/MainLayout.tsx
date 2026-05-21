import type { ReactNode } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F5F5F5]">
      <Sidebar />

      <div className="flex-1 p-6">
        <Topbar />

        <main className="mt-6">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
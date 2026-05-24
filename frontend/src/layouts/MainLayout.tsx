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
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div
        className="
          flex-1
          px-8
          py-6
          overflow-auto
        "
      >
        <Topbar />

        <main className="mt-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
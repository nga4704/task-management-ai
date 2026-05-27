import type { ReactNode } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

type MainLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

function MainLayout({
  children,
  title,
  description,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Topbar
          title={title}
          description={description}
        />

        <main
          className="
            flex-1
            overflow-y-auto
            px-6
            lg:px-8
            py-6
          "
        >
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
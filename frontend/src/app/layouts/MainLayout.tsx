import {
  useState,
  type ReactNode,
} from "react";

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
  const [
    mobileSidebarOpen,
    setMobileSidebarOpen,
  ] = useState(false);

  return (
    <div
      className="
        flex
        min-h-screen
        bg-background
      "
    >
      {/* SIDEBAR */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() =>
          setMobileSidebarOpen(false)
        }
      />

      {/* CONTENT */}
      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
        "
      >
        {/* TOPBAR */}
        <Topbar
          title={title}
          description={description}
          onOpenSidebar={() =>
            setMobileSidebarOpen(true)
          }
        />

        {/* MAIN */}
        <main
          className="
            flex-1
            overflow-y-auto

            px-4
            sm:px-6
            lg:px-8

            py-5
            sm:py-6
          "
        >
          <div
            className="
              mx-auto
              max-w-[1600px]
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
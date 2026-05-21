import type { ReactNode } from "react";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-6">
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-[32px]
          shadow-soft
          p-8
        "
      >
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
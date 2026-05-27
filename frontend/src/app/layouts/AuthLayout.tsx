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
    <div
      className="
        min-h-screen
        bg-background
        grid
        lg:grid-cols-2
      "
    >
      {/* LEFT */}
      <div
        className="
          hidden
          lg:flex
          flex-col
          justify-between
          bg-primaryLight
          p-10
          relative
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            right-[-120px]
            top-[-120px]
            w-[320px]
            h-[320px]
            rounded-full
            bg-white/20
          "
        />

        <div className="relative z-10">

          <div
            className="
              inline-flex
              items-center
              gap-3
            "
          >
            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-black
                text-white
                flex
                items-center
                justify-center
                font-bold
              "
            >
              AI
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                WorkFlow AI
              </h1>

              <p className="text-black/60">
                Smart Productivity Platform
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-[520px]">

            <h2
              className="
                text-5xl
                font-bold
                leading-tight
              "
            >
              AI-powered productivity and team collaboration.
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-black/70
              "
            >
              Manage tasks, analyze productivity,
              predict risks and optimize schedules
              using intelligent AI assistance.
            </p>
          </div>
        </div>

        <div
          className="
            relative
            z-10
            grid
            grid-cols-3
            gap-4
          "
        >
          <div className="card bg-white/60">
            <h3 className="text-3xl font-bold">
              92%
            </h3>

            <p className="text-sm text-muted mt-2">
              Productivity increase
            </p>
          </div>

          <div className="card bg-white/60">
            <h3 className="text-3xl font-bold">
              4.8h
            </h3>

            <p className="text-sm text-muted mt-2">
              Saved weekly
            </p>
          </div>

          <div className="card bg-white/60">
            <h3 className="text-3xl font-bold">
              AI
            </h3>

            <p className="text-sm text-muted mt-2">
              Smart planning
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex
          items-center
          justify-center
          p-6
          lg:p-10
        "
      >
        <div
          className="
            w-full
            max-w-[480px]
            bg-white
            border
            border-border/60
            rounded-[32px]
            p-8
            shadow-card
          "
        >
          <div className="mb-8">

            <h1 className="text-4xl font-bold">
              {title}
            </h1>

            <p className="text-muted mt-3">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
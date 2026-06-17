import type { ReactNode } from "react";
import {
  BrainCircuit,
  CheckCircle2,
  Users,
  AlertTriangle,
} from "lucide-react";

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

          relative
          overflow-hidden

          bg-primaryLight

          p-10
          xl:p-14
        "
      >
        {/* BACKGROUND SHAPES */}
        <div
          className="
            absolute
            right-[-120px]
            top-[-120px]

            h-[320px]
            w-[320px]

            rounded-full

            bg-white/20
          "
        />

        <div
          className="
            absolute
            left-[-180px]
            bottom-[-180px]

            h-[450px]
            w-[450px]

            rounded-full

            bg-white/10
          "
        />

        {/* HEADER */}
        <div className="relative z-10">
          <div
            className="
              inline-flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-2xl

                bg-black

                text-lg
                font-bold
                text-white
              "
            >
              AI
            </div>

            <div>
              <h1
                className="
                  text-2xl
                  font-bold
                "
              >
                WorkFlow AI
              </h1>

              <p
                className="
                  text-black/60
                "
              >
                Smart Productivity Platform
              </p>
            </div>
          </div>

          {/* HERO */}
          <div
            className="
              mt-28
              max-w-[560px]
            "
          >
            <h2
              className="
                text-5xl
                xl:text-6xl

                font-bold

                leading-[1.1]
                tracking-tight
              "
            >
              AI-powered productivity and team collaboration.
            </h2>

            <p
              className="
                mt-7

                text-lg
                leading-8

                text-black/70
              "
            >
              Manage tasks, analyze productivity,
              predict project risks and optimize
              schedules using intelligent AI
              assistance built for modern teams.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div
          className="
            relative
            z-10

            grid
            grid-cols-3
            gap-4
          "
        >
          <div
            className="
              rounded-3xl

              border
              border-white/40

              bg-white/60
              backdrop-blur-md

              p-5

              shadow-soft

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-card
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                tracking-tight
              "
            >
              92%
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-black/60
              "
            >
              Productivity increase
            </p>
          </div>

          <div
            className="
              rounded-3xl

              border
              border-white/40

              bg-white/60
              backdrop-blur-md

              p-5

              shadow-soft

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-card
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                tracking-tight
              "
            >
              4.8h
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-black/60
              "
            >
              Saved weekly
            </p>
          </div>

          <div
            className="
              rounded-3xl

              border
              border-white/40

              bg-white/60
              backdrop-blur-md

              p-5

              shadow-soft

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-card
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                tracking-tight
              "
            >
              AI
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-black/60
              "
            >
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
            relative

            w-full
            max-w-[520px]

            overflow-hidden

            rounded-[36px]

            border
            border-white/70

            bg-white/85
            backdrop-blur-xl

            p-8
            md:p-10

            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
        >
          {/* FORM GLOW */}
          <div
            className="
              absolute
              -right-24
              -top-24

              h-60
              w-60

              rounded-full

              bg-primary/20

              blur-3xl
            "
          />

          <div className="relative z-10">
            <div className="mb-8">
              <h1
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                "
              >
                {title}
              </h1>

              <p
                className="
                  mt-3
                  text-muted
                "
              >
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
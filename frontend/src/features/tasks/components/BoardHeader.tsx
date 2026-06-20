import {
  Sparkles,
  Plus,
  BarChart3,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useState,
} from "react";

function BoardHeader() {

  const navigate =
    useNavigate();

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  return (
    <>
      <div
        className="
          bg-white/80
          backdrop-blur-md
          border
          border-white/50
          rounded-[32px]
          p-7
          shadow-soft
        "
      >
        <div
          className="
            flex
            flex-col
            xl:flex-row
            xl:items-center
            justify-between
            gap-6
          "
        >
          <div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-primaryLight
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
              "
            >
              <Sparkles size={16} />

              AI Task Management Active
            </div>

            <h1
              className="
                text-4xl
                font-bold
                mt-5
              "
            >
              My Tasks
            </h1>

            <p
              className="
                text-muted
                mt-3
                text-lg
              "
            >
              Organize, prioritize,
              and optimize your workflow
              using AI-powered productivity tools.
            </p>
          </div>

          <div className="flex gap-4">

            <button
              onClick={() =>
                navigate("/insights")
              }
              className="
                bg-white
                border
                border-border
                px-5
                py-3
                rounded-2xl
                font-medium
                flex
                items-center
                gap-2
              "
            >
              <BarChart3 size={18} />
              Analytics
            </button>

            {/* <button
              onClick={() =>
                setIsOpen(true)
              }
              className="
                bg-black
                text-white
                px-5
                py-3
                rounded-2xl
                font-semibold
                flex
                items-center
                gap-2
              "
            >
              <Plus size={18} />
              Create Task
            </button> */}

          </div>
        </div>
      </div>

      {/* <CreateTaskModal
        open={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
      /> */}
    </>
  );
}

export default BoardHeader;
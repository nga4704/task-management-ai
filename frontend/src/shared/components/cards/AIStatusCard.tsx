import { Sparkles } from "lucide-react";

type Props = {
  collapsed?: boolean;
};

function AIStatusCard({
  collapsed,
}: Props) {
  if (collapsed) {
    return (
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-primaryLight
        "
      >
        <Sparkles size={18} />
      </div>
    );
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-border
        bg-primaryLight
        p-4
      "
    >
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-black
          px-3
          py-1.5
          text-xs
          font-semibold
          text-white
        "
      >
        <Sparkles size={14} />

        AI Active
      </div>

      <p
        className="
          mt-3
          text-sm
          leading-6
          text-black/70
        "
      >
        AI is monitoring team productivity
        and workload predictions.
      </p>
    </div>
  );
}

export default AIStatusCard;
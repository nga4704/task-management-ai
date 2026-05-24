function AIAlertCard() {
  return (
    <div
      className="
        bg-primary
        rounded-card
        p-6
      "
    >
      <p className="font-medium">
        AI Alert
      </p>

      <h2 className="text-3xl font-bold mt-4">
        Possible Project Delay
      </h2>

      <p className="mt-5 leading-relaxed text-black/80">
        AI detected a high risk of delay
        in backend integration tasks.
      </p>

      <button
        className="
          mt-8
          bg-black
          text-white
          px-5
          py-3
          rounded-full
          font-semibold
        "
      >
        View Recommendation
      </button>
    </div>
  );
}

export default AIAlertCard;
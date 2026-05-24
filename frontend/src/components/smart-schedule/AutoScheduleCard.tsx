function AutoScheduleCard() {
  return (
    <div
      className="
        bg-black
        text-white
        rounded-card
        p-6
      "
    >
      <h2 className="text-3xl font-bold">
        Auto Scheduling
      </h2>

      <p className="mt-5 leading-relaxed text-white/70">
        AI automatically reorganized your tasks
        to reduce overload and improve delivery time.
      </p>

      <button
        className="
          mt-8
          bg-primary
          text-black
          px-5
          py-3
          rounded-full
          font-semibold
        "
      >
        Apply Schedule
      </button>
    </div>
  );
}

export default AutoScheduleCard;
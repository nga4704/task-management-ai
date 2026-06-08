function TeamWorkloadCard() {
  const members = [
    {
      name: "John",
      workload: 92,
    },
    {
      name: "Anna",
      workload: 78,
    },
    {
      name: "David",
      workload: 65,
    },
    {
      name: "Sarah",
      workload: 48,
    },
  ];

  return (
    <section
      className="
        rounded-[32px]
        border
        border-border
        bg-surface
        p-6
        shadow-soft
      "
    >
      <h3 className="text-lg font-bold">
        Team Workload
      </h3>

      <p className="mt-1 text-sm text-muted">
        Resource utilization by member
      </p>

      <div className="mt-8 space-y-5">

        {members.map((member) => (
          <div key={member.name}>
            <div
              className="
                mb-2
                flex
                items-center
                justify-between
              "
            >
              <span className="font-medium">
                {member.name}
              </span>

              <span className="text-sm text-muted">
                {member.workload}%
              </span>
            </div>

            <div
              className="
                h-3
                overflow-hidden
                rounded-full
                bg-surfaceSecondary
              "
            >
              <div
                style={{
                  width: `${member.workload}%`,
                }}
                className={`
                  h-full
                  rounded-full

                  ${
                    member.workload > 85
                      ? "bg-red-500"
                      : member.workload > 70
                      ? "bg-yellow-500"
                      : "bg-primary"
                  }
                `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamWorkloadCard;
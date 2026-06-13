function ProjectSkeleton() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        lg:grid-cols-2
      "
    >
      {Array.from({
        length: 4,
      }).map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse

            rounded-3xl
            border
            border-border

            bg-surface

            p-6
          "
        >
          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div
                className="
                  h-5
                  w-32
                  rounded-lg
                  bg-surface-secondary
                "
              />

              <div
                className="
                  mt-4
                  h-4
                  w-full
                  rounded-lg
                  bg-surface-secondary
                "
              />

              <div
                className="
                  mt-2
                  h-4
                  w-2/3
                  rounded-lg
                  bg-surface-secondary
                "
              />
            </div>

            <div
              className="
                ml-4
                h-12
                w-12
                rounded-2xl
                bg-surface-secondary
              "
            />
          </div>

          {/* PROGRESS */}
          <div className="mt-8">
            <div
              className="
                mb-2
                h-3
                w-24
                rounded-lg
                bg-surface-secondary
              "
            />

            <div
              className="
                h-3
                w-full
                rounded-full
                bg-surface-secondary
              "
            />
          </div>

          {/* FOOTER */}
          <div
            className="
              mt-8
              flex
              items-center
              justify-between
            "
          >
            <div
              className="
                h-4
                w-20
                rounded-lg
                bg-surface-secondary
              "
            />

            <div
              className="
                h-10
                w-28
                rounded-2xl
                bg-surface-secondary
              "
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectSkeleton;
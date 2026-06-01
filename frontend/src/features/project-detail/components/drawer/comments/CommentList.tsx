const comments = [
  {
    id: 1,
    user: "Nga",
    text: "API integration completed.",
  },
  {
    id: 2,
    user: "Minh",
    text: "Testing in progress.",
  },
];

function CommentList() {
  return (
    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <h3 className="font-bold">
        Comments
      </h3>

      <div className="mt-4 space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="
              rounded-xl
              bg-background
              p-3
            "
          >
            <p className="font-medium">
              {comment.user}
            </p>

            <p
              className="
                mt-1
                text-sm
                text-muted
              "
            >
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentList;
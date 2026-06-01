function CommentInput() {
  return (
    <div className="mt-4 flex gap-3">
      <input
        placeholder="Write a comment..."
        className="
          flex-1
          rounded-xl
          border
          border-border
          px-4
          py-3
        "
      />

      <button
        className="
          rounded-xl
          bg-primary
          px-5
          font-medium
        "
      >
        Send
      </button>
    </div>
  );
}

export default CommentInput;
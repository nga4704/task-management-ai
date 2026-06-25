import { MessageSquare, Send, Reply } from "lucide-react";
import { useState } from "react";
import { useTaskComments } from "@/features/tasks/hooks/useTaskComments";

function TaskComments({ taskId }: { taskId: string }) {
    const { comments, addComment } = useTaskComments(taskId);
    const [message, setMessage] = useState("");

    const handleSend = async () => {
        if (!message.trim()) return;

        await addComment(message);
        setMessage("");
    };

    return (
        <div className="rounded-2xl border border-border bg-surface p-5">

            {/* HEADER */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MessageSquare size={18} />
                    <h3 className="font-bold">Comments</h3>
                </div>

                <span className="text-xs text-muted">
                    {comments.length}
                </span>
            </div>

            {/* LIST (SCROLL FIX) */}
            <div className="mt-5 space-y-4 max-h-[320px] overflow-y-auto pr-2">
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        comment={comment}
                        addComment={addComment}
                    />
                ))}
            </div>

            {/* INPUT ROOT */}
            <div className="mt-6 border-t border-border pt-4 flex items-center gap-2">

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a comment..."
                    className="
      flex-1
      resize-none
      border
      p-3
      rounded-xl
      text-sm
      outline-none
      focus:ring-2
      focus:ring-primary/30
      max-h-[120px]
    "
                    rows={2}
                />

                <button
                    onClick={handleSend}
                    className="
      bg-primary
      p-3
      rounded-xl
      flex
      items-center
      justify-center
      hover:opacity-90
      transition
      h-[44px]
      w-[44px]
      shrink-0
    "
                >
                    <Send size={16} />
                </button>

            </div>
        </div>
    );
}

/* ================= COMMENT ITEM ================= */

function CommentItem({
    comment,
    addComment,
}: {
    comment: any;
    addComment: (content: string, parentId?: string) => Promise<void>;
}) {
    const [showReply, setShowReply] = useState(false);
    const [reply, setReply] = useState("");

    const handleReply = async () => {
        if (!reply.trim()) return;

        await addComment(reply, comment.id);

        setReply("");
        setShowReply(false);
    };

    const formatTime = (date: string) =>
        new Date(date).toLocaleString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

    return (
        <div className="bg-surfaceSecondary p-3 rounded-md">

            {/* HEADER */}
            <div className="flex justify-between">
                <p className="text-sm font-semibold">
                    {comment.users?.full_name ?? "Unknown"}
                </p>

                <p className="text-xs text-muted">
                    {formatTime(comment.created_at)}
                </p>
            </div>

            {/* CONTENT */}
            <p className="text-sm mt-1">{comment.content}</p>

            {/* REPLY BTN */}
            <button
                onClick={() => setShowReply(!showReply)}
                className="mt-2 flex items-center gap-1 text-xs text-muted hover:text-text"
            >
                <Reply size={14} />
                Reply
            </button>

            {/* REPLY INPUT */}
            {showReply && (
                <div className="mt-3 flex items-center gap-2">

                    <textarea
                        value={reply}
                        onChange={(e) => setReply(e.target.value)}
                        placeholder="Write reply..."
                        className="
        flex-1
        resize-none
        border
        p-2
        rounded-md
        text-sm
        outline-none
        focus:ring-2
        focus:ring-primary/30
        max-h-[100px]
      "
                        rows={2}
                    />

                    <button
                        onClick={handleReply}
                        className="
        bg-primary
        p-2
        rounded-md
        flex
        items-center
        justify-center
        hover:opacity-90
        transition
        h-[36px]
        w-[36px]
        shrink-0
      "
                    >
                        <Send size={14} />
                    </button>

                </div>
            )}

            {/* REPLIES (INDENTED PROPERLY) */}
            {comment.replies?.length > 0 && (
                <div className="mt-3 ml-6 space-y-3 border-l pl-3">
                    {comment.replies.map((reply: any) => (
                        <div key={reply.id} className="bg-white p-3 rounded-md">

                            <div className="flex justify-between">
                                <p className="text-xs font-semibold">
                                    {reply.users?.full_name}
                                </p>

                                <p className="text-[10px] text-muted">
                                    {formatTime(reply.created_at)}
                                </p>
                            </div>

                            <p className="text-sm mt-1">
                                {reply.content}
                            </p>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default TaskComments;
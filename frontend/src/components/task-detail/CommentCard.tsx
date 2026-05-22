type CommentCardProps = {
  name: string;
  comment: string;
  time: string;
};

function CommentCard({
  name,
  comment,
  time,
}: CommentCardProps) {
  return (
    <div className="flex gap-4">
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-primary
        "
      />

      <div
        className="
          flex-1
          bg-[#F7F7F7]
          rounded-[24px]
          p-5
        "
      >
        <div className="flex justify-between">
          <h4 className="font-semibold">
            {name}
          </h4>

          <span className="text-sm text-gray-500">
            {time}
          </span>
        </div>

        <p className="mt-3 text-gray-700 leading-relaxed">
          {comment}
        </p>
      </div>
    </div>
  );
}

export default CommentCard;
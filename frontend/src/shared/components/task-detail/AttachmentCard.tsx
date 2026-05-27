type AttachmentCardProps = {
  name: string;
  size: string;
};

function AttachmentCard({
  name,
  size,
}: AttachmentCardProps) {
  return (
    <div
      className="
        bg-[#F7F7F7]
        rounded-[20px]
        p-4
        flex
        justify-between
        items-center
      "
    >
      <div>
        <h4 className="font-medium">
          {name}
        </h4>

        <p className="text-sm text-gray-500 mt-1">
          {size}
        </p>
      </div>

      <button
        className="
          bg-white
          px-4
          py-2
          rounded-full
        "
      >
        Download
      </button>
    </div>
  );
}

export default AttachmentCard;
import { FileText } from "lucide-react";

const files = [
  "api-spec.pdf",
  "dashboard-design.fig",
  "analytics.xlsx",
];

function AttachmentList() {
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
        Attachments
      </h3>

      <div className="mt-4 space-y-3">
        {files.map((file) => (
          <div
            key={file}
            className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-background
              p-3
            "
          >
            <FileText size={18} />

            <span className="text-sm">
              {file}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttachmentList;
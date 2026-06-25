import {
  FileText,
  Upload,
  Trash2,
  Paperclip,
} from "lucide-react";

import { useRef } from "react";
import { useAttachments } from "@/features/tasks/hooks/useAttachments";

type Props = {
  taskId: string;
};

function AttachmentList({ taskId }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    files,
    loading,
    uploadFile,
    deleteFile,
  } = useAttachments(taskId);

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    await uploadFile(file);

    // reset input để upload lại file giống nhau không bị ignore
    e.target.value = "";
  };

  return (
    <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Paperclip size={18} />
          <h3 className="font-bold">Attachments</h3>
        </div>

        <button
          onClick={() => inputRef.current?.click()}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm"
        >
          <Upload size={16} />
        </button>

        <input
          ref={inputRef}
          hidden
          type="file"
          onChange={handleUpload}
        />
      </div>

      {/* LIST */}
      <div className="mt-4 space-y-3">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between rounded-xl border p-3"
          >
            <div className="flex items-center gap-3">
              <FileText size={18} />

              <a
                href={file.file_url}
                target="_blank"
                className="text-sm hover:underline"
              >
                {file.file_name}
              </a>
            </div>

            <button
              onClick={() => deleteFile(file.id)}
              className="text-red-500"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttachmentList;
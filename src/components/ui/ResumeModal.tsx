import { X, Download } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ResumeModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">

      <div className="w-[90%] h-[90%] bg-neutral-900 rounded-xl relative border border-white/10">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          <X />
        </button>

        {/* Download button */}
        <a
          href="/resume.pdf"
          download
          className="absolute top-4 left-4 flex gap-2 items-center px-4 py-2 bg-white text-black rounded-lg"
        >
          <Download size={16} />
          Download
        </a>

        {/* PDF Preview */}
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded-xl"
        />

      </div>

    </div>
  );
}
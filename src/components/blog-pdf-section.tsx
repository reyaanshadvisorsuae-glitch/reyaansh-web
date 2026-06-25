"use client";

import { MdDownload } from "react-icons/md";
import { getPdfDownloadUrl, getPdfEmbedUrl } from "@/lib/pdf-utils";

type BlogPdfSectionProps = {
  fileName: string;
  url: string;
};

export function BlogPdfSection({ fileName, url }: BlogPdfSectionProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-outline-variant/40 bg-white shadow-[0_22px_70px_rgba(0,26,51,0.08)]">
      <div className="flex flex-col gap-3 border-b border-outline-variant/30 bg-surface-container-low p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="truncate font-body-md text-sm text-on-surface-variant">
          {fileName}
        </p>
        <a
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-label-md text-[11px] uppercase tracking-[0.12em] text-white transition-all hover:bg-primary/90"
          href={getPdfDownloadUrl(url)}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MdDownload aria-hidden="true" />
          Download PDF
        </a>
      </div>
      <iframe
        className="h-[70vh] min-h-[520px] w-full bg-surface-container"
        src={getPdfEmbedUrl(url)}
        title={fileName}
      />
    </div>
  );
}

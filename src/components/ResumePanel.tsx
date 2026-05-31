"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Download } from "lucide-react";

interface ResumePanelProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export default function ResumePanel({ isOpen, onClose, resumeUrl }: ResumePanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"
            aria-label="Close resume preview"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="relative z-10 ml-auto w-full max-w-3xl h-full bg-bg border-l border-border shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between gap-4 p-6 border-b border-border">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-ink-3">Resume Preview</p>
                <h2 className="text-2xl font-semibold text-ink mt-2">Resume</h2>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
                >
                  <Download size={16} />
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-ink-2 hover:text-ink transition-colors"
                  aria-label="Close resume panel"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            <div className="p-6 h-[calc(100%-88px)]">
              <p className="text-sm text-ink-3 mb-4">
                Resume preview is shown in a cleaner side pane. If your browser still shows default PDF controls, use the download button.
              </p>
              <div className="h-full rounded-3xl overflow-hidden border border-border bg-bg-elevated">
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="Resume Preview"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

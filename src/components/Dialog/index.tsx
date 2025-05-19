"use client";

import clsx from "clsx";

type DialogProps = {
  title: string;
  content: React.ReactNode;
  isVisible: boolean;
  disabled: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function Dialog({
  title,
  content,
  isVisible = false,
  disabled = false,
  onConfirm,
  onCancel,
}: DialogProps) {
  if (!isVisible) return;

  function handleCancel() {
    if (disabled) return;
    onCancel();
  }

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/40",
        "transition-all duration-500 ease-out",
        `${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`
      )}
      role="dialog"
      aria-modal={true}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      onClick={handleCancel}
    >
      <div
        className={clsx(
          "bg-slate-100 p-6 rounded-lg w-2xl mx-6",
          "flex flex-col gap-6 shadow-lg shadow-black/30",
          "transition-all duration-500 ease-out",
          `${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-lg font-bold text-center">
          {title}
        </h3>
        <div id="dialog-description">{content}</div>
        <div className="flex items-center justify-around">
          <button
            className={clsx(
              "bg-slate-200 hover:bg-slate-300 transition text-slate-950",
              "flex items-center justify-center",
              "py-1 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            )}
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className={clsx(
              "bg-blue-500 hover:bg-blue-600 transition text-blue-50",
              "flex items-center justify-center",
              "py-1 px-4 rounded-lg cursor-pointer",
              "disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            )}
            onClick={onConfirm}
            disabled={disabled}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Trash2Icon } from "lucide-react";
import clsx from "clsx";
import { useState, useTransition } from "react";
import { deletePostAction } from "@/actions/post/delete-post-action";
import { Dialog } from "@/components/Dialog";

type ButtonDeletePostProps = {
  id: string;
  title: string;
};

export function ButtonDeletePost({ id, title }: ButtonDeletePostProps) {
  const [isPending, startTransition] = useTransition();
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  function handleClick() {
    setIsDialogVisible(true);
  }

  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      setIsDialogVisible(false);

      if (result.error) {
        alert(`Erro ao deletar post: ${result.error}`);
        return;
      }
    });
  }

  return (
    <>
      <button
        className={clsx(
          "text-red-500 cursor-pointer",
          "[&_svg]:w-4 [&_svg]:h-4",
          "hover:scale-120 hover:text-red-600 transition",
          "disabled:text-slate-600 disabled:cursor-not-allowed"
        )}
        aria-label={`Deletar post ${title}`}
        title={`Deletar post ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon size={18} className="w-4 h-4" />
      </button>
      <Dialog
        title="Apagar Post"
        content={<p>Deseja deletar o post: {title}?</p>}
        isVisible={isDialogVisible}
        disabled={isPending}
        onConfirm={() => handleConfirm()}
        onCancel={() => setIsDialogVisible(false)}
      />
    </>
  );
}

"use client";

import { useEffect } from "react";

export const PrintTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    const originalTitle = document.title;

    const onBeforePrint = () => {
      document.title = title;
    };
    const onAfterPrint = () => {
      document.title = originalTitle;
    };

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, [title]);

  return null;
};

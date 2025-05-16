"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorMessage
      statusCode="500"
      description="An unexpected error occurred. Try again later."
    />
  );
}

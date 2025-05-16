import { ErrorMessage } from "@/components/ErrorMessage";

export default function NotFoundPage() {
  return (
    <ErrorMessage
      statusCode="404"
      description="The page you are looking for does not exist."
    />
  );
}

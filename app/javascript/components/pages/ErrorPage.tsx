import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError() as { statusText: string; message: string };
  console.error(error);

  return (
    <div>
      <h1>エラー</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

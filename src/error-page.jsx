import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error.message);

  return (
    <>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusError || error.message}</i>
        </p>
      </div>
    </>
  );
}
import { NavLink, useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  if (error && error.status === 404) {
    return (
      <>
        <div className="pagenotfound">
          <h1>👇Page Not Found👇</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            reiciendis, iste distinctio, ea ad molestias mollitia quam aliquid
            nostrum omnis, tenetur ipsum sunt veritatis assumenda. Architecto
            ipsum, magni itaque eum veritatis porro, deserunt laudantium optio
            ad, eveniet iusto nihil fugiat?
          </p>
          <NavLink to="/">Home Page</NavLink>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pagenotfound">
        <h1>👇Something went error :(👇</h1>

        <NavLink to="/">Home Page</NavLink>
      </div>
    </>
  );
}

export default ErrorPage;

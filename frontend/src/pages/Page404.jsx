import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <main className="App">
      <div className="page-404-container">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to={"/"} className="go-home">
          Go to Homepage
        </Link>
      </div>
    </main>
  );
}

export default Page404;

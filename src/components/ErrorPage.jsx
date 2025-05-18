import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col m-auto justify-center h-screen items-center gap-20">
      <h1 className="font-bond text-9xl text-bold">404 error</h1>
      <h3 className="text-3xl">The page doesn't exist.</h3>
      <h6 className="text-3xl">
        Would you like to{" "}
        <a href="" className="text-red-600">
          learn about HTTP errors?
        </a>
      </h6>
    </div>
  );
};

export default ErrorPage;

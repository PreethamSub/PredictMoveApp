import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { loginUser } from "../client/client";
import { Link } from "react-router-dom";

export default function Login() {
  let [error, setError] = useState(false);
  let navigate = useNavigate();
  const { token, setToken } = useAuth();
  React.useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  });

  const login = function (e) {
    e.preventDefault();

    loginUser(e.target[0].value, e.target[1].value)
      .then(function (response) {
        setToken(response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setError(false);
        navigate("/dashboard");
      })
      .catch(function (error) {
        setError(true);
        console.error(error);
      });
  };

  return (
    <div className="bg-bgdark-50 mx-auto md:px-6 py-10 md:py-20 w-10/12 md:w-4/12">
      <div className="mx-auto bg-bgdark-100 px-12 py-10 w-full">
        <h1 className="text-sm text-white sm:text-3xl">Sign In</h1>
        <form className="mt-5" onSubmit={login}>
          {error ? (
            <span className="flex justify-center mt-2 text-sm text-red-500">
              Username and Password do not match
            </span>
          ) : (
            <span></span>
          )}
          {/* Email */}
          <label
            htmlFor="email"
            className="block mt-3 text-sm font-medium leading-6 text-white"
          >
            Email
          </label>
          <div className="w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              autoComplete="given-name"
              className="block w-full mx-auto justify-center rounded-md border-0 py-1.5 mt-1 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          {/* Password */}
          <label
            htmlFor="password"
            className="block mt-3 text-sm font-medium leading-6 text-white"
          >
            Password
          </label>
          <div className="w-full">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
              className="block w-full mx-auto justify-center rounded-md border-0 py-1.5 mt-1 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <span className="flex justify-end text-white my-5">
            Forgot your Password?
          </span>

          <span className="flex justify-center">
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-200 hover:bg-purple-200 hover:text-white px-5 py-2 mt-5 text-sm font-medium text-white"
            >
              Log in
            </button>
          </span>
          <span className="flex justify-center text-white my-5">
            Not a member?{" "}
            <Link to="/signup">
              <a>{"  "}Sign up</a>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

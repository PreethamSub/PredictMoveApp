import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../provider/authProvider";
import { registerUser } from "../client/client";
import { useParams } from "react-router-dom";

import { CheckIcon } from "@heroicons/react/20/solid";

const plans = [
  {
    isSelected: false,
    plan: "Spectator",
    disc: "",
    cost: "Free",
    desc: "Watch from the sidelines",
    features: ["Beginners Course", "24 Hour Customer Support Response time"],
  },
  {
    isSelected: true,
    plan: "Champion",
    disc: "5% off",
    cost: "197 monthly",
    desc: "Trade with precision",
    features: [
      "BTC and Stocks update - Mon - Fri",
      "Live Trading Sessions - x2",
      "Coaches Trade updates",
      "Weekly BTC Trading Plan",
      "Weekly Altcoin Trading Plan",
      "Weekly Trading Lessons",
      "Coaches Trade Reviews",
      "Live Weekly Trading AMA",
      "Speedrun Master Class",
      "On-demand Learning Library",
      "Trading Journal",
      "Trading Leaderboard Competition",
      "Trading Templates + Strategies",
      "Daily Trading Sheet",
    ],
  },
  {
    isSelected: false,
    plan: "Contender",
    disc: "5% Off",
    cost: "97 monthly",
    desc: "Watch from the sidelines",
    features: [
      "BTC and Stocks update - Mon - Fri",
      "Live Trading Sessions - x2",
      "Coaches Trade updates",
      "Weekly BTC Trading Plan",
      "Weekly Trading Lessons",
      "Coaches Trade Reviews",
      "Live Weekly Trading AMA",
      "Trading Journal",
      "Trading Leaderboard Competition",
      "Trading Templates + Strategies",
      "Daily Trading Sheet",
    ],
  },
];

export default function SignupForm() {
  let { plan } = useParams(); 
  const [selected, setSelected] = useState(plan || "Champion");
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const register = function (e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    value.plan = selected;

    registerUser(value)
      .then(function (response) {
        setToken(response.data.token);
        navigate("/dashboard");
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto px-6 py-16 w-11/12 md:w-8/12">
      <div className="mx-auto bg-bgdark-100 p-5 w-full">
        <h1 className="text-sm text-white sm:text-3xl">Sign Up</h1>
        <form className="mt-5" onSubmit={register}>
          {/* UserName */}
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-white"
          >
            Username
          </label>
          <div className="w-full">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              autoComplete="given-name"
              className="block w-full mx-auto justify-center rounded-md border-0 mt-1 py-1.5 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mr-5">
              <label
                htmlFor="password1"
                className="block mt-3 text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password1"
                id="password1"
                placeholder="Enter Password"
                required
                className="block w-full justify-center rounded-md border-0 py-1.5 mt-1 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="password2"
                className="block mt-3 text-sm font-medium leading-6 text-white"
              >
                Re-enter Password
              </label>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Re-enter Password"
                required
                className="block w-full justify-center rounded-md border-0 py-1.5 mt-1 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Country */}
          <label
            htmlFor="country"
            className="block mt-3 text-sm font-medium leading-6 text-white"
          >
            Country
          </label>
          <div className="w-full">
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Enter Country"
              className="block w-full mx-auto justify-center rounded-md border-0 py-1.5 pl-3 mt-1 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          {/* State */}
          <label
            htmlFor="state"
            className="block mt-3 text-sm font-medium leading-6 text-white"
          >
            State
          </label>
          <div className="w-full">
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter State"
              className="block w-full mx-auto justify-center rounded-md border-0 py-1.5 pl-3 mt-1 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <h1 className="my-3 text-sm text-white sm:text-3xl">
            Select your plan
          </h1>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-bgdark-100 px-10 pt-3 rounded-lg">
            {/* Plan 1 */}
            {plans.map((plan) =>
              selected === plan.plan ? (
                <div className="bg-bgdark-100 mx-auto max-w-2xl rounded-md lg:flex lg:max-w-none h-fit">
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelected(plan.plan)}
                      className="w-full px-5 py-2 md:px-10 md:py-5 rounded-md ring-2 ring-purple-100"
                    >
                      <h3 className="text-center text-lg font-bold tracking-tight text-white">
                        {plan.plan}
                      </h3>
                      <h3 className="text-center text-2xl font-bold tracking-tight text-white">
                        {plan.cost}
                      </h3>
                      <p className="text-center mt-1 text-base leading-7 text-white">
                        {plan.desc}
                      </p>
                    </button>
                    <ul
                      role="list"
                      className="mt-4 text-sm leading-6 text-white"
                    >
                      {plan.features.map((feature) => (
                        <li
                          key={plan.feature}
                          className="flex gap-x-5 gap-y-2 my-2"
                        >
                          <CheckIcon
                            className="h-6 w-5 flex-none text-white"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="bg-bgdark-100 mx-auto max-w-2xl lg:flex lg:max-w-none h-fit">
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelected(plan.plan)}
                      className="w-full px-5 py-2 md:px-10 md:py-5 rounded-md ring-1 ring-gray-200"
                    >
                      <h3 className="text-center text-lg font-bold tracking-tight text-white">
                        {plan.plan}
                      </h3>
                      <h3 className="text-center text-2xl font-bold tracking-tight text-white">
                        {plan.cost}
                      </h3>
                      <p className="text-center mt-1 text-base leading-7 text-white">
                        {plan.desc}
                      </p>
                    </button>
                    <ul
                      role="list"
                      className="mt-4 text-sm leading-6 text-white"
                    >
                      {plan.features.map((feature) => (
                        <li
                          key={plan.feature}
                          className="flex gap-x-5 gap-y-2 my-2"
                        >
                          <CheckIcon
                            className="h-6 w-5 flex-none text-white"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="md:p-5 md:mx-10 md:mt-5 rounded-md ring-1 ring-inset ring-bgdark-200">
            <h2 className="text-white text-xl p-5">
              <input
                type="checkbox"
                name="privacy"
                id="privacy"
                required
                className="rounded-md border-0 md:py-1.5 mt-1 mr-5 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              Terms of Use and Privacy Policy
            </h2>
            <p className="p-5 md:pl-10 text-gray-500">
              I have read and agree to the Terms of Use as well as the Privacy
              Policy I understand that by ticking this box:
              <ul className="p-5 md:pl-10 list-disc">
                <li>
                  I request the immediate provision of the digital content and
                  acknowledge that I will lose my right to cancel the contract
                  once the services have been fully performed I am buying
                  educational services.
                </li>
                <li>
                  Chart Champions Limited are not financial advisors and provide
                  educational services only.
                </li>
              </ul>
            </p>
          </div>
          <div className="md:p-5 md:mx-10 mt-5 rounded-md ring-1 ring-inset ring-bgdark-200">
            <h2 className="text-white text-xl p-5">
              <input
                type="checkbox"
                name="privacy"
                id="marketing"
                className="rounded-md border-0 py-1.5 mt-1 mr-5 bg-bgdark-100 text-white shadow-sm ring-1 ring-inset ring-bgdark-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              Newsletter and Marketing
            </h2>
            <p className="p-5 md:pl-10 text-gray-500">
              I would like to receive important e-mail updates, market news and
              more from Chart Champions
            </p>
          </div>
          <span className="flex justify-center">
            <button
              type="submit"
              className="w-6/12 md:w-4/12 rounded-lg bg-purple-200 hover:bg-purple-200 hover:text-white px-2 md:px-5 py-2 mt-5 text-sm font-medium text-white"
            >
              Register
            </button>
          </span>
        </form>
      </div>
    </div>
  );
}

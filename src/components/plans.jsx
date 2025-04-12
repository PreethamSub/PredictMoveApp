import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/20/solid";


const plans = [
  {
    isSelected: false,
    plan: "Spectator",
    disc: "",
    cost: "FREE/ forever",
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

export default function Plans() {
  let navigate = useNavigate();
  return (
    <div className="dark:bg-bgdark-50 bg-white md:py-12">
      <div className="mx-auto md:px-6 lg:px-8">
        <div className="mx-auto">
          <ul className="flex cursor-pointer justify-center md:mx-5 w-full">
            <li className="mx-1 px-1 md:px-12 py-2 md:mx-3 bg-purple-100 rounded-t-lg">
              Monthly
            </li>
            <li className="mx-1 px-1 md:px-12 py-2 md:mx-3 bg-bgdark-100 rounded-t-lg text-white">
              Quaterly
            </li>
            <li className="mx-1 px-1 md:px-12 py-2 md:mx-3 bg-bgdark-100 rounded-t-lg text-white">
              Half Yearly
            </li>
            <li className="mx-1 px-1 md:px-12 py-2 md:mx-3 bg-bgdark-100 rounded-t-lg text-white">
              Annually
            </li>
          </ul>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 bg-bgdark-100 py-8 md:px-20 md:py-10 rounded-lg">
          {/* Plans */}
          {plans.map((plan) =>
            plan.isSelected ? (
              // Selected Plan
              <div className="bg-white border-purple-200 border-4 mx-5 max-w-2xl rounded-md flex justify-center lg:max-w-none h-fit">
                <div className="p-4 md:p-8">
                  <h3 className="text-lg font-bold tracking-tight text-purple-100">
                    {plan.plan}
                  </h3>
                  <h3 className="text-2xl font-bold tracking-tight text-purple-100">
                    {plan.cost}
                  </h3>
                  <h3 className="text-lg font-bold tracking-tight text-purple-100">
                    {plan.disc}
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {plan.desc}
                  </p>
                  <ul
                    role="list"
                    className="mt-2 text-sm leading-6 text-gray-600"
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={plan.feature}
                        className="flex gap-x-5 gap-y-2 my-2"
                      >
                        <CheckIcon
                          className="h-6 w-5 flex-none text-slate-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                    <button
                      onClick={() => navigate(`/signup/${plan.plan}`)}
                      className="w-full rounded-lg bg-purple-100 border-purple-200 border-2 hover:bg-purple-200 hover:text-white px-5 py-2 mt-5 text-sm font-medium text-white"
                    >
                      Upgrade now
                    </button>
                </div>
              </div>
            ) : (
              // Unselected Plan
              <div className="bg-white max-w-2xl rounded-md ring-1 ring-gray-200 mx-5 flex justify-center lg:max-w-none h-fit">
                <div className="p-4 md:p-8">
                  <h3 className="text-lg font-bold tracking-tight text-slate-600">
                    {plan.plan}
                  </h3>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-600">
                    {plan.cost}
                  </h3>
                  <h3 className="text-lg font-bold tracking-tight text-slate-600">
                    {plan.disc}
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {plan.desc}
                  </p>
                  <ul
                    role="list"
                    className="mt-2 text-sm leading-6 text-gray-600"
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={plan.feature}
                        className="flex gap-x-5 gap-y-2 my-2"
                      >
                        <CheckIcon
                          className="h-6 w-5 flex-none text-slate-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                    <button
                      onClick={() => navigate(`/signup/${plan.plan}`)}
                      className="w-full rounded-lg border-purple-200 border-2 hover:bg-purple-200 hover:text-white px-5 py-2 mt-5 text-sm font-medium text-purple-200"
                    >
                      Upgrade now
                    </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

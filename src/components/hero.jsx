import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-bgdark-100">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mx-14">
        <div class="grid grid-rows-subgrid gap-4 row-span-3 md:grid-cols-subgrid">
          <div className="row-start-2 md:col-start-1">
            <div className="md:content-center md:ml-20 md:pl-20 md:pt-20 md:max-w-2xl md:py-24 lg:py-28">
              <div className="mt-5 md:mt-0 text-left">
                <h1 className="pb-5 font-semibold md:font-normal text-3xl md:text-6xl tracking-tight text-gray-900 dark:text-purple-300">
                  Level up your trading skills for profitable returns
                </h1>
                <p className="mb-10 md:mb-2 text-xs md:text-lg md:mt-6 leading-2 md:leading-8 text-neutral-100">
                  Dive into the uncharted waters of trading. Unleash your inner
                  fortune hunter and let's chart a course for the land of
                  profit!
                </p>
                <form
                  action=""
                  novalidate
                  className="mb-24 md:mb-1 md:space-y-4 md:rounded-lg md:p-4 md:shadow-lg md:p-6 lg:p-8"
                >
                  <input
                    type="email"
                    className="w-6/12 rounded-lg border-purple-200 focus:border-purple-100 bg-slate-100 dark:bg-gray-800 mx-3 text-white text-sm shadow-sm invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                    placeholder="Enter email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  <Link to="/signup">
                    <button className="rounded-lg bg-purple-100 hover:bg-purple-200 px-2 py-2 md:px-5 md:py-2 text-sm font-medium text-white">
                      Sign up
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row-start-1 md:col-start-2">
          <img
            src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/landing1.png?v=1713803192465"
            alt="Landing Image 1"
            className="object-scale-down h-full lg:w-full"
          />
        </div>
      </div>

      {/* Hero Part 2 */}
      <div className="bg-bgdark-50 grid sm:grid-rows-1 md:grid-cols-2 gap-2">
        <div className="px-10 pt-20 pb-10 md:ml-20 md:pl-20 max-w-2xl sm:py-24 lg:py-28">
          <img
            src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/landing2.png?v=1713805513712"
            alt="Landing Image 2"
            className="object-scale-down h-full lg:w-full"
          />
        </div>
        <div className="content-center mx-10 pb-20 md:mr-20 md:pr-20 max-w-2xl sm:py-24 lg:py-28">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl text-bold tracking-tight text-gray-900 dark:text-white">
              On Demand Learning Library
            </h1>
            <p className="mt-6 text-xs md:text-base text-neutral-100">
              Enter at an educational level tailored to you. Whether you're an
              absolute beginner as a trader or looking to advance your current
              results, you will have a learning path focused on your
              requirements as an aspiring trader.
            </p>
            <p className="mt-6 text-xs md:text-base text-neutral-100">
              As a member you will never succumb to stale performance, thanks to
              our ever-growing module collection; with new lessons being added
              every month.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Part 3 */}
      <div className="bg-bgdark-200 grid sm:grid-rows-1 md:grid-cols-2 md:px-20 py-5 px-4 md:py-20 gap-2">
        <div className="grid-flow-col auto-cols-max bg-bgdark-50 rounded-lg items-center content-center md:ml-20 max-w-2xl">
          <div className="px-20 py-10 text-left">
            <img
              src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/landing3.png?v=1713806606072"
              alt="Landing Image 3"
              className="object-scale-down h-full w-full mb-5"
            />
            <h1 className="text-4xl text-bold tracking-tight text-gray-900 dark:text-white">
              On Demand Learning
            </h1>
            <p className="mt-6 text-xs md:text-base text-neutral-100">
              This company is the first real-time learning platform dedicated to
              teaching Technical Analysis for trading Bitcoin and stocks. Gain
              immediate access to the most sophisticated analysis and trading
              strategies.Start your path as a profitable trader today
            </p>
          </div>
        </div>
        <div className="bg-purple-50 rounded-lg items-center content-center md:mr-20 max-w-2xl">
          <div className="px-20 py-10 text-left">
            <img
              src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/landing4.png?v=1713806644903"
              alt="Landing Image 4"
              className="object-scale-down h-full w-full"
            />
            <h1 className="text-4xl text-bold tracking-tight text-gray-900 dark:text-dark">
              Live Weekly Trading Lessons
            </h1>
            <p className="mt-6 text-xs md:text-base text-dark">
              As a member you won't be left alone on your learning path. Each
              week our Coaches host interactive learning streams every Wednesday
              and Sunday, dedicated to specific techniques and strategies,
              followed by a thorough Q&A session.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Part 4 */}
      <div className="bg-bgdark-50 grid sm:grid-rows-1 md:grid-cols-2 gap-2">
        <div class="grid grid-rows-subgrid gap-4 row-span-3 md:grid-cols-subgrid">
          <div className="content-center items-center  row-start-1 md:col-start-2">
            <div className="mx-10 my-10 md:ml-20 md:pl-20 max-w-2xl">
              <div className="text-left">
                <h1 className="text-2xl md:text-4xl text-bold tracking-tight text-gray-900 dark:text-white">
                  Real Time Trade Setups
                </h1>
                <p className="mt-6 text-xs md:text-base text-neutral-100">
                  Champion members are provided with an in-depth analysis on the
                  Bitcoin market prior to the week ahead. Sit down with our Lead
                  Analyst as they talk you through your chart highlighting;
                  current market structure, key price levels and alert
                  recommendations, while identifying the most probably trade
                  setups on the Bitcoin chart.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10 md:mr-20 md:pr-20 max-w-2xl row-start-1 md:col-start-2">
          <img
            src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/landing5.png?v=1713807445756"
            alt="Landing Image 5"
            className="object-scale-down h-full w-10/12 lg:w-full"
          />
        </div>
      </div>

      {/* Hero Part 5 */}
      <div className="bg-bgdark-200 grid sm:grid-rows-1 md:grid-cols-2 px-10 py-10 md:px-20 md:py-20 gap-4">
        <div className="grid-flow-col auto-cols-max bg-white rounded-lg items-center content-center md:ml-20 max-w-2xl">
          <div className="px-10 py-10 md:px-20 md:py-10 text-left">
            <img
              src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/landing6.png?v=1713807874676"
              alt="Landing Image 6"
              className="object-scale-down h-full lg:w-full mb-5"
            />
            <h1 className="text-4xl text-bold tracking-tight text-gray-900 dark:text-dark">
              Daily Trading Updates
            </h1>
            <p className="mt-6 text-xs md:text-base text-dark">
              Every morning our Coach, provides a live analysis on the Bitcoin
              market, providing detailed insights on how they expect to trade
              Bitcoin for the trading day ahead. These vital updates are closed
              with a Q&A session, providing you with the answers you need as a
              Day Trader in the Bitcoin Market
            </p>
          </div>
        </div>
        <div className="bg-bgdark-100 rounded-lg items-center content-center md:mr-20 max-w-2xl">
          <div className="px-10 py-10 md:px-20 md:py-10 text-left">
            <img
              src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/landing7.png?v=1713807860617"
              alt="Landing Image 7"
              className="object-scale-down h-4/6 lg:w-full mb-5 md:mb-1"
            />
            <h1 className="text-4xl text-bold tracking-tight text-gray-900 dark:text-white">
              In-house Trading Assistant
            </h1>
            <p className="mt-6 text-xs md:text-base text-white">
              Have a question? Need a bit of extra support on a particular
              trading topic? Trading Assistant and our Coaches are on hand every
              day with answers and tips to boost your learning progress and
              knowledge of the markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

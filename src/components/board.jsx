import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GetChart from "./chart.jsx";

export default function Board({ props }) {
  return (
    <>
      {/* Image */}
      <img
        src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard1.png?v=1713879624549"
        alt="Landing Image 1"
        className="object-scale-down h-full ml-10 my-4 w-10/12 md:ml-24 md:py-5"
      />

      {/* Grid */}
      <div className="grid grid-cols-2 md:ml-24 gap-4 md:w-10/12">
        {/* Grid Element 1 */}
        <div className="bg-bgdark-100 rounded-md">
          <h1 className="px-5 md:px-10 pt-10 text-white font-medium text-lg">
            Welcome
          </h1>
          <p className="p-5 md:px-10 md:py-10 text-sm md:text-md text-white md:font-medium leading-5">
            Neha Sri Tangirala, welcome to Chart Champions! There's a lot to
            explore here, so let's get started
          </p>
          <button className="my-5 mx-4 md:ml-10 rounded-md bg-purple-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Link your Discord
          </button>
        </div>

        {/* Grid Element 2 */}
        <div className="bg-bgdark-100 rounded-md">
          <h1 className="px-5 md:px-10 pt-10 text-white font-medium text-lg">
            Your Progress
          </h1>
          <div className="mt-10 mx-0.5 md:mr-20 md:mt-5">
            <GetChart data={props.chartData} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:ml-24 gap-4 md:w-10/12">
        {/* Grid Element 3 */}
        <div className="bg-bgdark-100 rounded-md">
          <div className="flex justify-between pt-10 pb-5">
            <h1 className="px-5 md:px-10 text-white font-medium text-lg">
              Video Library
            </h1>
            <button className="mr-5 md:mr-10 rounded-md bg-purple-100 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              View All
            </button>
          </div>
          <div className="pl-5 md:pl-10">
            {props.videoData.map((video) => (
              <span className="grid grid-cols-2">
                <img
                  src={video.image}
                  alt="Landing Image 1"
                  className="object-scale-down h-full w-9/12 py-5 md:py-1"
                />
                <span className="content-center pr-5">
                  <h3 className="text-white">{video.name}</h3>
                  <p className="text-gray-300 text-xs">{video.lastOpened}</p>
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Grid Element 4 */}
        <div className="bg-bgdark-100 rounded-md">
          <h1 className="p-5 md:px-10 md:pt-10 md:mb-5 text-white font-medium text-lg">
            Video Library
          </h1>
          <div className="pl-5 my-1 px-10">
            {props.videoData2.map((video) => (
              <div className="flex justify-between content-center py-1">
                <span className="flex justify-start">
                  <img
                    src={video.image}
                    alt="Landing Image 1"
                    className="size-3.5 px-3 pb-2 md:pb-1 content-center"
                  />
                  <span className="md:mr-24 text-white text-sm content-center">
                    {video.name}
                    <br />
                    {video.date}
                  </span>
                </span>
                <span className="text-white text-sm content-center">
                  {video.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

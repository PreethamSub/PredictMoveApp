import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import GetChart from "./chart.jsx";

export default function Board({ chartData, videoData, videoData2 }) {
  return (
    <div className="w-fit h-screen bg-bgdark-50">
      <div className="rounded-lg bg-bgdark-100 text-white">
        <h1 className="p-10 text-3xl">Sorry, you don't have access to this content</h1>
        <p className="pl-10 mb-2 text-lg">Start you subscription to get access</p>
        <Link to="/signup">
          <button className="m-10 rounded-lg bg-purple-100 hover:bg-purple-200 px-5 py-2 text-sm font-medium text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

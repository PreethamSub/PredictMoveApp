import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Plans", href: "/", current: false },
  { name: "Signin", href: "/signin", current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-bgdark-100">
      {({ open }) => (
        <>
          <div className="pb-5 md:mx-20 max-w-full md:px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-10 md:h-16 items-center justify-between">
              
              <div className="flex flex-1 justify-left sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-left">
                  <Link to="/">
                    <span className="text-black dark:text-white pl-2 text-xs md:text-xl">
                      PREDICT MOVE
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-left sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="sm:ml-6 sm:block">
                  <div className="flex space-x-0 md:space-x-4 mt-2">
                    {navigation.map((item) => (
                      <Link to={item.href}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-white dark:bg-gray-900 text-black dark:text-white"
                              : "text-slate-500 dark:text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-1 py-1 md:px-3 md:py-2 text-xs md:text-sm md:font-medium",
                            "text-xs"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link to="/signup" className="ml-1 md:ml-5 mt-2">
                  <a className="rounded-md bg-purple-100 text-xs md:text-sm px-1 py-1.5 md:px-3.5 md:py-2.5 md:font-semibold text-white shadow-sm hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Become a Member
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

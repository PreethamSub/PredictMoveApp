import { Fragment } from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { logoutUser } from "../client/client";
import { Menu, Transition } from "@headlessui/react";

const classNames = function (...classes) {
  return classes.filter(Boolean).join(" ");
};

const logout = function () {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  logoutUser();
};

export default function Sidebar({ Children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  let profilepic = "";
  let name = "";
  if(user){
    profilepic = user.profilepic;
    name = user.username.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  }

  const { token } = useAuth();
  const [SidebarOpen, toggleSidebar] = useReducer(
    (SidebarOpen) => !SidebarOpen,
    true
  );

  return (
    <>
      {/* Side Bar */}
      <div
        id="default-sidebar"
        className={classNames(
          "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ease-out duration-700",
          SidebarOpen ? "md:translate-x-0" : "translate-x-0 md:translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full md:h-full px-3 py-4 overflow-y-auto bg-grey-100 dark:bg-bgdark-100">
          <button className="ml-2 mt-2 md:hidden" onClick={() => toggleSidebar()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className="flex-none">
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">
                  <a className="flex justify-center text-gray-900 rounded-lg dark:text-white group text-lg font-medium">
                    <span>Predict Move</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/dashboard">
                  <a className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-400 group">
                    <img src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard%20icon.svg?v=1713889031470" />
                    <span className="ms-3">Dashboard</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/courses">
                  <a className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-400 group">
                    <img src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/courses%20icon.svg?v=1713889570414" />
                    <span className="ms-3">Courses</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/videolibrary">
                  <a className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-400 group">
                    <img src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/video%20icon.svg?v=1713889623624" />
                    <span className="ms-3">Video Library</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/journal">
                  <a className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-purple-400 group">
                    <img src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/journal%20icon.svg?v=1713889688444" />
                    <span className="ms-3">Journal</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 bottom-5">
            <div className="flex justify-start content-center">
              <span className="flex justify-start content-center">
                <span className="pl-5 mr-2 text-gray-900 rounded-lg dark:text-white group">
                  <Link to="/signup">
                    <img
                      className="ml-3 h-10 w-10 rounded-full"
                      src={profilepic}
                      alt="User profile picture"
                    />
                  </Link>
                </span>
                <span className="text-white text-sm ml-1">
                  {name} <br />
                  <Link to="/signup">view profile</Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-bgdark-50 sm:ml-64">
        {/* Right Board */}

        {/* NavBar */}
        <div className="flex justify-end mb-5">
          <button
            onClick={() => toggleSidebar()}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="md:hidden inline-flex items-center mr-8 md:mr-12 md:my-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <Link to="/signup" className="mr-2 md:ml-5 mt-1.5">
            <a className="rounded-md bg-purple-100 px-1 py-1 md:px-3.5 md:py-2.5 text-xs md:text-sm md:font-semibold text-white shadow-sm hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Upgrade Now
            </a>
          </Link>
          <Link to="/signup" className="mr-2 md:ml-5 mt-1.5">
            <a className="rounded-md bg-neutral-700 px-1 py-1 md:px-3.5 md:py-2.5 text-xs md:text-sm md:font-semibold font-semibold text-white shadow-sm hover:bg-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Discord Setup
            </a>
          </Link>
          {/* Profile dropdown */}
          <Menu as="div" className="relative md:ml-5">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full"
                  src={profilepic}
                  alt="User profile picture"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/user"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/settings"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                      onClick={() => logout(token)}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {Children.map((Child) => (
          <Child.element props={ Child.props }/>
        ))}
      </div>
    </>
  );
}

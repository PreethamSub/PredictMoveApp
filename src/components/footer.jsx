import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-bgdark-50">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="px-5 mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul className="px-5 text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="px-5 mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Plans
              </h2>
              <ul className="px-5 text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/#" className="hover:underline">
                    Spectator
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#" className="hover:underline">
                    Champion
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#" className="hover:underline">
                    Contender
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="px-5 mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact
              </h2>
              <ul className="px-5 text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

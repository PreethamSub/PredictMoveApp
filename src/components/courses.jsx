import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TailwindColor from "@videsk/tailwind-random-color"
import GetChart from "./chart.jsx";

const data = [
  {
    name: "Apprentice",
    courses: [
      {
        name: "Beginners",
        desc: "Start the basics covering risk management and tutorials for the tools you’ll be using. Here you’ll also find the recommended exchanges while learnin...",
        time: "1h 40m",
        color: "bg-amber-900"
      },
      {
        name: "Trading Psychology",
        desc: "Explore the emotional challenges that arises from trading and how to navigate them. Rather than be blindsided by the conflicts when you begin trading, here...",
        time: "1h 40m",
        color: "bg-green-900"
      },
      {
        name: "Basic",
        desc: "Grasp the basics in order to start practicing as a trader. Here you will understand the core principles such as, market structure, support, resistance, h..",
        time: "1h 40m",
        color: "bg-blue-900"
      },
      {
        name: "Entering Trade",
        desc: "Entering trades requires specific conditions that must be met. Here you will study what these conditions are, how to identify them on chart. Once yo...",
        time: "1h 40m",
        color: "bg-red-900"
      },
    ],
  },
  {
    name: "Adept",
    courses: [
      {
        name: "Beginners",
        desc: "Start the basics covering risk management and tutorials for the tools you’ll be using. Here you’ll also find the recommended exchanges while learnin...",
        time: "1h 40m",
        color: "bg-amber-900"
      },
      {
        name: "Trading Psychology",
        desc: "Explore the emotional challenges that arises from trading and how to navigate them. Rather than be blindsided by the conflicts when you begin trading, here...",
        time: "1h 40m",
        color: "bg-green-900"
      },
      {
        name: "Basic",
        desc: "Grasp the basics in order to start practicing as a trader. Here you will understand the core principles such as, market structure, support, resistance, h..",
        time: "1h 40m",
        color: "bg-blue-900"
      },
      {
        name: "Entering Trade",
        desc: "Entering trades requires specific conditions that must be met. Here you will study what these conditions are, how to identify them on chart. Once yo...",
        time: "1h 40m",
        color: "bg-red-900"
      },
    ],
  },
  {
    name: "Expert",
    courses: [
      {
        name: "Beginners",
        desc: "Start the basics covering risk management and tutorials for the tools you’ll be using. Here you’ll also find the recommended exchanges while learnin...",
        time: "1h 40m",
        color: "bg-amber-900"
      },
      {
        name: "Trading Psychology",
        desc: "Explore the emotional challenges that arises from trading and how to navigate them. Rather than be blindsided by the conflicts when you begin trading, here...",
        time: "1h 40m",
        color: "bg-green-900"
      },
      {
        name: "Basic",
        desc: "Grasp the basics in order to start practicing as a trader. Here you will understand the core principles such as, market structure, support, resistance, h..",
        time: "1h 40m",
        color: "bg-blue-900"
      },
      {
        name: "Entering Trade",
        desc: "Entering trades requires specific conditions that must be met. Here you will study what these conditions are, how to identify them on chart. Once yo...",
        time: "1h 40m",
        color: "bg-red-900"
      },
    ],
  },
  {
    name: "Master",
    courses: [
      {
        name: "Beginners",
        desc: "Start the basics covering risk management and tutorials for the tools you’ll be using. Here you’ll also find the recommended exchanges while learnin...",
        time: "1h 40m",
        color: "bg-amber-900"
      },
      {
        name: "Trading Psychology",
        desc: "Explore the emotional challenges that arises from trading and how to navigate them. Rather than be blindsided by the conflicts when you begin trading, here...",
        time: "1h 40m",
        color: "bg-green-900"
      },
      {
        name: "Basic",
        desc: "Grasp the basics in order to start practicing as a trader. Here you will understand the core principles such as, market structure, support, resistance, h..",
        time: "1h 40m",
        color: "bg-blue-900"
      },
      {
        name: "Entering Trade",
        desc: "Entering trades requires specific conditions that must be met. Here you will study what these conditions are, how to identify them on chart. Once yo...",
        time: "1h 40m",
        color: "bg-red-900"
      },
    ],
  },
];

export default function CoursesComp() {
  return (
    <>
      {/* Image */}
      <img
        src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/courses1.png?v=1713893809057"
        alt="Landing Image 1"
        className="object-scale-down h-full w-auto ml-1.5 py-2 md:ml-16 md:py-5"
      />

      {/* Grid */}
      {data.map((category) => (
        <>
          <h1 className="px-2 md:px-10 pt-10 pb-5 text-white font-medium text-lg">
            {category.name}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 ml-5 md:ml-16 gap-4 w-10/12">
            {category.courses.map((course) => (
              <div className="bg-bgdark-100 rounded-md p-2">
                <div className={"rounded-md text-xs md:text-base p-10 text-white ".concat(course.color)}>
                  {course.time}
                </div>
                <h1 className="px-5 pt-5 pb-2 text-sm md:text-base text-white font-medium text-md">
                  {course.name}
                </h1>
                <p className="px-5 pb-2 text-xs text-white md:text-sm">{course.desc}</p>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
}

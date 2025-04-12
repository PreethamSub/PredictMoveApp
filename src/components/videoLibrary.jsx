const data = [
  {
    name: "Apprentice",
    courses: [
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
    ],
  },
  {
    name: "Contender Sessions",
    courses: [
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
    ],
  },
  {
    name: "Champions Stream",
    courses: [
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
    ],
  },
  {
    name: "Live Trading",
    courses: [
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
    ],
  },
  {
    name: "Altcoin Trade",
    courses: [
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
      {
        time: "Nov 20, 2023 · 1h 40m",
        color: "bg-amber-900"
      },
    ],
  },
];

export default function VideoLibComp() {
  return (
    <>
      {/* Image */}
      <img
        src="https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/vid1.png?v=1713896874617"
        alt="Landing Image 1"
        className="object-scale-down h-full w-auto ml md:ml-16 py-5"
      />

      {/* Grid */}
      {data.map((category) => (
        <>
          <h1 className="px-5 md:px-10 pt-10 pb-5 text-white font-medium text-lg">
            {category.name}
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 ml-8 md:ml-16 gap-4 w-10/12">
            {category.courses.map((course) => (
              <div className="bg-bgdark-100 rounded-md p-2">
                <div className={"rounded-md p-8 md:p-10 text-white ".concat(course.color)}>
                  {course.time}
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
}

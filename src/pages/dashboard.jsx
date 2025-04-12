import * as React from "react";
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";

import Board from "../components/board.jsx";
import Sidebar from "../components/sidebar.jsx";

const chartData = {
  labels: ["Completed", "Not Completed"],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["#D0ACFF", "#7C18FF"],
      borderWidth: 1,
      radius: "90%",
    },
  ],
};

const videoData = [
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard2.png?v=1713881367273",
    name: "Altcoin Weekly Update",
    lastOpened: "Opened 5 hours ago - 30.Nov.2024",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard2.png?v=1713881367273",
    name: "Altcoin Weekly Update",
    lastOpened: "Opened 5 hours ago - 30.Nov.2024",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard2.png?v=1713881367273",
    name: "Altcoin Weekly Update",
    lastOpened: "Opened 5 hours ago - 30.Nov.2024",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard2.png?v=1713881367273",
    name: "Altcoin Weekly Update",
    lastOpened: "Opened 5 hours ago - 30.Nov.2024",
  },
];

const videoData2 = [
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard3.png?v=1713882952900",
    name: "Daily Update",
    date: "30.Nov.2024",
    time: "14:23",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard3.png?v=1713882952900",
    name: "Daily Update",
    date: "30.Nov.2024",
    time: "14:23",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard3.png?v=1713882952900",
    name: "Daily Update",
    date: "30.Nov.2024",
    time: "14:23",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard3.png?v=1713882952900",
    name: "Daily Update",
    date: "30.Nov.2024",
    time: "14:23",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard3.png?v=1713882952900",
    name: "Daily Update",
    date: "30.Nov.2024",
    time: "14:23",
  },
  {
    image:
      "https://cdn.glitch.global/b7126c21-3221-4f6b-a7ae-599905ea00aa/dashboard3.png?v=1713882952900",
    name: "Daily Update",
    date: "30.Nov.2024",
    time: "14:23",
  },
];


export default function Dashboard({cart, showCart}) {
  const { token } = useAuth();
  let navigate = useNavigate();

  React.useEffect(() => {
    if(!token){
      navigate("/signin");
    }
  })

  return (
    <>
      <Sidebar
        Children={[
          {
            element: Board,
            props: {
              chartData: chartData,
              videoData: videoData,
              videoData2: videoData2,
            },
          },
        ]}
      />
    </>
  );
}

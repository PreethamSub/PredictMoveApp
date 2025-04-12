import * as React from "react";
import { useAuth } from "../provider/authProvider";
import { useNavigate } from "react-router-dom";

import CoursesComp from "../components/courses.jsx";
import Sidebar from "../components/sidebar.jsx";

const profilepic =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

export default function Courses({ cart, showCart }) {
  const { token } = useAuth();
  let navigate = useNavigate();
  React.useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  });

  return (
    <>
      <Sidebar
        Children={[
          {
            element: CoursesComp,
            props: {},
          },
        ]}
      />
    </>
  );
}

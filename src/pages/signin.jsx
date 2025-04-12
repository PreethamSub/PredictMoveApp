import React from "react";
import Login from "../components/login.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

export default function Signin() {
  const { token } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  });

  return (
    <div className="bg-bgdark-50">
      <Navbar />
      <Login />
      <section className="relative isolate overflow-hidden bg-white dark:bg-bgdark-50 pt-10 pb-24">
          <div className="mx-10 md:mx-auto max-w-2xl lg:max-w-4xl">
            <figure>
              <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>Build your trading strategy</p>
              </blockquote>
              <figcaption className="mt-5 md:mx-20 md:px-10">
                <div className="text-white text-center">
                  This is where the guess work ends and precision begins. With
                  Chart Champions you will reach the level of an exceptional
                  trader, as you learn and trade side by side with the elite
                  players in the Bitcoin market. Give your portfolio the edge
                  over the rest of market, today.
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      <Footer/>
    </div>
  );
}

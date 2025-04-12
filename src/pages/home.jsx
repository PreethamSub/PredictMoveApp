import * as React from "react";
import { useAuth } from "../provider/authProvider";
import { useNavigate, Link } from "react-router-dom";



import Hero from "../components/hero.jsx";
import Testimonials from "../components/testimonials.jsx";
import Plans from "../components/plans.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";


export default function Home({cart, showCart = f => f}) {
  const { token } = useAuth();

  return (
    <>
      <Navbar notifications={2} cart={2} showCart={showCart} loggedin={(token) ? true : false} />
      <Hero />
      <Testimonials />
      <Plans />
      <section className="relative isolate overflow-x-hidden bg-white dark:bg-bgdark-50 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure>
              <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>Build your trading strategy</p>
              </blockquote>
              <figcaption className="my-10 md:mt-10 md:mx-20 px-10">
                <div className="text-white text-center">
                  This is where the guess work ends and precision begins. With
                  Chart Champions you will reach the level of an exceptional
                  trader, as you learn and trade side by side with the elite
                  players in the Bitcoin market. Give your portfolio the edge
                  over the rest of market, today.<br/>
                  <Link to="signup">
                  <button
                    className="mx-auto mt-5 justify-center rounded-lg bg-purple-100 hover:bg-purple-200 px-5 py-2 text-sm font-medium text-white"
                  >
                    Sign up
                  </button>
                    </Link>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      <Footer />
    </>
  );
}

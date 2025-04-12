import React from "react";
import SignupForm from "../components/signupForm.jsx";
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
      <SignupForm />
      <Footer />
      <div className="flex justify-center">
        <p className="w-7/12 text-center text-white text-sm mb-5">
        All trades and ideas from Predict Move website, including setups, are
        given for educational purposes only. Over 95% of traders never win and
        actually lose money. Trading is risky and there are NO guarantees that
        you will actually win the trade. If you follow any setups, you do so at
        your own risk and take full responsibility of your actions. Nothing is
        to be taken as financial advice. The information should not be construed
        as investment / trading advice and is not mean to be a solicitation or
        recommendation to buy, sell or hold any securities, Crypto or coins
        mentioned. All content is for entertainment and education ONLY. No
        financial advice. Past performance is no guarantee of future results.
        Predict Move, it's employees or associates are NOT liable for your
        trading wins or losses. Do your own research. All information provided
        is a general market commentary and does not constitute investment or
        financial advice. None of the information communicated in this video is
        financial advice, we are not financial advisors and this information is
        for entertainment purposes only. We use cookies to ensure that we give
        the best experience on our website. This includes cookies from
        third-party social media websites and advertising. Such third-party
        cookies may track your use of this site. Please read our Privacy Policy
        and Terms of Use
        </p>
      </div>
    </div>
  );
}

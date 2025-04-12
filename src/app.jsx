import React from "react";
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

// Import the page components
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Courses from "./pages/courses.jsx";
import Signin from "./pages/signin.jsx";
import Signup from "./pages/signup.jsx";
import VideoLibrary from "./pages/videoLibrary.jsx";
import Journal from "./pages/journal.jsx";
import AdminDashboard from "./pages/adminDashboard.jsx";
import ScrollToTop from "./components/scrollToTop.jsx"

// Import and apply CSS stylesheet
import "./styles/styles.css";


export default function App() {
  const [dark, toggleDark] = useReducer(dark => !dark, true);
  
  return (
    <div className={(dark) ? "dark" : ""}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/videolibrary" element={<VideoLibrary />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/signup/:plan" element={<Signup />} />
      </Routes>
    </div>
  );
}
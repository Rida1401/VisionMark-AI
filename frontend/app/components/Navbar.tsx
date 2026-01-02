"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    // Check login status
    const loggedIn = localStorage.getItem("isLoggedIn");
    const storedUsername = localStorage.getItem("username");
    const storedUserType = localStorage.getItem("userType");

    setIsLoggedIn(!!loggedIn);
    setUsername(storedUsername || "");
    setUserType(storedUserType || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");

    setIsLoggedIn(false);
    setUsername("");
    setUserType("");

    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
          </div>
          <span className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            VisionMark AI
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {isLoggedIn ? (
            <>
              {/* Logged in navigation */}
              <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>

              {userType === "teacher" && (
                <Link href="/teacher/dashboard" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                  Teacher Panel
                </Link>
              )}

              {userType === "student" && (
                <>
                  <Link href="/student/registrationform" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                    Register Face
                  </Link>
                  <Link href="/student/updatedetails" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                    Update Profile
                  </Link>
                </>
              )}

              <Link href="/student/demo-session" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Demo
              </Link>
              <Link href="/student/view-attendance" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Attendance
              </Link>
            </>
          ) : (
            <>
              {/* Guest navigation */}
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                How It Works
              </a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span className="text-sm text-slate-600 font-medium">
                Hello, {username}
                {userType && (
                  <span
                    className={`ml-2 px-2 py-0.5 text-xs rounded-full font-bold ${
                      userType === "teacher" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {userType}
                  </span>
                )}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors text-sm font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/signin">
                <span className="px-4 py-2 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium cursor-pointer">
                  Sign In
                </span>
              </Link>
              <Link href="/signup">
                <span className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm font-bold cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-slate-600 hover:text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

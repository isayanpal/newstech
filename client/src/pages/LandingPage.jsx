import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="h-[100vh] flex flex-col items-center gap-8 mt-[10rem]">
      <div className="text-6xl font-bold">Welcome to NewsTech</div>
      <div className="text-2xl">
        Get all your technology related news at one place
      </div>
      <div className="mt-5">
        <Link
          to={"/dashboard"}
          className="w-[200px] px-6 py-4 rounded-3xl text-white bg-[#1C76FE]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

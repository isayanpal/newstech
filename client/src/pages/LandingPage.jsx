import React from "react";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div className="h-[100vh] flex flex-col items-center gap-8 mt-[10rem]">
      <div className="text-6xl font-bold">Welcome to NewsTech</div>
      <div className="text-2xl">
        Get all your technology related news at one place
      </div>
      <div className="mt-5">
        <a href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-[180px] px-3 py-6 rounded-full text-white bg-[#1C76FE]"
          >
            Get Started
          </motion.button>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;

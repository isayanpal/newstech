import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="font-semibold text-xl">
        <Link to={"/"}>newsTech</Link>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a
          target="__blank"
          className="flex flex-row gap-2 items-center"
          href="https://github.com/isayanpal/newstech"
        >
          <FaGithub /> <span>Github</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Header;

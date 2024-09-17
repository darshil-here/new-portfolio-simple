import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="absolute top-10">
      <nav className="text-white gap-4 flex justify-center">
        <Link
          to="/"
          className="transition-opacity opacity-80 hover:opacity-100 rounded-md shadow-lg px-2 py-1"
        >
          /home
        </Link>
        <Link
          to="/projects"
          className="transition-opacity opacity-80 hover:opacity-100 rounded-md shadow-lg px-2 py-1"
        >
          /projects
        </Link>
      </nav>
    </div>
  );
};

export default Nav;

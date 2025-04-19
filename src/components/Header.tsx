import React from 'react';
import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="relative border-b py-2 text-center text-lg font-semibold">
      <span>mdownpad</span>

      <a href="https://github.com/roylory/mdownpad" target="_blank" rel="noopener noreferrer">
        <FaGithub className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700" />
      </a>

    </header>

  );
};

export default Header;
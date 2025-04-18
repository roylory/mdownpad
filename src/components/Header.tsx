import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative border-b py-2 text-center text-lg font-semibold">
      <span>mdownpad</span>

      <a
        href="https://github.com/roylory/mdownpad"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
        aria-label="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.6-1.1-1.6-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.3 1.1 2.8.8.1-.7.4-1.1.7-1.3-2.7-.3-5.6-1.4-5.6-6.1 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.4-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.9 1.1 2 1.1 3.2 0 4.7-2.9 5.7-5.6 6 .4.3.8.9.8 1.8v2.7c0 .3.2.7.8.6A12 12 0 0 0 12 0z"
          />
        </svg>
      </a>

    </header>

  );
};

export default Header;
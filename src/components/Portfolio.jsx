import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:-translate-x-32 mt-14 items-center sm:items-start">
      <div className="text-white text-base font-thin flex flex-col gap-3 text-center sm:text-left">
        <a
          target="_blank"
          href="https://currency-converter-react-proj.netlify.app/"
          className="flex items-center gap-2 hover:underline underline-offset-2 font-light justify-center sm:justify-start"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            ></path>
          </svg>
          currency converter
        </a>

        <a
          target="_blank"
          href="https://random-password-gen-react.netlify.app/"
          className="flex items-center gap-2 hover:underline underline-offset-2 font-light justify-center sm:justify-start"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            ></path>
          </svg>
          random password generator
        </a>
        <a
          target="_blank"
          href="https://color-change-react-proj.netlify.app/"
          className="flex items-center gap-2 hover:underline underline-offset-2 font-light justify-center sm:justify-start"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            ></path>
          </svg>
          color changer
        </a>
      </div>
    </div>
  );
};

export default Portfolio;

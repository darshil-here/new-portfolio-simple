import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:-translate-x-40 mt-8 items-center sm:items-start">
      <div className="text-white text-center sm:text-left">
        <div>
          <h1 className="my-5 font-medium tracking-tight text-2xl sm:text-3xl">
            darshil prajapti
          </h1>
          <p className="text-base tracking-tight font-extralight">
            20, dropout. improving
          </p>
        </div>
        <div className="text-sm font-thin mt-12 flex justify-center sm:justify-start gap-3">
          <a
            target="_blank"
            href="https://github.com/darshil-here"
            className="transition-opacity opacity-80 hover:opacity-100 flex items-center gap-1 underline underline-offset-2 font-extralight"
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
            github
          </a>
          <a
            target="_blank"
            href="https://x.com/darshiltwts"
            className="transition-opacity opacity-80 hover:opacity-100 flex items-center gap-1 underline underline-offset-2 font-extralight"
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
            twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

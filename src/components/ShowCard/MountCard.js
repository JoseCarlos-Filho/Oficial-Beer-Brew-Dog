import React, { FC } from "react";
import logo from "../../assets/brewdog.jfif";

const Card = () => {
  return (
    <section className="mt-6 ml-6 mb-4 w-72 border-t-8 px-2 py-1 bg-white dark:bg-gray-800 rounded border-purple-600 border-2">
      <section className="w-full">
        <header className="text-3xl text-center md:mt-5 dark:text-white">
          Beer Brewdog
        </header>
        <header className="w-full md:flex justify-center text-center mb-2">
          <img src={logo} class="h-24 w-24"></img>
        </header>

        <ul className="mt-5 p-1 text-md text-gray-600 dark:text-gray-200">
          <li className="flex mb-1 py-1">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-indigo-800 dark:text-white font-bold"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            &nbsp;Everything in Access
          </li>
          <li className="flex mb-1 py-1">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-indigo-800 dark:text-white font-bold"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            &nbsp;100+ members
          </li>
          <li className="flex mb-1 py-1">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-indigo-800 dark:text-white font-bold"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            &nbsp;All videos
          </li>
          <li className="flex mb-1 py-1">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8 font-bold dark:text-white text-indigo-800"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            &nbsp;1 Job Post for 30 days
          </li>
        </ul>
      </section>
    </section>
  );
};
export default Card;

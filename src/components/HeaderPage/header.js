import React from "react";
import DropDownMenu from "../HeaderPage/logicHeader.tsx";
import { Link } from "react-router-dom";
import CardPage from "../../components/CardPage/card.js";
import LogoBeer from "../../assets/logo_brewdog.png";

const items = [
  { label: "Configuraçoes", link: "/about" },
  { label: "Perfil" },
  { label: "Logout" },
];
const header = () => {
  return (
    <div class="bg-slate-800">
      <nav class="bg-slate-400 dark:bg-gray-800  shadow ">
        <div class="max-w-7xl mx-auto px-8">
          <div class="flex items-center justify-end h-16">
            <div class=" flex items-center">
              <div class="absolute left-10">
                <a class="flex-shrink-0" href="/">
                  <img class="h-10 w-8" src={LogoBeer} alt="" />
                </a>
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <Link
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 ml-10 rounded-md text-sm font-medium"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="ml-4 flex items-center md:ml-6">
                <div class="ml-3 relative">
                  {/* Dropdown inicio */}

                  <DropDownMenu
                    icon={
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        class="text-gray-800"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    }
                    items={items}
                  />
                  {/* Dropdown fim */}
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
      <CardPage />
    </div>
  );
};

export default header;

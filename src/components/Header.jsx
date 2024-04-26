import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div className="bg-gray-300 shadow-lg w-full mx-auto">
      <header className="w-full flex justify-between items-center mx-auto max-w-[1240px] py-3 px-4 md:px-2">
        {/* desktop */}
        <div className="flex items-center w-full justify-between">
          {/* left side */}
          <div className="flex items-center gap-12 justify-start w-full">
            {/* Logo & Menu */}
            <div className="flex items-center justify-between md:w-auto w-full">
              {/* search */}
              <div className="md:hidden z-40">
                <FaSearch
                  size={24}
                  className={open ? "text-white hidden" : "text-black"}
                />
              </div>
              {/* logo */}
              <div className="z-40">
                <h1
                  className={`text-3xl font-bold  uppercase ${
                    open ? "text-white" : "text-black"
                  }`}
                >
                  logo
                </h1>
              </div>
              {/* open & close */}
              <div className="md:hidden z-40">
                {!open ? (
                  <FaBars
                    size={25}
                    onClick={handleNav}
                    className="text-black cursor-pointer"
                  />
                ) : (
                  <FaTimes
                    size={25}
                    onClick={handleNav}
                    className="text-white cursor-pointer"
                  />
                )}
              </div>
            </div>
            {/* navigation */}
            <div className="hidden items-center justify-start md:flex w-full">
              <ul className="flex justify-between gap-8 text-black text-[14px] items-center">
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline underline-offset-8">
                    Contact
                  </a>
                </li>
                <li>
                  <button className="bg-blue-800 text-white py-2 px-8 rounded-md hover:bg-blue-500 ">
                    Sign Up
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* search bar */}
          <div className="w-full md:flex hidden justify-end items-center relative">
            <input
              type="text"
              className="w-1/2 border-gray-400 border rounded-md py-2 px-4"
            />
            <FaSearch className="text-gray-400 absolute right-3" />
          </div>
          {/* shopping part */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                Options
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 "></div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
    </div>
  );
};

export default Header;

import Image from "next/image";

import { FaAnglesRight, FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import logo from "@/assets/ui1/images/logo-main.png";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-3 py-4 xl:px-40 xl:py-8 2xl:px-72">
      <div>
        <Image src={logo} alt="Logo" className="" />
      </div>

      <div className="hidden lg:flex items-center gap-10 text-lg 2xl:text-xl text-slate-600 ">
        <a className="flex items-center gap-1 hover:text-black hover:cursor-pointer duration-500">
          Home <FaAngleDown className="text-lg hover:text" />
        </a>
        <a className="hover:text-black hover:cursor-pointer duration-500">
          About
        </a>
        <a className="flex items-center gap-1 hover:text-black hover:cursor-pointer duration-500">
          Services <FaAngleDown className="text-lg hover:text" />
        </a>
        <a className="flex items-center gap-1 hover:text-black hover:cursor-pointer duration-500">
          Projects <FaAngleDown className="text-lg hover:text" />
        </a>
        <a className="flex items-center gap-1 hover:text-black hover:cursor-pointer duration-500">
          Blog <FaAngleDown className="text-lg hover:text" />
        </a>
        <a className="flex items-center gap-1 hover:text-black hover:cursor-pointer duration-500">
          Pages <FaAngleDown className="text-lg hover:text" />
        </a>
      </div>

      <div className="flex items-center gap-5">
        <button
          type="button"
          className="hidden sm:flex items-center gap-2 text-sm bg-primary border border-primary px-4 py-2 rounded-lg hover:bg-white duration-500"
        >
          Get A Quote <FaAnglesRight className="text-xs" />
        </button>

        <div className="lg:hidden">
          <button
            type="button"
            className="border border-black rounded-md p-1.5"
          >
            <IoMdMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}

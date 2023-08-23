import React, { useEffect, useState } from "react";

// header
import Header from "../utils/Header";

// link for next
import Link from "next/link";

import axios from "axios";

const MainHeader = (props) => {
  const { user, setOpen, setUser } = props; // extracting from props
  
  return (
    <div className="w-full bg-image text-white">
      <Header user={user} setOpen={setOpen} setUser={setUser} />
      <div className="w-full text-center flex items-start lg:items-center xl:items-center justify-center flex-col py-12 bg-pattern-dull pl-5 lg:pl-0 xl:pl-0">
        <Link href="/">
          <a className="text-4xl font-extrabold text-[#ECF2F5] change-span-color-onhover animate__animated animate__fadeInUp">
            Code Mate
            <span className="text-[#ffcf5e] text-5xl duration-500 leading-3">
              .
            </span>
          </a>
        </Link>
        <p className="w-10/12 lg:w-7/12 text-sm text-[#ccc] text-left my-2 animate__animated animate__fadeInUp">
          Introducing Code Mate, the all in one storehouse for developer
          cheatsheets. Code Mate is made up of 300+ curated cheatsheets from
          230+ sources. Filter by categories, or source sort by time or
          popularity, dark mode, add new cheatsheets, features requests, top
          cheatsheet hunter, make the app much more amazing! 🤟
        </p>
      </div>
    </div>
  );
};

export default MainHeader;

import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(!toggle); // Toggle the menu state
  };

  return (
    <>
      
      <div
        className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
       
        <div
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          
        </div>
      </div>

      {/* Header */}
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          {/* Logo */}
          <div className="w-[100px]">
            <img
              src="images/Swiggy-Emblem.png"
              alt="Swiggy Logo"
              className="w-full"
            />
          </div>

          {/* Location and Toggle Icon */}
          <div>
            <span className="font-bold border-b-[3px]">
              Pimpri-Chinchwad
            </span>
            , Maharashtra, India{" "}
            <RxCaretDown
              fontSize={25}
              className="font-bold inline text-[#fc8019] cursor-pointer"
              onClick={showSideMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
}

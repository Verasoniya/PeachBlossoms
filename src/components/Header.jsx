import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-[#FF9494] border-b border-[#FFF5E4] sticky top-0 px-2">
      <div className="w-10/12 justify-between mx-auto md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-4 md:block">
            <a href="#">
              <img src="https://drive.google.com/uc?export=view&id=1vRodaitcfNx9ONx3GtKdsaS7xE2g-GUx" width="235px" />
            </a>
            <div className="md:hidden">
              <button className="p-2 text-[#FFF5E4] rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-24 md:space-y-0 font-gill-sans-mt font-bold text-xl text-[#FFF5E4] self-center">
              <li>
                <Link to="/" className="hover:text-[#BD4B4B]">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/home#product" className="hover:text-[#BD4B4B]">
                  PRODUCT
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#BD4B4B]">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

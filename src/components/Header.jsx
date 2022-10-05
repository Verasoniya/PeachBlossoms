import React from "react";

function Header() {
  return (
    <div className="w-full sticky top-0 flex justify-center bg-[#FF9494] py-4 border-b border-[#FFF5E4]">
      <div className="w-10/12 flex justify-between">
        <div className="w-1/2">
          <a href="#">
            <img src="https://drive.google.com/uc?export=view&id=1vRodaitcfNx9ONx3GtKdsaS7xE2g-GUx" width="235px" />
          </a>
        </div>
        <div className="w-1/2 flex justify-between font-gill-sans-mt font-bold text-xl text-[#FFF5E4] self-center">
          <a href="#" className="hover:text-[#BD4B4B]">
            HOME
          </a>
          <a href="#" className="hover:text-[#BD4B4B]">
            PRODUCT
          </a>
          <a href="#" className="hover:text-[#BD4B4B]">
            ABOUT
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

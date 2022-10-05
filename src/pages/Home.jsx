import React from "react";
import { FaSearch } from "react-icons/fa";
import CardProduct from "../components/CardProduct";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div className="w-full">
        <div className="flex justify-center bg-[#FF9494]">
          <div className="w-10/12 flex flex-col pt-5">
            <input type="text" placeholder={`Search product or brand`} className="self-end placeholder:font-gill-sans-mt placeholder:italic placeholder:p-3 placeholder:text-right placeholder:text-sm placeholder:text-[#BD4B4B]" />
          </div>
        </div>
        <div className="flex justify-center bg-[#FF9494]">
          <div className="w-10/12 flex justify-between py-20">
            <img src="https://drive.google.com/uc?export=view&id=1_Sa5MZiKJmGHBLH4BYRMjymbtOIe1S5n" alt="Index Image" className="w-2/5" />
            <div className="w-1/3 h-auto self-center flex flex-col font-gill-sans-mt text-right text-[#FFF5E4]">
              <p className="font-bold text-5xl">Peach Blossoms</p>
              <p className="text-sm -mt-1">Online Cosmetics list</p>
              <p className="font-medium text-xl mt-12">
                This project is to display all the list of cosmetics that are in the
                <a href="https://makeup-api.herokuapp.com/" target="blank" className="ml-1 border-b border-[#FFF5E4]">
                  Makeup API
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-10/12 flex flex-col justify-center items-center">
            <p className="py-20 font-gill-sans-mt font-bold text-4xl text-[#BD4B4B]">PRODUCTS LIST</p>
            <div className="w-full bg-[#BD4B4B] mb-24">
              <CardProduct />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import swal from "sweetalert";
import CardProduct from "../components/CardProduct";
import Layout from "../components/Layout";

function Home() {
  const [loading, setLoading] = useState(true);
  const [makeup, setMakeup] = useState([]);
  const [offset, setOffset] = useState(13);

  useEffect(() => {
    fetchMakeupList();
  }, []);

  const fetchMakeupList = async () => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((res) => {
        setMakeup(res.data);
        console.log(res.data);
      })
      .catch((err) => swal("Error", err.toString(), "success"))
      .finally(() => setLoading(false));
  };
  if (loading) {
    return (
      <div className="flex justify-center content-center">
        <div className="flex flex-col h-screen justify-center ">
          <img src="https://drive.google.com/uc?export=view&id=1nFuchebMp6cdtV-7zYSuz1ED0eurOP90" alt="Index Image" className="w-48 animate-pulse" />
        </div>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="w-full">
          <div className="flex justify-center bg-[#FF9494]">
            <div className="w-10/12 flex flex-col pt-5">
              <input type="text" placeholder={`Search product or brand`} className="self-end placeholder:font-gill-sans-mt placeholder:italic placeholder:p-3 placeholder:text-right placeholder:text-sm placeholder:text-[#BD4B4B]" />
            </div>
          </div>
          <div className="flex justify-center bg-[#FF9494]">
            <div className="w-10/12 flex flex-col lg:flex-row justify-between pt-10 pb-14">
              <img src="https://drive.google.com/uc?export=view&id=1_Sa5MZiKJmGHBLH4BYRMjymbtOIe1S5n" alt="Index Image" className="w-full lg:w-1/2 mb-6 lg:mb-0" />
              <div className="w-full lg:w-1/3 h-auto self-center flex flex-col font-gill-sans-mt text-right text-[#FFF5E4]">
                <p className="font-bold text-5xl">Peach Blossoms</p>
                <p className="text-sm -mt-1">Online Cosmetics list</p>
                <p className="font-medium text-md lg:text-xl mt-12">
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
              <div className="w-full mb-24 grid grid-flow-row auto-rows-max gap-6 my-8 mx-10 lg:mx-28 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 content-center">
                {makeup.map((item) => (
                  <CardProduct key={item.id} productImage={item.image_link} productName={item.name} productBrand={item.brand} productPrice={item.price} productCategory={item.category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;

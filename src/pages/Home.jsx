import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowDown, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import CardProduct from "../components/CardProduct";
import Layout from "../components/Layout";
import Logo from "../assets/pb-pink-a.png";
import ImageHeader from "../assets/peach-blossoms.png";

function Home() {
  const [loading, setLoading] = useState(true);
  const [makeup, setMakeup] = useState([]);
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(13);

  useEffect(() => {
    fetchMakeupList();
  }, []);

  const fetchMakeupList = async () => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((res) => {
        setMakeup(res.data.slice(0, 12));
        console.log(res.data);
      })
      .catch((err) => Swal.fire("Oops..!", err.toString(), "error"))
      .finally(() => setLoading(false));
  };

  const fetchMoreMakeup = async () => {
    let newPage = page + 12;
    Swal.fire({
      title: "Please Wait !",
      imageUrl: `${Logo}`,
      imageWidth: 100,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      .then((res) => {
        const data = res.data.slice(page, newPage);
        const temp = makeup.slice();
        temp.push(...data);
        setMakeup(temp);
        setPage(newPage);
      })
      .catch((err) => Swal.fire("Oops..!", err.toString(), "error"))
      .finally(() => Swal.close());
  };

  function handleSearch() {
    setLoading(true);
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
      .then((res) => {
        setMakeup(res.data);
        console.log(res);
      })
      .catch((err) => Swal.fire("Oops..!", err.toString(), "error"))
      .finally(() => setLoading(false));
  }

  if (loading) {
    return (
      <div className="flex justify-center content-center">
        <div className="flex flex-col h-screen justify-center ">
          <img src={Logo} alt="Index Image" className="w-48 animate-pulse" />
        </div>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex justify-center bg-[#FF9494]">
            <div className="w-full lg:w-10/12 flex pt-2 justify-center lg:justify-end">
              <input
                type="text"
                placeholder={`Search brand`}
                className="bg-[#FFF5E4] text-right font-gill-sans-mt py-1 pr-3 text-md text-[#FF9494] placeholder:font-gill-sans-mt placeholder:italic placeholder:py-1 placeholder:text-right placeholder:text-md placeholder:text-[#FF9494] focus:outline-none focus:ring-[#BD4B4B] focus:ring-2"
                onChange={(e) => setBrand(e.target.value)}
              />
              <button className="px-3 ml-2 rounded-sm text-xl bg-[#BD4B4B] text-[#FFF5E4] hover:text-[#FF9494] hover:bg-[#FFF5E4] " onClick={(e) => handleSearch(e)}>
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="flex justify-center bg-[#FF9494]">
            <div className="w-10/12 flex flex-col lg:flex-row justify-between pt-10 pb-14">
              <img src={ImageHeader} alt="Image Header" className="w-full lg:w-1/2 mb-6 lg:mb-0" />
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
          <div className="flex justify-center w-full">
            <div className="w-10/12 flex flex-col justify-center items-center">
              <p className="py-20 font-gill-sans-mt font-bold text-4xl text-[#BD4B4B]" id="product">
                PRODUCTS LIST
              </p>
              <div className="w-full mb-24 grid grid-flow-row auto-rows-max gap-6 my-8 mx-10 lg:mx-28 grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 content-center">
                {makeup.map((item) => (
                  <CardProduct key={item.id} productImage={item.image_link} productName={item.name} productBrand={item.brand} productPrice={item.price} productCategory={item.category} />
                ))}
              </div>
            </div>
          </div>
          <div className="w-10/12 flex justify-center pt-0 lg:pt-4 pb-16">
            <hr className="self-center w-full border-b border-[#BD4B4B]" />
            <button className="p-4 lg:p-6 mx-2 lg:mx-6 text-base lg:text-3xl text-[#FFF5E4] bg-[#BD4B4B] rounded-full" onClick={() => fetchMoreMakeup()}>
              <FaArrowDown />
            </button>
            <hr className="self-center w-full border-b border-[#BD4B4B]" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Home;

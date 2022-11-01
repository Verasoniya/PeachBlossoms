import React from "react";

function CardProduct({ productImage, productName, productBrand, productPrice, productCategory }) {
  return (
    <div className="flex flex-col gap-4 mb-8 shadow justify-between cursor-pointer bg-[#fdfdfd]">
      <img
        src={productImage}
        alt={productName}
        className="w-full"
        onError={(event) => {
          event.target.src = "https://via.placeholder.com/500x750?text=No+Image";
          event.onerror = null;
        }}
      />
      <div className="flex flex-col px-1 font-gill-sans-mt">
        <p className="font-semibold text-md text-[#1B1C1E]">{productName}</p>
        <p className="font-semibold text-md text-[#1B1C1E]">from: {productBrand}</p>
        <p className="font-semibold text-md text-[#1B1C1E]">{productPrice} $</p>
        <p className="font-normal text-xs text-[#1B1C1E] pb-2">category: {productCategory}</p>
      </div>
    </div>
  );
}

export default CardProduct;

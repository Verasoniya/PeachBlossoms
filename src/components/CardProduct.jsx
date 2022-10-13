import React from "react";

function CardProduct({ productImage, productName, productBrand, productPrice, productCategory }) {
  return (
    <div className="flex flex-col gap-4 mb-8 shadow justify-between cursor-pointer">
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
        <p className="font-semibold text-md text-neutral-900">{productName}</p>
        <p className="font-semibold text-md text-neutral-900">from: {productBrand}</p>
        <p className="font-semibold text-md text-neutral-900">{productPrice} $</p>
        <p className="font-normal text-xs text-neutral-900">category: {productCategory}</p>
      </div>
    </div>
  );
}

export default CardProduct;

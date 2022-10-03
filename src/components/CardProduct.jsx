import React from "react";

function CardProduct({ productImage, productName, productBrand, productPrice, productTag }) {
  return (
    <div className="flex flex-col gap-4">
      <img src={productImage} alt={productName} className="w-full" />
      <div className="flex flex-col px-1 font-gill-sans-mt">
        <p className="font-semibold text-md text-neutral-900">{productName}</p>
        <p className="font-semibold text-md text-neutral-900">{productBrand}</p>
        <p className="font-semibold text-md text-neutral-900">{productPrice}</p>
        <p className="font-normal text-xs text-neutral-900">{productTag}</p>
      </div>
    </div>
  );
}

export default CardProduct;

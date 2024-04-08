import React from "react";
import ImageSrc from "./ImageSrc";
import Button from "../components/ui/Button";
import { IProduct } from "../interfaces";
import { txtSlice } from "../utils/functions";

interface IProp {
  product: IProduct
}

const ProductCard = ({product}: IProp) => {
  return (
    <div className="max-x-sm md:max-m-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      {/* //! IMAGE */}
          <ImageSrc imageUrl={product.imageURL} alt={"Products Name"} className="rounded-md h-52 w-full lg:object-cover"/>
      {/* //! END IMAGE */}


      <h3>{product.title}</h3>
      <p>{txtSlice(product.description)}</p>

      <div className="flex items-center my-4 space-x-2 ">
        <span className="w-5 h-5 bg-red-500 rounded-full  cursor-pointer" />
        <span className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between m-2">
        <span>250.000$</span>
        <ImageSrc imageUrl="/public/domino-164_6wVEHfI-unsplash.jpg" alt="" className="rounded-full w-10 h-10 object-bottom" />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          EDIT
        </Button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

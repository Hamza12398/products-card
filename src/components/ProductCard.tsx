import React from "react";
import ImageSrc from "./ImageSrc";
import Button from "../components/ui/Button";
import { IProduct } from "../interfaces";
import { txtSlice } from "../utils/functions";
import CircleColor from "./CircleColor";

interface IProp {
  product: IProduct
}


const ProductCard = ({product}: IProp) => {
  const {colors, category, title, description, price, imageURL} = product
  const renderProductsColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
    />
  ));
  return (
    <div className="max-x-sm md:max-m-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      {/* //! IMAGE */}
          <ImageSrc imageUrl={imageURL} alt={"Products Name"} className="rounded-md h-52 w-full lg:object-cover"/>
      {/* //! END IMAGE */}


      <h3>{title}</h3>
      <p>{txtSlice(description)}</p>



      <div className="flex items-center justify-between m-2">
        <span>{price} $</span>
        <ImageSrc imageUrl={imageURL} alt="" className="rounded-full w-10 h-10 object-bottom" />
      </div>

      <div className="flex items-center my-4 space-x-2 ">
            {renderProductsColor}
          </div>

      <div className="flex items-center justify-between space-x-2">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          EDIT
        </Button>
        <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

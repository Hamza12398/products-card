import React from "react";
import Cards from "../Components.UI/Cards";
import { IProduct } from "../interfaces";

interface IProp {
  product: IProduct
}


const ProductCard = ({product}: IProp) => {
  return (
    <div className="border rounded-md p-2 flex">
      <Cards product={product}/>
    </div>
  );
}

export default ProductCard;
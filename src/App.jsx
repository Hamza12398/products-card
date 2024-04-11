import "./App.css";
import ProductCard from "../src/components/ProductCard";
import Modal from "../src/components/ui/Modal";
import { productList } from "./data";
import { useState } from "react";
import Button from "./components/ui/Button";

export default function App() {
  // ! STATES
  const [isOpen, setIsOpen] = useState(true);
  // ! STATES

  function closeModal() {
    setIsOpen(false);
  }

  // function openModal() {
  //   setIsOpen(true);
  // }

  // ! RENDERING
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  // ! RENDERING

  return (
    <main className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2 m-5 xl:grid-cols-4 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Hello Here">
        <div className="flex items-center space-x-2">
          <Button className="bg-red-500 ">Submit</Button>
          <Button className="bg-red-500 ">cancel</Button>
        </div>
      </Modal>
    </main>
  );
}

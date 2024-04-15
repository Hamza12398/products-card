import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputsList, productList } from "./data";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import React from "react";
import { IProduct } from "./interfaces";

export default function App() {
  const defaultProductObj = {
    title: "",
    price: "",
    description: "",
    imageURL: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // ! STATES
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  // ! STATES

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const onsubmitHamdler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(product);
  };
  const onCancel = (): void => {
    console.log("cancelled")
    setProduct(defaultProductObj);
    closeModal();
  }

  // ! RENDERING
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputList = formInputsList.map((input) => (
    // eslint-disable-next-line react/jsx-key
    <div className="flex flex-col mb-2" key={product.id}>
      <label>{input.label}</label>
      <Input
        type="text"
        name={input.name}
        id={input.id}
        value={product[""]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  // ! RENDERING

  return (
    <main className="container">
      <Button className="bg-red-500" onClick={openModal}>
        Add
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2 m-5 xl:grid-cols-4 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="Product Details">
        <form className="space-y-2" onSubmit={onsubmitHamdler}>
          {renderFormInputList}
          <div className="flex items-center space-x-2">
            <Button className="bg-red-500 hover:bg-red-400">Submit</Button>
            <Button
              className="bg-gray-700 hover:bg-gray-600" onClick={onCancel}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

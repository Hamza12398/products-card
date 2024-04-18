import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputsList, productList } from "./data";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import React from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMsg from "./components/ErrorMsg";
import CircleColor from "./components/CircleColor";
import { Diversity1 } from "@mui/icons-material";

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
  const [errors, setErrors] = useState({
    title: "",
    price: "",
    description: "",
    imageURL: "",
  });
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  // ! STATES

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  //! SUBMIT FORM
  const onsubmitHamdler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({ title, price, description, imageURL });
    // console.log(errors);

    //*IF ANY PROPORTY AND ALL PROPORTY HAS A VALUE */
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    console.log(hasErrorMsg);

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    console.log("DONE");
  };
  //! END SUBMIT FORM

  //! CANCEL FORM
  const onCancel = (): void => {
    console.log("cancelled");
    setProduct(defaultProductObj);
    closeModal();
  };

  //! END CANCEL FORM

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
      <ErrorMsg msg={errors[input.name]} />
    </div>
  ));
  const renderProductsColor = colors.map((color) => (
    <CircleColor key={color} color={color} onClick={() => alert(color)}/>
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
          <div className="flex items-center my-4 space-x-2 ">
          {renderProductsColor}
        </div>
          <div className="flex items-center space-x-2">
            <Button className="bg-red-500 hover:bg-red-400">Submit</Button>
            <Button
              className="bg-gray-700 hover:bg-gray-600"
              onClick={onCancel}
            >
              cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

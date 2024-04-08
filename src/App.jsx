import "./App.css";
import ProductCard from "../src/components/ProductCard"
import { productList } from "./data";

function App() {
  const renderProductList = productList.map(product => <ProductCard  key={product.id} product={product}/>)
  return (
    <main className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 p-2 m-5 xl:grid-cols-4 rounded-md">
        {renderProductList}
      </div>
    </main>
  );
}

export default App;

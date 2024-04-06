import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  const redenderProductList = productList.map(product => <ProductCard  key={product.id}/>)
  return (
    <div>
      <div className="border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-2 m-5">
        {redenderProductList}
      </div>
    </div>
  );
}

export default App;

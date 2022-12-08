import { PRODUCTS } from "./data/products";
import { FilterableProductTable } from "./Components/FilterableProductTable";
//Componentes

export default function App() {
  return (
    <div>
      <h1>Thinking in React</h1>
      <FilterableProductTable products={PRODUCTS} />;
    </div>
  );
}

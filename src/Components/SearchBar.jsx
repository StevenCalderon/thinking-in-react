import second from "./FilterableProductTable";
export function SearchBar({
  filterText,
  inStockOnly,
  setFilterText,
  setInStockOnly,
}) {
  function handleInput(inpSearch) {
    setFilterText(inpSearch);
  }
  function handleCheckBox(isCheck) {
    setInStockOnly(isCheck);
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleInput(e.target.value)}
        value={filterText}
      />
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleCheckBox(e.target.checked)}
          checked={inStockOnly}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

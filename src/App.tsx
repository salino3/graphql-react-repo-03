import { useProducts } from "./graphql";
import "./App.css";

function App() {
  const {
    allResult: { data, error, loading },
    createProduct,
  } = useProducts();

  const { product, errorMsg, clearError } = createProduct();

  if (error) {
    return <h1 style={{ color: "red" }}>{error.message}</h1>;
  }

  if (loading) {
    console.log("data", data);
    return (
      <h2 style={{ color: "yellow", fontWeight: "600", fontSize: "48px" }}>
        Loading...
      </h2>
    );
  }

  if (errorMsg) {
    clearError();
  }

  return (
    <div className="App">
      <h1>Hola</h1>
      <details>
        <summary>Home</summary>
        <div>
          <h2>Hola</h2>
        </div>
      </details>
    </div>
  );
}

export default App;

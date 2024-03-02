import { useProducts } from "./graphql";
import "./App.css";

function App() {
  const {
    allResult: { data, error, loading },
    getOneProduct,
    // createProduct,
  } = useProducts();

  // const { product, errorMsg, clearError, clearModal } = createProduct();

  if (error) {
    return <h1 style={{ color: "red" }}>{error.message}</h1>;
  }

  if (loading) {
    return (
      <h2 style={{ color: "yellow", fontWeight: "600", fontSize: "48px" }}>
        Loading...
      </h2>
    );
  }

  // if (errorMsg) {
  //   clearError();
  // }

  console.log("data", data);
  const createNewProduct = () => {
    // product({
    //   variables: {
    //     name: "Tercer producto",
    //     code: "AZZZ23",
    //     price: 20,
    //     quantity: 50,
    //     company: "Jannone",
    //   },
    // });
  };

  return (
    <div className="App">
      <h1>Hola</h1>
      <details>
        <summary>Home</summary>
        <div>
          <h2>Hola</h2>
        </div>
        <div>
          <button onClick={createNewProduct}>Create you product</button>
        </div>
      </details>
    </div>
  );
}

export default App;

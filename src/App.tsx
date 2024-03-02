import { useProducts } from "./graphql";
import { Notify } from "./common";
import "./App.scss";

function App() {
  const {
    allResult: { data, error, loading },
    getOneProduct,
    createProduct,
  } = useProducts();

  const {
    addProduct,
    errorMsg,
    clearError,
    modalMsg,
    clearModal,
    newUserData,
  } = createProduct();

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

  if (errorMsg) {
    clearError();
  }

  if (modalMsg) {
    clearModal();
  }

  const myObj = {
    name: "Tercer producto",
    code: "AZZZ23",
    price: 20,
    quantity: 100,
    company: "Zanulo",
  };

  console.log("data", data);
  const createNewProduct = () => {
    addProduct({
      variables: myObj,
    });
  };

  return (
    <div className="App">
      <Notify color="green" modalMessage={modalMsg} />

      <h1>Hola</h1>
      <details>
        <summary>Home</summary>
        <div>
          <h2>
            Hola - {newUserData && newUserData?.id ? newUserData?.id : "ID"}
          </h2>
        </div>
        <div>
          <button onClick={createNewProduct}>Create your product</button> <br />{" "}
          <br />
          <button onClick={createNewProduct}>Delete a product</button>
        </div>
      </details>
    </div>
  );
}

export default App;

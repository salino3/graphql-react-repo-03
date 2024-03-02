import { useProducts } from "./graphql";
import { Notify } from "./common";
import "./App.scss";

function App() {
  const {
    allResult: { data, error, loading },

    getOneProduct,
    createProduct,
    deleteOneProduct,
    updateDataProduct,
  } = useProducts();

  const {
    addProduct,
    errorMsg,
    clearError,
    modalMsg,
    clearModal,
    newUserData,
  } = createProduct();

  const { currentProduct, getProduct, productLoading } = getOneProduct();

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

  if (productLoading) {
    return (
      <h2 style={{ color: "yellow", fontWeight: "600", fontSize: "48px" }}>
        Product Loading...
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

  const myObjUpdate = {
    id: "7096f0bb-6c10-459d-acab-ef7762fc6618",
    name: "New Product",
    code: "AZZZ23",
    price: 120,
    quantity: 500,
    company: "Wow!",
  };

  const createNewProduct = () => {
    addProduct({
      variables: myObj,
    });
  };

  const hanldeGetProduct = () => {
    getProduct({
      variables: {
        id: "7096f0bb-6c10-459d-acab-ef7762fc6618",
      },
    });
  };
  console.log("currentProduct", currentProduct);
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
          <button
            onClick={() =>
              deleteOneProduct("f1d989a3-1b89-4331-aeee-a7f61bff4dfe")
            }
          >
            Delete a product
          </button>
          <br /> <br />
          <button onClick={() => updateDataProduct(myObjUpdate)}>
            Update a product
          </button>
          <br /> <br />
          <button onClick={hanldeGetProduct}>Get a product</button>
        </div>
      </details>
    </div>
  );
}

export default App;

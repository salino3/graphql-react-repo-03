import { useProducts } from "./graphql";
import "./App.css";

function App() {
  const {
    allResult: { data, error, loading },
  } = useProducts();

  if (loading) console.log("data", data);

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

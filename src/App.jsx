import "./App.css";
import DataCounterV1 from "./Components/DataCounterV1";
import DataCounterV2 from "./Components/DataCounterV2";

function App() {
  return (
    <div className="container mx-auto py-5">
      <DataCounterV1 />
      <DataCounterV2 />
    </div>
  );
}
export default App;

import "./App.css";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";
import MiddleCard from "./components/MiddleCard";

function App() {
  return (
    <>
      <div className="flex w-screen divide-x divide-gray-600">
        <div className="w-1/4 ">
          <LeftCard />
        </div>
        <div className="w-2/4">
          <MiddleCard />
        </div>
        <di className="w-1/4" v>
          <RightCard />
        </di>
      </div>
    </>
  );
}

export default App;

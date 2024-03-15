import "./App.css";
// import LeftCard from "./components/LeftCard";
// import RightCard from "./components/MiddleCard";
import QuoteCard from "./components/QuoteCard";

function App() {
  return (
    <>
      {/* <div className="flex w-screen divide-x divide-gray-600">
        <div className="w-1/4 ">
          <LeftCard />
        </div>
        <div className="w-2/4">
          <RightCard />
        </div>
        <di className="w-1/4" v>
          <LeftCard />
        </di>
    
      </div> */}
      <QuoteCard />
    </>
  );
}

export default App;

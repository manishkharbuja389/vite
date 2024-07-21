import Hello from "./components/Hello";
import Hello1 from "./components/Hello1";
import Cars from "./components/Cars";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const days = ["Sun", "Mon", "Tue"];
  const person = {
    name: "Manish",
    message: "Hello",
    days: ["Sun", "Mon", "Tue"],
  };
  return (
    <div>
      <div className="App">Hello all!</div>
      <div className="App">
        <Hello />
        <Hello name="Man" message="Hello," />
        {/* <Hello1 name="Manish" message="Good night!" days={days} /> */}
        <Hello1 person={person} />
        <Cars />
        <ConditionalComponent />
      </div>
    </div>
  );
}

export default App;

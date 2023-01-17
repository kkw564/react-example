import Main from "./Main";
import "./app.css";
function App() {
  let a = 2;
  return (
    <div className="App">
      <Main />
      <div className={`background ${a === 1 ? "red" : "green"}`}>asdasd</div>
    </div>
  );
}

export default App;

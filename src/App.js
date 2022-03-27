import "./App.scss";
import Puzzle from "./components/puzzle";
import EditorProvider from "./context/puzzleProvider";

function App() {
  return (
    <EditorProvider>
      <div className="App">
        <Puzzle />
      </div>
    </EditorProvider>
  );
}

export default App;

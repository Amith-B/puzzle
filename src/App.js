import "./App.scss";
import Puzzle from "./components/puzzle";
import EditorProvider from "./context/puzzleProvider";
import { useEffect } from "react";
import initialData from "./context/initialData";

function App() {
  useEffect(() => {
    initialData.images.forEach((url) => {
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
  }, []);

  return (
    <EditorProvider>
      <div className="App">
        <Puzzle />
      </div>
    </EditorProvider>
  );
}

export default App;

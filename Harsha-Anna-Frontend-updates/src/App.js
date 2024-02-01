import Header from "./components/Header";
import ImagesContainer from "./components/ImagesContainer";
import IntrestContainer from "./components/IntrestContainer";
import Publications from "./components/Publications";
import { Thesis } from "./components/Thesis";
import { TeachingAssistant } from "./components/TeachingAssistant";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appContainer">
        <div className="appImagesShow">
          <ImagesContainer />
        </div>
        <div className="appContent">
          <IntrestContainer />
          <Publications />
          <Thesis />
          <TeachingAssistant />
        </div>
      </div>
    </div>
  );
}

export default App;

// import './App.css';
import Header from '../src/components/header/Header.js';
import Main from './components/main/Main.js';
import Learning from './components/learning/Learning.js';
import './normalize.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header className="App-header">
        </Header>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>

      </div>
    </HashRouter>
  );
}

export default App;




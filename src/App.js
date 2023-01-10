import "./App.css";
import Bookmarks from "./components/Bookmarks";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Quote />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />}></Route>
      </Routes>
    </div>
  );
}

export default App;

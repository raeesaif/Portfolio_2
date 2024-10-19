import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { useState } from "react";
import Loader from "./component/Loader";

function App() {
  const [showloading, setShowloading] = useState(false);
  return (
    <>
      <BrowserRouter>
        {showloading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

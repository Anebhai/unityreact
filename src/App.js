import "./App.css";
import Navigate from "./Navigate";
import Faraway from "./faraway/Faraway";
import QuoteGenerator from "./quote-generator/Quote-generator";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate />} />
      <Route path="/faraway" element={<Faraway />} />
      <Route path="/quotegenerator" element={<QuoteGenerator />} />
    </Routes>
  );
}

export default App;

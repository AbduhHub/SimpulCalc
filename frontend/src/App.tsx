import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form16Input from "./pages/Form16Input";
import Form16View from "./pages/Form16View";
import TaxResult from "./components/TaxResult";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form16Input />} />
        <Route path="/form16-view" element={<Form16View />} />
        <Route path="/tax-result/:id" element={<TaxResult />} />
      </Routes>
    </Router>
  );
}

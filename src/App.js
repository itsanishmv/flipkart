import Navbar from "./components/Navbar";
import Category from "./components/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="">
      <Navbar />

      <Category />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

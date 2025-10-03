import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { ProductDetail, ProductList } from "./";

export default function ShopApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<ProductList />} />
        <Route path="/shop/:uuid" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

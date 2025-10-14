import { useShopStore } from "@stores/useShopStore";
import { useEffect } from "react";
import ProductListItem from "../ProductListItem/ProductListItem";

export default function ProductList() {
  const { products, fetchProducts } = useShopStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p, i) => (
        <ProductListItem key={p.id} product={p} />
      ))}
    </div>
  );
}

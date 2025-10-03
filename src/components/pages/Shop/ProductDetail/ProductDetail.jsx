import { useShopStore } from '@stores/useShopStore';
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { uuid } = useParams();
  const { products } = useShopStore();

  const product = products.find((p) => p.uuid.toString() === uuid);

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price}</p>
      <button onClick={() => history.back()}>Volver</button>
    </div>
  );
}

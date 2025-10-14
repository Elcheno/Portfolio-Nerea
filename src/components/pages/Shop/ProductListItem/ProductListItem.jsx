import ProductListImage from "./ProductListImage";
import { useNavigate } from "react-router-dom";

const ProductListItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div key={product.id} onClick={() => navigate(`/shop/${product.uuid}`)}>
      <div className="product-image">
        <ProductListImage
          image={product.image}
          descriptions={product.descriptions}
        />
      </div>
      <p>{product.name}</p>
    </div>
  );
};

export default ProductListItem;

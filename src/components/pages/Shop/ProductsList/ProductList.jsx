import { useNavigate } from "react-router-dom";
import { useShopStore } from '@stores/useShopStore';
import { useEffect } from 'react';

export default function ProductList() {
  const { products, fetchProducts } = useShopStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        products.map(product => (
          <div key={product.id} onClick={() => navigate(`/shop/${product.uuid}`)}>
            <div className='product-image'>
              <img src={`/shop/${product.uuid}/1.webp`} />
            </div>
            <p>{product.name}</p>
          </div>
        ))
      }
    </div>
  );
}


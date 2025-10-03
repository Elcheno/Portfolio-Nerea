import { create } from 'zustand';
import { Shop as ShopService } from '@services/shop.js';

export const useShopStore = create((set) => ({
  products: [],
  fetchProducts: () => {
    const shop = new ShopService();
    const products = shop.getProducts();
    set({ products });
  },
}));

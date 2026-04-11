import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type NewCartItem = Omit<CartItem, "quantity">;

type CartState = {
  cart: CartItem[];
  addToCart: (product: NewCartItem) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const exists = state.cart.find((item) => item.id === product.id);

          if (exists) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      decreaseQuantity: (id) =>
        set((state) => {
          const updatedCart = state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0);

          return { cart: updatedCart };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart-storage",
    },
  ),
);

// Cart interfaces — stubs for V2 Stripe integration
// Replace useCart.ts implementation with Zustand when ready

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
}

export interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
}

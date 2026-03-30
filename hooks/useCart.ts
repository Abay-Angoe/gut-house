"use client";

import type { CartStore } from "@/lib/cart";

// V1 stub — all operations are no-ops
// V2: replace body with Zustand store (pnpm add zustand)
// and persist to localStorage via zustand/middleware persist
export function useCart(): CartStore {
  return {
    items: [],
    totalItems: 0,
    addItem: () => {},
    removeItem: () => {},
    updateQuantity: () => {},
    clearCart: () => {},
  };
}

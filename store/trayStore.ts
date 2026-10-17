import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { TrayItem } from '@/types/product';
import { getProductById } from '@/data/products';

interface TrayState {
  items: TrayItem[];
  isOpen: boolean;
  openTray: () => void;
  closeTray: () => void;
  toggleTray: () => void;
  addToTray: (productId: string) => void;
  removeFromTray: (productId: string) => void;
  clearTray: () => void;
  hasItem: (productId: string) => boolean;
}

export const useTrayStore = create<TrayState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openTray: () => set({ isOpen: true }),
      closeTray: () => set({ isOpen: false }),
      toggleTray: () => set((state) => ({ isOpen: !state.isOpen })),

      addToTray: (productId: string) => {
        const currentItems = get().items;
        if (currentItems.some((item) => item.id === productId)) {
          return;
        }

        const product = getProductById(productId);
        if (!product) return;

        const newItem: TrayItem = {
          id: product.id,
          code: product.code,
          name: product.name,
          collection: product.collection,
          dimensions: product.dimensions,
          image: (product.images && product.images[0]) || product.image,
        };

        set({ items: [...currentItems, newItem] });
      },

      removeFromTray: (productId: string) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },

      clearTray: () => set({ items: [] }),

      hasItem: (productId: string) => {
        return get().items.some((item) => item.id === productId);
      },
    }),
    {
      name: 'vittesa_spec_tray',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);

import create from 'zustand';

interface CartItem {
  title: string;
  price: number;
  src: string;
  alt: string;
  quantity: number;
}

interface CartState {
  getTotalPrice: any;
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  increaseQuantity: (title: string) => void;
  decreaseQuantity: (title: string) => void;
  setQuantity: (title: string, quantity: number) => void;
  removeItem: (title: string) => void;
  totalPrice: number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (newItem) => set((state) => {
    const itemIndex = state.items.findIndex(item => item.title === newItem.title);

    if (itemIndex > -1) {
      const updatedItems = state.items.map((item, index) => 
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { items: updatedItems };
    } else {
      return { items: [...state.items, { ...newItem, quantity: 1 }] };
    }
  }),
  increaseQuantity: (title) => set((state) => ({
    items: state.items.map(item =>
      item.title === title ? { ...item, quantity: item.quantity + 1 } : item
    )
  })),
  decreaseQuantity: (title) => set((state) => ({
    items: state.items.map(item =>
      item.title === title ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    ).filter(item => item.quantity > 0)
  })),
  setQuantity: (title, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.title === title ? { ...item, quantity: Math.max(quantity, 0) } : item
    ).filter(item => item.quantity > 0)
  })),
  removeItem: (title) => set((state) => ({
    items: state.items.filter(item => item.title !== title)
  })),
  totalPrice: 0,
  getTotalPrice: () => {
    const total = get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    set({ totalPrice: total });
  }
}));
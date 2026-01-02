import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const product = action.payload;

        const existingItem = state.items.find((item) => item.name === product.name);
  
        if (existingItem) {
          // if exists, increase quantity
          existingItem.quantity += 1;
        } else {
          // if new, add with quantity = 1
          state.items.push({
            ...product,
            quantity: 1,
          });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;

        const itemToUpdate = state.items.find((item) => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

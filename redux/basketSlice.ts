import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { join } from 'path';
import { RootState } from './store';

export interface BasketState {
    items: Device[]
}

const initialState: BasketState = {
 items: [],
}



export const basketSlice = createSlice({
  name: 'basket',
  initialState, 
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Device>) => {
        state.items = [...state.items, action.payload];
      },
      removeFromBasket: (
        state: BasketState,
        action: PayloadAction<{ id: string }>
      ) => {
        const index = state.items.findIndex(
          (item: Device) => item._id === action.payload.id
        );
  
        let newBasket = [...state.items];
  
        if (index >= 0) {
          newBasket.splice(index, 1);
        } else {
          console.log(
            `Cant remove product (id: ${action.payload.id}) as its not in basket!`
          );
        }
  
        state.items = newBasket;
      },
    },
  });
  

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket} = basketSlice.actions


// Selectors to retrieve items in state to use in different components

export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Device) => item._id === id);
};

export const selectBasketTotal = (state: RootState) => {
    state.basket.items.reduce((total: number, item: Device) => (total += item.price), 0)
}

export default basketSlice.reducer
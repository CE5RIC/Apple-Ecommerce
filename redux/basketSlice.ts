import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

export default basketSlice.reducer
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
    
  }
})

// Action creators are generated for each case reducer function
export const { addToBasket} = basketSlice.actions

export default basketSlice.reducer
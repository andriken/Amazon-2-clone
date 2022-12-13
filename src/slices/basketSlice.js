import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {  // reducers are also actions to call to act upon.
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];

    },
    removeFromBasket: (state, action) => {
      console.log(action.payload.id);
      // didn't used filter because It would have removes every Item that Is matched.
      const index = state.items.findIndex(item => item.id === action.payload.id);
      
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove the product id ${action.payload.id} It's not In the basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions; // exporting actions directly to be imported and used.

// Selectors - This is how we pull information from the Global store slice
// export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => ( 
                      state.basket.items.reduce((total, item) => 
                      total + item.price, 0));

// export default basketSlice.reducer; // here we export the reducer of a particular slice.

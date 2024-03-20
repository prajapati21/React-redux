import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./slices/image.slice";

const store = configureStore({
      reducer : {
            imagesSlice
      },
      devTools : true
});
export default store;
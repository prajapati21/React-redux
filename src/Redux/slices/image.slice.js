import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
      name : 'image',
      initialState : [],
      reducers : {
            addImage(state,action){
                  state.push(action.payload);
            },
            removeImage(state,action){
                  state.splice(action.payload,1)
            }
      }
});

export const {addImage,removeImage} = imagesSlice.actions;
export default imagesSlice.reducer;
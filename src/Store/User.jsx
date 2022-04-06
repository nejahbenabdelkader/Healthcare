const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
 type:'doctor',
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedUser :(state,action)=> {
        state.type=action.payload.type;
    }
  }
});


export default userSlice;
export const userReducer=userSlice.reducer;
export const userActions=userSlice.actions;
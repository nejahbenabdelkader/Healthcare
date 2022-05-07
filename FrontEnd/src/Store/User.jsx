const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
 loggedUser :'',
 userData: '',
 isLogged: false
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedUser :(state,action)=> {
        state.loggedUser=action.payload;
    },
    setUserData :(state,action)=> {
      state.userData=action.payload;
  },
  setIsLogged :(state,action)=> {
    state.isLogged=action.payload;
}
  }
});


export default userSlice;
export const userReducer=userSlice.reducer;
export const userActions=userSlice.actions;
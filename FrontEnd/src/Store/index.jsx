import { configureStore } from "@reduxjs/toolkit";
import { specialitiesReducer } from "./Specialities";
import { userReducer } from "./User";

const store = configureStore({
    reducer: { user: userReducer ,specialities:specialitiesReducer },
  });
  export default store;
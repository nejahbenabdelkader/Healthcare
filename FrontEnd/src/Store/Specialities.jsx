const { createSlice } = require("@reduxjs/toolkit");
const initialState =[
    {
      value: "generaliste",
      label: "Généraliste",
    },
    {
      value: "EUR",
      label: "Nutritioniste",
    },
    {
      value: "BTC",
      label: "Densite",
    },
    {
      value: "JPY",
      label: "Cardiologue",
    },
    {
      value: "JPY",
      label: "Dermatologue",
    },
    {
      value: "JPY",
      label: "Pédiatre",
    },
  ];
const specialitiesrSlice = createSlice({
  name: "specialities",
  initialState,
});


export default specialitiesrSlice;
export const specialitiesReducer=specialitiesrSlice.reducer;
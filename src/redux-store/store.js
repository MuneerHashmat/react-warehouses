import { configureStore } from "@reduxjs/toolkit";
import warehousesReducer from "../reducers/warehousesSlice";

export const store = configureStore({
  reducer: {
    warehouse: warehousesReducer,
  },
});

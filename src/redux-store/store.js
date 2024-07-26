import { configureStore } from "@reduxjs/toolkit";
import warehousesReducer from "../reducers/warehousesSlice";

export const store = configureStore({
  reducer: {
    warehouse: warehousesReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  const warehouses = state.warehouse.warehouses;
  if (warehouses.length >= 21) {
    localStorage.setItem("warehouses", JSON.stringify(warehouses));
  }
});

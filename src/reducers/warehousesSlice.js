import data from "../data/warehouses.json";
import { createSlice } from "@reduxjs/toolkit";
const initialWarehouses =
  JSON.parse(localStorage.getItem("warehouses")) || data;
const initialState = {
  warehouses: [...initialWarehouses],
};

export const warehousesSlice = createSlice({
  name: "warehouse",
  initialState,
  reducers: {
    filterItems: (state, action) => {
      let { cityInp, clusterInp, spaceInp } = action.payload;
      let newWarehouses = [...initialState.warehouses];
      if (cityInp) {
        newWarehouses = newWarehouses.filter((item) => {
          return item.city == cityInp;
        });
      }

      if (clusterInp) {
        newWarehouses = newWarehouses.filter((item) => {
          return item.cluster == clusterInp;
        });
      }

      if (spaceInp) {
        newWarehouses = newWarehouses.filter((item) => {
          return (
            item.space_available <= parseInt(spaceInp) &&
            item.space_available >= parseInt(spaceInp) - 500
          );
        });
      }
      state.warehouses = newWarehouses;
    },

    resetItems: (state, action) => {
      state.warehouses = [...action.payload];
    },

    searchItems: (state, action) => {
      state.warehouses = action.payload.data.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(action.payload.searchText.toLowerCase());
      });
    },

    editItem: (state, action) => {
      const storedData = JSON.parse(localStorage.getItem("warehouses")) || data;
      const { id, obj } = action.payload;
      state.warehouses = storedData.map((item) => {
        return item.id == id ? obj : item;
      });
    },
  },
});

export const { filterItems, resetItems, searchItems, editItem } =
  warehousesSlice.actions;

export default warehousesSlice.reducer;

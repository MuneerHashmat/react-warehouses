import { RestartAlt, Search } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterItems,
  resetItems,
  searchItems,
} from "../reducers/warehousesSlice";
import data from "../data/warehouses.json";

const FilterForm = () => {
  const [city, setCity] = useState("");
  const [cluster, setCluster] = useState("");
  const [space, setSpace] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const filterObj = {
      cityInp: city,
      clusterInp: cluster,
      spaceInp: space,
    };

    dispatch(filterItems(filterObj));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const warehouses = JSON.parse(localStorage.getItem("warehouses")) || data;
    const payload = { data: warehouses, searchText: searchInput.toLowerCase() };
    console.log(payload);
    dispatch(searchItems(payload));
  };

  const handleReset = () => {
    const warehouses = JSON.parse(localStorage.getItem("warehouses")) || data;
    dispatch(resetItems(warehouses));
    setCity("");
    setCluster("");
    setSpace("");
    setSearchInput("");
  };
  return (
    <div className="mt-5 px-3 py-5 bg-slate-200 flex flex-col items-center gap-2">
      <h1 className="text-center text-[30px] font-semibold mb-3">
        Search and filter warehouses
      </h1>
      <form
        onSubmit={handleOnSubmit}
        className="flex sm:w-auto w-full sm:flex-row flex-col sm:items-center gap-2 sm:gap-5 w-[85vw rounded-md sm:flex-wrap"
      >
        <div className="flex flex-col">
          <label>City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="outline-none border border-black p-2 rounded-md font-mono"
          >
            <option value="">All</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Cluster</label>
          <select
            value={cluster}
            onChange={(e) => setCluster(e.target.value)}
            className="outline-none border border-black p-2 rounded-md font-mono"
          >
            <option value="">All</option>
            <option value="cluster-a-1">a-1</option>
            <option value="cluster-a-32">a-32</option>
            <option value="cluster-a-21">a-21</option>
            <option value="cluster-b-2">b-2</option>
            <option value="cluster-v-6">v-6</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label>Space Available</label>
          <select
            value={space}
            onChange={(e) => setSpace(e.target.value)}
            className="outline-none border border-black p-2 rounded-md font-mono"
          >
            <option value="">All</option>
            <option value="1000">500-1000</option>
            <option value="1500">1000-1500</option>
            <option value="2000">1500-2000</option>
            <option value="2500">2000-2500</option>
            <option value="3000">2500-3000</option>
          </select>
        </div>

        <div>
          <button className="bg-blue-500 px-2 py-1 text-white rounded-md hover:scale-[1.02] transition-all font-semibold mt-[23px]">
            Submit
          </button>
        </div>
      </form>

      <form
        onSubmit={handleSearch}
        className="flex gap-1 w-full sm:w-[440px] mt-5"
      >
        <input
          type="text"
          placeholder="Search warehouse"
          required
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="outline-none border border-black p-2 rounded-md w-full"
        />
        <button className="bg-blue-500 px-2 py-1 text-white rounded-md hover:scale-[1.02]">
          <Search />
        </button>
      </form>

      <div className="w-full sm:w-[440px] mt-5">
        <button
          onClick={handleReset}
          className="bg-blue-500 px-2 py-1 text-white rounded-md hover:scale-[1.02]"
        >
          <RestartAlt /> Reset All
        </button>
      </div>
    </div>
  );
};

export default FilterForm;

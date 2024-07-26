import { ArrowBack, Edit, Save } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { editItem } from "../reducers/warehousesSlice";

const WarehouseDetails = () => {
  const { id } = useParams();
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  console.log(warehouses);
  const initialState = warehouses.find((item) => item.id == id);
  const [warehouse, setWarehouse] = useState(initialState);
  console.log(warehouse);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const handleOnChange = (property, value) => {
    setWarehouse({ ...warehouse, [property]: value });
  };

  const handleSave = () => {
    const payload = {
      id: id,
      obj: warehouse,
    };
    dispatch(editItem(payload));
    setEdit(false);
  };
  return (
    <div className="my-5">
      <div className="px-20 mb-5">
        <Link to={"/"} className="text-blue-500 text-xl font-semibold">
          <ArrowBack /> Home
        </Link>
      </div>
      <div className="w-[90vw] sm:w-[70vw] md:w-[50vw] mx-auto bg-slate-100 pb-4 rounded-md">
        <div className="overflow-hidden rounded-md flex flex-col gap-7 mb-4">
          <div className="overflow-hidden">
            <img
              src={warehouse.image}
              alt="image"
              className="w-full sm:h-[40vh] h-[30vh]"
            />
          </div>

          <div className="flex justify-end px-10">
            {!edit ? (
              <button
                onClick={() => setEdit(true)}
                className="bg-blue-500 text-white px-2 py-1 hover:scale-[1.02] transition-all rounded-md"
              >
                <Edit /> Edit Details
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-2 py-1 hover:scale-[1.02] transition-all rounded-md"
              >
                <Save /> Save Details
              </button>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-10 py-1 text-xl flex justify-between">
              <p>Name:</p>
              {edit ? (
                <input
                  type="text"
                  value={warehouse.name}
                  onChange={(e) => handleOnChange("name", e.target.value)}
                  className="p-1 text-[15px] rounded-sm outline-none border border-black w-[150px]"
                />
              ) : (
                <div className="w-[150px]">
                  <p>{warehouse.name}</p>
                </div>
              )}
            </div>
            <hr />
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-10 py-1 text-xl flex justify-between">
              <p>Code:</p>
              {edit ? (
                <input
                  type="text"
                  onChange={(e) => handleOnChange("code", e.target.value)}
                  value={warehouse.code}
                  className="text-[15px] p-1 rounded-sm outline-none border border-black w-[150px]"
                />
              ) : (
                <div className="w-[150px]">
                  <p>{warehouse.code}</p>
                </div>
              )}
            </div>
            <hr />
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-10 py-1 text-xl flex justify-between">
              <p>City:</p>
              {edit ? (
                <input
                  type="text"
                  value={warehouse.city}
                  onChange={(e) => handleOnChange("city", e.target.value)}
                  className="text-[15px] p-1 rounded-sm outline-none border border-black w-[150px]"
                />
              ) : (
                <div className="w-[150px]">
                  <p>{warehouse.city}</p>
                </div>
              )}
            </div>
            <hr />
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-10 py-1 text-xl flex justify-between">
              <p>Cluster:</p>
              {edit ? (
                <div className="w-[150px]">
                  <label>cluster-</label>
                  <input
                    type="text"
                    value={warehouse.cluster.slice(8)}
                    onChange={(e) =>
                      handleOnChange("cluster", "cluster-" + e.target.value)
                    }
                    className="text-[15px] w-[50px] p-1 rounded-sm outline-none border border-black"
                  />
                </div>
              ) : (
                <div className="w-[150px]">
                  <p>{warehouse.cluster}</p>
                </div>
              )}
            </div>
            <hr />
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-10 py-1 text-xl flex justify-between">
              <p>Space Available:</p>
              {edit ? (
                <input
                  type="number"
                  value={warehouse.space_available}
                  onChange={(e) =>
                    handleOnChange("space_available", parseInt(e.target.value))
                  }
                  className="text-[15px] p-1 rounded-sm outline-none border border-black w-[150px]"
                />
              ) : (
                <div className="w-[150px]">
                  <p>{warehouse.space_available}</p>
                </div>
              )}
            </div>
            <hr />
          </div>

          <div className="flex flex-col gap-2">
            <div className="px-10 py-1 text-xl flex justify-between">
              <p>Is live?:</p>
              {edit ? (
                <div className="flex gap-1">
                  <input
                    type="checkbox"
                    checked={warehouse.is_live}
                    onChange={() =>
                      handleOnChange("is_live", !warehouse.is_live)
                    }
                    className="w-[17px] p-1 rounded-sm outline-none"
                  />
                  <label>True</label>
                </div>
              ) : (
                <div className="w-[150px]">
                  <p>{warehouse.is_live.toString()}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetails;

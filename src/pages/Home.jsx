import { AdsClick, Apps, LocationOn, Warehouse } from "@mui/icons-material";
import { useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import { Link } from "react-router-dom";

const Home = () => {
  const warehouses = useSelector((state) => state.warehouse.warehouses);
  return (
    <div>
      <FilterForm />

      <div className="flex flex-wrap gap-5 w-[80vw] mx-auto my-10 justify-center">
        {warehouses.map((warehouse) => (
          <div
            key={warehouse.id}
            className="sm:w-[700px] md:w-[600px] xl:w-[390px] w-[95vw] shadow-lg rounded-md overflow-hidden flex flex-col gap-4"
          >
            <div className="overflow-hidden">
              <img
                src={warehouse.image}
                alt="image"
                className="w-full h-[200px] object-cover hover:scale-105 transition-all"
              />
            </div>

            <div className="px-4 pb-4 flex flex-col">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl">{warehouse.name}</h1>
                <Link to={`/warehouse/${warehouse.id}`}>
                  <button className="bg-blue-500 px-2 py-1 text-white rounded-md hover:scale-[1.02] transition-all">
                    <AdsClick />
                    Details
                  </button>
                </Link>
              </div>
              <div className="flex justify-between mt-7">
                <div className="text-gray-500 flex gap-1">
                  <LocationOn /> <p>{warehouse.city.toUpperCase()}</p>
                </div>

                <div className="text-gray-500 flex gap-1">
                  <Warehouse />
                  <p>{warehouse.space_available}</p>
                </div>

                <div className="text-gray-500 flex gap-1">
                  <Apps />
                  <p>{warehouse.cluster.slice(8)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

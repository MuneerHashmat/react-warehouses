import { useParams } from "react-router-dom";

const WarehouseDetails = () => {
  const { id } = useParams();
  return (
    <div className="mt-5">
      <h1 className="text-center text-xl font-semibold">warehouse {id}</h1>
    </div>
  );
};

export default WarehouseDetails;

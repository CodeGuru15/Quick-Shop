import { Link } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import { useState } from "react";
import DeleteProduct from "../components/DeleteProduct";
import Navbar from "../components/Navbar";

const Admin = () => {
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Navbar />
      <h1 className="flex justify-center p-3 font-semibold border sm:text-2xl">
        Admin
      </h1>
      {isDelete ? (
        <div className="flex justify-center">
          <DeleteProduct />
        </div>
      ) : (
        <div className="flex justify-center">
          <AddProduct />
        </div>
      )}

      <div className="flex justify-center py-2">
        {isDelete ? (
          <button
            onClick={() => setIsDelete(false)}
            className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-green-600"
          >
            ADD
          </button>
        ) : (
          <button
            onClick={() => setIsDelete(true)}
            className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-green-600"
          >
            DEL / EDIT
          </button>
        )}
      </div>
      <div className="flex justify-center p-2 ">
        <Link to="/" className="hover:underline">
          Back To Home
        </Link>
      </div>
    </div>
  );
};
export default Admin;

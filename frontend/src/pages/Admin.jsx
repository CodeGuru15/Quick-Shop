import { Link } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import { useState } from "react";
import DeleteProduct from "../components/DeleteProduct";
import Navbar from "../components/Navbar";
import UpdateProduct from "../components/UpdateProduct";

const Admin = () => {
  const [option, setOption] = useState("add");

  return (
    <div className="flex flex-col min-h-screen bg-slate-200">
      <Navbar />
      <h1 className="flex justify-center p-3 font-semibold border sm:text-2xl">
        Admin
      </h1>
      {(() => {
        switch (option) {
          case "delete":
            return (
              <div className="flex justify-center">
                <DeleteProduct />
              </div>
            );
          case "update":
            return (
              <div className="flex justify-center">
                <UpdateProduct />
              </div>
            );
          case "add":
            return (
              <div className="flex justify-center">
                <AddProduct />
              </div>
            );
        }
      })()}
      <div className="flex justify-center py-2">
        {(() => {
          switch (option) {
            case "add":
              return (
                <button
                  onClick={() => setOption("delete")}
                  className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-green-600"
                >
                  DEL / EDIT
                </button>
              );
            case "delete":
              return (
                <button
                  onClick={() => setOption("add")}
                  className="px-2 py-1 text-white bg-blue-500 rounded-md hover:bg-green-600"
                >
                  ADD
                </button>
              );

            default:
              break;
          }
        })()}
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

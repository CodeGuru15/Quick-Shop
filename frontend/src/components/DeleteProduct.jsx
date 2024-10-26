import { useContext, useState } from "react";
import ProductContex from "../context/productContex/ProductContex";
import Loader from "../components/Loader";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import UpdateProductForm from "./UpdateProduct";

const DeleteProduct = () => {
  const {
    products,
    isLoading,
    setIsError,
    setIsSuccess,
    setIsLoading,
    fetchProduct,
    setUpdateProduct,
    isEditProduct,
    setIsEditProduct,
  } = useContext(ProductContex);
  const [isDeleteProduct, setIsDeleteProduct] = useState(false);

  const [delProduct, setDelProduct] = useState(null);

  const handleDelete = (item) => {
    setIsDeleteProduct(true);
    setDelProduct(item);
  };

  const handleConfirmDelete = async () => {
    try {
      setIsError(false);
      setIsDeleteProduct(false);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/delete`,
        delProduct
      );
      console.log(res.data);

      fetchProduct();
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }
  };

  const handleEdit = (item) => {
    setUpdateProduct(item);
    setIsEditProduct(true);
  };

  const handleCancel = () => {
    setIsDeleteProduct(false);
    setIsEditProduct(false);
    setDelProduct(null);
    setUpdateProduct({});
  };

  const DelProduct = ({ product }) => {
    return (
      <>
        <div className="relative w-32 p-3 text-xs bg-white border rounded-md shadow-sm sm:w-40 shadow-slate-300">
          <div className="flex justify-center">
            <img src={product.imgUrl} alt={product.name} className="h-20" />
          </div>
          <div className="">
            <p className="py-1 overflow-hidden font-bold truncate">
              {product.name}
            </p>
            <p className=" text-slate-800">{product.unit}</p>
          </div>
          <div className="flex items-center">
            <span>
              <LiaRupeeSignSolid />
            </span>
            {product.price}
          </div>
          <div className="absolute top-0 right-0 flex flex-col gap-2 p-2">
            <button
              onClick={() => handleDelete(product)}
              className="text-red-500 "
            >
              <MdDelete />
            </button>
            <button
              onClick={() => handleEdit(product)}
              className="text-blue-500 "
            >
              <MdEdit />
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {isDeleteProduct ? (
        <div className="absolute top-0 z-50 flex flex-col items-center justify-center w-full min-h-screen gap-5 text-white bg-black/50">
          <div className="p-2 text-xs w-[90%] max-w-sm font-bold text-center text-red-600 bg-white rounded-sm  sm:text-base">
            {" "}
            Delete {delProduct.name} ?
          </div>
          <div className="flex gap-5 ">
            <button
              onClick={() => handleConfirmDelete()}
              className="px-2 py-1 rounded-sm bg-black/50 hover:underline"
            >
              Confirm
            </button>
            <button
              className="px-2 py-1 rounded-sm bg-black/50 hover:underline"
              onClick={() => handleCancel()}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      {isEditProduct ? (
        <div className="absolute top-0 z-50 flex flex-col items-center justify-center w-full min-h-screen py-5 bg-black/50">
          <UpdateProductForm />
          <div className="p-2 ">
            <button
              className="px-2 py-1 text-white rounded-sm bg-black/50 hover:underline"
              onClick={() => handleCancel()}
            >
              Back
            </button>
          </div>
        </div>
      ) : null}

      <div>
        {isLoading ? // <Loader />
        null : (
          <div className="flex flex-wrap gap-1 p-3 justify-evenly bg-slate-100">
            {products.map((item, index) => {
              return (
                <div key={index}>
                  <DelProduct product={item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteProduct;

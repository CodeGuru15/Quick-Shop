import * as Yup from "Yup";
import { useFormik } from "formik";
import axios from "axios";
import { useContext } from "react";
import ProductContex from "../context/productContex/ProductContex";

const updateProductSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter the product name")
    .min(3, "Minimum 3 characters")
    .max(50, "Max. 50 characters"),
  unit: Yup.string().required("Please enter the unit"),
  price: Yup.number().required("Please enter the price"),
  imgUrl: Yup.string().required("Please enter the image Url"),
  type: Yup.string()
    .required("Please enter the product type")
    .min(3, "Minimum 3 characters")
    .max(50, "Max. 50 characters"),
  category: Yup.string()
    .required("Please enter the category")
    .min(3, "Minimum 3 characters")
    .max(50, "Max. 50 characters"),
  seller: Yup.string()
    .required("Please enter the seller name")
    .min(3, "Minimum 3 characters")
    .max(50, "Max. 50 characters"),
  description: Yup.string()
    .required("Please enter the product description")
    .min(4, "Minimum 4 characters")
    .max(200, "Max. 200 characters"),
});

const UpdateProductForm = () => {
  const {
    isLoading,
    isError,
    isSuccess,
    setIsError,
    setIsSuccess,
    setIsLoading,
    fetchProduct,
    updateProduct,
    setUpdateProduct,
    setIsEditProduct,
  } = useContext(ProductContex);

  const initialValues = {
    id: updateProduct.id,
    name: updateProduct.name,
    unit: updateProduct.unit,
    price: updateProduct.price,
    imgUrl: updateProduct.imgUrl,
    type: updateProduct.type,
    category: updateProduct.category,
    seller: updateProduct.seller,
    description: updateProduct.description,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: updateProductSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        setIsError(false);
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/update`, values);
        fetchProduct();
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        setTimeout(() => {
          setIsSuccess(true);
        }, 1000);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } catch (error) {
        setIsSuccess(false);
        setIsLoading(false);
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 2000);
        console.log(error.message);
      }

      setTimeout(() => {
        setIsEditProduct(false);
      }, 3000);
    },
  });

  return (
    <div className="flex flex-col  max-w-md p-2 w-[90%] shadow-md bg-white rounded-md">
      <form
        onSubmit={formik.handleSubmit}
        className="p-2 space-y-2 text-xs md:text-base"
      >
        {isLoading || isSuccess || isError ? null : (
          <>
            <div className="flex flex-col space-y-1">
              <input
                type="number"
                name="id"
                id="id"
                value={formik.values.id}
                readOnly={true}
                className="hidden "
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-gray-700 sm:text-base">Product name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formik.values.name.replace(/\s+/g, " ")}
                onChange={formik.handleChange}
                className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
              />
              <p className="text-xs text-red-500 sm:text-base">
                {formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : null}
              </p>
            </div>
            <div className="flex flex-col space-y-1 md:flex-row md:justify-between">
              <div className="flex flex-col space-y-1">
                <label className="text-xs text-gray-700 sm:text-base">
                  Unit
                </label>
                <input
                  type="text"
                  name="unit"
                  id="unit"
                  value={formik.values.unit.replace(/\s+/g, " ")}
                  onChange={formik.handleChange}
                  className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
                />
                <p className="text-xs text-red-500 sm:text-base">
                  {formik.errors.unit && formik.touched.unit
                    ? formik.errors.unit
                    : null}
                </p>
              </div>
              <div className="flex flex-col space-y-1">
                <label className="text-xs text-gray-700 sm:text-base">
                  MRP
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  className="p-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder-red-500 border rounded-md outline-blue-400"
                />
                <p className="text-xs text-red-500 sm:text-base">
                  {formik.errors.price && formik.touched.price
                    ? formik.errors.price
                    : null}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-700 sm:text-base">
                Image Url
              </label>
              <input
                type="text"
                name="imgUrl"
                id="imgUrl"
                value={formik.values.imgUrl.replace(/\s+/g, " ")}
                onChange={formik.handleChange}
                className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
              />
              <p className="text-xs text-red-500 sm:text-base">
                {formik.errors.imgUrl && formik.touched.imgUrl
                  ? formik.errors.imgUrl
                  : null}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-700 sm:text-base">Type</label>
              <input
                type="text"
                name="type"
                id="type"
                value={formik.values.type.replace(/\s+/g, " ")}
                onChange={formik.handleChange}
                className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
              />
              <p className="text-xs text-red-500 sm:text-base">
                {formik.errors.type && formik.touched.type
                  ? formik.errors.type
                  : null}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-700 sm:text-base">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={formik.values.category.replace(/\s+/g, " ")}
                onChange={formik.handleChange}
                className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
              />
              <p className="text-xs text-red-500 sm:text-base">
                {formik.errors.category && formik.touched.category
                  ? formik.errors.category
                  : null}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-700 sm:text-base">
                Seller
              </label>
              <input
                type="text"
                name="seller"
                id="seller"
                value={formik.values.seller.replace(/\s+/g, " ")}
                onChange={formik.handleChange}
                className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
              />
              <p className="text-xs text-red-500 sm:text-base">
                {formik.errors.seller && formik.touched.seller
                  ? formik.errors.seller
                  : null}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-xs text-gray-700 sm:text-base">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                value={formik.values.description.replace(/\s+/g, " ")}
                onChange={formik.handleChange}
                className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
              />
              <p className="text-xs text-red-500 sm:text-base">
                {formik.errors.description && formik.touched.description
                  ? formik.errors.description
                  : null}
              </p>
            </div>
          </>
        )}
        {!isLoading ? (
          <>
            {isSuccess ? (
              <button className="w-full py-2 text-xs font-bold text-white bg-green-600 rounded-md sm:text-base">
                Product updated successfully
              </button>
            ) : (
              <button
                type="submit"
                className="w-full py-2 text-xs font-bold text-white bg-blue-500 rounded-md sm:text-base hover:bg-blue-600"
              >
                UPDATE
              </button>
            )}
            {isError ? (
              <button className="w-full py-2 text-xs font-bold text-white bg-red-600 rounded-md sm:text-base">
                Something went wrong
              </button>
            ) : null}
          </>
        ) : (
          <>
            <button
              type="submit"
              className="w-full py-2 text-xs font-bold text-white bg-blue-500 rounded-md sm:text-base hover:bg-blue-600"
            >
              UPDATING
            </button>
          </>
        )}
      </form>
    </div>
  );
};
export default UpdateProductForm;

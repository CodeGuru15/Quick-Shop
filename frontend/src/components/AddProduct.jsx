import * as Yup from "Yup";
import { useFormik } from "formik";
import { LiaRupeeSignSolid } from "react-icons/lia";
import axios from "axios";

const initialValues = {
  name: "",
  unit: "",
  price: "",
  imgUrl: "",
  type: "",
  category: "",
  seller: "",
  description: "",
};

const addProductSchema = Yup.object().shape({
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
    .max(10, "Max. 10 characters"),
  category: Yup.string()
    .required("Please enter the category")
    .min(3, "Minimum 3 characters")
    .max(20, "Max. 20 characters"),
  seller: Yup.string()
    .required("Please enter the seller name")
    .min(3, "Minimum 3 characters")
    .max(50, "Max. 50 characters"),
  description: Yup.string()
    .required("Please enter the product description")
    .min(4, "Minimum 4 characters")
    .max(200, "Max. 200 characters"),
});

const AddProduct = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: addProductSchema,
    onSubmit: async (values) => {
      formik.resetForm();
      const res = await axios.post("http://localhost:1000/addproduct", values);
      console.log(res.data);
      // console.log("Form values", values);
    },
  });
  return (
    <div className="flex flex-col  max-w-md p-2 w-[90%] shadow-md bg-white rounded-md">
      <p className="font-bold text-center">Add product</p>
      <form
        onSubmit={formik.handleSubmit}
        className="p-2 space-y-2 text-xs md:space-y-4 md:text-base"
      >
        <div className="flex flex-col space-y-1">
          <label className="text-gray-700 sm:text-base">Product name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
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
            <label className="text-xs text-gray-700 sm:text-base">Unit</label>
            <input
              type="text"
              name="unit"
              id="unit"
              value={formik.values.unit}
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
            <label className="text-xs text-gray-700 sm:text-base">MRP</label>
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
            value={formik.values.imgUrl}
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
            value={formik.values.type}
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
          <label className="text-xs text-gray-700 sm:text-base">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={formik.values.category}
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
          <label className="text-xs text-gray-700 sm:text-base">Seller</label>
          <input
            type="text"
            name="seller"
            id="seller"
            value={formik.values.seller}
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
            value={formik.values.description}
            onChange={formik.handleChange}
            className="p-2 placeholder-red-500 border rounded-md outline-blue-400"
          />
          <p className="text-xs text-red-500 sm:text-base">
            {formik.errors.description && formik.touched.description
              ? formik.errors.description
              : null}
          </p>
        </div>
        <button
          type="submit"
          className="w-full py-2 text-xs font-bold text-white bg-blue-500 rounded-md sm:text-base hover:bg-blue-600"
        >
          ADD
        </button>
      </form>
    </div>
  );
};
export default AddProduct;

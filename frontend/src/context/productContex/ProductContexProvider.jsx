import { useEffect, useState } from "react";
import axios from "axios";
import ProductContex from "./ProductContex";

const ProductContexProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({});
  const [isEditProduct, setIsEditProduct] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/products`
      );
      setProducts(res.data);
    } catch (error) {
      setIsError(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <ProductContex.Provider
      value={{
        products,
        isLoading,
        isError,
        isSuccess,
        setIsError,
        setIsSuccess,
        setIsLoading,
        fetchProduct,
        updateProduct,
        setUpdateProduct,
        isEditProduct,
        setIsEditProduct,
      }}
    >
      {children}
    </ProductContex.Provider>
  );
};

export default ProductContexProvider;

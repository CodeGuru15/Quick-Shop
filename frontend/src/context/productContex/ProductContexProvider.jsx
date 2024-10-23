import { useEffect, useState } from "react";
import axios from "axios";
import ProductContex from "./ProductContex";

const ProductContexProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      setIsError(false);
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/products`
      );
      setProducts(res.data);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
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
      }}
    >
      {children}
    </ProductContex.Provider>
  );
};

export default ProductContexProvider;

import { useContext } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import ProductContex from "../context/productContex/ProductContex";
import Loader from "../components/Loader";

const Home = () => {
  const { products, isLoading, isError } = useContext(ProductContex);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-1 p-3 bg-slate-100">
          {products.map((item, index) => {
            return (
              <div key={index}>
                <Product
                  imgurl={item.imgUrl}
                  name={item.name}
                  unit={item.unit}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Home;

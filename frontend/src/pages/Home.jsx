import Navbar from "../components/Navbar";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-3 bg-slate-100">
        <Product
          imgurl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ed1da884-8bfa-443c-b400-17e4e506d0bf.jpg?ts=1723375343"
          name="Maggi Masala - 2 Minutes Instant Noodles"
          unit="280 g"
          price="56"
        />
      </div>
    </div>
  );
};
export default Home;

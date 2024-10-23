import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ProductContexProvider from "./context/productContex/ProductContexProvider";
const App = () => {
  return (
    <ProductContexProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </ProductContexProvider>
  );
};

export default App;

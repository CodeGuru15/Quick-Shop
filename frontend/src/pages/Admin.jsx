import AddProduct from "../components/AddProduct";

const Admin = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen p-2 bg-slate-200">
      <h1 className="flex justify-center p-3 text-2xl font-semibold border">
        Admin Page
      </h1>
      <div className="flex justify-center ">
        <AddProduct />
      </div>
    </div>
  );
};
export default Admin;

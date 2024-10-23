import { LiaRupeeSignSolid } from "react-icons/lia";
const Product = ({ imgurl, name, unit, price }) => {
  return (
    <div className="w-32 p-3 text-xs bg-white border rounded-md shadow-sm sm:text-base sm:w-52 shadow-slate-300">
      <div className="">
        <img src={imgurl} alt={name} />
      </div>
      <div className="">
        <p className="py-1 overflow-hidden font-bold truncate sm:h-14 sm:text-wrap">
          {name}
        </p>
        <p className=" text-slate-800">{unit}</p>
      </div>
      <div className="flex gap-2 sm:justify-between">
        <div className="flex items-center font-bold">
          <span>
            <LiaRupeeSignSolid />
          </span>
          {price}
        </div>
        <button className="px-4 py-2 text-base font-semibold text-green-900 border border-green-900 rounded-lg hover:text-white hover:bg-green-600">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Product;

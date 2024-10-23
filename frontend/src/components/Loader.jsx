import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <RotatingLines
        visible={true}
        height="56"
        width="56"
        color="#2b77ba"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-isLoading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;

import { RotatingTriangles } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="flex items-center justify-center w-full mt-20">
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
}

export default Spinner;

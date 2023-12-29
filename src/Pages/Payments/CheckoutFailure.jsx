import { RxCrossCircled } from "react-icons/rx";
import HomeLayout from "../../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function CheckoutFailure() {
  return (
    <HomeLayout>
      <div className="min-h-[90vh] flex items-center justify-center text-white">
        <div className="w-80 h-[26rem] flex flex-col items-center justify-center shadow-[0_0_10px_black] rounded-lg relative ">
          <h1 className="bg-red-500 w-full absolute top-0 text-2xl py-4 font-bold rounded-tr-lg text-center">
            Payment Failed
          </h1>
          <div className="px-4 flex items-center flex-col justify-center space-y-2 gap-4">
            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold">Oop's payment failed!</h2>
              <p className="text-left">Please try again later</p>
            </div>
            <RxCrossCircled className="text-red-500 text-7xl" />
          </div>
          <Link
            to="/checkout"
            className="bg-red-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-xl font-semibold text-center rounded-bl-lg"
          >
            <button>Try again </button>
          </Link>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CheckoutFailure;

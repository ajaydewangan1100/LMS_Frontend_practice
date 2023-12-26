import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRazorpayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/RazorpaySlice";
import { toast } from "react-hot-toast";
import HomeLayout from "../../Layouts/HomeLayout";
import { BiRupee } from "react-icons/bi";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const razorpayKey = useSelector((state) => state?.razorpay?.key);
  const subscription_id = useSelector(
    (state) => state?.razorpay?.subscription_id
  );
  const isPaymentVarified = useSelector(
    (state) => state?.razorpay?.isPaymentVarified
  );
  const userData = useSelector((state) => state?.auth?.data);
  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };

  async function handleSubscription(e) {
    e.preventDefault();
    if (!razorpayKey || !subscription_id) {
      toast.error("Something went wrong, please try again!");
      return;
    }

    const options = {
      key: razorpayKey,
      subscription_id,
      name: "Course-man Pvt. Ltd.",
      description: "Subcription",
      theme: {
        color: " #f37254",
      },
      prefill: { name: userData.fullName, email: userData.email },
      handler: async function (response) {
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_subscription_id =
          response.razorpay_subscription_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;

        toast.success("Payment successfull");

        const responce = await dispatch(verifyUserPayment(paymentDetails));

        responce?.payload?.success
          ? navigate("/checkout/success")
          : navigate("/checkout/fail");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  async function load() {
    await dispatch(getRazorpayId());
    await dispatch(purchaseCourseBundle());
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <HomeLayout>
      <form
        onSubmit={handleSubscription}
        className="min-h-[90vh] flex items-center justify-center text-white"
      >
        <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
          <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tr-xl">
            Subscription bundle
          </h1>
          <div className="px-4 space-y-5 text-center tracking-wide">
            <p className="text-[17px] ">
              This purchase will allow you to access all available courses of
              our plateform for{" "}
              <span className="text-yellow-500 font-bold">
                <br />1 year duration{" "}
              </span>
              All the existing and new lauched courses will be also available
            </p>
            <p className="flex justify-center items-center gap-1 text-2xl font-bold text-yellow-500">
              <BiRupee />
              <span>499</span>only
            </p>
            <div className="text-gray-200">
              <p>100% refund on cancellation</p>
              <p>* terms and conditions applied *</p>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-xl p-3"
            >
              Buy Now
            </button>
          </div>
        </div>
      </form>
    </HomeLayout>
  );
}

export default Checkout;

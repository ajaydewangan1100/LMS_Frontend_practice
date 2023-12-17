import { useNavigate } from "react-router-dom";

function Denied() {
  const navigate = useNavigate();
  return (
    <main className="h-screen w-fulll flex flex-col justify-center items-center bg-[#1A2238] ">
      <h1 className="text-9xl font-extrabold tracking-widest ">403</h1>
      <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
        Access denied
      </div>
      <button onClick={() => navigate(-1)} className="m-2 ">
        <span className="relative block mt-5 rounded-lg px-5 py-2 hover:text-gray-100 text-2xl border text-orange-500 duration-300 ">
          Go back
        </span>
      </button>
    </main>
  );
}

export default Denied;

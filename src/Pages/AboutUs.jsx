import aboutMainImage from "../Assets/images/aboutMainImage.png";
import CorouselSlide from "../Components/CorouselSlide";
import { SLIDEDATA } from "../Constants/QuotesSlideData.js";
import HomeLayout from "../Layouts/HomeLayout.jsx";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500  font-semibold">
              Affordable and quality education
            </h1>
            <p className="text-xl text-gray-200">
              Goal is to provide the affordable and quality education to the
              world, we are providing the plateform for the aspiring teachers
              and students to share their skills, creativity and knowledge to
              each other to empower and contribute in the growth and wellness of
              mankind.
            </p>
          </section>
          <div className="w-1/2">
            <img
              id="test-1"
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0))" }}
              className="drop-shadow-2xl"
              src={aboutMainImage}
              alt="About main image"
            />
          </div>
        </div>

        {/* coruosel div */}
        <div className="carousel w-2/3 m-auto my-10">
          {SLIDEDATA &&
            SLIDEDATA.map((slide) => (
              <CorouselSlide
                {...slide}
                key={slide.slideNumber}
                slideLength={SLIDEDATA.length}
              />
            ))}
          {/* <div id="slide1" className="carousel-item relative w-fit px-20">
            <img
              src={APJ}
              className="w-40 h-40 my-auto border border-gray-700 rounded-full"
            />
            <div className="my-auto mx-5 ml-5 font-semibold text-center">
              <p>
                “To succeed in your mission, you must have single-minded
                devotion to your goal.”
              </p>
              <h1 className="text-xl mt-5 text-yellow-400">APJ Abdul Kalam</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-fit px-20">
            <img
              src={BILLGATES}
              className="w-40 h-40 my-auto rounded-full border border-gray-700"
            />
            <div className="my-auto mx-5 ml-5 font-semibold text-center">
              <p>
                “Don't compare yourself with anyone in this world ... if you do
                so, you are insulting yourself.”
              </p>
              <h1 className="text-xl mt-5 text-yellow-400">Bill Gates</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-fit px-20">
            <img
              src={EINSTEIN}
              className="w-40 h-40 my-auto rounded-full border border-gray-700"
            />
            <div className="my-auto mx-5 ml-5 font-semibold text-center">
              <p>
                “Anyone who has never made a mistake has never tried anything
                new.”
              </p>
              <h1 className="text-xl mt-5 text-yellow-400">EINSTEIN</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-fit px-20">
            <img
              src={NELSONMANDELA}
              className="w-40 h-40 my-auto rounded-full border border-gray-700"
            />
            <div className="my-auto mx-5 ml-5 font-semibold text-center">
              <p>
                “Education is the most powerful weapon which you can use to
                change the world.”
              </p>
              <h1 className="text-xl mt-5 text-yellow-400">Nelson Mandela</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-fit px-20">
            <img
              src={STEVEJOBS}
              className="w-40 h-40 my-auto rounded-full border border-gray-700"
            />
            <div className="my-auto mx-5 ml-5 font-semibold text-center">
              <p>
                “We’re here to put a dent in the universe. Otherwise why else
                even be here?”
              </p>
              <h1 className="text-xl mt-5 text-yellow-400">Steve Jobs</h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;

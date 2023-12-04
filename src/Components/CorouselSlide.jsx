function CorouselSlide({
  image,
  title,
  description,
  slideNumber,
  slideLength,
}) {
  return (
    <div
      id={`slide${slideNumber}`}
      className="carousel-item relative w-fit px-20"
    >
      <img
        src={image}
        className="w-40 h-40 my-auto border border-gray-700 rounded-full"
      />
      <div className="my-auto mx-5 ml-5 font-semibold text-center">
        <p>{description}</p>
        <h1 className="text-xl mt-5 text-yellow-400">{title}</h1>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${slideNumber == 1 ? slideLength : slideNumber - 1}`}
          className="btn btn-circle"
        >
          ❮
        </a>
        <a
          href={`#slide${(slideNumber % slideLength) + 1}`}
          className="btn btn-circle"
        >
          ❯
        </a>
      </div>
    </div>
  );
}

export default CorouselSlide;

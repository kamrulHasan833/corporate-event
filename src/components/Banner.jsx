import { useEffect, useState } from "react";
import { useLoaderDataContext } from "../contexts/dataLoaderContext";
import Slider from "./Slider";
import Middle from "./layout/Middle";

function Banner() {
  const [count, setCount] = useState(0);
  const [content, setContent] = useState({});
  const { services: slides } = useLoaderDataContext();
  useEffect(() => {
    setContent(slides[count]);
  }, [count, content, slides]);

  const onSlideChange = () => {
    if (count < slides.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  return (
    <section>
      <div
        className={` max-w-large mx-auto bg-[url(https://i.ibb.co/3kDGfqT/product-launch-large.png)] bg-cover`}
      >
        <div className="bg-black bg-opacity-30  py-10 md:py-20 ">
          <Middle>
            <div className="grid grid-cols-1  lg:grid-cols-3  gap-6 md:gap-10 lg:items-center ">
              <div className=" col-span-1 row-start-2 lg:row-start-1 text-center lg:text-start">
                <h1 className="text-3xl md:text-5xl  font-bold  text-white mb-3 ">
                  Welcome to
                  <span className="text-primary">
                    {" "}
                    <br className=" block lg:hidden" />{" "}
                    {content && content.title}
                  </span>
                </h1>
                <p className=" text-gray-400 mb-6 md:mb-10">
                  Get the best {content && content.title} managemet service.
                </p>
                <button className="bg-primary text-white text-lg md:text-xl font-bold rounded-full  px-5 md:px-10  py-2 md:py-5 hover:bg-white hover:text-primary ">
                  About Us
                </button>
              </div>

              {/* Slider area */}

              <div className=" row-start-1 lg:col-span-2">
                <Slider
                  grow="flex-grow "
                  slides={slides}
                  onSlideChange={onSlideChange}
                ></Slider>
              </div>
            </div>
          </Middle>
        </div>
      </div>
    </section>
  );
}

export default Banner;

import { useLocation } from "react-router-dom";
import Middle from "./layout/Middle";
import Button from "./shared/Button";
import Rating from "./shared/Rating";
function ServiceDetails() {
  const { state: service } = useLocation();
  const { title, card_details_image, description, price, rating } = service;

  return (
    <section>
      <Middle>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-10 md:mt-20">
          <div className=" basis-1/2">
            <div>
              <img src={card_details_image} alt="" className="w-full block" />
            </div>
          </div>
          <div className=" basis-1/2">
            <h3 className="text-2xl md:text-5xl  font-bold text-title-color  mb-3 md:mb-5">
              {title}
            </h3>
            <p className=" text-gray-600 text-justify mb-6 md:mb-10">
              {description}
            </p>
            <div className="flex justify-between mb-10 md:mb-16">
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                Price: {price}
              </p>
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                Reviews: <Rating rating={rating}></Rating>
              </p>
            </div>
            <div>
              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      </Middle>
    </section>
  );
}

export default ServiceDetails;

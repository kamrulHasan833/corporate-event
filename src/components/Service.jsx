import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "./shared/Button";
import Rating from "./shared/Rating";
function Service({ service }) {
  const { card_image, title, description, price, rating } = service;
  const navigate = useNavigate();
  const handleExploreMore = () => {
    navigate(`/service/${service.id}`, {
      state: service,
    });
  };
  return (
    <div className="rounded-md pb-10 flex flex-col justify-between group ">
      <div>
        <div className=" overflow-hidden">
          <img
            className=" rounded-t-md transition group-hover:scale-105 "
            src={card_image && card_image}
            alt=""
          />
        </div>
        <div className="  p-1 pt-1 ">
          <div className=" ">
            <h3 className="text-lg md:text-xl font-bold text-title-color">
              {title && title}
            </h3>
            <p className=" text-gray-600 mb-4  ">
              {description && description.length > 50
                ? `${description.slice(0, 60)} ...`
                : description}
            </p>
            <div className="flex justify-between mb-10">
              <div className="text-lg font-medium text-gray-600">
                Price: {price}
              </div>
              <div className="text-lg font-medium text-gray-600 text-end">
                {" "}
                Reviews: <Rating rating={rating}></Rating>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button handleExploreMore={handleExploreMore}>Explore More</Button>
      </div>
    </div>
  );
}
Service.propTypes = {
  service: PropTypes.object,
};
export default Service;

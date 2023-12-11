import PropTypes from "prop-types";
import { FaRegCalendarDays } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import MiddleSeondary from "./layout/MiddleSeondary";
import Button from "./shared/Button";
function BlogDetails({ singleBlog }) {
  let { state: blog } = useLocation();
  if (singleBlog) {
    blog = singleBlog;
  }

  const { title, description, event_type, date, image } = blog;
  return (
    <section>
      <MiddleSeondary>
        <div className=" mt-10 md:mt-20 rounded-lg">
          <div className=" basis-1/2" data-aos="fade-up">
            <div className="mb-3 ">
              <img src={image} alt="" className="w-full block rounded-t-lg" />
            </div>
            <div className="flex justify-between mb-2 md:mb-4">
              <p className="text-base md:text-lg font-medium text-gray-600">
                <span className=" font-medium text-gray-500 flex items-center">
                  <FaRegCalendarDays></FaRegCalendarDays>: {date}
                </span>
              </p>
              <p className="text-base md:text-lg font-medium text-gray-600">
                Blog Type: {event_type}
              </p>
            </div>
          </div>
          <div className=" basis-1/2" data-aos="fade-up">
            <h3 className="text-xl md:text-3xl  font-bold text-title-color  mb-2 md:mb-4">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 text-justify mb-6 md:mb-10">
              {description}
            </p>

            <div className="text-center">
              <Link to="/about">
                <Button>About Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </MiddleSeondary>
    </section>
  );
}
BlogDetails.propTypes = {
  singleBlog: PropTypes.object,
};
export default BlogDetails;

import PropTypes from "prop-types";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Middle from "./layout/Middle";
import Button from "./shared/Button";
function BlogDetails({ singleBlog }) {
  let { state: blog } = useLocation();
  if (singleBlog) {
    blog = singleBlog;
  }
  console.log(blog, singleBlog);
  const { title, description, event_type, date, image } = blog;
  return (
    <section>
      <Middle>
        <div className=" mt-10 md:mt-20 rounded-lg">
          <div className=" basis-1/2">
            <div className="mb-6 ">
              <img src={image} alt="" className="w-full block rounded-t-lg" />
            </div>
            <div className="flex justify-between mb-6 md:mb-8">
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                <span className=" font-medium text-gray-500 flex items-center">
                  <FaRegCalendarDays></FaRegCalendarDays>: {date}
                </span>
              </p>
              <p className="text-xl md:text-2xl font-medium text-gray-600">
                Blog Type: {event_type}
              </p>
            </div>
          </div>
          <div className=" basis-1/2">
            <h3 className="text-2xl md:text-5xl  font-bold text-title-color  mb-3 md:mb-5">
              {title}
            </h3>
            <p className=" text-gray-600 text-justify mb-6 md:mb-10">
              {description}
            </p>

            <div className="text-center">
              <Button>About Us</Button>
            </div>
          </div>
        </div>
      </Middle>
    </section>
  );
}
BlogDetails.propTypes = {
  singleBlog: PropTypes.object,
};
export default BlogDetails;

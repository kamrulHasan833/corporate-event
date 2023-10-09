import PropTypes from "prop-types";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function BlogCard({ blog }) {
  const { title, description, date, image, event_type, id } = blog;
  const navigate = useNavigate();
  const handleExploreMore = () => {
    navigate(`/blogs/${id}`, {
      state: blog,
    });
  };

  const isMoreText = description && description.length > 50;
  return (
    <div
      className="rounded-md  flex flex-col justify-between group"
      data-aos="fade-up"
    >
      <div>
        <div className=" overflow-hidden">
          <img
            className=" rounded-t-md transition group-hover:scale-105 "
            src={image && image}
            alt=""
          />
        </div>
        <div className="  p-1 pt-1 ">
          <div className=" ">
            <div className="flex justify-between mb-2">
              <p className=" font-medium text-gray-500 flex items-center">
                <FaRegCalendarDays></FaRegCalendarDays>: {date}
              </p>
              <p className=" font-medium text-gray-500 ">Type: {event_type}</p>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-title-color">
              {title && title}
            </h3>
            <p className=" text-gray-600 mb-4 text-justify ">
              {isMoreText ? description.slice(0, 150) : description}{" "}
              {isMoreText && (
                <button
                  className=" text-primary font-semibold"
                  onClick={handleExploreMore}
                >
                  Read More...
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;

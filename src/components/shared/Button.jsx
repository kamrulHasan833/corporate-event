import PropTypes from "prop-types";

function Button({ children, handleExploreMore }) {
  return (
    <button
      className="bg-primary text-white text-base md:text-lg font-bold rounded-md  px-3 md:px-5  py-2 md:py-3 hover:bg-white hover:text-primary border hover:border-primary "
      onClick={handleExploreMore}
      data-aos="fade-up"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  handleExploreMore: PropTypes.func,
};

export default Button;

import PropTypes from "prop-types";
function SectionHeader({ title, desc, textCenter, maxWidth, mxAuto }) {
  return (
    <div
      className={`mt-10 md:mt-16 lg:mt-24 mb mb-6 lg:mb-10 ${
        textCenter && textCenter
      }`}
      data-aos="fade-up"
    >
      <h3 className="text-2xl md:text-5xl font-bold text-title-color mb-2">
        {title}
      </h3>
      <p
        className={`text-gray-700 ${maxWidth && maxWidth} ${mxAuto && mxAuto}`}
      >
        {desc}
      </p>
    </div>
  );
}
SectionHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  textCenter: PropTypes.string,
  maxWidth: PropTypes.string,
  mxAuto: PropTypes.string,
};
export default SectionHeader;

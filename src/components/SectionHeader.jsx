import PropTypes from "prop-types";
function SectionHeader({ title, desc }) {
  return (
    <div className="mt-10 md:mt-16 lg:mt-24 mb mb-6 lg:mb-10">
      <h3 className="text-2xl md:text-4xl font-bold text-title-color">
        {title}
      </h3>
      <p className=" text-gray-700">{desc}</p>
    </div>
  );
}
SectionHeader.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default SectionHeader;

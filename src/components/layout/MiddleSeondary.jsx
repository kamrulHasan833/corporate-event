import PropTypes from "prop-types";

function MiddleSeondary({ children }) {
  return (
    <div className=" max-w-secondary mx-6 md:mx-10 lg:mx-14 xl:mx-24 2xl:mx-auto">
      {children}
    </div>
  );
}

MiddleSeondary.propTypes = {
  children: PropTypes.node,
};

export default MiddleSeondary;

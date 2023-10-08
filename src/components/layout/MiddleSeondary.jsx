import PropTypes from "prop-types";

function MiddleSeondary({ children }) {
  return <div className=" max-w-secondary mx-6 sm:mx-auto">{children}</div>;
}

MiddleSeondary.propTypes = {
  children: PropTypes.node,
};

export default MiddleSeondary;

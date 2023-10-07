import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavItems({ children, path }) {
  return (
    <li>
      <Link to={path}>{children}</Link>
    </li>
  );
}
NavItems.propTypes = {
  children: PropTypes.node,
  path: PropTypes.node,
};
export default NavItems;

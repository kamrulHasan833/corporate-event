import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function NavItems({ children, path }) {
  return (
    <li>
      <NavLink className=" font-semibold text-title-color text-base " to={path}>
        {children}
      </NavLink>
    </li>
  );
}
NavItems.propTypes = {
  children: PropTypes.node,
  path: PropTypes.node,
};
export default NavItems;

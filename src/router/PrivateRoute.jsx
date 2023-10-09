import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../contexts/authContext";
import useIsUser from "../hooks/useIsUser";

function PrivateRoute({ children }) {
  const { loading, user } = useAuth();
  const location = useLocation();
  const currentUser = useIsUser();
  console.log(currentUser, user);
  const elementToRender = () => {
    let element;
    if (!loading) {
      element = currentUser ? (
        children
      ) : (
        <Navigate state={location} to="/login"></Navigate>
      );
    } else {
      element = <p>Loading........</p>;
    }
    return element;
  };

  return <>{elementToRender()}</>;
}
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
export default PrivateRoute;

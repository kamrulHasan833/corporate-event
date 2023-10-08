import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
const dataLoaderContext = createContext(null);

function ContextProvider({ children }) {
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((data) => data.json())
      .then((services) => setServices(services));
    fetch("blogs.json")
      .then((data) => data.json())
      .then((blogs) => setBlogs(blogs));
  }, []);
  return (
    <dataLoaderContext.Provider value={{ services, blogs }}>
      {children}
    </dataLoaderContext.Provider>
  );
}
ContextProvider.propTypes = {
  children: PropTypes.element,
};
// eslint-disable-next-line react-refresh/only-export-components
export function useLoaderDataContext() {
  const context = useContext(dataLoaderContext);
  return context;
}
export default ContextProvider;

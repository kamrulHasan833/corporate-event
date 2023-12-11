import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
const dataLoaderContext = createContext(null);

function ContextProvider({ children }) {
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const host = location.origin;
    fetch(`${host}/services.json`)
      .then((data) => data.json())
      .then((services) => setServices(services))
      .catch((err) => console.log(err.message));
    fetch([`${host}/blogs.json`])
      .then((data) => data.json())
      .then((blogs) => setBlogs(blogs))
      .catch((err) => console.log(err.message));
    fetch(`${host}/members.json`)
      .then((data) => data.json())
      .then((members) => setMembers(members))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <dataLoaderContext.Provider value={{ services, blogs, members }}>
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

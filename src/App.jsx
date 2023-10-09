import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;

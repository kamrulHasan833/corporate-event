import Headroom from "react-headroom";
import { useLocation } from "react-router-dom";
import Banner from "../Banner";

import Navbar from "./Navbar";
function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <section>
        <Headroom style={{ zIndex: 9999 }}>
          <Navbar></Navbar>
        </Headroom>
      </section>
      {pathname === "/" && <Banner></Banner>}
    </header>
  );
}

export default Header;

import logo from "../../assets/images/logo_primary.png";
import Middle from "../layout/Middle";
import NavItems from "./NavItems";
function Navbar() {
  const items = (
    <>
      <NavItems path="/">Home</NavItems>
      <NavItems path="/about">About</NavItems>
      <NavItems path="/blogs">Blog</NavItems>
    </>
  );

  return (
    <div className="shadow-xl bg-white">
      <Middle>
        <div className="navbar bg-base-100   py-5 md:py-7 px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52"
              >
                {items}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl p-0">
              <img src={logo} alt="Logo" className="w-24 lg:w-28" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul id="nav-menu" className="menu menu-horizontal px-1">
              {items}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn text-primary bg-transparent border-none hover:bg-primary bg-opacity-5 hover:text-white ">
              Login
            </a>
          </div>
        </div>
      </Middle>
    </div>
  );
}

export default Navbar;

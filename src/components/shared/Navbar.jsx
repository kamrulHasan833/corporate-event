import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import useIsUser from "../../hooks/useIsUser";
import Middle from "../layout/Middle";
import NavItems from "./NavItems";
function Navbar() {
  const { logout, user } = useAuth();
  const { displayName, photoURL } = user;

  const currentUser = useIsUser();
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
              <label tabIndex={0} className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-80 gap-1"
              >
                {items}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl p-0">
              <img
                src="https://i.ibb.co/vHgFms4/logo-primary.png"
                alt="Logo"
                className="w-24 lg:w-28"
              />
            </a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul id="nav-menu" className="menu menu-horizontal px-1">
              {items}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex flex-col   items-center gap-1">
              <div className="w-10  rounded-full border">
                <img
                  src={
                    photoURL
                      ? photoURL
                      : "https://i.ibb.co/vV9hYVf/no-avater.jpg"
                  }
                  alt=""
                  className=" rounded-full"
                />
              </div>
              {displayName && (
                <div>
                  <h3 className=" text-xs md:text-sm text-title-color font-medium text-center">
                    {displayName && displayName}
                  </h3>
                </div>
              )}
            </div>

            {currentUser ? (
              <button
                onClick={logout}
                className="btn text-primary bg-transparent border-none hover:bg-primary bg-opacity-5 hover:text-white capitalize"
              >
                <span className=" text-lg  sm:text-xl -mr-1">
                  <BiLogOutCircle></BiLogOutCircle>
                </span>{" "}
                logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn text-primary bg-transparent border-none hover:bg-primary bg-opacity-5 hover:text-white capitalize "
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </Middle>
    </div>
  );
}

export default Navbar;

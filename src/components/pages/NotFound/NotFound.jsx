import { Link } from "react-router-dom";
import Middle from "../../layout/Middle";

function NotFound() {
  return (
    <main>
      <Middle>
        <div className="text-center h-[100vh] flex flex-col justify-center items-center">
          <h3 className="text-3xl md:text-5xl font-bold text-title-color mb-10 md:mb-14">
            {" "}
            <span className="text-red-600"> 404 Error!</span> Page was not
            found.
          </h3>
          <Link
            className="bg-primary text-white text-base md:text-xl font-semibold rounded-md  px-5 md:px-4 py-2 md:py-3 hover:bg-white hover:text-primary border-none"
            to="/"
          >
            Go Home
          </Link>
        </div>
      </Middle>
    </main>
  );
}

export default NotFound;

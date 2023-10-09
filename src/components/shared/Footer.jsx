import { useNavigate } from "react-router-dom";
import { useLoaderDataContext } from "../../contexts/dataLoaderContext";
import Middle from "../layout/Middle";
function Footer() {
  const { services } = useLoaderDataContext();
  const navigate = useNavigate();
  const handleExploreBlogs = (e) => {
    e.preventDefault();
    navigate("/blogs");
  };
  return (
    <footer className="bg-black" data-aos="fade-up">
      <Middle>
        <div className="footer p-10 bg-black text-white mt-10 md:mt-20 justify-between">
          <nav data-aos="fade-up">
            <header className="footer-title text-xl">Services</header>
            {services &&
              services.length > 0 &&
              services.map((service, ind) => (
                <a key={ind} className="link link-hover">
                  {service.title}
                </a>
              ))}
          </nav>
          <nav data-aos="fade-up">
            <header className="footer-title text-xl">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav data-aos="fade-up">
            <header className="footer-title text-xl ">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form data-aos="fade-up">
            <header className="footer-title text-xl">Newsletter</header>

            <button
              className="btn text-primary bg-white text-lg border-none hover:text-white hover:bg-primary capitalize "
              onClick={handleExploreBlogs}
            >
              Explore Blogs
            </button>
          </form>
        </div>
      </Middle>
    </footer>
  );
}

export default Footer;

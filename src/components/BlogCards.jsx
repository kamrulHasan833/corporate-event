import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderDataContext } from "../contexts/dataLoaderContext";
import BlogCard from "./BlogCard";
import SectionHeader from "./SectionHeader";
import Middle from "./layout/Middle";
import Button from "./shared/Button";

function BlogCards() {
  const { blogs } = useLoaderDataContext();

  const [blogsShow, setBlogsShow] = useState([]);
  useEffect(() => {
    let newBlogs = [];
    if (blogs && blogs.length > 4) {
      newBlogs = blogs.slice(0, 4);
    }
    setBlogsShow(newBlogs);
  }, [blogs]);

  return (
    <section>
      <Middle>
        <SectionHeader
          title="Blogs"
          desc="We post some blog on our recently events. Plese feel free to explore. "
        ></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogsShow &&
            blogsShow.length > 0 &&
            blogsShow.map((blog, ind) => (
              <BlogCard key={ind} blog={blog}></BlogCard>
            ))}
        </div>
        {blogsShow && blogsShow.length === 4 && (
          <div className="text-center mt-6 ">
            <Link to="/blogs">
              <Button>See More</Button>
            </Link>
          </div>
        )}
      </Middle>
    </section>
  );
}

export default BlogCards;

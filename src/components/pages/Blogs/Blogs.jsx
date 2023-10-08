import { useLoaderDataContext } from "../../../contexts/dataLoaderContext";
import BlogDetails from "../../BlogDetails";
import SectionHeader from "../../SectionHeader";
function Blogs() {
  const { blogs } = useLoaderDataContext();
  return (
    <main>
      <SectionHeader
        textCenter="text-center"
        title="Latest Blogs"
        desc="Explore all our latest blogs freely."
      ></SectionHeader>
      {blogs &&
        blogs.length > 0 &&
        blogs.map((blog, ind) => (
          <BlogDetails key={ind} singleBlog={blog}></BlogDetails>
        ))}
    </main>
  );
}

export default Blogs;

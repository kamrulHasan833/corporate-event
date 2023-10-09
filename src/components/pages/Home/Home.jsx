import "aos/dist/aos.css";
import BlogCards from "../../BlogCards";
import Services from "../../Services";
import Teams from "../../Teams";

function Home() {
  return (
    <main>
      <Services></Services>
      <Teams></Teams>
      <BlogCards></BlogCards>
    </main>
  );
}

export default Home;

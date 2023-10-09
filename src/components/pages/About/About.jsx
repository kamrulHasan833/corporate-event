import { useLoaderDataContext } from "../../../contexts/dataLoaderContext";
import AboutSingle from "../../AboutSingle";
import SectionHeader from "../../SectionHeader";
import Middle from "../../layout/Middle";

function About() {
  const { members } = useLoaderDataContext();

  return (
    <Middle>
      <SectionHeader
        textCenter="text-center"
        title="About Us"
        desc="We provide corporate event management services. We are the best co-operative and helpfull minded to each other."
        maxWidth="max-w-[500px] md:max-w-[800px] mx-auto"
      ></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members &&
          members.length > 0 &&
          members.map((single, ind) => (
            <AboutSingle key={ind} single={single}></AboutSingle>
          ))}
      </div>
    </Middle>
  );
}

export default About;

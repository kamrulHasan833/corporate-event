import { useLoaderDataContext } from "../contexts/dataLoaderContext";
import SectionHeader from "./SectionHeader";
import Service from "./Service";
import Middle from "./layout/Middle";
function Services() {
  const { services } = useLoaderDataContext();
  return (
    <section>
      <Middle>
        <SectionHeader
          title="Sevices"
          desc="  We provide all types of corporate event mangement services.Choose your
        favourites."
        ></SectionHeader>
        {/* services area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length > 0 &&
            services.map((service, ind) => (
              <Service key={ind} service={service}></Service>
            ))}
        </div>
      </Middle>
    </section>
  );
}

export default Services;

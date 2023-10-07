import Middle from "./layout/Middle";
import SectionHeader from "./SectionHeader";
function Services() {
  return (
    <section>
      <Middle>
        <SectionHeader
          title="Sevices"
          desc="  We provide all types of corporate event mangement services.Choose your
        favourites."
        ></SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3"></div>
      </Middle>
    </section>
  );
}

export default Services;

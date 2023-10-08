import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLoaderDataContext } from "../contexts/dataLoaderContext";
import SectionHeader from "./SectionHeader";
import Team from "./Team";
import Middle from "./layout/Middle";
// Import Swiper styles
import "swiper/css";

function Teams() {
  const { members: teams } = useLoaderDataContext();

  const onSlideChange = () => {
    console.log("slide Change");
  };
  return (
    <section>
      <Middle>
        <SectionHeader
          title="Our Team Members"
          desc="We are cooperated nicely each other."
        ></SectionHeader>
        <Swiper
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={24}
          slidesPerView={3}
          navigation={true}
          onSlideChange={onSlideChange}
          modules={[Navigation, Autoplay]}
          className={`w-full rounded-lg `}
        >
          {teams.length > 0 &&
            teams.map((team, ind) => (
              <SwiperSlide key={ind}>
                <Team team={team}></Team>
              </SwiperSlide>
            ))}
        </Swiper>
      </Middle>
    </section>
  );
}

export default Teams;

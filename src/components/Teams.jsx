import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLoaderDataContext } from "../contexts/dataLoaderContext";
import SectionHeader from "./SectionHeader";
import Team from "./Team";
import Middle from "./layout/Middle";
// Import Swiper styles
import "swiper/css";

function Teams() {
  const { members: teams } = useLoaderDataContext();

  return (
    <section>
      <Middle>
        <SectionHeader
          title="Our Team"
          desc="We are cooperated nicely each other."
        ></SectionHeader>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={24}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper w-full rounded-lg "
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

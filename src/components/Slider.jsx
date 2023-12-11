import PropTypes from "prop-types";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function Slider({ slides, onSlideChange }) {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Autoplay]}
      onSlideChange={onSlideChange}
      className={`w-full rounded-lg`}
    >
      {slides.length > 0 &&
        slides.map((slide, ind) => (
          <SwiperSlide key={ind}>
            <img className="w-full" src={slide.card_details_image} alt="" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

Slider.propTypes = {
  slides: PropTypes.array,
  onSlideChange: PropTypes.func,
  grow: PropTypes.node,
};
export default Slider;

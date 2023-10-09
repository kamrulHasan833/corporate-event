import PropTypes from "prop-types";
import SocialMedia from "./shared/SocialMedia";

function AboutSingle({ single }) {
  const { name, occupation, details, image_url } = single;

  return (
    <div
      className="rounded-md pb-10 flex flex-col justify-between group shadow"
      data-aos="fade-up"
    >
      <div>
        <div className=" overflow-hidden mb-2">
          <img
            className=" rounded-t-md transition group-hover:scale-105 "
            src={image_url && image_url}
            alt=""
          />
        </div>
        <div className="  p-1 pt-1 px-4 ">
          <div className=" ">
            <h3 className="text-lg md:text-xl font-bold text-title-color">
              {name && name}
            </h3>
            <p className=" text-gray-600 mb-1 font-semibold ">
              {occupation && occupation}
            </p>
            <p className=" text-gray-600 mb-6 sm:mb-10  ">
              {details && details}
            </p>
          </div>
          <SocialMedia className="text-3xl sm:text-4xl"></SocialMedia>
        </div>
      </div>
    </div>
  );
}

AboutSingle.propTypes = {
  single: PropTypes.object,
};

export default AboutSingle;

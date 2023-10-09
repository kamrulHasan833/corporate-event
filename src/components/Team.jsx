import PropTypes from "prop-types";
import SocialMedia from "./shared/SocialMedia";

function Team({ team }) {
  const { name, occupation, image_url } = team;
  return (
    <div className="relative " data-aos="fade-up">
      <div>
        <img src={image_url} alt="" />
      </div>
      <div className=" absolute bottom-0 left-0 py-5 bg-black bg-opacity-70 w-full">
        <h3 className="text-center text-lg sm:text-xl font-semibold text-white">
          {name}
        </h3>
        <h4 className="text-center text-sm sm:text-base  text-gray-300 mb-4">
          {occupation}
        </h4>
        <SocialMedia className="text-3xl"></SocialMedia>
      </div>
    </div>
  );
}

Team.propTypes = {
  team: PropTypes.object,
};

export default Team;

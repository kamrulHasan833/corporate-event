import PropTypes from "prop-types";

function Team({ team }) {
  const { name, id, details, occupation, image_url } = team;
  return (
    <div>
      <div>
        <img src={image_url} alt="" />
      </div>
    </div>
  );
}

Team.propTypes = {
  team: PropTypes.object,
};

export default Team;

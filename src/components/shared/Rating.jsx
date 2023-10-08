import PropTypes from "prop-types";

function Rating({ rating }) {
  return (
    <div className="rating rating-md rating-half">
      <input type="radio" name={`rating-${rating}`} className="rating-hidden" />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-1"
        checked
      />
      <input
        type="radio"
        name="rating-10"
        className="bg-orange-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-2"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-1"
      />
      <input
        type="radio"
        name={`rating-${rating}`}
        className="bg-orange-400 mask mask-star-2 mask-half-2"
      />
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;

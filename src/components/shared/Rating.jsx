import PropTypes from "prop-types";
import { useState } from "react";

function Rating({ rating }) {
  const [check, setCheck] = useState(false);
  const handleOnChange = (e) => {
    const value = e.target.checked;
    setCheck(value);
    console.log(value);
  };

  return (
    <div className="rating rating-md rating-half">
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
        checked={check}
        onChange={handleOnChange}
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

import PropTypes from "prop-types";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSquareTwitter,
} from "react-icons/fa6";
function SocialMedia({ className }) {
  return (
    <div className={`flex gap-3  text-primary justify-center ${className}`}>
      <FaFacebook></FaFacebook>
      <FaInstagram></FaInstagram>
      <FaLinkedinIn></FaLinkedinIn>
      <FaSquareTwitter></FaSquareTwitter>
    </div>
  );
}
SocialMedia.propTypes = {
  className: PropTypes.string,
};
export default SocialMedia;

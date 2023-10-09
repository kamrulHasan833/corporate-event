/* eslint-disable no-useless-escape */
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../../contexts/authContext";
import MiddleSeondary from "../../layout/MiddleSeondary";
import LoginButton from "../../shared/LoginButton";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { error: newError, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // login with google
  const googleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast("You have registered sccessfully!");
        // navigate to
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((err) => {
        setError(err);
      });
  };
  const { register } = useAuth();

  // Handle register with with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    const uppercasePassword = /[A-Z]/;
    const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (password.length < 6) {
      setError("Password is less than 6 charecters!");
    } else if (!uppercasePassword.test(password)) {
      setError("Password don't have a capital letter!");
    } else if (!specialCharacterRegex.test(password)) {
      setError("Password  don't have a special character!");
    } else if (newError) {
      setError(newError.code);
    } else {
      // register
      register(name, email, password);
      toast("You have registered sccessfully!");
      // navigate to
      setTimeout(() => navigate("/"), 2000);
    }

    // reset input fields
    target.name.value = "";
    target.email.value = "";
    target.password.value = "";
  };

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section>
      <MiddleSeondary>
        <div className="bg-[url('https://i.ibb.co/hFWtSpX/product-launch-large.jpg')] bg-cover rounded-md mt-10 sm:mt-20 ">
          <div className="bg-black bg-opacity-80 px-6 sm:px-20 py-6 sm:py-20  rounded-md  ">
            <h3 className=" text-3xl md:text-5xl font-semibold text-white text-center ">
              Register Now
            </h3>
            <LoginButton googleLogin={googleLogin}>
              Register with Google
            </LoginButton>
            <form
              onSubmit={handleSubmit}
              className="card-body p-0 pt-5 sm:pt-10 "
            >
              <div className="form-control">
                <label className="label">
                  <span className="text-base sm:text-xl text-white">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base sm:text-xl text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your  email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base sm:text-xl text-white">
                    Password
                  </span>
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your  password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                  <span
                    onClick={handleShow}
                    className=" absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className=" text-title-color text-2xl "></AiOutlineEyeInvisible>
                    ) : (
                      <AiOutlineEye className=" text-title-color text-2xl "></AiOutlineEye>
                    )}
                  </span>
                </div>
              </div>
              <div className="text-center mt-6">
                <input
                  type="submit"
                  className="bg-primary text-white text-base md:text-xl font-semibold rounded-md  px-6 md:px-20  py-2 md:py-3 hover:bg-white hover:text-primary border-none "
                />
              </div>
            </form>
            <div>
              <p
                className={`label-text-alt text-base sm:text-lg text-red-500 text-center pt-5 md:pt-8 ${
                  error ? "block" : "hidden"
                }`}
              >
                {error && error}
              </p>
              <p className="label-text-alt font-normal text-base sm:text-lg text-white text-center pt-5 md:pt-8">
                Already have an account? Please{" "}
                <Link
                  to="/login"
                  className="text-primary  link link-hover font-semibold sm:text-xl"
                >
                  login
                </Link>{" "}
                now.
              </p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </MiddleSeondary>
    </section>
  );
}

export default Register;

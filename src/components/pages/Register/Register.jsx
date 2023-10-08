import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import MiddleSeondary from "../../layout/MiddleSeondary";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    const name = target.name.value;
    const password = target.password.value;
    console.log(email, name, password);
  };
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  console.log(showPassword);
  return (
    <section>
      <MiddleSeondary>
        <div className="bg-[url('https://i.ibb.co/3kDGfqT/product-launch-large.png')] bg-cover px-6 sm:px-20 py-6 sm:py-20 rounded-md mt-10 sm:mt-20">
          <h3 className=" text-3xl md:text-5xl font-semibold text-white text-center ">
            Register Now
          </h3>
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
                <button
                  onClick={handleShow}
                  className=" absolute right-3 top-3"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible className=" text-title-color text-2xl "></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye className=" text-title-color text-2xl "></AiOutlineEye>
                  )}
                </button>
              </div>

              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-base sm:text-lg link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="text-center mt-6">
              <button className="bg-primary text-white text-base md:text-xl font-semibold rounded-md  px-6 md:px-20  py-2 md:py-3 hover:bg-white hover:text-primary border-none ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </MiddleSeondary>
    </section>
  );
}

export default Register;

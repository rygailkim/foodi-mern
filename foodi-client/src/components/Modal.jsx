import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signUpWithGmail, login} = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState("")

  // Redirecting to homepage or specific page
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const onSubmit = (data) => {
    const email = data.email
    const password = data.password
    //console.log(email, password)
    login(email, password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("Login successful")
      document.getElementById("my_modal_5").close()
      navigate(from, {replace: true})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage("Wrong email or password")
    });
  };

  // Google signin
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
        const user = result.user
        alert("Login successful")
        document.getElementById("my_modal_5").close()
        navigate(from, {replace: true})
    }).catch((error) => console.log(error))
  }

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action flex flex-col justify-center mt-0">
            <form
              className="card-body"
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="font-bold text-lg">Please Login!</h3>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                <label className="label mt-1">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Error Text */}
              {
                errorMessage ? <p className="text-red text-xs italic">{errorMessage}</p> : ""
              }

              {/* Login Button */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-green text-white"
                />
              </div>

              <p className="text-center my-2">
                Do not have an account yet?{" "}
                <Link to="/signup" className="underline text-red ml-1">
                  Sign Up Now
                </Link>
              </p>

              <button
                htmlFor="my_modal_5"
                onClick={() =>
                  document.getElementById("my_modal_5").close()
                }
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>

            {/* Social login */}
            <div className="text-center space-x-3 mb-5">
              <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLogin}>
                <FaGoogle />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white">
                <FaFacebook />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.text.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, imgUrl, email, password);
    setError("");

    if (!/^.{6,}$/.test(password)) {
      setError('password mus be 6 character');
      return;
    }

    if (!/.*[A-Z].*/.test(password)) {
      setError('password mus 1 capital letter');
      return;
    }

    if (!/.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=].*/.test(password)) {
      setError('password mus be 1 special character');
    }

    

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("User Registration successfully");
        updateProfile(result.user, { displayName: name, photoURL: imgUrl });
        e.target.reset();
        navigate("/")
      })
      .catch((error) => {
        toast.error(error);
        console.error(error);
       
      });
  };
  return (
    <div className="hero " data-aos="zoom-in-right">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Please Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">img url</span>
                </label>
                <input
                  type="text"
                  placeholder="img url"
                  name="text"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <p className="text-red-500">{error}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-[#02a388] text-white">
                  Register
                </button>
                <ToastContainer />
              </div>
            </form>
            <p>
              Already have an account please?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-semibold underline"
              >
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

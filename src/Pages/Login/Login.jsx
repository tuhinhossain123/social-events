import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { singIn, singInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [emailError, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setEmail();
    setError();

    singIn(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("user Create Successfully");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);

        setError("password don't match");
        setEmail("email don't match");
      });
  };

  const handleWithGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col">
        <div className="">
          <h1 className="text-2xl font-bold">Please Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
                {error && <p className="text-red-500">{error}</p>}
                {emailError && <p>{emailError}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn bg-[#02a388] text-white">Login</button>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleWithGoogle}
                  className="outline-slate-300 mb-4 outline font-semibold btn-sm w-full flex items-center justify-center gap-3"
                >
                  <FcGoogle className="text-xl"></FcGoogle> Continue With Google
                </button>
              </div>
            </form>

            <p>
              New here?{" "}
              <Link
                to="/register"
                className="text-blue-500 font-semibold underline"
              >
                create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

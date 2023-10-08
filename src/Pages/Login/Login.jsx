import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email, password)
    }
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-3">
                  <button className="btn bg-[#02a388] text-white">Login</button>
                </div>
              </form>
              <p>New here? <Link to="/register" className="text-blue-500 font-semibold underline">create an account</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
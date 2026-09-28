import { NavLink } from "react-router";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6"> Login </h2>{" "}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium"> Email </label>{" "}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium"> Password </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-primary text-white rounded-lg hover:opacity-90"
          >
            Login
          </button>
        </form>
        <div className="text-right">
          <NavLink
            to="/register"
            className="text-xs px-3 py-2 text-gray-700 hover:underline rounded-md"
          >
            Create Account
          </NavLink>
        </div>
        <div className="text-right">
          <NavLink
            to="/"
            className="text-xs px-3 py-2 text-gray-700  hover:underline rounded-md"
          >
            Go Back Home
          </NavLink>
        </div>
        <div className="text-center">
          <button className="btn bg-white text-black border-slate-600">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

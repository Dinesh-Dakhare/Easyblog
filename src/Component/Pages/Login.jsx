import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../context/UserContext.jsx";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import {
  faAngleLeft,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      const user = {
        email,
        password,
      };
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/login`,
        user
      );
      if (res.status === 200) {
        toast("Logged In Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUserData(res.data.user);
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" min-h-screen space-y-20 flex-row mx-auto max-md:mt-10 p-4 md:grid md:items-center md:justify-center md:space-y-0">
      <NavLink
        to={"/"}
        className="bg-slate-100 flex p-2 rounded-full justify-center items-center w-[2.5rem]"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
      </NavLink>
      <div className="space-y-12  h-full px-2">
        <form action="" className=" space-y-5 relative">
          <h1 className="text-3xl font-bold pb-4">
            Welcome back! Glad to see you. Again!
          </h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full px-2 py-4 bg-slate-100 rounded-sm placeholder:text-xl text-xl"
            placeholder="Enter your Email"
          />
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="w-full px-2 py-4 bg-slate-100  rounded-sm placeholder:text-xl text-xl "
              placeholder="Enter you password"
            />
            <div
              onClick={(showPasswordHandle) => setShowPassword((prev) => !prev)}
              className="absolute top-51 right-5 md:top-43"
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} className="text-xl" />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} className="text-xl" />
              )}
            </div>
          </div>
        </form>
        <button
          onClick={handleSumit}
          className="w-full bg-slate-900 font-semibold text-white rounded-lg text-2xl p-4"
        >
          Login
        </button>
        <p className="text-center">
          Don't have account?
          <NavLink
            className="text-blue-600 hover:border-b-1 text-lg"
            to={"/signup"}
          >
            {" "}
            Create now
          </NavLink>
        </p>
      </div>
     
    </div>
  );
};

export default Login;

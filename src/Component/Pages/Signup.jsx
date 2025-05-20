import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext } from "react";
import { UserDataContext } from "../../context/UserContext";
import { toast } from "react-toastify";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [user, setUser] = useContext(UserDataContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/user/register`,
        newUser
      );
      if (res.status === 201) {
        toast("User Registered Successfully", {
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
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen max-md:space-y-20 flex-row mx-auto max-md:mt-10 p-4 md:grid md:items-center md:justify-center">
      <NavLink
        to={"/"}
        className="bg-slate-100 flex p-2 rounded-full justify-center items-center w-[2.5rem]"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-2xl" />
      </NavLink>
      <div className="space-y-12  h-full px-2">
        <form action="" className=" space-y-5">
          <h1 className="text-3xl font-bold pb-4">
            Hello! Register to get started
          </h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="w-full px-2 py-4 bg-slate-100 rounded-sm placeholder:text-xl "
            placeholder="Username"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="w-full px-2 py-4 bg-slate-100  rounded-sm placeholder:text-xl"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full px-2 py-4 bg-slate-100  rounded-sm placeholder:text-xl"
            placeholder="Password"
          />
        </form>
        <button
          onClick={handleSubmit}
          className="w-full bg-slate-900 font-semibold text-white rounded-lg text-2xl p-4"
        >
          Register
        </button>
        <p className="text-center">
          Already have an account?
          <NavLink
            className="text-blue-600 hover:border-b-1 text-lg "
            to={"/login"}
          >
            {" "}
            Login now
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;

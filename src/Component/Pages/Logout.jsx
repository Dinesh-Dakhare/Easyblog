import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserLogout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/user/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
           toast("User Logged Out Successfully", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
      alert("");
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);

  return <div></div>;
};
export default UserLogout;

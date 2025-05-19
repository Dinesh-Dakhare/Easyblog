import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "./Component/Header.jsx";
import Main from "./Component/Pages/Main.jsx";
import Blog from "./Component/Pages/Blog.jsx";
import Login from "./Component/Pages/Login.jsx";
import Signup from "./Component/Pages/Signup.jsx";
import { BlogForm } from "./Component/Pages/BlogForm.jsx";
function App() {
  const location = useLocation();
  const hideHeaderOn = ["/login", "/signup"];
  const noPaddingOn = ["/login", "/signup"];
  const applyPadding = !noPaddingOn.includes(location.pathname);
  return (
    <div className={applyPadding ? "p-[2rem] lg:px-45" : ""}>
      {!hideHeaderOn.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogform" element={<BlogForm />} />
      </Routes>
    </div>
  );
}

export default App;

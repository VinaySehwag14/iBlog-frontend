import React from "react";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./component/topbar/TopBar";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Login />} />
        <Route path="setting" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

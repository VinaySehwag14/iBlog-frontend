import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./component/topbar/TopBar";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import PageNotFound from "./component/errorPage/errorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

const App = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Login />} />
        <Route path="settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

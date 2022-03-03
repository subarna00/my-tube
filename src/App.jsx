import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { LoginScreen } from "./screens/loginScreen/LoginScreen";
import { HomeScreen } from "./screens/homeScreens/HomeScreen";
import "./_app.scss";
import { Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleToggleSidebar = () => setSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main">
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/login");
    }
  }, [accessToken, loading, navigate]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

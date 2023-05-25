import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Navbar from "../components/sections/Navbar";
import { AuthProvider } from "./context/AuthContext";

const PrimaryLayout = () => {
  return (
    <>
    <AuthProvider>
    <Navbar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      </AuthProvider>
    </>
  );
};

export default PrimaryLayout;
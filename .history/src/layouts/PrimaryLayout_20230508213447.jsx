import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

const PrimaryLayout = () => {
  return (
    <>
    <AuthProvider>
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
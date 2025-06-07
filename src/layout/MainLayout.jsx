import { Outlet } from "react-router";
// import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-white shadow-md hidden md:block">
        <Sidebar />
      </aside> */}

      {/* Main Content */}
      <div>
        <Header />
        {/* Child routes will be rendered here */}
        <main>
          <Toaster position="top-center" reverseOrder={false} />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;

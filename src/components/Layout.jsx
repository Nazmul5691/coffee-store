import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render child routes */}
      <Footer />
    </div>
  );
}
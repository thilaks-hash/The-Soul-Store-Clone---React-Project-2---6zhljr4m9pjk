import DualNavbar from "./DualNavbar";
import FetchApi from "./FetchApi";
import HeroBanner from "./HeroBanner";
import Slider from "./Slider";
import Main from "./Main";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <DualNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

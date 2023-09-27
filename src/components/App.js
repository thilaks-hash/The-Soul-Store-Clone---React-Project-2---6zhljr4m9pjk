import DualNavbar from "./DualNavbar";
import FetchApi from "./FetchApi";
import HeroBanner from "./HeroBanner";
import Slider from "./Slider";
import Main from "./Main";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <DualNavbar />
      <Outlet />
    </div>
  );
}

export default App;

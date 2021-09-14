import LandingSearch from "./landing-search/landing-search.component";
import "./landing-page.styles.scss";
import logo from "../../assets/images/image2.webp";

const LandingPage = () => (
  <div className="landing-page">
    {/* <img src={logo} alt="img" className="logo" /> */}
    <LandingSearch></LandingSearch>
    <div className="bg-img"></div>
  </div>
);

export default LandingPage;

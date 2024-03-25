import "./HomePageBanner.css";
import Inputs from "./Inputs";
// import { Grid } from "@mui/material";

const HomePageBanner = () => {
  return (
    <div className="mainBannerBus">
      <div className="">
        <div className="homePageBanner">
          <img src="/hero-img.png" alt="home page banner" />

          <div className="bannerTextContainer">
            <h1 className="bannerTitle mb-4">
              Uygun Fiyatlarla <br></br> Unutulmaz Yolculuklar
            </h1>
            <p className="bannerText">
              Yolculuklarınızı kolaylaştırmak için en uygun fiyatlarla otobüs
              biletlerinizi hızlıca alın! <br></br> BiletNoktası ile
              seyahatinizi planlamak hiç bu kadar kolay olmamıştı.
            </p>
          </div>
          <div className="searchInputs">
            <Inputs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;

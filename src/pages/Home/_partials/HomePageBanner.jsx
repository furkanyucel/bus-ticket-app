import "./HomePageBanner.css";
import Inputs from "./Inputs";
import { Grid } from "@mui/material";

const HomePageBanner = () => {
  return (
    <div className="mainBannerBus">
      <div className="">
        <div className="homePageBanner">
          <img src="/hero-img.png" alt="home page banner" />

          <Grid container spacing={2} className="bannerTextContainer">
            <Grid item xs={6}>
              <h1 className="bannerTitle mb-4">
                Uygun Fiyatlarla <br></br> Unutulmaz Yolculuklar
              </h1>
              <p className="bannerText">
                Yolculuklarınızı kolaylaştırmak için en uygun fiyatlarla otobüs
                biletlerinizi hızlıca alın! <br></br> BiletNoktası ile
                seyahatinizi planlamak hiç bu kadar kolay olmamıştı.
              </p>
            </Grid>
            <Grid item xs={6}>
              <Inputs />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;

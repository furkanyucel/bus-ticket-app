import "./HomePageBanner.css";
const HomePageBanner = () => {
  return (
    <div className="mainBannerBus text-white relative z-1">
      <div className="">
        <div className="homePageBanner">
          <img src="/public/hero-img.png" alt="home page banner" />
          <div className="bannerTextContainer">
            <h1 className="bannerTitle mb-4">
              Uygun Fiyatlarla <br></br> Unutulmaz Yolculuklar
            </h1>
            <p className="bannerText">
              Yolculuklarınızı kolaylaştırmak için en uygun fiyatlarla otobüs
              biletlerinizi hızlıca alın! <br></br> BiletNoktası ile seyahatinizi
              planlamak hiç bu kadar kolay olmamıştı.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;

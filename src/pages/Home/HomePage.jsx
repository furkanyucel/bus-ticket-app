import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import HomePageBanner from "./_partials/HomePageBanner";
// import Inputs from "./_partials/Inputs";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <HomePageBanner />
      <Footer />
    </Fragment>
  );
};

export default HomePage;

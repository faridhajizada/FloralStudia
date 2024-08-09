import NewArrival from "./componenets/NewArrival";
import Slider from "./componenets/Slider";
import LocalFlorist from "./componenets/LocalFlorist/LocalFlorist";
import SwiperCards from "./componenets/SliderCards";
import GalleryArea from "./componenets/GalleryArea/GalleryArea";
import WatchOfChoice from "./componenets/WatchOfChoice/WatchOfChoice";

import PopularProducts from "./componenets/PopularProducts";

import ShopMethod from "./componenets/ShopMethod/ShopMethod";
import VideoArea from "./componenets/VideoArea/VideoArea";
import OurTeam from "./componenets/OurTeam/OurTeam";
import OurClients from "./componenets/OurClients/OurClients";
import WhereToFind from "./componenets/WhereToFind/WhereToFind";
import FooterSection from "./componenets/FooterSection/FooterSection";

const ClientHome = () => {
  return (
    <>
      <Slider />
      <LocalFlorist />
      <NewArrival />
      <GalleryArea />
      <SwiperCards />
      <VideoArea />
      <WatchOfChoice />
      <PopularProducts />
      <ShopMethod />
      <OurTeam />
      <OurClients />
      <WhereToFind />
      <FooterSection />
    </>
  );
};

export default ClientHome;

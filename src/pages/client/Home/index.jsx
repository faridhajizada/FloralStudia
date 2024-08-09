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
    </>
  );
};

export default ClientHome;

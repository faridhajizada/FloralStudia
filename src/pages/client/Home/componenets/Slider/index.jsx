import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./index.scss";

const Slider = () => {
  return (
    <div id="Carousel">
      <div className="container-fluid">
        <Carousel className="vh-80">
          <Carousel.Item interval={1500} className="vh-80">
            <Carousel.Caption className="h-100  d-flex flex-column  justify-content-center align-items-center">
              <h3>Fixed-Height Slider</h3>
              <p>Excellent bouquets for you</p>
            </Carousel.Caption>
            <img
              className="d-block img-fluid w-100 carousel-img"
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item className="vh-80" interval={500}>
            <Carousel.Caption className=" h-100 d-flex flex-column  justify-content-center align-items-center">
              <h3>Fixed-Height Slider</h3>
              <p>Excellent bouquets for you</p>
            </Carousel.Caption>
            <img
              className="d-block img-fluid w-100 carousel-img"
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
              alt="Image Two"
            />
          </Carousel.Item>
          <Carousel.Item className="vh-80" interval={500}>
            <Carousel.Caption className=" h-100 d-flex flex-column  justify-content-center align-items-center">
              <h3>Fixed-Height Slider</h3>
              <p>Excellent bouquets for you</p>
            </Carousel.Caption>
            <img
              className="d-block img-fluid w-100 carousel-img"
              src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
              alt="Image Three"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;

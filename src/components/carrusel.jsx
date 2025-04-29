// Carousel.jsx
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="arrow next"
      onClick={onClick}
      aria-label="Next"  // Atributo accesible para describir el botón
      type="button"  // Asegúrate de que el botón sea del tipo correcto
   >
      <FaArrowRight />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="arrow prev"
      onClick={onClick}
      aria-label="Previous"  // Atributo accesible para describir el botón
      type="button"  // Asegúrate de que el botón sea del tipo correcto
    >

      <FaArrowLeft />
    </button>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <Slider {...settings}>
        <div>
          <img 
            src="./images/CookiesStore.png" 
            alt="Imagen 1"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img 
            src="./images/KingsGym.png" 
            alt="Imagen 2"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
        <div>
          <img 
            src="./images/texting.png" 
            alt="Imagen 2"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;

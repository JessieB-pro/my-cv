import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Assets() {

  const skills = ["Adaptabilité", "Rigueur", "Esprit d'équipe", "Organisation", "Curiosité"];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, },
  };

  return (
    <div id="assets" className="container-fluid">
      <div className="heading">
        <h1>Atouts</h1>
      </div>
      <div className="carousel-wrapper">
        <Carousel
          responsive={responsive}
          infinite={false}
          arrows={true}
          autoPlay={false}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40px"
          className="carousel-assets"
          centerMode={false}
          partialVisible={false}
        >
          {skills.map((skill, index) => (
            <div key={index} className="assets-ball">
              <span>{skill}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

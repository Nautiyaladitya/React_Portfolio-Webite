
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Meter1 from "../assets/img/meter1.svg";
import Meter2 from "../assets/img/meter2.svg";
import Meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skills' id='skills'>
            <container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h1>Skills</h1>
                        <p>lorem100 jhsjs jhsgds sdgsd dgsdjh sdygj sdgs ysgds sgdyg sdgsdyug usgdusg suytdu sdg std stdusg</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                         
                          <div className="item">
                            <img src={Meter1} alt="Image" />
                            <h5> Web Developer</h5>
                          </div>
                          <div className="item">
                            <img src={Meter2} alt="Image" />
                            <h5> Web Developer</h5>
                          </div>
                          <div className="item">
                            <img src={Meter3} alt="Image" />
                            <h5> Web Developer</h5>
                          </div>
                          <div className="item">
                            <img src={Meter1} alt="Image" />
                            <h5> Web Developer</h5>
                          </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}
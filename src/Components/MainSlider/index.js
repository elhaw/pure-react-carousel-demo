import React, { Component } from "react";
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css";

class MainSlider extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={700}
        naturalSlideHeight={200}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className="text-c700 font-hairline">
              <img class="avatar" src="https://via.placeholder.com/150C/O" />
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="text-c700 font-hairline">
              <img class="avatar" src="https://via.placeholder.com/150C/O" />
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </Slide>
          <Slide index={2}>
            {" "}
            <div className="text-c700 font-hairline">
              <img class="avatar" src="https://via.placeholder.com/150C/O" />
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup />
      </CarouselProvider>
    );
  }
}

export default MainSlider;

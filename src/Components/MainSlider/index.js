import React, { Component } from "react";
import {
  CarouselProvider,
  Slide,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import axios from "axios";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./style.css";
import left_arrow from "./work-style/left_arrow.png";
import right_arrow from "./work-style/right_arrow.png";

class MainSlider extends Component {
  state = {
    data :{},
    error: false,
    loading:true
  }

  componentDidMount() {
    axios
      .get("https://charity-cms-dev.m3ntorship.net/What-they-say")
      .then(({data})=>{
           this.setState({
             data,
             error :false,
             loading:false
           })
      })
      .catch((error)=>{
          this.setState({
            error:true,
            loading:false
          })
      })
  }

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={250}
        totalSlides={3}
      >
        <FeedBackHeder />
        <Slider className="sliderWrapper">
          <Slide index={0}>
            <figure className="feedback__carousel__quote text-c100 relative bg-c000 py-12 px-24 flex flex-col items-center justify-center">
              <img
                className="rounded-full mx-auto"
                src="https://picsum.photos/90/90"
                alt="nile"
              />
              <blockquote className="feedback__quote__text mt-8 mb-4 text-center">
                <p className="mb-8 leading-normal font-hairline">
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s throughly refresing to get such a
                  personal touch.
                </p>
                <h4 className="text-c200 font-medium text-md font-semibold mb-2">
                  Christine Rose
                </h4>
                <p className="leading-normal text-c600 text-base">Feedback</p>
              </blockquote>
            </figure>
          </Slide>
          <Slide index={1}>
            <figure className="feedback__carousel__quote text-c100 relative bg-c000 py-12 px-24 flex flex-col items-center justify-center">
              <img
                className="rounded-full mx-auto"
                src="https://picsum.photos/90/90"
                alt="nile"
              />
              <blockquote className="">
                <p className="mb-8 leading-normal font-hairline">
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s throughly refresing to get such a
                  personal touch.
                </p>
                <h4 className="text-c200 font-medium text-md font-semibold mb-2">
                  Christine Rose
                </h4>
                <p className="leading-normal text-c600 text-base">Feedback</p>
              </blockquote>
            </figure>
          </Slide>
          <Slide index={2}>
            <figure className="feedback__carousel__quote text-c100 relative bg-c000 py-12 px-24 flex flex-col items-center justify-center">
              <img
                className="rounded-full mx-auto"
                src="https://picsum.photos/90/90"
                alt="nile"
              />
              <blockquote className="feedback__quote__text mt-8 mb-4 text-center">
                <p className="mb-8 leading-normal font-hairline">
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s throughly refresing to get such a
                  personal touch.
                </p>
                <h4 className="text-c200 font-medium text-md font-semibold mb-2">
                  Christine Rose
                </h4>
                <p className="leading-normal text-c600 text-base">Feedback</p>
              </blockquote>
            </figure>
          </Slide>
        </Slider>
        <ButtonBack className="button_back">
          <img className="" src={left_arrow} />
        </ButtonBack>
        <ButtonNext className="button_next">
          <img className="" src={right_arrow} />
        </ButtonNext>
        <DotGroup />
      </CarouselProvider>
    );
  }
}

class FeedBackHeder extends Component {
  render() {
    return (
      <section className="feedback bg-c100 relative">
        <div className="container">
          <div className="feedback__heading">
            <div className="grid grid-cols-3">
              <h2 className="text-c000 text-xl col-span-2 font-black">
                What They Are
                <span className="text-c200 border-b-2 font-hairline">
                  Saying?
                </span>
              </h2>
              <div className="text-c700 font-hairline">
                <p>
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing
                  elit sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainSlider;

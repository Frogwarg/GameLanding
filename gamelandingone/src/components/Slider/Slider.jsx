import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Slider.css';
import sliderImage1 from './../../img/images/slider/images/Back4Blood.png';
import sliderImage2 from './../../img/images/slider/images/LordsOfTheFallen.png';
import sliderImage3 from './../../img/images/slider/images/HogwartsLegacy.png';
import sliderImage4 from './../../img/images/slider/images/Apex.png';
import sliderImage5 from './../../img/images/slider/images/Horizon.png';
import Card from './Card/Card.jsx';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
  };

class Slider extends React.Component {
  render(){
    return ( 
      <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlay={false}
                  autoPlaySpeed={2000}
                  transitionDuration={1000}
                  containerClass="carousel-container"
                  deviceType={this.props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                  focusOnSelect={true}
                  centerMode={true}
                  >
          <Card src={sliderImage1} text="" />
          <Card src={sliderImage2} text="" />
          <Card src={sliderImage3} text="" />
          <Card src={sliderImage4} text="" />
          <Card src={sliderImage5} text="" />
      </Carousel>
   );
  }
}

export default Slider;
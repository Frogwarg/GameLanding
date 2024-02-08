import './Slider.css';
// import './Slider.js';
// import './../../owl.carousel.min.js';
// import './../../styles/owl.carousel.min.css';
import Card from './Card/Card.jsx';

const Slider = () => {
    return ( 
        <div className="carousel-2 owl-carousel">
            <Card src="./../../img/images/sliderImages/Back4Blood.png" text="Back4Blood" />
            <Card src="./../../img/images/sliderImages/LordsOfTheFallen.png" text="Lords Of The Fallen" />
            <Card src="./../../img/images/sliderImages/" text="Harry Poer" />
            <Card src="./../../img/images/sliderImages/" text="Harry Pott" />
            <Card src="./../../img/images/sliderImages/" text="Harry ter" />
        </div>
     );
}
 
export default Slider;
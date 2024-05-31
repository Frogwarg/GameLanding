import './Anounce.css';
import Card from './Card/Card.jsx';
import Woman from './../../img/images/Woman.png';
import pic1 from './../../img/images/Advert/Redfall.png';
import pic2 from './../../img/images/Advert/Reyna.png';
import pic3 from './../../img/images/Advert/Twisted.png';

const Anounce = () => {
    return (  
        <div className="Anounce" >
            <div className="Anounce_container">
                <div className="Anounce__main">
                    <div className="Anounce__text">
                        <div className="Anounce__title Anounce__title_top">THIS MONTH</div>
                        <div className="Anounce__title Anounce__title_bot">ON PLAYSTATION</div>
                        <span className="Anounce__subtitle">Check out this month's biggest releases along with dedicated features, guides and more.</span>
                    </div>
                    <button className="Anounce__btn"><p>Find out more</p></button>
                </div>
                <img src={Woman} alt="злая тётя" className="Anounce__img" />
            </div>
            <div className="Advert_container">
                <Card src={pic1} color="100,199,235" text="Redfall"/>
                <Card src={pic2} color="255,10,255" text="Reyna Digital Valorant"/>
                <Card src={pic3} color="255,255,63" text="Twisted Wonderland Lilia Vanrouge"/>
            </div>
        </div>
    );
}

export default Anounce;
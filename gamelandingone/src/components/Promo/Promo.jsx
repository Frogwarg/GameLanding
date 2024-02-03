import './Promo.css';
import promoImg from './../../img/images/hogwarts-promo.png';
import promoTitleBig from './../../img/titles/Hogwarts.svg';
import promoTitleSmall from './../../img/titles/Legacy.svg';

function Promo () {
    return (
    <section className="promo">
        <div className="promo__container">
            <div className="promo__image">
                <img src={promoImg} alt="promoImage" />
            </div>
            <div className="promo__rectangle"></div>
            <div className="promo__group">
                <div className="promo__logo">
                    <div className="promo__logo-title">
                        <img src={promoTitleBig} alt="promoTitleBig" />
                        <img src={promoTitleSmall} alt="promoTitleSmall" />
                    </div>
                    <div className="promo__logo-subtitle disabled">
                        <img src="" alt="promoSubtitle" />
                    </div>
                </div>
                <div className="promo__description">
                    <span>
                    Decide the fate of the wizarding world in this immersive the new open-world action RPG, out now on PS5.
                    </span>
                </div>
                <div className="promo__btn">
                    <span>Find out more</span>
                </div>
            </div>
        </div>
    </section>
    );
}
 
export default Promo;
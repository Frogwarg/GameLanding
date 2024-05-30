import './PSpart.css';
import PS from './../../img/images/playstation original 1.svg';

const PSpart = () => {
    return (  
        <div className="PSpart">
            <div className="PSpart_container">
                <div className="PSpart__main">
                    <div className="PSpart__text">
                        <div className="PSpart__title">PlayStation 5 Console</div>
                        <span className="PSpart__subtitle">Experience An All-New Generation Of Incredible PlayStation Games.</span>
                    </div>
                    <button className="PSpart__btn"><p>Learn More</p></button>
                </div>
                <img src={PS} alt="" className="PSpart__image" />
            </div>
        </div>
    );
}

export default PSpart;
import './Card.css';

const Card = (props) => {
    return (  
        <div className="Advert_Card" >
            <div className="Advert_Card__image_container" style={{borderTop:`2px solid rgba(${props.color}, 0.5)`, borderBottom:`2px solid rgba(${props.color}, 0.5)`}}>
                <img src={props.src} alt={props.text} className="Advert_Card__image" />
            </div>
            <p className="Advert_Card__text">{props.text}</p>
        </div>
    );
}

export default Card;
import './Card.css';

const Card = (props) => {
    return (  
        <div className="card">
            <img className="card__image" src={props.src} alt={props.text} draggable="false"/>
            <div className="card__text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}
 
export default Card;
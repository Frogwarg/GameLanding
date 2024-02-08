import './Card.css';

const Card = (props) => {
    return (  
        <div className="owl-pic">
            <img src={props.src} alt="" />
            <div className="card__text">
                <p>{props.text}</p>
            </div>
        </div>
    );
}
 
export default Card;
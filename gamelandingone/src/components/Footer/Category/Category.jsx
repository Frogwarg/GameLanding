import './Category.css';

const Category = (props)=>{
    return(
        <div className="footer__category_container">
            <div className="footer__category_title">{props.items[0]}</div>
            <ul className="footer__category_list">
                    <li className="footer__category_item">{props.items[1]}</li>
                    <li className="footer__category_item">{props.items[2]}</li>
                    <li className="footer__category_item">{props.items[3]}</li>
                    <li className="footer__category_item">{props.items[4]}</li>
                    <li className="footer__category_item">{props.items[5]}</li>
                </ul>
        </div>
    );
};

export default Category;
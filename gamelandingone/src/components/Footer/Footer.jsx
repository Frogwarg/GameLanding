import Category from './Category/Category.jsx';
import './Footer.css';
import twIcon from './../../img/icons/twitter.svg';
import faIcon from './../../img/icons/facebook.svg';
import inIcon from './../../img/icons/insta.svg';
import yoIcon from './../../img/icons/youtube.svg';

const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer__container">
                <Category items={['Contact Us','Demo Store','No. 1258 Utawala, Nairobi, 01010','Kenya','+25470101010','example@gmail.com']}/>
                <Category items={['Information','Privacy Policy','Refund Policy','Shipping Policy','Terms Of Service','Blogs']}/>
                <Category items={['Account','Search','About Us','Faq','Contact','Help']}/>
                <Category items={['Quick Links','Incense Sticks','Shankh','Kalash','Incense Holders','Cone Dhoop']}/>
                <div className="footer__category_container">
                    <div className="footer__category_title">Social Media.</div>
                    <ul className="footer__category_list dop">
                        <li className="footer__category_item">Follow us on social media and stay updated.</li>
                    </ul>
                    <div className="footer_socials">
                        <a href="#a" className="footer_socials_item"><img src={twIcon} alt="" /></a>
                        <a href="#a" className="footer_socials_item"><img src={faIcon} alt="" /></a>
                        <a href="#a" className="footer_socials_item"><img src={inIcon} alt="" /></a>
                        <a href="#a" className="footer_socials_item"><img src={yoIcon} alt="" /></a>
                    </div>
                </div> 
            </div>
        </footer>
    );
};

export default Footer;
import './Header.css';
import logoImg from './../../img/icons/logo.svg';
import searchImg from './../../img/icons/search.svg';
import cartImg from './../../img/icons/cart.svg';

function Header () {
    return (
      <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              <img src={logoImg} alt="Logo" />
            </div>
            <nav className="header__nav">
              <ul>
                <li>
                  <a href="#!">Games</a>
                </li>
                <li>
                  <a href="#!">Hardware</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
                <li>
                  <a href="#!">News</a>
                </li>
                <li>
                  <a href="#!">Shop</a>
                </li>
                <li>
                  <a href="#!">Support</a>
                </li>
              </ul>
              <div className="header__menu">
                <div className="header__menu_shop">
                  <div className="header__search">
                      <img src={searchImg} alt="searchImg" />
                  </div>
                  <div className="header__cart">
                      <img src={cartImg} alt="cartImg" />
                  </div>
                </div>
                <div className="header__nav-btn"><span>Sign In</span></div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
}
 
export default Header;
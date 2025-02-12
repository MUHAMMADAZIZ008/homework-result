import './header.css'
import Logo from '../../assets/site-logo.svg'
import Button from '../button/button'

function Header() {
    return <>
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="header__logo--link">
                        <img className='header__logo' src={Logo} alt="site logo" />
                    </a>
                    <ul className="header__list">
                        <li className="header__item"><a href="#" className="header__link">Pricing</a></li>
                        <li className="header__item"><a href="#" className="header__link">Product</a></li>
                        <li className="header__item"><a href="#" className="header__link">About Us</a></li>
                        <li className="header__item"><a href="#" className="header__link">Careers</a></li>
                        <li className="header__item"><a href="#" className="header__link">Community</a></li>
                    </ul>
                    <Button text={"Get Started"}/>
                </div>
            </div>
        </header>       
    </>
}

export default Header
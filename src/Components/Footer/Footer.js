//--ALL IMPORTS--
import FooterLogo from "../../assets/images/footer-logo.svg";
import AppStore from "../../assets/images/app-store.svg";
import GooglePlay from "../../assets/images/google-play.svg";
import "./Foter.scss";

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__row row align-items-center justify-content-between">
                    <div className="footer__col col-sm-3">
                        <div className="footer__texts d-flex align-items-center">
                            <div className="footer__logo--wrap">
                                <a className="footer__logo--link" href="#">
                                    <img className="footer__logo" src={FooterLogo} alt="footer-logo" />
                                </a>
                            </div>
                            <p className="footer__logo--desc ms-2 mb-0">Продай, найди, купи все что ты пожелаешь </p>
                        </div>
                    </div>
                    <div className="footer__col col-sm-4">
                        <p className="footer__desc">Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления</p>
                    </div>
                    <div className="footer__col col-sm-4 d-flex">
                        <div className="ms-auto">
                            <a className="footer__link" href="#">
                                <img className="footer__img me-2" src={AppStore} alt="footer-appstore" />
                            </a>
                            <a className="footer__link" href="#">
                                <img className="footer__img" src={GooglePlay} alt="footer-googleplay" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Footer;
import logo from '../../assets/logo/Kasa_logo_footer.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="container-footer">
      <img src={logo} alt="Kasa" className="container-footer__logo" />
      <p className="container-footer__text">
        © 2020 Kasa. All{' '}
        <span className="container-footer__text--rights">
          {' '}
          rights reserved{' '}
        </span>
      </p>
    </footer>
  );
}

export default Footer;

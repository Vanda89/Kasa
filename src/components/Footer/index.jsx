import logo from '../../assets/logo/Kasa_logo_footer.svg';

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-end gap-10 bg-black h-52 text-white text-xl mt-6 p-8">
      <img src={logo} alt="Kasa" className="h-10" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

import logo from '../../assets/logo/Kasa_logo_footer.svg';

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center md:justify-end gap-4 md:gap-10 bg-black h-52 text-white md:mt-6 md:p-8">
      <img src={logo} alt="Kasa" className="h-10" />
      <p className="text-xs md:text-2xl text-center ">
        © 2020 Kasa. All{' '}
        <span className="block md:inline"> rights reserved </span>
      </p>
    </footer>
  );
}

export default Footer;

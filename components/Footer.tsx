function Footer() {
  return (
    <footer
      className={`px-[5%] sm:px-[10%] md:px-[15%] lg:px-[20%] flex justify-between py-4`}
    >
      {/* <p className="text">Build and Design with &#x2764;&#xfe0f; by Manh</p> */}
      <a className="text text-dark hover:text-primary transition-colors" href="https://github.com/LetsCodeManh/random-quotes" target="_blank">Repository</a>
    </footer>
  );
}

export default Footer;

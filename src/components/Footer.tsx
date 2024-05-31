const Footer = () => {
  return (
    <footer className="pt-20 pb-10 text-sm text-center sm:p-6">
      <p>
        All artwork © Annie Booker <span>🕊️</span> 2024
      </p>

      <p>
        <a
          className="underline md:w-1/4 hover:text-custom-hover"
          href="https://www.instagram.com/anniebookerart/"
          title="Annie's Instagram"
          target="_blank"
        >
          <span className="mr-2">📸</span>@anniebookerart
        </a>
      </p>
    </footer>
  );
};

export default Footer;

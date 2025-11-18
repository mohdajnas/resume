import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <p className="text-secondary">
            Designed by{" "}
            <a
              href="https://getnextjstemplates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              getnextjstemplates
            </a>{" "}
            • Distributed by{" "}
            <a
              href="https://themewagon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

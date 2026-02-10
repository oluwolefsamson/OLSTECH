import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Privacy</p>
          <p className="mt-2 text-sm text-white-50">
            27, Ajayi Crowther Street, Asokoro, Abuja, FCT, Nigeria
          </p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-sm text-white-50">
            oluwolefsamson44@gmail.com · +2349028014957
          </p>
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} OLSTECH SOFTWARE SOLUTIONS LIMITED. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

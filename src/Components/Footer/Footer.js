import React from "react";
import gitHubIcon from "../../assets/social-media-icon/github.png";
import twitterIcon from "../../assets/social-media-icon/twiter.png";
import linkedInIcon from "../../assets/social-media-icon/linkedin.png";
import mediumIcon from "../../assets/social-media-icon/medium.png";
import "./Footer.css";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="footer-container">
      <div className="social-links">
        <ul className="social-list">
          <li className="social-item">
            <a
              className="social-link"
              href="https://github.com/NandiniKaranji"
              target="_blank"
              alt="github"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={gitHubIcon} alt="github" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              target="_blank"
              href="https://twitter.com/NandiniKaranji"
              alt="twitter"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={twitterIcon} alt="twitter" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              target="_blank"
              href="https://www.linkedin.com/in/NandiniKaranji/"
              alt="linkedIn"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={linkedInIcon} alt="linkedIn" />
            </a>
          </li>
          <li className="social-item">
            <a
              className="social-link"
              target="_blank"
              href="https://medium.com/@NandiniKaranji"
              alt="medium"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src={mediumIcon} alt="medium" />
            </a>
          </li>
        </ul>
      </div>
      <div className="copy-right-content">
        © {getCurrentYear()} Copyright:
        <a
          href="https://NandiniKaranji.github.io/v2-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nandini Karanji
        </a>
      </div>
    </footer>
  );
}
export default Footer;

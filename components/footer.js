import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <>
      <footer className="footer-container thq-section-padding">
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
            {/* Contenedor para el logo y redes sociales */}
            <div className="footer-logo-and-social">
              {/* Logo */}
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="footer-logo"
              />
              
              {/* Redes Sociales */}
              <div className="footer-social-links">
                <p>{props.column2Title}</p>
                <a href={props.link6} target="_blank" rel="noreferrer noopener" className="footer-social-link">
                <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span>Instagram Festers</span>
                </a>
                <a href={props.link7} target="_blank" rel="noreferrer noopener" className="footer-social-link">
                  <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span>Instagram Festeres</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Credits */}
          <div className="footer-credits">
            <div className="footer-divider"></div>
            <div className="footer-credits-row">
              {/* <span className="footer-credits-text">{props.content3}</span> */}
              <div className="footer-footer-links">
                {/* <a href={props.privacyLink} className="footer-link">
                  {props.privacyLink}
                </a>
                <a href={props.termsLink} className="footer-link">
                  {props.termsLink}
                </a>
                <a href={props.cookiesLink} className="footer-link">
                  {props.cookiesLink}
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-container {
            background-color: white;
            color: black;
            padding: 2rem 1rem;
          }

          .footer-max-width {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
          }

          .footer-logo-and-social {
            display: flex;
            align-items: center;
            gap: 2rem; /* Espacio entre el logo y las redes sociales */
          }

          .footer-logo {
            width: 150px;
          }

          .footer-social-links {
            display: flex;
            gap: 1rem;
          }

          .footer-social-link {
            display: flex;
            align-items: center;
            color: black;
            text-decoration: none;
          }

          .footer-icon {
            width: 24px;
            margin-right: 0.5rem;
          }

          .footer-credits {
            border-top: 1px solid #444;
            padding-top: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }

          .footer-link {
            color: #ccc;
            text-decoration: none;
            margin-left: 1rem;
          }

          .footer-link:hover {
            color: #ff6347;
          }

          @media (max-width: 768px) {
            .footer-logo-and-social {
              flex-direction: column;
              align-items: flex-start;
            }

            .footer-credits-row {
              flex-direction: column;
              text-align: center;
            }

            .footer-link {
              margin: 0.5rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

Footer.defaultProps = {
  /* Props */
  logoSrc: "/imagen1.png",
  logoAlt: "Festers i Festeres Guadassuar 2025",
  column2Title: "Seguiu-nos a les reds socials",
  link6: "https://www.instagram.com/festerssantroc2025/",
  link7: "https://www.instagram.com/festeresassumpcio2025/",
  content3: "Stay connected for the latest news and updates!",
  privacyLink: "/privacy-policy",
  termsLink: "/terms-and-conditions",
  cookiesLink: "/cookie-policy",
};

Footer.propTypes = {
  /* Prop Types */
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  column2Title: PropTypes.string,
  link6: PropTypes.string,
  link7: PropTypes.string,
  content3: PropTypes.string,
  privacyLink: PropTypes.string,
  termsLink: PropTypes.string,
  cookiesLink: PropTypes.string,
};

export default Footer;

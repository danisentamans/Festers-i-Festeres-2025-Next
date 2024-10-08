import React from 'react'

import PropTypes from 'prop-types'

const Steps = (props) => {
  return (
    <>
      <div className="steps-container1 thq-section-padding">
        <div className="steps-max-width thq-section-max-width">
          <div className="steps-container2 thq-grid-2">
            <div className="steps-section-header">
              <h2 className="thq-heading-2">Rifes guanyadores</h2>
              <p className="thq-body-large">
                Así podreu vore els afortunats guanyadors de les rifes que hem
                fet durant l&apos;any.
              </p>
            </div>
            <div className="steps-container3">
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step1Title}</h2>
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="steps-image2"
                />
                {/* <img
                  src="/guanyadora%20rifa%201-300h.webp"
                  className="steps-image2"
                /> */}
                <span className="steps-text13 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text14 thq-heading-3">01</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <label className="steps-text16 thq-heading-3">02</label>
                <img
                  alt={props.imageAlt3}
                  src={props.imageSrc3}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt4}
                  src={props.imageSrc4}
                  className="steps-image2"
                />
                <span className="steps-text17 thq-body-small">
                  {props.step2Description}
                </span>
              </div>
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <img
                  alt={props.imageAlt5}
                  src={props.imageSrc5}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt6}
                  src={props.imageSrc6}
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text14 thq-heading-3">03</label>
              </div>
              {/* <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <label className="steps-text16 thq-heading-3">04</label>
                <img
                  alt={props.imageAlt7}
                  src={props.imageSrc7}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt8}
                  src={props.imageSrc8}
                  className="steps-image2"
                />
                <span className="steps-text17 thq-body-small">
                  {props.step4Description}
                </span>
              </div>
              <div className="steps-container4 thq-card">
                <h2 className="thq-heading-2">{props.step5Title}</h2>
                <img
                  alt={props.imageAlt9}
                  src={props.imageSrc9}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt10}
                  src={props.imageSrc10}
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">
                  {props.step5Description}
                </span>
                <label className="steps-text14 thq-heading-3">05</label>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .steps-max-width {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps-container2 {
            align-items: start;
          }
          .steps-section-header {
            gap: var(--dl-space-space-oneandhalfunits);
            top: 10%;
            display: flex;
            position: sticky;
            align-items: flex-start;
            flex-direction: column;
          }
          .steps-container3 {
            grid-area: span 1 / span 1 / span 1 / span 1;
          }
          .steps-container4 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-fourunits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-image1 {
            width: 170px;
            height: 210px;
            align-self: flex-start;
            margin-top: 10%;
            object-fit: cover;
            margin-left: 5%;
            margin-bottom: 10%;
          }
          .steps-image2 {
            width: 178px;
            height: 219px;
            align-self: flex-end;
            margin-top: -50%;
            object-fit: cover;
            margin-right: 10%;
          }
          .steps-text13 {
            margin-top: 1%;
            text-align: center;
          }
          .steps-text14 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container5 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text16 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-image3 {
            width: 170px;
            height: 210px;
            align-self: flex-start;
            margin-top: 10%;
            object-fit: cover;
            margin-left: 5%;
            margin-bottom: 10%;
          }
          .steps-image4 {
            width: 178px;
            height: 219px;
            align-self: flex-end;
            margin-top: -50%;
            object-fit: cover;
            margin-right: 10%;
          }
          .steps-text17 {
            margin-top: 0%;
            text-align: center;
          }
          .steps-container6 {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-text19 {
            text-align: center;
          }
          .steps-text20 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          .steps-container7 {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-text22 {
            text-align: center;
          }
          .steps-text23 {
            top: var(--dl-space-space-unit);
            right: var(--dl-space-space-unit);
            position: absolute;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .steps-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps-section-header {
              position: static;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .steps-container4 {
              width: 100%;
            }
            .steps-container5 {
              width: 100%;
            }
            .steps-container6 {
              width: 100%;
            }
            .steps-container7 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps.defaultProps = {
  step1Title: "Rifa dia 15 d'agost",
  step1Description: "Guanyadora d'1 pernil amb el número 7021",
  imageSrc1: '/numero_guanyador_1.jpg',
  imageAlt1: 'image1 alt text',
  imageSrc2: '/guanyadora_rifa_1.jpeg',
  imageAlt2: 'image2 alt text',
  
  step2Title: "Rifa dia 16 d'agost",
  step2Description: "Guanyador de 1 dinar poli municipal amb el número 2846",
  imageSrc3: '/numero_guanyador_2.jpg',
  imageAlt3: 'image3 alt text',
  imageSrc4: '/guanyador_numero_2.jpg',
  imageAlt4: 'image4 alt text',

  step3Title: "Rifa Divendres de mes de Setembre",
  step3Description: "Guanyador de 1 cistella del Forn Pa i dolç Gran Via amb el número 7864",
  imageSrc5: '/numero_guanyador_3.jpg',
  imageAlt5: 'image5 alt text',
  imageSrc6: '/guanyador_numero_3.jpg',
  imageAlt6: 'image6 alt text',

  step4Title: "Rifa dia 18 d'agost",
  step4Description: "Guanyadora d'1 pernil amb el número 7024",
  imageSrc7: '',
  imageAlt7: 'image7 alt text',
  imageSrc8: '',
  imageAlt8: 'image8 alt text',

  step5Title: "Rifa dia 19 d'agost",
  step5Description: "Guanyadora d'1 pernil amb el número 7025",
  imageSrc9: '',
  imageAlt9: 'image9 alt text',
  imageSrc10: '',
  imageAlt10: 'image10 alt text',
};


Steps.propTypes = {
  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,

  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt4: PropTypes.string,

  step3Title: PropTypes.string,
  step3Description: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageAlt6: PropTypes.string,

  step4Title: PropTypes.string,
  step4Description: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageAlt7: PropTypes.string,
  imageSrc8: PropTypes.string,
  imageAlt8: PropTypes.string,

  step5Title: PropTypes.string,
  step5Description: PropTypes.string,
  imageSrc9: PropTypes.string,
  imageAlt9: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageAlt10: PropTypes.string,
};


export default Steps

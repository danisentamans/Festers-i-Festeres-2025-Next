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
                  src="/guanyadora%20rifa%201-300h.webp"
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">
                  {props.step1Description}
                </span>
                <label className="steps-text14 thq-heading-3">01</label>
              </div>
              <div className="steps-container5 thq-card">
                <h2 className="thq-heading-2">{props.step2Title}</h2>
                <label className="steps-text16 thq-heading-3">02</label>
                <img
                  alt={props.imageAlt11}
                  src={props.imageSrc11}
                  className="steps-image3"
                />
                <img
                  src="/guanyadora%20rifa%201-300h.webp"
                  className="steps-image4"
                />
                <span className="steps-text17 thq-body-small">
                  {props.step1Description1}
                </span>
              </div>
              <div className="steps-container6 thq-card">
                <h2 className="thq-heading-2">{props.step3Title}</h2>
                <span className="steps-text19 thq-body-small">
                  {props.step3Description}
                </span>
                <label className="steps-text20 thq-heading-3">03</label>
              </div>
              <div className="steps-container7 thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <span className="steps-text22 thq-body-small">
                  {props.step4Description}
                </span>
                <label className="steps-text23 thq-heading-3">04</label>
              </div>
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
  step1Description1: "Guanyadora d'1 pernil amb el número 7021",
  imageSrc1: '/numero%20guanyador%201-300h.webp',
  step4Description:
    'Stay tuned to see if you are one of the lucky winners of our raffle prizes.',
  step3Description:
    'Enjoy the festivity and immerse yourself in the cultural celebrations.',
  imageSrc11: '/numero%20guanyador%201-300h.webp',
  step3Title: 'Attend the Festivity',
  step1Title: "Rifa dia 15 d'agost",
  imageAlt11: 'image',
  step2Title: 'Purchase Tickets',
  imageAlt1: 'image',
  step1Description: "Guanyadora d'1 pernil amb el número 7021",
  step4Title: 'Check Raffle Results',
}

Steps.propTypes = {
  step1Description1: PropTypes.string,
  imageSrc1: PropTypes.string,
  step4Description: PropTypes.string,
  step3Description: PropTypes.string,
  imageSrc11: PropTypes.string,
  step3Title: PropTypes.string,
  step1Title: PropTypes.string,
  imageAlt11: PropTypes.string,
  step2Title: PropTypes.string,
  imageAlt1: PropTypes.string,
  step1Description: PropTypes.string,
  step4Title: PropTypes.string,
}

export default Steps

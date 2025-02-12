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
                Así podreu vore els números premiats de les rifes i els afortunats que hem
                fet durant l&apos;any.
              </p>
            </div>

            <div className="steps-container3">
              {/* Añadiendo el paso 1 */}
              <div className="steps-containerA thq-card">
                <label className="steps-text14 thq-heading-3">01</label>
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
                <span className="steps-text13 thq-body-small">{props.step1Description}</span>
              </div>

              {/* Añadiendo el paso 2 */}
              <div className="steps-containerB thq-card">
                <label className="steps-text14 thq-heading-3">02</label>
                <h2 className="thq-heading-2">{props.step2Title}</h2>
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
                <span className="steps-text13 thq-body-small">{props.step2Description}</span>
              </div>

              {/* Añadiendo el paso 3 */}
              <div className="steps-containerC thq-card">
                <label className="steps-text14 thq-heading-3">03</label>
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
                <span className="steps-text13 thq-body-small">{props.step3Description}</span>
              </div>

              {/* Añadiendo el paso 4 */}
              <div className="steps-containerD thq-card">
                <h2 className="thq-heading-2">{props.step4Title}</h2>
                <label className="steps-text14 thq-heading-3">04</label>
                <img
                  alt={props.imageAlt7}
                  src={props.imageSrc7}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt7}
                  src={props.imageSrc7}
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">{props.step4Description}</span>
                <span className="steps-text10 thq-body-xs">{props.step4AditionalDescription}</span>

              </div>

              {/* Añadiendo el paso 5 */}
              <div className="steps-containerA thq-card">
                <h2 className="thq-heading-2">{props.step5Title}</h2>
                <label className="steps-text14 thq-heading-3">05</label>
                <img
                  alt={props.imageAlt9}
                  src={props.imageSrc9}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt9}
                  src={props.imageSrc9}
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">{props.step5Description}</span>
                <span className="steps-text10 thq-body-xs">{props.step5AditionalDescription}</span>

              </div>

              {/* Añadiendo el paso 6 */}
              <div className="steps-containerB thq-card">
                <h2 className="thq-heading-2">{props.step6Title}</h2>
                <label className="steps-text16 thq-heading-3">06</label>
                <img
                  alt={props.imageAlt10}
                  src={props.imageSrc10}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt11}
                  src={props.imageSrc11}
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">{props.step6Description}</span>
              </div>

              {/* Añadiendo el paso 7 */}
              <div className="steps-containerC thq-card">
                <h2 className="thq-heading-2">{props.step7Title}</h2>
                <label className="steps-text16 thq-heading-3">07</label>
                <img
                  alt={props.imageAlt12}
                  src={props.imageSrc12}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt12}
                  src={props.imageSrc12}
                  className="steps-image2"
                />
                <span className="steps-text17 thq-body-small">{props.step7Description}</span>
                <span className="steps-text10 thq-body-xs">{props.step7AditionalDescription}</span>
              </div>

              {/* Añadiendo el paso 8 */}
              <div className="steps-containerD thq-card">
                <h2 className="thq-heading-2">{props.step8Title}</h2>
                <label className="steps-text16 thq-heading-3">08</label>
                <img
                  alt={props.imageAlt13}
                  src={props.imageSrc13}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt13}
                  src={props.imageSrc13}
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">{props.step8Description}</span>
                <span className="steps-text10 thq-body-xs">{props.step8AditionalDescription}</span>
              </div>

              {/* Añadiendo el paso 9 */}
              <div className="steps-containerA thq-card">
                <h2 className="thq-heading-2">{props.step9Title}</h2>
                <label className="steps-text16 thq-heading-3">09</label>
                <img
                  alt={props.imageAlt15}
                  src={props.imageSrc15}
                  className="steps-image1"
                />
                <img
                  alt={props.imageAlt16}
                  src={props.imageSrc16}
                  className="steps-image2"
                />
                <span className="steps-text13 thq-body-small">{props.step9Description}</span>
                <span className="steps-text5 thq-body-xs">{props.step9AditionalDescription}</span>
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
          .steps-containerA {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent1);
          }
          .steps-containerB {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-theme-accent2);
          }
          .steps-containerC {
            top: 10%;
            position: sticky;
            transform: rotate(2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color:  #f9d35c;
          }
          .steps-containerD {
            top: 10%;
            position: sticky;
            transform: rotate(-2deg);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #ff8f8f;
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
  step9Title: "Rifa extraordinària",
  step9Description: "Regal d'un Iphone 16 amb el número 6993",
  step9AditionalDescription: "No premiat. Revisa les teues papeletes i fica't en contacte amb els i les festeres",
  imageSrc15: '/rifes/numeros/rifa_iphone.jpg',
  imageSrc16: '/rifes/numeros/num_guanyador_iphone.jpg',

  step8Title: "Divendres de mes de febrer",
  step8Description: "Regal d'un sopar a la pizzeria Da Vito amb el número 0974",
  step8AditionalDescription: "No premiat. Revisa les teues papeletes i fica't en contacte amb els i les festeres",
  imageSrc13: '/rifes/numeros/num_guanyador_febrer.jpg',

  step7Title: "Divendres de mes de gener",
  step7Description: "Regal d'un sopar a la pizzeria Da Vito amb el número 6154",
  step7AditionalDescription: "No premiat. Revisa les teues papeletes i fica't en contacte amb els i les festeres",
  imageSrc12: '/rifes/numeros/num_guanyador_gener.jpg',

  step6Title: "21 de desembre",
  step6Description: "Guanyadora d'un pernil amb el número 9849",
  imageSrc10: '/rifes/numeros/num_guanyador_21desembre.jpg',
  imageSrc11: '/rifes/premiats/guanyador_21desembre.jpg',

  step5Title: "Divendres de mes de desembre",
  step5Description: "Regal d'un esmorzar a Ca Blau al número 0639",
  step5AditionalDescription: "No premiat. Revisa les teues papeletes i fica't en contacte amb els i les festeres",
  imageSrc9: '/rifes/numeros/num_guanyador_desembre.jpg',

  step4Title: "Divendres de mes d'octubre",
  step4Description: "Regal d'un esmorzar a Ca Blau al número 7864",
  step4AditionalDescription: "No premiat. Revisa les teues papeletes i fica't en contacte amb els i les festeres",
  imageSrc7: '/rifes/numeros/num_guanyador_octubre.jpg',

  step3Title: "Divendres de mes de setembre",
  step3Description: "Guanyador d'una cistella del Forn Pa i dolç Gran Via amb el número 7864",
  imageSrc5: '/rifes/numeros/num_guanyador_setembre.jpg',
  imageSrc6: '/rifes/premiats/guanyador_setembre.jpg',

  step2Title: "16 d'agost, dia de Sant  Roc",
  step2Description: "Guanyador d'un dinar poliesportiu municipal amb el número 2846",
  imageSrc3: '/rifes/numeros/num_guanyador_16A.jpg',
  imageSrc4: '/rifes/premiats/guanyador_16A.jpg',

  step1Title: "15 d'agost, dia de l'Assumpció",
  step1Description: "Guanyadora d'un pernil amb el número 7021",
  imageSrc1: '/rifes/numeros/num_guanyador_15A.jpg',
  imageSrc2: '/rifes/premiats/guanyador_15A.jpeg',
};

Steps.propTypes = {
  step9Title: PropTypes.string,
  step9Description: PropTypes.string,
  step9AditionalDescription: PropTypes.string,
  imageSrc15: PropTypes.string,

  step8Title: PropTypes.string,
  step8Description: PropTypes.string,
  step8AditionalDescription: PropTypes.string,
  imageSrc13: PropTypes.string,

  step7Title: PropTypes.string,
  step7Description: PropTypes.string,
  step7AditionalDescription: PropTypes.string,
  imageSrc12: PropTypes.string,

  step6Title: PropTypes.string,
  step6Description: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageSrc11: PropTypes.string,

  step5Title: PropTypes.string,
  step5Description: PropTypes.string,
  step5AditionalDescription: PropTypes.string,
  imageSrc9: PropTypes.string,

  step4Title: PropTypes.string,
  step4Description: PropTypes.string,
  step4AditionalDescription: PropTypes.string,
  imageSrc7: PropTypes.string,

  step3Title: PropTypes.string,
  step3Description: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageSrc6: PropTypes.string,

  step2Title: PropTypes.string,
  step2Description: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc4: PropTypes.string,

  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc2: PropTypes.string,
};

export default Steps

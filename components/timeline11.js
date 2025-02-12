import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline11 = (props) => {
  const [container2, setContainer2] = useState(false)
  const [step1, setStep1] = useState(false)
  const [container1, setContainer1] = useState(false)
  const [step3, setStep3] = useState(false)
  const [container0, setContainer0] = useState(true)
  const [container3, setContainer3] = useState(false)
  const [step0, setStep0] = useState(true)
  const [step2, setStep2] = useState(false)
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline11-max-width thq-section-max-width">
          <div className="timeline11-timeline">
            <div className="timeline11-progress0"></div>
            <div
              onClick={() => {
                setContainer0(true)
                setContainer2(false)
                setContainer3(false)
                setContainer1(false)
                setStep1(false)
                setStep2(false)
                setStep3(false)
                setStep0(true)
              }}
              className="timeline11-step0"
            >
              <span>
                {props.date1 ?? (
                  <Fragment>
                    <h3 className="timeline11-text47 thq-heading-3">
                      June 1, 2025
                    </h3>
                  </Fragment>
                )}
              </span>
              <div className="timeline11-container11"></div>
            </div>
            {!step1 && <div className="timeline11-container12"></div>}
            {step1 && <div className="timeline11-container13"></div>}
            {step1 && (
              <div
                onClick={() => {
                  setContainer2(false)
                  setStep3(false)
                  setContainer1(true)
                  setContainer0(false)
                  setStep2(false)
                  setStep1(true)
                  setContainer3(false)
                }}
                className="timeline11-container14"
              >
                <span>
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline11-text46 thq-body-small">
                        June 3, 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container15"></div>
              </div>
            )}
            {!step1 && (
              <div
                onClick={() => {
                  setStep1(true)
                  setContainer2(false)
                  setContainer0(false)
                  setContainer1(true)
                  setStep3(false)
                  setContainer3(false)
                  setStep2(false)
                  setStep0(true)
                }}
                className="timeline11-container16"
              >
                {container0 && (
                  <span>
                    {props.date2 ?? (
                      <Fragment>
                        <span className="timeline11-text46 thq-body-small">
                          June 3, 2025
                        </span>
                      </Fragment>
                    )}
                  </span>
                )}
                <div className="timeline11-container17"></div>
              </div>
            )}
            {!step2 && <div className="timeline11-container18"></div>}
            {step2 && <div className="timeline11-container19"></div>}
            {!step2 && (
              <div
                onClick={() => {
                  setStep1(true)
                  setContainer3(false)
                  setStep2(true)
                  setContainer2(true)
                  setContainer0(false)
                  setStep0(true)
                  setStep3(false)
                  setContainer1(false)
                }}
                className="timeline11-container20"
              >
                <span>
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline11-text40 thq-body-small">
                        June 5, 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container21"></div>
              </div>
            )}
            {step2 && (
              <div
                onClick={() => {
                  setContainer2(true)
                  setStep3(false)
                  setContainer1(false)
                  setContainer0(false)
                  setContainer3(false)
                }}
                className="timeline11-container22"
              >
                <span>
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline11-text40 thq-body-small">
                        June 5, 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container23"></div>
              </div>
            )}
            {!step3 && <div className="timeline11-container24"></div>}
            {step3 && <div className="timeline11-container25"></div>}
            {!step3 && (
              <div
                onClick={() => {
                  setContainer2(false)
                  setStep1(true)
                  setStep2(true)
                  setContainer0(false)
                  setContainer1(false)
                  setStep0(true)
                  setStep3(true)
                  setContainer3(true)
                }}
                className="timeline11-container26"
              >
                <span>
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline11-text44 thq-body-small">
                        June 7, 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container27"></div>
              </div>
            )}
            {step3 && (
              <div className="timeline11-container28">
                <span>
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline11-text44 thq-body-small">
                        June 7, 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container29"></div>
              </div>
            )}
            {!step3 && <div className="timeline11-container30"></div>}
            {step3 && <div className="timeline11-container31"></div>}
          </div>
          {container0 && (
            <div className="timeline11-container32">
              <div className="timeline11-content-container1 thq-flex-column">
                <h3>
                  {props.date1 ?? (
                    <Fragment>
                      <h3 className="timeline11-text47 thq-heading-3">
                        June 1, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card1Title ?? (
                    <Fragment>
                      <h3 className="timeline11-text52 thq-heading-3">
                        Opening Ceremony
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline11-text43 thq-body-small">
                        Join us for the grand opening of Festers i Festeres
                        Guadassuar 2025. Experience traditional music, dance
                        performances, and the official kickoff of the festivity.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <img
                alt={props.card1ImageAlt}
                src="/october.jpg"
                className="timeline11-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container1 && (
            <div className="timeline11-container34">
              <div className="timeline11-content-container2 thq-flex-column">
                <h3>
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline11-text46 thq-body-small">
                        June 3, 2025
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card2Title ?? (
                    <Fragment>
                      <h3 className="timeline11-text49 thq-heading-3">
                        Espereu per a gaudirles...
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline11-text45 thq-body-small">
                        Carregant les millors festes per a vosaltres!
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container35">
                </div>
              </div>
              <img
                alt={props.card2ImageAlt}
                src="/reset.jpg"
                className="timeline11-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container2 && (
            <div className="timeline11-container36">
              <div className="timeline11-content-container3 thq-flex-column">
                <h3>
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline11-text40 thq-body-small">
                        June 5, 2025
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card3Title ?? (
                    <Fragment>
                      <h3 className="timeline11-text36 thq-heading-3">
                        Cultural Workshops
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline11-text42 thq-body-small">
                        Participate in interactive workshops to learn about
                        traditional crafts, culinary delights, and cultural
                        practices of Guadassuar.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container37">
                </div>
              </div>
              <img
                alt={props.card3ImageAlt}
                src="/loading.gif"
                className="timeline11-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container3 && (
            <div className="timeline11-container38">
              <div className="timeline11-content-container4 thq-flex-column">
                <h3>{props.date4 ?? (
                    <Fragment>
                      <span className="timeline11-text40 thq-body-small">
                        June 5, 2025
                      </span>
                    </Fragment>
                  )}</h3>
                <h3>
                  {props.card4Title ?? (
                    <Fragment>
                      <h3 className="timeline11-text38 thq-heading-3">
                        Closing Gala
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline11-text35 thq-body-small">
                        Celebrate the end of Festers i Festeres Guadassuar 2025
                        with a spectacular gala featuring live music, dance
                        performances, and fireworks.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline11-container39">
                </div>
              </div>
              <img
                alt={props.card4ImageAlt}
                src="/loading.gif"
                className="timeline11-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .timeline11-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-timeline {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .timeline11-progress0 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-step0 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container11 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container12 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container13 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container14 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container15 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container16 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container17 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container18 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container19 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container20 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container21 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container22 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container23 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container24 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container25 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container26 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container27 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container28 {
            flex: 0 0 auto;
            width: auto;
            cursor: pointer;
            margin: -5px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline11-container29 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container30 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container31 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline11-container32 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline11-content-container1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline11-container33 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline11-image1 {
    flex: 1;
    max-width: 35%;
    align-self: flex-end;
    object-fit: contain; /* Evita que se corte la imagen */
    width: 100%; /* Asegúrate de que ocupe todo el espacio disponible */
    height: auto; /* Mantén la relación de aspecto de la imagen */
}

          .timeline11-container34 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline11-content-container2 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline11-container35 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline11-image2 {
            flex: 1;
            max-width: 40%;
          }
          .timeline11-container36 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline11-content-container3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline11-container37 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline11-image3 {
            flex: 1;
            max-width: 40%;
          }
          .timeline11-container38 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline11-content-container4 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline11-container39 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline11-image4 {
            flex: 1;
            max-width: 40%;
          }
          .timeline11-text35 {
            display: inline-block;
          }
          .timeline11-text36 {
            display: inline-block;
          }
          .timeline11-text37 {
            display: inline-block;
          }
          .timeline11-text38 {
            display: inline-block;
          }
          .timeline11-text39 {
            display: inline-block;
          }
          .timeline11-text40 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .timeline11-text41 {
            display: inline-block;
          }
          .timeline11-text42 {
            display: inline-block;
          }
          .timeline11-text43 {
            display: inline-block;
          }
          .timeline11-text44 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .timeline11-text45 {
            display: inline-block;
          }
          .timeline11-text46 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .timeline11-text47 {
            display: inline-block;
          }
          .timeline11-text48 {
            display: inline-block;
          }
          .timeline11-text49 {
            display: inline-block;
          }
          .timeline11-text50 {
            display: inline-block;
          }
          .timeline11-text51 {
            display: inline-block;
          }
          .timeline11-text52 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline11-container32 {
              flex-direction: column;
            }
            .timeline11-container34 {
              flex-direction: column;
            }
            .timeline11-container36 {
              flex-direction: column;
            }
            .timeline11-container38 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .timeline11-max-width {
              gap: 0;
            }
            .timeline11-container32 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline11-container34 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline11-container36 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline11-container38 {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .timeline11-progress0 {
              display: none;
            }
            .timeline11-container30 {
              display: none;
            }
            .timeline11-container31 {
              display: none;
            }
            .timeline11-container32 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline11-container33 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline11-container34 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline11-container36 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline11-container38 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline11.defaultProps = {
  card4Content: undefined,
  card3Title: undefined,
  card3Action2: undefined,
  card4Title: undefined,
  card3ImageSrc:
    'https://images.unsplash.com/photo-1727988358527-d33dc1c11fe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5NTgxOXw&ixlib=rb-4.0.3&q=80&w=600',
  card3Action1: undefined,
  date3: undefined,
  card2ImageSrc:
    'https://images.unsplash.com/photo-1720238281873-51965cef637d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5NTgxOXw&ixlib=rb-4.0.3&q=80&w=600',
  card2Action2: undefined,
  card4ImageSrc:
    "/loading.gif",
  card3Content: undefined,
  card1Content: undefined,
  date4: undefined,
  card3ImageAlt: 'Image for Cultural Workshops',
  card2Content: undefined,
  date2: undefined,
  card4ImageAlt: 'Image for Closing Gala',
  date1: undefined,
  card4Action1: undefined,
  card2Title: undefined,
  card4Action2: undefined,
  card2Action1: undefined,
  card1ImageAlt: 'Image for Opening Ceremony',
  card2ImageAlt: 'Image for Parade and Float Competition',
  card1Title: undefined,
}

Timeline11.propTypes = {
  card4Content: PropTypes.element,
  card3Title: PropTypes.element,
  card3Action2: PropTypes.element,
  card4Title: PropTypes.element,
  card3ImageSrc: PropTypes.string,
  card3Action1: PropTypes.element,
  date3: PropTypes.element,
  card2ImageSrc: PropTypes.string,
  card2Action2: PropTypes.element,
  card4ImageSrc: PropTypes.string,
  card3Content: PropTypes.element,
  card1Content: PropTypes.element,
  date4: PropTypes.element,
  card3ImageAlt: PropTypes.string,
  card2Content: PropTypes.element,
  date2: PropTypes.element,
  card4ImageAlt: PropTypes.string,
  date1: PropTypes.element,
  card4Action1: PropTypes.element,
  card2Title: PropTypes.element,
  card4Action2: PropTypes.element,
  card2Action1: PropTypes.element,
  card1ImageAlt: PropTypes.string,
  card2ImageAlt: PropTypes.string,
  card1Title: PropTypes.element,
}

export default Timeline11

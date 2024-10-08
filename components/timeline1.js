import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline1 = (props) => {
  const [container0, setContainer0] = useState(true)
  const [step3, setStep3] = useState(false)
  const [step2, setStep2] = useState(false)
  const [container2, setContainer2] = useState(false)
  const [container1, setContainer1] = useState(false)
  const [step0, setStep0] = useState(true)
  const [container3, setContainer3] = useState(false)
  const [step1, setStep1] = useState(false)
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="timeline1-max-width thq-section-max-width">
          <div className="timeline1-timeline">
            <div className="timeline1-progress0"></div>
            <div
              onClick={() => {
                setStep1(false)
                setContainer2(false)
                setContainer1(false)
                setStep0(true)
                setStep2(false)
                setStep3(false)
                setContainer0(true)
                setContainer3(false)
              }}
              className="timeline1-step0"
            >
              <span>
                {props.date1 ?? (
                  <Fragment>
                    <h3 className="timeline1-text40 thq-heading-3">
                      January 2025
                    </h3>
                  </Fragment>
                )}
              </span>
              <div className="timeline1-container11"></div>
            </div>
            {!step1 && <div className="timeline1-container12"></div>}
            {step1 && <div className="timeline1-container13"></div>}
            {step1 && (
              <div
                onClick={() => {
                  setContainer3(false)
                  setContainer1(true)
                  setStep1(true)
                  setStep3(false)
                  setContainer0(false)
                  setContainer2(false)
                  setStep2(false)
                }}
                className="timeline1-container14"
              >
                <span>
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline1-text44 thq-body-small">
                        March 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container15"></div>
              </div>
            )}
            {!step1 && (
              <div
                onClick={() => {
                  setContainer1(true)
                  setStep1(true)
                  setStep2(false)
                  setContainer3(false)
                  setStep3(false)
                  setContainer0(false)
                  setContainer2(false)
                  setStep0(true)
                }}
                className="timeline1-container16"
              >
                {container0 && (
                  <span>
                    {props.date2 ?? (
                      <Fragment>
                        <span className="timeline1-text44 thq-body-small">
                          March 2025
                        </span>
                      </Fragment>
                    )}
                  </span>
                )}
                <div className="timeline1-container17"></div>
              </div>
            )}
            {!step2 && <div className="timeline1-container18"></div>}
            {step2 && <div className="timeline1-container19"></div>}
            {!step2 && (
              <div
                onClick={() => {
                  setContainer3(false)
                  setContainer1(false)
                  setStep1(true)
                  setStep2(true)
                  setContainer0(false)
                  setStep0(true)
                  setStep3(false)
                  setContainer2(true)
                }}
                className="timeline1-container20"
              >
                <span>
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text50 thq-body-small">
                        May 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container21"></div>
              </div>
            )}
            {step2 && (
              <div
                onClick={() => {
                  setContainer0(false)
                  setContainer2(true)
                  setContainer1(false)
                  setContainer3(false)
                  setStep3(false)
                }}
                className="timeline1-container22"
              >
                <span>
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text50 thq-body-small">
                        May 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container23"></div>
              </div>
            )}
            {!step3 && <div className="timeline1-container24"></div>}
            {step3 && <div className="timeline1-container25"></div>}
            {!step3 && (
              <div
                onClick={() => {
                  setContainer0(false)
                  setStep1(true)
                  setContainer2(false)
                  setStep2(true)
                  setStep3(true)
                  setStep0(true)
                  setContainer1(false)
                  setContainer3(true)
                }}
                className="timeline1-container26"
              >
                <span>
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline1-text38 thq-body-small">
                        July 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container27"></div>
              </div>
            )}
            {step3 && (
              <div className="timeline1-container28">
                <span>
                  {props.date4 ?? (
                    <Fragment>
                      <span className="timeline1-text38 thq-body-small">
                        July 2025
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container29"></div>
              </div>
            )}
            {!step3 && <div className="timeline1-container30"></div>}
            {step3 && <div className="timeline1-container31"></div>}
          </div>
          {container0 && (
            <div className="timeline1-container32">
              <div className="timeline1-content-container1 thq-flex-column">
                <h3>
                  {props.date1 ?? (
                    <Fragment>
                      <h3 className="timeline1-text40 thq-heading-3">
                        January 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card1Title ?? (
                    <Fragment>
                      <h3 className="timeline1-text51 thq-heading-3">
                        Announcement of Festers i Festeres Guadassuar 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline1-text37 thq-body-small">
                        The official announcement of the cultural festivity in
                        Guadassuar, Spain, showcasing the lineup of events and
                        activities.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container33">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text49">Learn More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card1Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text39">Get Tickets</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card1ImageAlt}
                src={props.card1ImageSrc}
                className="timeline1-image1 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container1 && (
            <div className="timeline1-container34">
              <div className="timeline1-content-container2 thq-flex-column">
                <h3>
                  {props.date2 ?? (
                    <Fragment>
                      <span className="timeline1-text44 thq-body-small">
                        March 2025
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card2Title ?? (
                    <Fragment>
                      <h3 className="timeline1-text54 thq-heading-3">
                        Traditional Dance Workshops
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline1-text48 thq-body-small">
                        Join us for traditional dance workshops where you can
                        learn the moves and rhythms of local dances.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container35">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text43">Register Now</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card2Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text45">
                            View Schedule
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card2ImageAlt}
                src={props.card2ImageSrc}
                className="timeline1-image2 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container2 && (
            <div className="timeline1-container36">
              <div className="timeline1-content-container3 thq-flex-column">
                <h3>
                  {props.date3 ?? (
                    <Fragment>
                      <span className="timeline1-text50 thq-body-small">
                        May 2025
                      </span>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card3Title ?? (
                    <Fragment>
                      <h3 className="timeline1-text52 thq-heading-3">
                        Culinary Delights Festival
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline1-text46 thq-body-small">
                        Experience the flavors of Guadassuar with a festival
                        dedicated to local cuisine and traditional dishes.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container37">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text47">
                            Explore Menus
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card3Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text42">
                            Meet the Chefs
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card3ImageAlt}
                src={props.card3ImageSrc}
                className="timeline1-image3 thq-img-ratio-1-1"
              />
            </div>
          )}
          {container3 && (
            <div className="timeline1-container38">
              <div className="timeline1-content-container4 thq-flex-column">
                <h3>Date</h3>
                <h3>
                  {props.card4Title ?? (
                    <Fragment>
                      <h3 className="timeline1-text41 thq-heading-3">
                        Grand Parade and Closing Ceremony
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline1-text53 thq-body-small">
                        Don&apos;t miss the grand parade through the streets of
                        Guadassuar followed by the closing ceremony with live
                        music and fireworks.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline1-container39">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline1-text55">Parade Route</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card4Action2 ?? (
                        <Fragment>
                          <span className="timeline1-text56">
                            Join the Celebration
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <img
                alt={props.card4ImageAlt}
                src={props.card4ImageSrc}
                className="timeline1-image4 thq-img-ratio-1-1"
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .timeline1-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline1-timeline {
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .timeline1-progress0 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-step0 {
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
          .timeline1-container11 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container12 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container13 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container14 {
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
          .timeline1-container15 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container16 {
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
          .timeline1-container17 {
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
          .timeline1-container18 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container19 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container20 {
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
          .timeline1-container21 {
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
          .timeline1-container22 {
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
          .timeline1-container23 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container24 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container25 {
            flex: 0 0 auto;
            width: 10%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container26 {
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
          .timeline1-container27 {
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
          .timeline1-container28 {
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
          .timeline1-container29 {
            flex: 0 0 auto;
            width: 12px;
            height: 12px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container30 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            opacity: 0.35;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container31 {
            flex: 0 0 auto;
            width: 5%;
            height: 2px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline1-container32 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container1 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container33 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image1 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container34 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container2 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container35 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image2 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container36 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container3 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container37 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image3 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-container38 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline1-content-container4 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline1-container39 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline1-image4 {
            flex: 1;
            max-width: auto;
          }
          .timeline1-text37 {
            display: inline-block;
          }
          .timeline1-text38 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .timeline1-text39 {
            display: inline-block;
          }
          .timeline1-text40 {
            display: inline-block;
          }
          .timeline1-text41 {
            display: inline-block;
          }
          .timeline1-text42 {
            display: inline-block;
          }
          .timeline1-text43 {
            display: inline-block;
          }
          .timeline1-text44 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .timeline1-text45 {
            display: inline-block;
          }
          .timeline1-text46 {
            display: inline-block;
          }
          .timeline1-text47 {
            display: inline-block;
          }
          .timeline1-text48 {
            display: inline-block;
          }
          .timeline1-text49 {
            display: inline-block;
          }
          .timeline1-text50 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .timeline1-text51 {
            display: inline-block;
          }
          .timeline1-text52 {
            display: inline-block;
          }
          .timeline1-text53 {
            display: inline-block;
          }
          .timeline1-text54 {
            display: inline-block;
          }
          .timeline1-text55 {
            display: inline-block;
          }
          .timeline1-text56 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .timeline1-container32 {
              flex-direction: column;
            }
            .timeline1-container34 {
              flex-direction: column;
            }
            .timeline1-container36 {
              flex-direction: column;
            }
            .timeline1-container38 {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .timeline1-max-width {
              gap: 0;
            }
            .timeline1-container32 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container34 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container36 {
              gap: var(--dl-space-space-twounits);
            }
            .timeline1-container38 {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .timeline1-progress0 {
              display: none;
            }
            .timeline1-container30 {
              display: none;
            }
            .timeline1-container31 {
              display: none;
            }
            .timeline1-container32 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container33 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline1-container34 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container36 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline1-container38 {
              padding-left: 0px;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline1.defaultProps = {
  card1Content: undefined,
  date4: undefined,
  card1Action2: undefined,
  card2ImageSrc:
    'https://images.unsplash.com/photo-1702205453939-faccdb5bde61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5NTU4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  date1: undefined,
  card3ImageAlt: 'Culinary Festival Image',
  card4ImageSrc:
    'https://images.unsplash.com/photo-1701001926533-47d4995a7347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5NTU4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  card4Title: undefined,
  card2ImageAlt: 'Dance Workshop Image',
  card3Action2: undefined,
  card1ImageSrc:
    'https://images.unsplash.com/photo-1541014871-22a89a9281e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5NTU4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  card2Action1: undefined,
  date2: undefined,
  card2Action2: undefined,
  card3Content: undefined,
  card3Action1: undefined,
  rootClassName: '',
  card2Content: undefined,
  card1Action1: undefined,
  card1ImageAlt: 'Announcement Image',
  date3: undefined,
  card3ImageSrc:
    'https://images.unsplash.com/photo-1687694574285-3eccd1cd1154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5NTU4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  card4ImageAlt: 'Parade Image',
  card1Title: undefined,
  card3Title: undefined,
  card4Content: undefined,
  card2Title: undefined,
  card4Action1: undefined,
  card4Action2: undefined,
}

Timeline1.propTypes = {
  card1Content: PropTypes.element,
  date4: PropTypes.element,
  card1Action2: PropTypes.element,
  card2ImageSrc: PropTypes.string,
  date1: PropTypes.element,
  card3ImageAlt: PropTypes.string,
  card4ImageSrc: PropTypes.string,
  card4Title: PropTypes.element,
  card2ImageAlt: PropTypes.string,
  card3Action2: PropTypes.element,
  card1ImageSrc: PropTypes.string,
  card2Action1: PropTypes.element,
  date2: PropTypes.element,
  card2Action2: PropTypes.element,
  card3Content: PropTypes.element,
  card3Action1: PropTypes.element,
  rootClassName: PropTypes.string,
  card2Content: PropTypes.element,
  card1Action1: PropTypes.element,
  card1ImageAlt: PropTypes.string,
  date3: PropTypes.element,
  card3ImageSrc: PropTypes.string,
  card4ImageAlt: PropTypes.string,
  card1Title: PropTypes.element,
  card3Title: PropTypes.element,
  card4Content: PropTypes.element,
  card2Title: PropTypes.element,
  card4Action1: PropTypes.element,
  card4Action2: PropTypes.element,
}

export default Timeline1

import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline10 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline10-max-width thq-section-max-width">
          <div className="timeline10-container11">
            <h2>
              {props.title1 ?? (
                <Fragment>
                  <h2 className="timeline10-text47 thq-heading-2">
                    Festers i Festeres Guadassuar 2025 Timeline
                  </h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline10-text43 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline10-container12"></div>
          </div>
          <div className="timeline10-timeline-container">
            <div className="timeline10-step1">
              <div className="timeline10-container13">
                <div className="timeline10-container14"></div>
                <img
                  alt={props.imageAlt}
                  src={props.imageSrc}
                  className="timeline10-image1"
                />
                <div className="timeline10-progress01"></div>
              </div>
              <div className="timeline10-container15">
                <h3>
                  {props.card1Date ?? (
                    <Fragment>
                      <h3 className="timeline10-text44 thq-heading-3">
                        January 1, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card1Heading ?? (
                    <Fragment>
                      <h3 className="timeline10-text32 thq-heading-3">
                        Official Announcement of Festers i Festeres Guadassuar
                        2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline10-text36 thq-body-small">
                        The official announcement of the cultural festivity in
                        Guadassuar, Spain, showcasing the rich traditions and
                        vibrant celebrations to come.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container16">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card1Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text33">Learn More</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card1Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text34">
                            Get Involved
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="timeline10-image2"
            />
            <div className="timeline10-step2">
              <div className="timeline10-container17">
                <h3>
                  {props.card2Date ?? (
                    <Fragment>
                      <h3 className="timeline10-text35 thq-heading-3">
                        February 15, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card2Heading ?? (
                    <Fragment>
                      <h3 className="timeline10-text40 thq-heading-3">
                        Ticket Sales Open
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline10-text49 thq-body-small">
                        Tickets for the various events and activities during
                        Festers i Festeres Guadassuar 2025 are now available for
                        purchase.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container18">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card2Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text48">Buy Tickets</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card2Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text53">
                            Explore Events
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
              <div className="timeline10-container19">
                <div className="timeline10-container20"></div>
                <div className="timeline10-progress02"></div>
              </div>
            </div>
            <div className="timeline10-step3">
              <div className="timeline10-container21">
                <div className="timeline10-container22"></div>
                <div className="timeline10-progress03"></div>
              </div>
              <div className="timeline10-container23">
                <h3>
                  {props.card3Date ?? (
                    <Fragment>
                      <h3 className="timeline10-text39 thq-heading-3">
                        March 30, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card3Heading ?? (
                    <Fragment>
                      <h3 className="timeline10-text52 thq-heading-3">
                        Raffle Kickoff
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline10-text38 thq-body-small">
                        Participate in the raffle for a chance to win exciting
                        prizes and support the cultural festivity in Guadassuar.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container24">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card3Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text51">
                            Enter Raffle
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card3Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text42">View Prizes</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="timeline10-image3"
            />
            <div className="timeline10-step4">
              <div className="timeline10-container25">
                <div className="timeline10-container26"></div>
                <div className="timeline10-progress04"></div>
              </div>
              <div className="timeline10-container27">
                <h3>
                  {props.card4Date ?? (
                    <Fragment>
                      <h3 className="timeline10-text50 thq-heading-3">
                        April 20, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card4Heading ?? (
                    <Fragment>
                      <h3 className="timeline10-text45 thq-heading-3">
                        Grand Finale Celebration
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline10-text41 thq-body-small">
                        Join us for the grand finale celebration of Festers i
                        Festeres Guadassuar 2025 featuring traditional dances,
                        music performances, and local cuisine.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline10-container28">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.card4Action1 ?? (
                        <Fragment>
                          <span className="timeline10-text37">Get Tickets</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-outline">
                    <span>
                      {props.card4Action2 ?? (
                        <Fragment>
                          <span className="timeline10-text46">
                            Explore Activities
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline10-max-width {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline10-container11 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .timeline10-container12 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-timeline-container {
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline10-step1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .timeline10-container13 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-image1 {
            left: 104px;
            width: 270px;
            bottom: 13px;
            height: 261px;
            position: absolute;
            max-width: 30%;
            align-self: flex-start;
            max-height: 90%;
            object-fit: cover;
          }
          .timeline10-progress01 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-container15 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline10-container16 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-image2 {
            top: 289px;
            left: 641px;
            width: 277px;
            height: 249px;
            position: absolute;
            max-width: 30%;
            align-self: flex-end;
            max-height: 90%;
            object-fit: cover;
          }
          .timeline10-step2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline10-container17 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-end;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline10-container18 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-container19 {
            top: 0px;
            flex: 1;
            left: 0px;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container20 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-progress02 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-step3 {
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .timeline10-container21 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container22 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-progress03 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-container23 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-start;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline10-container24 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-image3 {
            width: flex;
            max-width: 30%;
            align-self: flex-start;
            max-height: 90%;
            object-fit: cover;
            margin-left: 10%;
          }
          .timeline10-step4 {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .timeline10-container25 {
            flex: 1;
            left: 0;
            right: 0;
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline10-container26 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-progress04 {
            height: 100%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 2px;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .timeline10-container27 {
            gap: var(--dl-space-space-unit);
            width: 50%;
            display: flex;
            align-items: flex-end;
            padding-top: 0px;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline10-container28 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline10-text32 {
            display: inline-block;
            text-align: left;
          }
          .timeline10-text33 {
            display: inline-block;
          }
          .timeline10-text34 {
            display: inline-block;
          }
          .timeline10-text35 {
            display: inline-block;
          }
          .timeline10-text36 {
            display: inline-block;
          }
          .timeline10-text37 {
            display: inline-block;
          }
          .timeline10-text38 {
            display: inline-block;
          }
          .timeline10-text39 {
            display: inline-block;
          }
          .timeline10-text40 {
            display: inline-block;
            text-align: right;
          }
          .timeline10-text41 {
            display: inline-block;
            text-align: right;
          }
          .timeline10-text42 {
            display: inline-block;
          }
          .timeline10-text43 {
            display: inline-block;
            text-align: center;
          }
          .timeline10-text44 {
            display: inline-block;
          }
          .timeline10-text45 {
            display: inline-block;
            text-align: right;
          }
          .timeline10-text46 {
            display: inline-block;
          }
          .timeline10-text47 {
            display: inline-block;
            text-align: center;
          }
          .timeline10-text48 {
            display: inline-block;
          }
          .timeline10-text49 {
            display: inline-block;
            text-align: right;
          }
          .timeline10-text50 {
            display: inline-block;
          }
          .timeline10-text51 {
            display: inline-block;
          }
          .timeline10-text52 {
            display: inline-block;
            text-align: left;
          }
          .timeline10-text53 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .timeline10-container13 {
              right: auto;
            }
            .timeline10-container15 {
              width: 100%;
              padding-left: var(--dl-space-space-threeunits);
            }
            .timeline10-container17 {
              width: 100%;
              align-items: flex-start;
              padding-left: var(--dl-space-space-threeunits);
            }
            .timeline10-container19 {
              right: auto;
            }
            .timeline10-container21 {
              right: auto;
            }
            .timeline10-container23 {
              width: 100%;
              padding-left: var(--dl-space-space-threeunits);
            }
            .timeline10-container25 {
              right: auto;
            }
            .timeline10-container27 {
              width: 100%;
              align-items: flex-start;
              padding-left: var(--dl-space-space-threeunits);
            }
            .timeline10-text32 {
              text-align: left;
            }
            .timeline10-text40 {
              text-align: left;
            }
            .timeline10-text41 {
              text-align: left;
            }
            .timeline10-text43 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline10-text45 {
              text-align: left;
            }
            .timeline10-text49 {
              text-align: left;
            }
            .timeline10-text52 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline10-container12 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container16 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container18 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container24 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline10-container28 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Timeline10.defaultProps = {
  imageSrc2: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  card1Heading: undefined,
  card1Action1: undefined,
  card1Action2: undefined,
  imageAlt1: 'image',
  card2Date: undefined,
  card1Content: undefined,
  card4Action1: undefined,
  imageAlt2: 'image',
  card3Content: undefined,
  card3Date: undefined,
  card2Heading: undefined,
  card4Content: undefined,
  card3Action2: undefined,
  content1: undefined,
  card1Date: undefined,
  card4Heading: undefined,
  card4Action2: undefined,
  title1: undefined,
  card2Action1: undefined,
  card2Content: undefined,
  card4Date: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  card3Action1: undefined,
  card3Heading: undefined,
  imageAlt: 'image',
  card2Action2: undefined,
}

Timeline10.propTypes = {
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  card1Heading: PropTypes.element,
  card1Action1: PropTypes.element,
  card1Action2: PropTypes.element,
  imageAlt1: PropTypes.string,
  card2Date: PropTypes.element,
  card1Content: PropTypes.element,
  card4Action1: PropTypes.element,
  imageAlt2: PropTypes.string,
  card3Content: PropTypes.element,
  card3Date: PropTypes.element,
  card2Heading: PropTypes.element,
  card4Content: PropTypes.element,
  card3Action2: PropTypes.element,
  content1: PropTypes.element,
  card1Date: PropTypes.element,
  card4Heading: PropTypes.element,
  card4Action2: PropTypes.element,
  title1: PropTypes.element,
  card2Action1: PropTypes.element,
  card2Content: PropTypes.element,
  card4Date: PropTypes.element,
  imageSrc: PropTypes.string,
  card3Action1: PropTypes.element,
  card3Heading: PropTypes.element,
  imageAlt: PropTypes.string,
  card2Action2: PropTypes.element,
}

export default Timeline10

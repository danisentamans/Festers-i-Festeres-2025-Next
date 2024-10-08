import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Timeline6 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="timeline6-max-width thq-section-max-width">
          <div className="timeline6-container11">
            <h2>
              {props.title1 ?? (
                <Fragment>
                  <h2 className="timeline6-text32 thq-heading-2">Timeline</h2>
                </Fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <Fragment>
                  <span className="timeline6-text26 thq-body-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </span>
                </Fragment>
              )}
            </span>
            <div className="timeline6-container12">
              <button type="button" className="thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="timeline6-text28">Primary action</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button type="button" className="thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="timeline6-text36">Seconday action</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="timeline6-timeline-container">
            <div className="timeline6-step1">
              <div className="timeline6-container13">
                <div className="timeline6-container14"></div>
                <div className="timeline6-progress01"></div>
              </div>
              <div className="timeline6-container15">
                <h3>
                  {props.card1Date ?? (
                    <Fragment>
                      <h3 className="timeline6-text34 thq-heading-3">
                        June 1, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card1Heading ?? (
                    <Fragment>
                      <h3 className="timeline6-text31 thq-heading-3">
                        Opening Parade
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card1Content ?? (
                    <Fragment>
                      <span className="timeline6-text39 thq-body-small">
                        Join us for the colorful opening parade through the
                        streets of Guadassuar, featuring traditional music and
                        dance performances.
                      </span>
                    </Fragment>
                  )}
                </span>
                <img
                  alt={props.card1ImageAlt}
                  src={props.card1ImageSrc}
                  className="timeline6-image1 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline6-step2">
              <div className="timeline6-container16">
                <div className="timeline6-container17"></div>
                <div className="timeline6-progress02"></div>
              </div>
              <div className="timeline6-container18">
                <h3>
                  {props.card2Date ?? (
                    <Fragment>
                      <h3 className="timeline6-text38 thq-heading-3">
                        June 2-4, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card2Heading ?? (
                    <Fragment>
                      <h3 className="timeline6-text30 thq-heading-3">
                        Workshops and Cultural Activities
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card2Content ?? (
                    <Fragment>
                      <span className="timeline6-text29 thq-body-small">
                        Participate in various workshops and cultural activities
                        to immerse yourself in the rich heritage of Guadassuar.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline6-container19"></div>
                <img
                  alt={props.card2ImageAlt}
                  src={props.card2ImageSrc}
                  className="timeline6-image2 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline6-step3">
              <div className="timeline6-container20">
                <div className="timeline6-container21"></div>
                <div className="timeline6-progress03"></div>
              </div>
              <div className="timeline6-container22">
                <h3>
                  {props.card3Date ?? (
                    <Fragment>
                      <h3 className="timeline6-text40 thq-heading-3">
                        June 5, 2025
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card3Heading ?? (
                    <Fragment>
                      <h3 className="timeline6-text37 thq-heading-3">
                        Closing Gala
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card3Content ?? (
                    <Fragment>
                      <span className="timeline6-text35 thq-body-small">
                        Don&apos;t miss the grand finale gala night filled with
                        performances, awards, and a celebration of
                        Guadassuar&apos;s culture.
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline6-container23"></div>
                <img
                  alt={props.card3ImageAlt}
                  src={props.card3ImageSrc}
                  className="timeline6-image3 thq-img-ratio-1-1"
                />
              </div>
            </div>
            <div className="timeline6-step4">
              <div className="timeline6-container24">
                <div className="timeline6-container25"></div>
                <div className="timeline6-progress04"></div>
              </div>
              <div className="timeline6-container26">
                <h3>
                  {props.card4Date ?? (
                    <Fragment>
                      <h3 className="timeline6-text33 thq-heading-3">
                        23/04/2023
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <h3>
                  {props.card4Heading ?? (
                    <Fragment>
                      <h3 className="timeline6-text41 thq-heading-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </h3>
                    </Fragment>
                  )}
                </h3>
                <span>
                  {props.card4Content ?? (
                    <Fragment>
                      <span className="timeline6-text27 thq-body-small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="timeline6-container27"></div>
                <img
                  alt={props.card4ImageAlt}
                  src={props.card4ImageSrc}
                  className="timeline6-image4 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .timeline6-max-width {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline6-container11 {
            gap: var(--dl-space-space-twounits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline6-container12 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .timeline6-timeline-container {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .timeline6-step1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline6-container13 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline6-container14 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline6-progress01 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline6-container15 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline6-image1 {
            width: 50%;
            height: 50%;
          }
          .timeline6-step2 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline6-container16 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline6-container17 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline6-progress02 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline6-container18 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline6-container19 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline6-image2 {
            height: auto;
          }
          .timeline6-step3 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline6-container20 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline6-container21 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline6-progress03 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline6-container22 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline6-container23 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline6-image3 {
            height: auto;
          }
          .timeline6-step4 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .timeline6-container24 {
            flex: 1;
            left: var(--dl-space-space-halfunit);
            width: auto;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .timeline6-container25 {
            width: 12px;
            height: 12px;
            margin: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-round);
            background-color: #000000;
          }
          .timeline6-progress04 {
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #000000;
          }
          .timeline6-container26 {
            gap: var(--dl-space-space-unit);
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .timeline6-container27 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .timeline6-image4 {
            height: auto;
          }
          .timeline6-text26 {
            display: inline-block;
            text-align: left;
          }
          .timeline6-text27 {
            display: inline-block;
          }
          .timeline6-text28 {
            display: inline-block;
          }
          .timeline6-text29 {
            display: inline-block;
          }
          .timeline6-text30 {
            display: inline-block;
            text-align: left;
          }
          .timeline6-text31 {
            display: inline-block;
            text-align: left;
          }
          .timeline6-text32 {
            display: inline-block;
            text-align: left;
          }
          .timeline6-text33 {
            display: inline-block;
          }
          .timeline6-text34 {
            display: inline-block;
          }
          .timeline6-text35 {
            display: inline-block;
          }
          .timeline6-text36 {
            display: inline-block;
          }
          .timeline6-text37 {
            display: inline-block;
            text-align: left;
          }
          .timeline6-text38 {
            display: inline-block;
          }
          .timeline6-text39 {
            display: inline-block;
          }
          .timeline6-text40 {
            display: inline-block;
          }
          .timeline6-text41 {
            display: inline-block;
            text-align: left;
          }
          @media (max-width: 991px) {
            .timeline6-max-width {
              gap: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 767px) {
            .timeline6-max-width {
              flex-direction: column;
            }
            .timeline6-container11 {
              width: 100%;
            }
            .timeline6-timeline-container {
              width: 100%;
            }
            .timeline6-text26 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .timeline6-text30 {
              text-align: left;
            }
            .timeline6-text31 {
              text-align: left;
            }
            .timeline6-text37 {
              text-align: left;
            }
            .timeline6-text41 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .timeline6-max-width {
              padding: var(--dl-space-space-unit);
            }
            .timeline6-container12 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline6-container19 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline6-container23 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .timeline6-container27 {
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

Timeline6.defaultProps = {
  card1ImageSrc:
    'https://images.unsplash.com/photo-1713810744123-3e9f1568e41c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5ODQwMXw&ixlib=rb-4.0.3&q=80&w=200',
  card2ImageSrc:
    'https://images.unsplash.com/photo-1685049974664-faf615886970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5ODQwMXw&ixlib=rb-4.0.3&q=80&w=1080',
  card4ImageSrc:
    'https://images.unsplash.com/photo-1701959408221-35d2abbaa9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5ODQwMHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  card4Content: undefined,
  action1: undefined,
  card3ImageSrc:
    'https://images.unsplash.com/photo-1703394078365-e9859ef4581c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5ODQwMXw&ixlib=rb-4.0.3&q=80&w=1080',
  card2Content: undefined,
  card2Heading: undefined,
  card1Heading: undefined,
  title1: undefined,
  card4Date: undefined,
  card1Date: undefined,
  card3Content: undefined,
  card4ImageAlt: 'image',
  card2ImageAlt: 'Image of Workshop',
  action2: undefined,
  card3Heading: undefined,
  card3ImageAlt: 'Image of Closing Gala',
  card2Date: undefined,
  card1Content: undefined,
  card1ImageAlt: 'Image of Opening Parade',
  card3Date: undefined,
  card4Heading: undefined,
}

Timeline6.propTypes = {
  card1ImageSrc: PropTypes.string,
  card2ImageSrc: PropTypes.string,
  card4ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  card4Content: PropTypes.element,
  action1: PropTypes.element,
  card3ImageSrc: PropTypes.string,
  card2Content: PropTypes.element,
  card2Heading: PropTypes.element,
  card1Heading: PropTypes.element,
  title1: PropTypes.element,
  card4Date: PropTypes.element,
  card1Date: PropTypes.element,
  card3Content: PropTypes.element,
  card4ImageAlt: PropTypes.string,
  card2ImageAlt: PropTypes.string,
  action2: PropTypes.element,
  card3Heading: PropTypes.element,
  card3ImageAlt: PropTypes.string,
  card2Date: PropTypes.element,
  card1Content: PropTypes.element,
  card1ImageAlt: PropTypes.string,
  card3Date: PropTypes.element,
  card4Heading: PropTypes.element,
}

export default Timeline6

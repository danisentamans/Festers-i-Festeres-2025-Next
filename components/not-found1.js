import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const NotFound1 = (props) => {
  return (
    <>
      <div className="not-found1-container1 thq-section-padding">
        <div className="not-found1-max-width thq-section-max-width">
          <div className="not-found1-container2">
            <h1>
              {props.heading1 ?? (
                <Fragment>
                  <h1 className="not-found1-text5 thq-heading-2">Ooops...</h1>
                </Fragment>
              )}
            </h1>
            <h2>
              {props.heading2 ?? (
                <Fragment>
                  <h2 className="not-found1-text8 thq-heading-2">
                    Page not found
                  </h2>
                </Fragment>
              )}
            </h2>
            <button className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="not-found1-text7 thq-body-small">
                      Back to homepage
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
          <div className="not-found1-container3">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="not-found1-image"
            />
            <div className="not-found1-container4"></div>
            <div className="not-found1-container5">
              <h1>
                {props.heading3 ?? (
                  <Fragment>
                    <h1 className="not-found1-text9 thq-heading-2">404</h1>
                  </Fragment>
                )}
              </h1>
              <span>
                {props.content2 ?? (
                  <Fragment>
                    <span className="not-found1-text6 thq-body-large">
                      Page not found
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .not-found1-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .not-found1-max-width {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .not-found1-container2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 60%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .not-found1-container3 {
            flex: 1;
            height: 100%;
            display: flex;
            position: relative;
            min-height: 400px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found1-image {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .not-found1-container4 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.7);
          }
          .not-found1-container5 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found1-text5 {
            display: inline-block;
          }
          .not-found1-text6 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
          }
          .not-found1-text7 {
            display: inline-block;
          }
          .not-found1-text8 {
            display: inline-block;
            font-style: normal;
            font-weight: 400;
          }
          .not-found1-text9 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
          }
          @media (max-width: 767px) {
            .not-found1-container1 {
              align-items: center;
              justify-content: center;
            }
            .not-found1-container2 {
              width: 100%;
              align-items: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .not-found1-container3 {
              display: none;
            }
            .not-found1-text5 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .not-found1-container1 {
              height: auto;
            }
            .not-found1-container2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

NotFound1.defaultProps = {
  heading1: undefined,
  content2: undefined,
  image1Alt: 'image',
  action1: undefined,
  heading2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1685049974664-faf615886970?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI5MzE2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading3: undefined,
}

NotFound1.propTypes = {
  heading1: PropTypes.element,
  content2: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  heading2: PropTypes.element,
  image1Src: PropTypes.string,
  heading3: PropTypes.element,
}

export default NotFound1

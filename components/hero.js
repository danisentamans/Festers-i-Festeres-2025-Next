import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className={`hero-header78 ${props.rootClassName} `}>
        <div className="hero-column thq-section-max-width thq-section-padding">
          <div className="hero-content1">
            <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
            <p className="hero-text2 thq-body-large">{props.content1}</p>
          </div>
          <div className="hero-actions"></div>
        </div>
        <div className="hero-content2">
          <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal">
              <img
                alt={props.image1Alt}
                src="/divmessept.jpg"
                className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src="/danses1.jpg"
                className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src="/esmorsar1.jpg"
                className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src="/bousalgemesi.jpg"
                className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src="/divmesoctubre.jpg"
                className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src="/donesdivmes.jpg"
                className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src="/esmorsar1bis.jpg"
                className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src="/festeres.jpg"
                className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src="/guiris.jpg"
                className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src="/primerdinar.jpg"
                className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src="/skandalo.jpg"
                className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image12Alt}
                src="/pare_noel.jpg"
                className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
          <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
            <div className="thq-animated-group-horizontal-reverse">
              <img
                alt={props.image1Alt}
                src="/xarangaforn.jpg"
                className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image2Alt}
                src="/xarangultimdia.jpg"
                className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image3Alt}
                src="/paello.jpg"
                className="hero-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image4Alt}
                src="/gaspaxa.jpg"
                className="hero-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image5Alt}
                src="/quinatana.jpg"
                className="hero-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image6Alt}
                src="/donesbis.jpg"
                className="hero-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image7Alt}
                src="/cumples.jpg"
                className="hero-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image8Alt}
                src="/pare_noel2.jpg"
                className="hero-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image9Alt}
                src="/sanroc.jpg"
                className="hero-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image10Alt}
                src="/balldanses.jpg"
                className="hero-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image11Alt}
                src="/misa.jpg"
                className="hero-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
              />
              <img
                alt={props.image12Alt}
                src="/primer_div_febrer.jpg"
                className="hero-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="hero-container2">
            <React.Fragment>
              <React.Fragment>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n  @keyframes scroll-x {\n    from {\n      transform: translateX(0);\n    }\n    to {\n      transform: translateX(calc(-100% - 16px));\n    }\n  }\n\n  @keyframes scroll-y {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(calc(-100% - 16px));\n    }\n  }\n',
                  }}
                />
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text1 {
            text-align: center;
          }
          .hero-text2 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .hero-row-container1 {
            width: 100%;
          }
          .hero-placeholder-image10 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image11 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image12 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image13 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image14 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image15 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image16 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image17 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image18 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image19 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image20 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image21 {
            width: 400px;
            height: 400px;
          }
          .hero-row-container2 {
            width: 100%;
          }
          .hero-placeholder-image22 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image23 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image24 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image25 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image26 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image27 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image28 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image29 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image30 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image31 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image32 {
            width: 400px;
            height: 400px;
          }
          .hero-placeholder-image33 {
            width: 400px;
            height: 400px;
          }
          .hero-container2 {
            display: contents;
          }
          .heroroot-class-name {
            top: 112px;
            left: 0px;
            position: static;
            align-self: flex-start;
          }
          @media (max-width: 767px) {
            .hero-content2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  image5Alt: 'Image 5 Alt Text',
  image2Src:
    'https://images.unsplash.com/photo-1468779036391-52341f60b55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Image 7 Alt Text',
  image8Alt: 'Image 8 Alt Text',
  image11Alt: 'Image 11 Alt Text',
  image3Alt: 'Image 3 Alt Text',
  content1:
    'Join us in celebrating the rich traditions and vibrant culture of our festivity.',
  heading1: 'Welcome to Festers i Festeres Guadassuar 2025!',
  image12Src:
    'https://images.unsplash.com/photo-1473181488821-2d23949a045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1487611459768-bd414656ea10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1555883006-0f5a0915a80f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1485178075098-49f78b4b43b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  image10Src:
    'https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1494386346843-e12284507169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Alt: 'Image 12 Alt Text',
  image7Src:
    'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Alt: 'Image 4 Alt Text',
  image10Alt: 'Image 10 Alt Text',
  image1Src:
    'https://images.unsplash.com/photo-1555883006-37d106604feb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMnw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Image 9 Alt Text',
  image1Alt: 'Image 1 Alt Text',
  image5Src:
    'https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Image 6 Alt Text',
  image2Alt: 'Image 2 Alt Text',
  image3Src:
    'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyODI4NzUyOHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image5Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image12Src: PropTypes.string,
  image4Src: PropTypes.string,
  image11Src: PropTypes.string,
  image9Src: PropTypes.string,
  rootClassName: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
  image6Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
}

export default Hero

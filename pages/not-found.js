import React, { Fragment } from 'react'
import Head from 'next/head'

import NotFound1 from '../components/not-found1'

const NotFound1 = (props) => {
  return (
    <>
      <div className="not-found1-container">
        <Head>
          <title>
            Festers i Festeres Guadassuar 2025 - Eventos, Rifas y Celebraciones
          </title>
        </Head>
        <NotFound1
          action1={
            <Fragment>
              <span className="not-found1-text1 thq-body-small">
                Back to homepage
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="not-found1-text2 thq-body-large">
                <span>Página no encontrada</span>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="not-found1-text5 thq-heading-2">Ooops...</span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="not-found1-text6 thq-heading-2">
                <span>Página no encontrada</span>
                <br></br>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="not-found1-text9 thq-heading-2">404</span>
            </Fragment>
          }
        ></NotFound1>
      </div>
      <style jsx>
        {`
          .not-found1-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .not-found1-text1 {
            display: inline-block;
          }
          .not-found1-text2 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
          }
          .not-found1-text5 {
            display: inline-block;
          }
          .not-found1-text6 {
            display: inline-block;
            font-style: normal;
            font-weight: 400;
          }
          .not-found1-text9 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
          }
          @media (max-width: 767px) {
            .not-found1-text5 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default NotFound1

import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Timeline11 from '../components/timeline11'
import Features2 from '../components/features2'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Festers i Festeres Guadassuar 2025 - Eventos, Rifas y Celebraciones
          </title>
        </Head>
        <Navbar
          link1="Inici"
          link2="Festes"
          link3="Rifa"
          link4="Presidents"
          link5="Contacte"
          logoSrc="/imagen-1500h.webp"
        ></Navbar>
        <Hero
          content1="En aquesta página podràs informarte de tot el que necessites per a gaudir del millor any de la teua vida!"
          heading1="Benvingut a la pàgina dels Festers de Sant Roc i Festeres de la Assumpció de Guadassuar 2025!"
          image1Src="/eliminar-1500w.webp"
          rootClassName="heroroot-class-name"
        ></Hero>
        <h1 id="upcoming-events">Pròximes Festes</h1>
        <Timeline11
          date1={
            <Fragment>
              <span className="home-text11 thq-body-small">12 d'octubre '24</span>
            </Fragment>
          }
          date2={
            <Fragment>
              <span className="home-text14 thq-body-small">30 de novembre '24</span>
            </Fragment>
          }
          date3={
            <Fragment>
              <span className="home-text15 thq-body-small">Carregant...</span>
            </Fragment>
          }
          date4={
            <Fragment>
              <span className="home-text16 thq-body-small">Carregant...</span>
            </Fragment>
          }
          card1Title={
            <Fragment>
              <span className="home-text17 thq-heading-3">OktoberFest</span>
            </Fragment>
          }
          card2Title={
            <Fragment>
              <span className="home-text18 thq-heading-3">
                Espereu per a gaudirles...
              </span>
            </Fragment>
          }
          card3Title={
            <Fragment>
              <span className="home-text19 thq-heading-3">
                Espereu per a gaudirles...
              </span>
            </Fragment>
          }
          card4Title={
            <Fragment>
              <span className="home-text20 thq-heading-3">Espereu per a gaudirles...</span>
            </Fragment>
          }
          card1Content={
            <Fragment>
              <span className="home-text21 thq-body-small">
                La millor festa de la cervesa de tota la Comunitat Valenciana te
                espera, vine a catar les nostres cerveses i tapes!
              </span>
            </Fragment>
          }
          card2Action1={
            <Fragment>
              <span className="home-text22">See Route Map</span>
            </Fragment>
          }
          card2Action2={
            <Fragment>
              <span className="home-text23">Join the Competition</span>
            </Fragment>
          }
          card2Content={
            <Fragment>
              <span className="home-text24 thq-body-small">
                Carregant les millors festes per a vosaltres!
              </span>
            </Fragment>
          }
          card3Action1={
            <Fragment>
              <span className="home-text25">View Workshop Schedule</span>
            </Fragment>
          }
          card3Action2={
            <Fragment>
              <span className="home-text26">Register Now</span>
            </Fragment>
          }
          card3Content={
            <Fragment>
              <span className="home-text27 thq-body-small">
                Carregant les millors festes per a vosaltres!
              </span>
            </Fragment>
          }
          card4Action1={
            <Fragment>
              <span className="home-text28">Gala Highlights</span>
            </Fragment>
          }
          card4Action2={
            <Fragment>
              <span className="home-text29">Buy Gala Tickets</span>
            </Fragment>
          }
          card4Content={
            <Fragment>
              <span className="home-text30 thq-body-small">
                Carregant les millors festes per a vosaltres!
              </span>
            </Fragment>
          }
        ></Timeline11>
        {/* <Features2></Features2> */}
        {/* Sección de Steps con ID "steps" */}
        <div id="steps">
          <Steps />
        </div>
        <div id="testimonial">
          <Testimonial
            content1="Presidents que ens faran gaudir d'aquetes festes"
            heading1="Presidents"
            author1Name="Paula"
            review1="La força imparable que porta l'alegria i la passió a cada racó de Guadassuar!"
            author1Position="Presidenta"
            author2Name="Jose Manuel"
            review2="El lideratge tranquil que uneix tradició i festa amb un somriure contagiós!"
            author2Position="President"
            author3Name="Laia"
            review3="La llum que fa brillar cada celebració amb la seua energia i entusiasme inesgotable!"
            author3Position="Vicepresidenta"
            author4Name="Miguel"
            review4="El cor valent que transforma cada moment en una explosió de diversió i germanor!"
            author4Position="Vicepresident"
          ></Testimonial>
        </div>
        <div id="contact">
          <Contact></Contact>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text14 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .home-text15 {
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .home-text16 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            opacity: 0.35;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
            text-align: left;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
            text-align: left;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
            text-align: left;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
            text-align: left;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
            text-align: left;
          }
          @media (max-width: 767px) {
            .home-text34 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text40 {
              text-align: left;
            }
            .home-text42 {
              text-align: left;
            }
            .home-text44 {
              text-align: left;
            }
            .home-text46 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home

import React from "react"

import Container from "../components/Container"

import HeroStyles from "./HomeHero.module.scss"
import RowStyles from "../components/Row.module.scss"
import thinArrowRight from "../img/right-arrow.svg"

class HomeHero extends React.Component {
  render() {
    return (
      <div className={HeroStyles.homeHero}>
        {/* Hero will be a layout component */}
        <Container>
          <div className={RowStyles.row}>
            <div className="col-sm-12">
              <div className={HeroStyles.heroContent + " hero-content"}>
                <div className={HeroStyles.accentBlock + " accent-block"}>
                  <div
                    className={
                      HeroStyles.borderHorizontal +
                      " " +
                      HeroStyles.borderTopLeft +
                      " border-horizontal border-top-left"
                    }
                  />
                  <div
                    className={
                      HeroStyles.borderHorizontal +
                      " " +
                      HeroStyles.borderTopRight +
                      " border-horizontal border-top-right"
                    }
                  />
                  <div
                    className={
                      HeroStyles.borderHorizontal +
                      " " +
                      HeroStyles.borderBottomLeft +
                      " border-horizontal border-bottom-left"
                    }
                  />
                  <div
                    className={
                      HeroStyles.borderHorizontal +
                      " " +
                      HeroStyles.borderBottomRight +
                      " border-horizontal border-bottom-right"
                    }
                  />
                  <div
                    className={
                      HeroStyles.borderVertical +
                      " " +
                      HeroStyles.borderLeftTop +
                      " border-vertical border-left-top"
                    }
                  />
                  <div
                    className={
                      HeroStyles.borderVertical +
                      " " +
                      HeroStyles.borderRightTop +
                      " border-vertical border-right-top"
                    }
                  />
                  <div
                    className={
                      HeroStyles.borderVertical +
                      " " +
                      HeroStyles.borderLeftBottom +
                      " border-vertical border-left-bottom"
                    }
                  />
                  <div
                    className={
                      HeroStyles.borderVertical +
                      " " +
                      HeroStyles.borderRightBottom +
                      " border-vertical border-right-bottom"
                    }
                  />
                  <h1>
                    <span>The Leader in</span> New Patient Acquisitions
                  </h1>
                  <div
                    className={
                      HeroStyles.accentedParagraph + " accented-paragraph"
                    }
                  >
                    <p>
                      Doctor Genius offers high-end web marketing services to
                      health care professionals throughout the United States.
                      Learn how we funnel traffic to converted patients directly
                      to your practice.
                    </p>
                  </div>
                </div>
                <div className={HeroStyles.demoCta + " demo-cta"}>
                  <a href="/demo" className="button flat white-text">
                    Request Demo <img src={thinArrowRight} alt="Arrow Right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default HomeHero

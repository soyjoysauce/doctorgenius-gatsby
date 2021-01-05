import React from "react"

import Container from "../components/Container"

import HeroStyles from "./Hero.module.scss"
import RowStyles from "../components/Row.module.scss"

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div
        className={
          HeroStyles.hero + " " + HeroStyles[this.props.pageType] + " hero"
        }
      >
        {/* Hero will be a layout component */}

        <Container>
          <div className={RowStyles.row + " valign-wrapper"}>
            <div className="col-sm-12">
              <div
                className={
                  HeroStyles.heroContent +
                  " " +
                  HeroStyles.accentBlock +
                  " hero-content accent-block"
                }
              >
                <h1>{this.props.strapline}</h1>
                <h2>{this.props.title}</h2>
                <div
                  className={
                    HeroStyles.accentedParagraph + " accented-paragraph"
                  }
                >
                  <p>{this.props.content}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}

export default Hero

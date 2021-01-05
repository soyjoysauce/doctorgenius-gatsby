/* Ref:
https://kenwheeler.github.io/slick/
https://github.com/kenwheeler/slick/
https://github.com/akiran/react-slick
*/

import React from "react"
import Slider from "react-slick"

import quoteMark from "../img/quote-mark.svg"

import styles from "./testimonials-slider.module.scss"

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: null,
    }
  }

  componentDidMount() {
    const cardContentWrapper = this.cardContentWrapper
    const cardContent = this.cardContent
    const cardContentWrapperHeight = cardContentWrapper.clientHeight
    const cardContentHeight = cardContent.clientHeight

    if (cardContentHeight > cardContentWrapperHeight) {
      this.setState({ open: false })
    } else {
      this.setState({ open: null })
    }
  }

  render() {
    const card = this.props.card

    return (
      <div
        className={
          this.state.open === null
            ? ""
            : this.state.open
            ? styles.open
            : styles.closed
        }
      >
        <div className={styles.card}>
          <div className={styles.quoteWrapper}>
            <img
              className={styles.quoteMark}
              src={quoteMark}
              alt="Quote Symbol"
            />
          </div>
          <div
            className={styles.cardContentWrapper}
            ref={cardContentWrapper =>
              (this.cardContentWrapper = cardContentWrapper)
            }
          >
            <div className={styles.cardCopyHolder}>
              <div
                className={styles.copy}
                dangerouslySetInnerHTML={{
                  __html: card.cardContent.quote,
                }}
                ref={cardContent => (this.cardContent = cardContent)}
              />
            </div>
            <div className={styles.moreLink}>
              <button
                className="moreTrigger"
                onClick={() => this.setState({ open: !this.state.open })}
                style={{
                  color: "#0576cd",
                  background: "none",
                  border: "none",
                  outline: "none",
                }}
              >
                {this.state.open ? "LESS" : "MORE"}
              </button>
            </div>
          </div>

          <div className={styles.detailsFooter}>
            <div className={styles.imageArea}>
              <div className={styles.imageWrapper}>
                {card.cardContent.image && (
                  <img
                    className={styles.portrait}
                    src={card.cardContent.image}
                    alt="A Doctor"
                    style={{ height: "85px" }}
                  />
                )}
                {!card.cardContent.image &&
                  card.cardContent.imageFallback.content && (
                    <div className={styles.imageFallback}>
                      <h5>{card.cardContent.imageFallback.content}</h5>
                    </div>
                  )}

                {/* JS shortcircuit to conditionally render the location*/}
                {card.cardContent.location !== "" && (
                  <p className={styles.location}>{card.cardContent.location}</p>
                )}
              </div>
            </div>
            <div className={styles.authorArea}>
              <p className={styles.author}>{card.cardContent.author}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default class TestimonialsSlider extends React.Component {
  /*constructor(props) {
    super(props)
  } */

  render() {
    const settings = {
      centerPadding: "28%",
      centerMode: true,
      dots: true,
      dotsClass: styles.slickDots + " slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            centerPadding: "17%",
          },
        },
        {
          breakpoint: 1300,
          settings: {
            centerPadding: "15%",
          },
        },
        {
          breakpoint: 991,
          settings: {
            centerPadding: "10%",
          },
        },
        {
          breakpoint: 880,
          settings: {
            centerPadding: "6%",
          },
        },
        {
          breakpoint: 767,
          settings: {
            centerPadding: "4%",
          },
        },
      ],
    }

    return (
      <div className={styles.testimonialsSlider}>
        <Slider className={styles.cardSlider} {...settings}>
          {this.props.cards.map(card => (
            <div className={styles.cardWrapper} key={card.cardContent.author}>
              <Card card={card} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

import React, { Component } from "react"
import styles from "./faq-accordion.module.scss"
//import downChevron from "../img/down-chevron.svg"

export const FAQQuestion = props => <dt>{props.children}</dt>
export const FAQAnswer = props => <dd>{props.children}</dd>

export class FAQ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: props.open === true ? true : false,
    }
  }
  render() {
    return (
      <div
        className={
          (this.state.open === true ? styles.open : styles.closed) +
          " " +
          styles.faq +
          " faqWrapper "
        }
      >
        <div className={styles.faqHeader}>
          <div className={styles.question}>
            <FAQQuestion>{this.props.question}</FAQQuestion>
          </div>
          <button
            className={
              styles.accordionTarget +
              " " +
              styles.accordionTargetRemove +
              " " +
              styles.accordionTargetTransform +
              " " +
              (this.state.open === true
                ? ""
                : styles.accordionTargetRemoveChevronDown)
            }
            onClick={() => this.setState({ open: !this.state.open })}
          >
            <span className={styles.visuallyHidden}>Toggle FAQ</span>
          </button>
        </div>
        <div className={styles.answer}>
          <FAQAnswer>{this.props.answer}</FAQAnswer>
        </div>
      </div>
    )
  }
}

export default class FAQAccordion extends Component {
  /* constructor(props) {
    super(props)
    this.state.active = false
  } */

  render() {
    return <div className="accordionWrapper">{this.props.children}</div>
  }
}

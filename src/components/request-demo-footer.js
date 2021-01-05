import React from "react"

import thinArrowRight from "../img/right-arrow.svg"

import requestDemoFooterStyles from "./request-demo-footer.module.scss"
import RowStyles from "./Row.module.scss"

const requestDemoFooter = ({
  sThin,
  smWidth,
  mdWidth,
  rowID,
  contentBlockID,
  buttonID,
  headerID,
  eventsPage,
}) => {
  if (!eventsPage) {
    return (
      <div
        id={rowID}
        className={
          RowStyles.row +
          " " +
          RowStyles.padded +
          " " +
          RowStyles.tallTop +
          " " +
          RowStyles.tallBottom +
          " " +
          requestDemoFooterStyles.requestDemoFooterStyling
        }
      >
        <div className="col-md-1" />
        <div
          id={contentBlockID}
          className={
            mdWidth
              ? `col-sm-` + smWidth + " " + `col-md-` + mdWidth
              : `col-sm-` + smWidth + " col-md-5"
          }
        >
          <div className={requestDemoFooterStyles.contentBlock}>
            <div>
              <h2 id={headerID}>
                Start your
                <span className={requestDemoFooterStyles.fontWeightSemiBold}>
                  {" "}
                  success{" "}
                </span>
                with Doctor Genius today!
              </h2>
              <div className={requestDemoFooterStyles.accentedParagraph}>
                <p className={sThin && requestDemoFooterStyles.sThin}>
                  The Genius platform makes every part of your company process
                  more efficient. Our support team is very excited to help you
                  and get your company on the right path of success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-sm-` + smWidth + " " + RowStyles.colMd5 + " col-md-5"}
        >
          <div className={requestDemoFooterStyles.center}>
            <a
              id={buttonID}
              href="/demo"
              className={requestDemoFooterStyles.ctaButton}
            >
              Request Demo{" "}
              <img
                className={requestDemoFooterStyles.thinArrowRight}
                src={thinArrowRight}
                alt="Arrow Right"
              />
            </a>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div
        id={rowID}
        className={
          RowStyles.row +
          " " +
          RowStyles.padded +
          " " +
          RowStyles.tallBottom +
          " " +
          RowStyles.tallTop +
          " " +
          requestDemoFooterStyles.requestDemoFooterStylingEvents
        }
      >
        <div className={`col-sm-` + smWidth + " col-md-9 col-lap-5"}>
          <div className={requestDemoFooterStyles.contentBlock}>
            <h2 id={headerID}>
              Start your
              <span className={requestDemoFooterStyles.fontWeightSemiBold}>
                {" "}
                success{" "}
              </span>
              with Doctor Genius today!
            </h2>
            <div className={requestDemoFooterStyles.accentedParagraph}>
              <p>
                The Genius platform makes every part of your company process
                more efficient. Our support team is very excited to help you and
                get your company on the right path of success.
              </p>
            </div>
          </div>
        </div>

        <div className={RowStyles.colMd5 + "col-sm-10 col-md-5 col-lap-5"}>
          <div className={requestDemoFooterStyles.center}>
            <a
              id={buttonID}
              href="/demo"
              className={requestDemoFooterStyles.ctaButton}
            >
              Request Demo{" "}
              <img
                className={requestDemoFooterStyles.thinArrowRight}
                src={thinArrowRight}
                alt="Arrow Right"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default requestDemoFooter

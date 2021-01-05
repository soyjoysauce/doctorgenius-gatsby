import React from "react"

import innerTitleStyles from "./inner-title.module.scss"

/*
<div className="inner-title underlined">
    <h3 className="subheading">Testimonials</h3>
    <h2 >What <span>Clients Are Saying</span></h2>
</div>
*/

const innerTitle = ({
  id,
  underlined,
  title,
  centered,
  strapline,
  subtitle,
  inContentBlock,
  boldText,
  smallText,
}) => {
  // Supports standard inner-title that is Located at the top of a div without being inside a content-block
  const StandardInnerTitle = () => {
    return (
      <div
        className={
          centered
            ? innerTitleStyles.innerTitle + " " + innerTitleStyles.centered
            : innerTitleStyles.innerTitle
        }
      >
        {strapline && (
          <h3 className={innerTitleStyles.strapline}>{strapline}</h3>
        )}
        <h2
          className={
            underlined
              ? innerTitleStyles.underline
              : innerTitleStyles.noUnderline
          }
          id={id}
        >
          {title}
          <span className={innerTitleStyles.boldText}>{boldText}</span>
          {subtitle && (
            <div className={innerTitleStyles.subtitleMuted}>{subtitle}</div>
          )}
        </h2>
      </div>
    )
  }

  //Supports an inner-title that is both inside of a content-block and also has trailing bold text
  const withBoldAndInContentBlock = () => {
    return (
      <div
        className={
          centered
            ? innerTitleStyles.contentBlockInnerTitleWithBold +
              " " +
              innerTitleStyles.centered
            : innerTitleStyles.contentBlockInnerTitleWithBold
        }
      >
        {strapline && (
          <h3 className={innerTitleStyles.strapline}>{strapline}</h3>
        )}
        <h2 id={id} className={smallText && innerTitleStyles.smallText}>
          {title}
          <span className={innerTitleStyles.boldText}>{boldText}</span>
        </h2>

        {subtitle && (
          <div className={innerTitleStyles.subtitleMuted}>{subtitle}</div>
        )}
      </div>
    )
  }

  //Supports a standard inner title that is not in a content-block but has trailing bold text
  const withBoldTextOnly = () => {
    return (
      <div
        className={
          centered
            ? innerTitleStyles.innerTitle + " " + innerTitleStyles.centered
            : innerTitleStyles.innerTitle
        }
      >
        {strapline && (
          <h3 className={innerTitleStyles.strapline}>{strapline}</h3>
        )}
        <h2
          id={id}
          className={
            underlined
              ? innerTitleStyles.underline
              : innerTitleStyles.noUnderline
          }
        >
          {title}
          <span className={innerTitleStyles.boldText}>{boldText}</span>
        </h2>

        {subtitle && (
          <div className={innerTitleStyles.subtitleMuted}>
            <i>{subtitle}</i>
          </div>
        )}
      </div>
    )
  }

  //Supports an inner-title that is in a content-block
  const withContentBlockOnly = () => {
    return (
      <div
        className={
          centered
            ? innerTitleStyles.contentBlockInnerTitle +
              " " +
              innerTitleStyles.centered
            : innerTitleStyles.contentBlockInnerTitle
        }
      >
        {strapline && (
          <h3 className={innerTitleStyles.strapline}>{strapline}</h3>
        )}
        <h2
          id={id}
          className={
            (smallText && innerTitleStyles.smallText,
            underlined && innerTitleStyles.underline)
          }
        >
          {title}
        </h2>

        {subtitle && (
          <div className={innerTitleStyles.subtitleMuted}>
            <i>{subtitle}</i>
          </div>
        )}
      </div>
    )
  }

  if (boldText) {
    if (inContentBlock) {
      return withBoldAndInContentBlock()
    }
    return withBoldTextOnly()
  } else if (inContentBlock) {
    return withContentBlockOnly()
  } else {
    return StandardInnerTitle()
  }
}

export default innerTitle

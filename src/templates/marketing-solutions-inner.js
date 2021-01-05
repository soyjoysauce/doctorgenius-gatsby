import React from "react"
import { Helmet } from "react-helmet"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import MobileSecondaryNav from "../components/MobileSecondaryNav"
import SecondaryNavigation from "../components/SecondaryNavigation"
import InnerTitle from "../components/inner-title.js"
import Hero from "../components/Hero"

import "../styles/marketing-solutions-inner.scss"
import PageStyles from "./marketing-solutions-inner.module.scss"
import RowStyles from "../components/Row.module.scss"

export default props => {
  /* These will likely need to be dynamic props */
  const pageTitle = props.pageTitle
  const pageSubtitle = props.pageSubtitle
  const pageIntro = props.pageIntro
  const metaTitle = props.metaTitle
  const metaDescription = props.metaDescription
  const contentRows = props.contentRows
  const heroBackgroundImage = props.backgroundImage

  const heroConfig = {
    pageType: "marketingSolutionsInner",
    strapline: pageTitle,
    title: pageSubtitle,
    content: pageIntro,
  }

  return (
    <div
      className={
        PageStyles.marketingSolutionsInnerPage + " " + RowStyles.rowStyling
      }
    >
      <DefaultPageLayout>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
        <div className={props.page + " marketing-solutions-inner"}>
          <BackgroundImage fluid={heroBackgroundImage}>
            <Hero
              pageType={heroConfig.pageType}
              strapline={heroConfig.strapline}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              {/* Begin secondary nav Component: */}
              <div className={RowStyles.row}>
                <div className="col-sm-12 panel-row">
                  <SecondaryNavigation
                    pageType="marketingSolutions"
                    pageTitle={props.pageTitle}
                  />
                </div>
              </div>
              {/* End secondary nav Component */}
              {/* Begin mobile secondary navigation component */}
              <MobileSecondaryNav
                parentPage="marketingSolutions"
                titleItem={pageTitle}
              />
              {/* End mobile secondary navigation component */}
              {/* Begin Split Row of content and image */}
              {contentRows.map((row, index) => (
                <div
                  className={
                    (index % 2
                      ? PageStyles.evenRow + " even-row "
                      : PageStyles.oddRow + " odd-row ") +
                    RowStyles.row +
                    " " +
                    RowStyles.padded +
                    " " +
                    RowStyles.shortTop +
                    " " +
                    RowStyles.shortBottom
                  }
                >
                  <div
                    className={
                      (index % 2 ? "order-md-1" : "order-md-1") + " col-md-1"
                    }
                  />
                  <div
                    className={
                      (index % 2
                        ? "order-sm-2 order-md-3"
                        : "order-sm-2 order-md-2") +
                      " col-sm-9 col-md-5 " +
                      RowStyles.colMd5
                    }
                  >
                    <div className="content-block">
                      <div
                        className={PageStyles.iconStrapline + " icon-strapline"}
                      >
                        <img
                          src={row.content.icon.url}
                          className={PageStyles.linkIcon}
                          alt={row.content.icon.alt}
                        />
                        <p
                          dangerouslySetInnerHTML={{
                            __html: row.content.icon.title,
                          }}
                        />
                      </div>
                      <InnerTitle
                        title={row.content.innerTitle}
                        inContentBlock
                      />
                      <div
                        className={
                          PageStyles.accentedParagraph + " accented-paragraph"
                        }
                      >
                        <p
                          className="s-thin"
                          dangerouslySetInnerHTML={{
                            __html: row.content.paragraph,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      (index % 2
                        ? "order-sm-1 order-md-2"
                        : "order-sm-1 order-md-3") +
                      " col-sm-12 col-md-5 " +
                      RowStyles.colMd5
                    }
                  >
                    <img
                      className={PageStyles.imgResponsive}
                      src={row.image.url}
                      alt={row.image.alt}
                    />
                  </div>
                  <div
                    className={
                      (index % 2 ? "order-sm-12" : "order-sm-12") + " col-md-1"
                    }
                  />
                </div>
              ))}
              {/* End Split Row of content and image */}
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../../components/DefaultPageLayout"
import Main from "../../components/main-content"
import Container from "../../components/Container"
import MobileSecondaryNav from "../../components/MobileSecondaryNav"
import SecondaryNavigation from "../../components/SecondaryNavigation"
import InnerTitle from "../../components/inner-title.js"
import Hero from "../../components/Hero"

import PageStyles from "../../pages/marketing-solutions/px-package.module.scss"
import RowStyles from "../../components/Row.module.scss"

import websiteIcon from "../../img/icon/marketing-solutions-suite.svg"
import starsIcon from "../../img/icon/checkmark.svg"

const PxPage = data => {
  const images = data.data

  const backgroundImage = images.backgroundImage.childImageSharp.fluid

  const heroConfig = {
    pageType: "marketingSolutions",
    strapline: "Patient Experience Package",
    title: [<span>Stay connected</span>, " when it matters the most"],
    content:
      "Patient first technology like Teledentistry allows you to instantly position your office as a tech-forward, convenient solution.",
  }

  return (
    <div className={PageStyles.pxPackageStyles + " " + RowStyles.rowStyling}>
      <DefaultPageLayout>
        <Helmet>
          <title>
            "Patient Experience Package | Healthcare Marketing Agency"
          </title>
          <meta
            name="description"
            content="Patient first technology like Teledentistry allows you to instantly position your office as a tech-forward, convenient solution."
          />
        </Helmet>
        <div className="px-package-page">
          <BackgroundImage fluid={backgroundImage}>
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
                    pageTitle="Patient Experience Package"
                  />
                </div>
              </div>
              {/* End secondary nav Component */}

              {/* Begin mobile secondary navigation component */}
              <MobileSecondaryNav
                parentPage="marketingSolutions"
                titleItem="Patient Experience Package"
              />
              {/* End mobile secondary navigation component */}

              {/* First Text/Image Row */}
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="order-md-1 col-md-1" />
                <div className="order-sm-2 order-md-3 col-sm-9 col-md-6">
                  <div className="content-block">
                    <InnerTitle
                      title="Solutions Have Never Been Easier"
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
                          __html:
                            "The Doctor Genius PX, Patient Experience Package integrates seamlessly with our digital marketing solutions that leverage content, our mobile-first web design, SEO, online directories, and social media to drive new patients to your practice. Learn more about our marketing solutions.",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "order-sm-1 order-md-2 col-sm-12 col-md-4 " +
                    RowStyles.colMd5
                  }
                >
                  <img
                    className={PageStyles.imgResponsive}
                    src={images.image_one.childImageSharp.fluid.src}
                    alt="Solutions have never been easier"
                  />
                </div>
                <div className="order-sm-12 col-md-1" />
              </div>
              {/* End First Text/Image Row */}

              {/* First List Item Row */}
              <div
                className={
                  PageStyles.listRow +
                  " " +
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
                    RowStyles.row +
                    " " +
                    RowStyles.padded +
                    " " +
                    PageStyles.panelRow
                  }
                >
                  <div className="col-sm-12">
                    <InnerTitle
                      title="Product Benefits"
                      underlined
                      centered
                      subtitle="Stay connected when it matters the most."
                    />
                  </div>
                </div>
                <div className="order-sm-1 order-md-3 col-sm-12">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <ul
                        className={
                          PageStyles.noDot + " " + PageStyles.productBenefitsUl
                        }
                      >
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Convenient and Safe
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Saves Time and Money
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Staff and Patient Safety
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Triage Emergency Patients
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Forms Builder
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <ul className={PageStyles.noDot}>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Patient Experience
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          PMS Integration
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Treatment Plans
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          Practice Efficiencies
                        </li>
                        <li>
                          <img
                            src={starsIcon}
                            className={PageStyles.linkIcon}
                            alt="Digital Marketing Solutions"
                          />
                          HIPAA Compliant
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="order-sm-12 col-md-1" />
              </div>
              {/* End List Item Row */}

              {/* Large Icon Row */}
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  PageStyles.panelRow +
                  " " +
                  PageStyles.largeIconRow
                }
              >
                <div className="col-sm-10">
                  <InnerTitle
                    title="Product Outcomes"
                    underlined
                    centered
                    subtitle="Informed patient treatment through technology"
                  />
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={images.stayConnected.childImageSharp.fixed}
                        className={PageStyles.imgIcon}
                        alt="Stay Connected To Your Patients"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>
                      Stay Connected To Your Patients
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={images.drivePatient.childImageSharp.fixed}
                        className={PageStyles.imgIcon}
                        alt="Drive Patient Experience and Loyalty"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>
                      Drive Patient Experience and Loyalty
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={images.workplaceSafe.childImageSharp.fixed}
                        className={PageStyles.imgIcon}
                        alt="Keep Your Workplace Safe and Healthy"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>
                      Keep Your Workplace Safe and Healthy
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className={PageStyles.panel}>
                    <div className={PageStyles.iconWrapper}>
                      <Img
                        fixed={
                          images.streamlineOperations.childImageSharp.fixed
                        }
                        className={PageStyles.imgIcon}
                        alt="Streamline Front Office Operations"
                      />
                    </div>
                    <p className={PageStyles.panelHeading}>
                      Streamline Front Office Operations
                    </p>
                  </div>
                </div>
              </div>
              {/* End Large Icon Row */}

              {/* Additional Text/Image Row */}
              <div
                className={
                  PageStyles.paperlessForms +
                  " odd-row " +
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="order-md-1 col-md-1" />
                <div className="order-sm-2 order-md-3 col-sm-9 col-md-5">
                  <div className="content-block">
                    <InnerTitle title="Paperless Forms" inContentBlock />
                    <div
                      className={
                        PageStyles.accentedParagraph + " accented-paragraph"
                      }
                    >
                      <p
                        className=""
                        dangerouslySetInnerHTML={{
                          __html:
                            "Doctor Genius is here to help you navigate the changing landscape of practice management and patient care with our PX, Patient Experience software package. This package includes everything you need to see stay connected to your patients anytime, anywhere.",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "order-sm-1 order-md-2 col-sm-12 col-md-5 " +
                    RowStyles.colMd5
                  }
                >
                  <img
                    className={PageStyles.imgResponsive}
                    src={images.image_two.childImageSharp.fluid.src}
                    alt="Solutions have never been easier"
                  />
                </div>
                <div className="order-sm-12 col-md-1" />
              </div>

              {/* End Additional Text/Image Row */}

              {/* Additional Text/Image Row */}
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="order-md-1 col-md-1" />
                <div className="order-sm-2 order-md-2 col-sm-9 col-md-5 col-lg-6">
                  <div className="content-block">
                    <InnerTitle title="Teledentistry" inContentBlock />
                    <div
                      className={
                        PageStyles.accentedParagraph + " accented-paragraph"
                      }
                    >
                      <p
                        className="s-thin"
                        dangerouslySetInnerHTML={{
                          __html:
                            "Reduce unnecessary emergency appointments and by using a Teledentistry Emergency Triage Form. This form can be easily accessed from your website, texted, or emailed to allow patients to securely send photos and videos of their dental emergency.",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "order-sm-1 order-md-3 col-sm-12 col-md-5 " +
                    RowStyles.colMd5
                  }
                >
                  <img
                    className={PageStyles.imgResponsive}
                    src={images.image_three.childImageSharp.fluid.src}
                    alt="Solutions have never been easier"
                  />
                </div>
                <div className="order-sm-12 col-md-1" />
              </div>

              {/* End Additional Text/Image Row */}

              {/* Additional Text/Image Row */}
              <div
                className={
                  PageStyles.practiceEfficienies +
                  " odd-row " +
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="order-md-1 col-md-1" />
                <div className="order-sm-2 order-md-3 col-sm-9 col-md-5">
                  <div className="content-block">
                    <InnerTitle title="Practice Efficiencies" inContentBlock />
                    <div
                      className={
                        PageStyles.accentedParagraph + " accented-paragraph"
                      }
                    >
                      <p
                        className=""
                        dangerouslySetInnerHTML={{
                          __html:
                            "Every piece of paper that exists in your practice requires printing, handling, sorting, filling out, verification, scanning, filing, and shredding. Imagine eliminating all of that busy work with a click.",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "order-sm-1 order-md-2 col-sm-12 col-md-5 " +
                    RowStyles.colMd5
                  }
                >
                  <img
                    className={PageStyles.imgResponsive}
                    src={images.image_four.childImageSharp.fluid.src}
                    alt="Solutions have never been easier"
                  />
                </div>
                <div className="order-sm-12 col-md-1" />
              </div>

              {/* End Additional Text/Image Row */}
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default PxPage

export const ImageQuery = graphql`
  query PXImages3 {
    image_one: file(relativePath: { eq: "px-package-phone.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_two: file(relativePath: { eq: "px-package-paperless.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_three: file(relativePath: { eq: "px-package-tele.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image_four: file(relativePath: { eq: "px-package-practices.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "px-package-tablet.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stayConnected: file(relativePath: { eq: "stay-connected.png" }) {
      childImageSharp {
        fixed(width: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    drivePatient: file(relativePath: { eq: "drive-patient-experience.png" }) {
      childImageSharp {
        fixed(width: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    streamlineOperations: file(
      relativePath: { eq: "streamline-operations.png" }
    ) {
      childImageSharp {
        fixed(width: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    workplaceSafe: file(relativePath: { eq: "workplace-safe.png" }) {
      childImageSharp {
        fixed(width: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

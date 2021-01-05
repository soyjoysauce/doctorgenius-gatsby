import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Container from "../components/Container"
import Main from "../components/main-content"

import "../styles/confirmation.scss"
import PageStyles from "./confirmation.module.scss"
import RowStyles from "../components/Row.module.scss"

export default props => (
  <div className={PageStyles.confirmationPage + " " + RowStyles.rowStyling}>
    <DefaultPageLayout location={props["*"]}>
      <Helmet>
        <title>Thank you for Contacting Doctor Genius | Doctor Genius</title>
      </Helmet>
      <Main>
        <div className={props["*"]}>
          <div className={PageStyles.hero + " hero"}>
            {/* Hero will be a layout component */}
            <Container>
              <div className={RowStyles.row + " " + PageStyles.titleAndDesc}>
                <div className="col-sm-12">
                  <div className="header center">
                    <h1>
                      Thank you for{" "}
                      <br
                        className={
                          PageStyles.lineBreakHeader + " line-break-header"
                        }
                      />{" "}
                      your submission!
                    </h1>
                    <p className={PageStyles.mutedText + " muted-text"}>
                      You’ll receive an email confirmation shortly. In the
                      meantime, feel free to check out
                      <br
                        className={
                          PageStyles.lineBreakDesc + " line-break-desc"
                        }
                      />
                      our new blog,{" "}
                      <span className="strapline">
                        <Link to="/blog/">The Study</Link>
                      </span>
                      , to find out about our latest services and technology.
                    </p>
                    <div className={RowStyles.row}>
                      <div className="col-sm-8 col-md-4">
                        <button
                          className={
                            PageStyles.button +
                            " " +
                            PageStyles.navButton +
                            " " +
                            PageStyles.returnHome
                          }
                        >
                          <Link to="/">Return Home</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <Container>
              <div className={RowStyles.row + " " + PageStyles.infoAndMap}>
                <div
                  className={
                    PageStyles.companyInfo +
                    " col-sm-12 col-md-12 col-lap-4 company-info valign-wrapper"
                  }
                >
                  <p className={PageStyles.phoneNumber + " phone-number"}>
                    <a href="tel:877-477-2311">(877) 477-2311</a>
                  </p>
                  <p
                    className={
                      PageStyles.contactAddress + " mt-4 contact-address"
                    }
                  >
                    2 S Pointe Dr #200 <br />
                    Lake Forest, CA 92630
                  </p>
                  <button
                    className={
                      PageStyles.getDirections + " mt-4 get-directions"
                    }
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.google.com/maps/place/Doctor+Genius/@33.6597509,-117.7001599,16z/data=!4m5!3m4!1s0x0:0x9660a06c68c4bd1!8m2!3d33.6595484!4d-117.6983904"
                    >
                      Get Directions
                    </a>
                  </button>
                  <p
                    className={
                      PageStyles.contactHours + " mt-4 mb-4 contact-hours"
                    }
                  >
                    Monday to Friday <br />8 AM to 5 PM PST
                  </p>
                </div>
                <div
                  className={
                    PageStyles.mapHolder +
                    " col-sm-12 col-md-12 col-lap-7 map-holder"
                  }
                >
                  <iframe
                    className={PageStyles.dgMap + " dg-map"}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37557.65712271714!2d-117.83748222010603!3d33.69188625008202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9660a06c68c4bd1!2sDoctor+Genius!5e0!3m2!1sen!2sus!4v1563921417170!5m2!1sen!2sus"
                    allowFullScreen
                    height="340"
                    width="475"
                    title="Map to Doctor Genius"
                  ></iframe>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Main>
    </DefaultPageLayout>
  </div>
)

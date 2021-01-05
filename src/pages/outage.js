import React from "react"
import { Helmet } from "react-helmet"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Container from "../components/Container"
import OutageForm from "../components/outage-form.js"

import "../styles/contact.scss"
import PageStyles from "./contact.module.scss"
import OutageStyles from "./outage.module.scss"
import RowStyles from "../components/Row.module.scss"
import InnerTitleStyles from "../components/inner-title.module.scss"

export default props => (
  <div
    className={
      OutageStyles.outagePage +
      " " +
      PageStyles.contactPage +
      " " +
      RowStyles.rowStyling
    }
  >
    <DefaultPageLayout location={props["*"]}>
      <Helmet>
        <title>
          Contact the Doctor Genius Team in Lake Forest, California | Doctor
          Genius
        </title>
        <meta
          name="description"
          content="Need help? Have questions? The live support team at Doctor Genius is here to help. Give us a call, send us an email, connect on social media, or get our address."
        />
      </Helmet>
      <div className={props["*"]}>
        <div className={PageStyles.mainContent}>
          <div className={OutageStyles.hero + " " + PageStyles.hero + " hero"}>
            {/* Hero will be a layout component */}
            <Container>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-12">
                  <div className="header center">
                    <h1>Having an Emergency? Contact Us</h1>
                    {/*<h3
                      className={
                        InnerTitleStyles.strapline +
                        " " +
                        PageStyles.strapline +
                        " strapline"
                      }
                    >
                      Have a question? Need help?
                    </h3>*/}
                    <p
                      className={
                        OutageStyles.tagline +
                        " " +
                        PageStyles.mutedText +
                        " muted-text"
                      }
                    >
                      If you are having an outage or emergency outside of our
                      normal operating hours, please complete the outage form
                      below for assistance. A representative will contact you as
                      soon as possible.
                    </p>
                  </div>
                </div>

                <div className={RowStyles.row + " " + PageStyles.contactForm}>
                  <OutageForm />
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
      </div>
    </DefaultPageLayout>
  </div>
)

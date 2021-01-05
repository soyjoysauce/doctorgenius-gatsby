import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import Hero from "../components/Hero"
import { Link } from "gatsby"

import "../styles/ec-aup.scss"
import PageStyles from "./ec-aup.module.scss"
import RowStyles from "../components/Row.module.scss"

const heroConfig = {
  pageType: "ecAup",
  strapline: "EC AUP",
  title: [<span>Electronic Communications and</span>, " Acceptable Use Policy"],
  content: ["Effective Date:", <br />, " October 26, 2018"],
}

const EcAup = data => {
  return (
    <div className={PageStyles.ecaupPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="ec-aup">
        <Helmet>
          <title>
            Electronic Communications and Acceptable Use Policy | Doctor Genius
          </title>
        </Helmet>
        <div className={PageStyles.ecAup + " ec-aup"}>
          <BackgroundImage
            fluid={data.data.heroBg.childImageSharp.fluid}
            className={PageStyles.gbiEcaup + " gbi-ecaup"}
          >
            <Hero
              pageType={heroConfig.pageType}
              strapline={heroConfig.strapline}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="col-sm-12 col-md-8">
                  <p>
                    This Electronic Communications and Acceptable User Policy
                    (this “Policy”) applies to the use of all Practice AI
                    services offered by Company (sometimes herein referred to as
                    “Doctor Genius” or “we” or “our” or “us”) used by Customer
                    (sometimes herein referred to as “you” or “your”). It is and
                    incorporated into the Agreement (as defined in the Terms of
                    Service accessible at
                    <Link to="termsofservice" className="disable-link">
                      https://doctorgenius.com/termsofservice
                    </Link>
                    ) if you use Company’s Practice AI service (herein, the “PAI
                    Service”) to send electronic communications to your Users.
                    (Capitalized terms used but not defined in this Policy shall
                    have the meaning given them in the Terms of Service.
                  </p>
                  <p>
                    This policy describes the required consent of Users that you
                    must obtain as a condition to use of the PAI Service and
                    prohibited uses of the PAI Services. If you violate this
                    Policy, or authorize or help others to do so, we may suspend
                    or terminate your use of the PAI Service or Services
                    generally. The examples described in this Policy are not
                    exhaustive. WE RESERVE FULL AND FINAL DISCRETION AS TO
                    WHETHER CERTAIN USES VIOLATE THIS POLICY. YOU AGREE THAT OUR
                    DETERMINATION IS FINAL.
                  </p>
                  <p>
                    We may change this Policy by posting an updated version of
                    the Policy at{" "}
                    <Link to="privacy-policy">
                      https://doctorgenius.com/privacy
                    </Link>{" "}
                    and such updates will be effective upon posting.
                  </p>
                </div>
              </div>
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
                <div className="col-sm-11 col-md-8">
                  <div className="content-block">
                    <ol>
                      <li>
                        <h4>Required User Consent</h4>
                        <p>
                          Before sending electronic communications through the
                          PAI Service to any of your Users, you must first
                          obtain the following authorization, acknowledgement or
                          consent of such Users, in writing (where “we” and
                          “our” and “us” means Customer):
                        </p>
                        <ol className={PageStyles.alphaList + " alpha-list"}>
                          <li>
                            To receive electronically, by email or text message,
                            communications (collectively, ”Communications”) that
                            we or our business associate provides in connection
                            with our practice’s health-related products or
                            services and scheduling, reminders and follow-up
                            communications regarding your appointments and
                            treatment.
                          </li>
                          <li>
                            That you may receive paper copies of any
                            Communication by calling our office on during
                            business hours.
                          </li>
                          <li>
                            That, to receive Communications, you need to provide
                            us and maintain a valid email address or telephone
                            number to a mobile device with Short Message Service
                            (or SMS) enabled, or both, and that you possess to
                            the necessary equipment and software to receive and
                            save/print such Communications.
                          </li>
                          <li>
                            That you may withdraw your consent to receive such
                            Communications electronically by calling our office
                            during business hours or by writing to us via
                            regular mail at our principal office address.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h4>Prohibited Material</h4>
                        <p>
                          Customers may not, and may not allow others, to use
                          the PAI Service to display, store, process or
                          transmit, or permit use of services to display, store,
                          process or transmit:
                        </p>
                        <ol className="alpha-list">
                          <li>Any illegal, harmful or offensive content.</li>
                          <li>
                            Any illegal activities, including advertising,
                            transmitting, promoting or otherwise making
                            available illegal websites or services.
                          </li>
                          <li>
                            Anything may be harmful to others, our operations or
                            reputation, including offering or disseminating
                            fraudulent goods, services, schemes, or promotions,
                            or engaging in other deceptive practices.
                          </li>
                          <li>
                            Content that infringes or misappropriates the
                            intellectual property or proprietary rights of
                            others.
                          </li>
                          <li>
                            Material that violates, encourages or furthers
                            conduct that would violate any applicable laws,
                            including any criminal laws, or any third‐party
                            rights, including publicity or privacy rights.
                          </li>
                          <li>
                            Content that is defamatory, obscene, abusive,
                            invasive of privacy, or otherwise objectionable.
                          </li>
                          <li>
                            Content or computer technology that may damage,
                            interfere with, surreptitiously intercept, or
                            expropriate any system, program, or data, including
                            viruses, Trojan horses, worms, time bombs, or
                            cancelbots; or
                          </li>
                          <li>
                            Protected Health Information in violation of the
                            BAA. You agree not to use the PAI Service to create,
                            receive, maintain, or transmit protected health
                            information, as defined in the BAA, and to use the
                            PAI Service only as permitted by the BAA.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h4>Prohibited Activities</h4>
                        <p>
                          Customers may not use the PAI Service to, or allow
                          others to use the PAI service to:
                        </p>
                        <ol className="alpha-list">
                          <li>
                            Generate or facilitate unsolicited commercial email
                            (spam) including commercial advertising and
                            informational announcements. Such prohibited
                            activity includes, but is not limited to:
                            <ul>
                              <li>
                                sending Communications in violation of the
                                CAN‐SPAM Act or any other applicable anti‐ spam
                                law or regulation
                              </li>
                              <li>
                                imitating or impersonating us, another person or
                                his, her or its email address, or creating false
                                accounts for the purpose of sending spam
                              </li>
                              <li>
                                sending unauthorized Communications mail via
                                open, third‐party servers
                              </li>
                              <li>
                                sending Communications to Users who have
                                withdrawn his or her consent to receive
                                Communications
                              </li>
                              <li>
                                selling to, exchanging with, sharing with or
                                distributing to a third-party personal
                                information, including the email addresses of
                                any person without such person’s knowing and
                                continued consent to such disclosure
                              </li>
                              <li>
                                pointing at domains you do not own or lawfully
                                control; or
                              </li>
                              <li>
                                sending unsolicited emails to significant
                                numbers of email addresses belonging to
                                individuals and/or entities with whom you have
                                no preexisting relationship
                              </li>
                            </ul>
                          </li>
                          <li>
                            Send, upload, distribute or disseminate, or offer to
                            do the same, with respect to Prohibit Material
                            described in paragraph 2, above; or
                          </li>
                          <li>
                            Use the PAI Service in any manner that would
                            disparage Company.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h4>Additional Agreements and Restrictions</h4>
                        <p>You agree not to:</p>
                        <ol className="alpha-list">
                          <li>
                            Copy, modify, create a derivative work of, reverse
                            engineer, decompile, translate, disassemble, or
                            otherwise attempt to extract the source code of the
                            PAI Service or any component thereof
                          </li>
                          <li>
                            Sub-license, resell, or distribute the PAI Service
                            or any component thereof separate from any
                            integrated application
                          </li>
                          <li>
                            Post, upload, or distribute any Content or other
                            content that is unlawful, defamatory, libelous,
                            inaccurate, or that a reasonable person could deem
                            to be objectionable, profane, indecent,
                            pornographic, harassing, threatening, embarrassing,
                            hateful, or otherwise inappropriate; or
                          </li>
                          <li>
                            Perform any fraudulent activity, including
                            impersonating any person or entity or claiming a
                            false affiliation; misrepresenting the source,
                            identity or content of information transmitted via
                            the PAI Service
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h4>Our Monitoring and Enforcement</h4>
                        <p>
                          We reserve the right, but do not assume the
                          obligation, to investigate any violation of this
                          Policy or misuse of the PAI Service. We may:
                        </p>
                        <ol className="alpha-list">
                          <li>
                            Investigate violations of this Policy or misuse of
                            the PAI Service
                          </li>
                          <li>
                            Remove, disable access to, or modify any content or
                            resource that violates this Policy or any other
                            agreement we have with you for use of the Services;
                            and
                          </li>
                          <li>
                            Report any activity that we suspect violates any law
                            or regulation to appropriate law enforcement
                            officials, regulators, or other appropriate third
                            parties. Our reporting may include disclosing
                            appropriate Customer information. We also may
                            cooperate with appropriate law enforcement agencies,
                            regulators, or other appropriate third parties to
                            help with the investigation and prosecution of
                            illegal conduct by providing network and systems
                            information related to alleged violations of this
                            Policy.
                          </li>
                        </ol>
                      </li>
                      <li>
                        <h4>Reporting of Violations of this Policy</h4>
                        <p>
                          If you become aware of any violation of this Policy,
                          you agree to immediately notify us and provide us with
                          assistance, as requested, to stop or remedy the
                          violation. Send violations to{" "}
                          <a href="mailto:legal@doctorgenius.com">
                            legal@doctorgenius.com
                          </a>
                          .
                        </p>
                      </li>
                      <li>
                        <h4>
                          U.S. Digital Millennium Copyright Act or Similar
                          Statutory Obligations
                        </h4>
                        <p>
                          As a user of the PAI Service for sending
                          Communications, you must (a) comply with any notices
                          received under Title II of the Digital Millennium
                          Copyright Act of 1998 (Section 512 of the U.S.
                          Copyright Act) or similar statute in other countries
                          (the “DMCA”), (b) set up a process to expeditiously
                          respond to notices of alleged infringement that comply
                          with the DMCA and to implement a DMCA‐compliant repeat
                          infringers policy, (c) publicly display a description
                          of its notice and takedown process under the DMCA on
                          its instance of the services, and (iv) comply with
                          such processes, policy(ies), and description.
                        </p>
                        <p>
                          It is our policy to respond expeditiously to valid
                          notices of claimed copyright infringement compliant
                          with the DMCA. In appropriate circumstances, we may
                          terminate your use of the PAI Service due to
                          repeatedly or blatantly copyright infringement.
                        </p>
                        <p>
                          If we receive a notice alleging that material on a
                          your instance of the PAI Service infringes another
                          party’s intellectual property, we may disable that
                          your instance of the PAI Service and/or remove the
                          allegedly infringing material. If we receive more than
                          one such notice, we reserve the right to immediately
                          terminate your subscriptions to the PAI Service as
                          deemed necessary by us to ensure continued protection
                          under the safe harbor provisions under the DMCA or to
                          prevent violations of other applicable laws or third
                          parties’ rights.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default EcAup

export const ImageQuery = graphql`
  query EcAupImages {
    heroBg: file(relativePath: { eq: "privacy-policy-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

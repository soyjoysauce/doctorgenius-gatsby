import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import DemoForm from "../components/demo-form.js"
import star from "../img/star.svg"

import InnerTitle from "../components/inner-title"

import "../styles/demo.scss"
import DemoPageStyles from "./demo.module.scss"
import RowStyles from "../components/Row.module.scss"

const DemoPage = data => {
  const images = data.data
  const pixelMap = images.pixelMap.childImageSharp.fluid.src
  const heroStyle = {
    background: "url(" + pixelMap + ")",
  }

  return (
    <div className={DemoPageStyles.demoPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="demo">
        <Helmet>
          <title>
            Get a Free Demo of the Doctor Genius Performance Driven Marketing
            Platform
          </title>
          <meta
            name="description"
            content="How is your new patient acquisition going? Is your website and marketing underperforming? Curious about a strong performance driven marketing platform?"
          />
        </Helmet>
        <div className="demo">
          <div className={DemoPageStyles.hero + " hero"} style={heroStyle}>
            {/* Hero will be a layout component */}
            <Container>
              <div
                className={
                  RowStyles.row +
                  " " +
                  DemoPageStyles.heroRow +
                  " valign-wrapper"
                }
              >
                <div className="col-md-10 order-md-1 col-lg-8 order-lg-1 float-lg-left">
                  <h1>Experience The Solution for Optimal Practice Growth</h1>
                  <p className={DemoPageStyles.disappear + " disappear"}>
                    Need help with new patient acquisitions, patient reminders,
                    and retention? Sign up for our demo to learn how you can
                    have predictable practice growth with Doctor Genius.
                  </p>
                  <hr className={DemoPageStyles.disappear + " disappear"} />
                </div>
                <div
                  className={
                    DemoPageStyles.p10 +
                    DemoPageStyles.contactFormContainer +
                    " col-md-7 order-md-2 col-lap-5 col-lg-4 order-lg-2 float-lg-right contact-form-container"
                  }
                >
                  <div className={DemoPageStyles.contactForm + " contact-form"}>
                    <div className={DemoPageStyles.header + " header"}>
                      <h3>Contact us now for a FREE Consultation</h3>
                    </div>
                    <div className={DemoPageStyles.formBody + " form-body"}>
                      <DemoForm />
                      <p className={DemoPageStyles.finePrint + " fine-print"}>
                        *By registering I confirm that I have read and agree to
                        the{" "}
                        <Link to="/privacy-policy" target="_blank">
                          Privacy Statement
                        </Link>
                        .
                      </p>
                      <img
                        src={images.sslBadge.childImageSharp.fluid.src}
                        alt="SSL Badge"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={
                    DemoPageStyles.demoPlansRow +
                    " col-md-9 order-md-3 col-lg-8 order-lg-3 float-lg-left demo-plans-row"
                  }
                >
                  <div className={RowStyles.row + " valign-wrapper"}>
                    <div
                      className={
                        DemoPageStyles.ourPlansText +
                        " col-md-12 col-lap-10 col-lg-5 our-plans-text"
                      }
                    >
                      <div
                        className={
                          DemoPageStyles.contentBlock + " content-block"
                        }
                      >
                        <InnerTitle
                          title="Our Plans"
                          id={DemoPageStyles.slimInnerTitle}
                          inContentBlock
                        />
                        <div>
                          <div
                            className={
                              DemoPageStyles.accentedParagraph +
                              " accented-paragraph"
                            }
                          >
                            <p>
                              We created 3 individual packages that will take
                              your practice to the next level. Our tiers have
                              unique plan features to meet your practice needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        DemoPageStyles.ourPlansChart +
                        " col-md-9 col-lap-8 col-lg-7 our-plans-chart"
                      }
                    >
                      <div
                        className={DemoPageStyles.planDetails + " plan-details"}
                      >
                        <div className={DemoPageStyles.planTitle + " title"}>
                          <h3>Silver Plan</h3>
                          <p>The Starter Package</p>
                        </div>
                        <div
                          className={DemoPageStyles.planStripe + " stripe"}
                        />
                        <div
                          className={DemoPageStyles.planSpecifics + " details"}
                        >
                          <h4>20+</h4>
                          <p>New Patients</p>
                        </div>
                      </div>
                      <div
                        className={DemoPageStyles.planDetails + " plan-details"}
                      >
                        <div className={DemoPageStyles.planTitle + " title"}>
                          <h3>Gold Plan</h3>
                          <p>Boost Your Online Presence</p>
                        </div>
                        <div
                          className={DemoPageStyles.planStripe + " stripe"}
                        />
                        <div
                          className={DemoPageStyles.planSpecifics + " details"}
                        >
                          <h4>35+</h4>
                          <p>New Patients</p>
                        </div>
                      </div>
                      <div
                        className={DemoPageStyles.planDetails + " plan-details"}
                      >
                        <div className={DemoPageStyles.planTitle + " title"}>
                          <h3>Platinum Plan</h3>
                          <p>Maximize Your Practice Potential</p>
                        </div>
                        <div
                          className={DemoPageStyles.planStripe + " stripe"}
                        />
                        <div
                          className={DemoPageStyles.planSpecifics + " details"}
                        >
                          <h4>45+</h4>
                          <p>New Patients</p>
                        </div>
                      </div>
                      <p className={DemoPageStyles.finePrint + " fine-print"}>
                        *Estimated new patients vary by industry, location, and
                        population.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <Main>
            <Container>
              <div className={RowStyles.row + " " + RowStyles.padded}>
                <div className="col-sm-10">
                  <InnerTitle
                    title="What Our Clients Are Saying!"
                    underlined
                    centered
                    id={DemoPageStyles.demoTestimonials}
                  />
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Dennis.childImageSharp.fluid.src}
                        alt="Marketing Review Dennis Baik"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Dennis
                        <br />
                        Baik
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Dennis.childImageSharp.fluid.src}
                            alt="Marketing Review Dennis Baik"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Dennis Baik
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>11 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>11 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          Dr. Genius and its team delivers what they promise. It
                          has been about two years since I signed up with their
                          Silver Plan. Since then, my dental practice has grown
                          with more phone calls that were referred from online
                          and SEO marketing (more so within last one year).
                          Previously, I have used Prosites for my website and
                          separate social media managing company but never had
                          much of response. Dr. Genius is the only marketing
                          company that I currently work with and my dental
                          practice is doing better than ever. I am even
                          considering to upgrade my marketing plan with them to
                          a more premium plan (Gold or Platinum).
                        </p>

                        <p>
                          I am not sure however, if my current Silver Plan with
                          Dr. Genius has turned into 20+ additional new patients
                          per month (as it is advertised on their website).
                          Nevertheless, I truly believe that working with Dr.
                          Genius has been a success with great return on
                          investment (ROI). Particularly, Shawn and Shanyn have
                          been great. Dr. Genius and its team (especially Shawn)
                          have undoubtedly been instrumental to my marketing
                          success. Thanks guys!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Taylor.childImageSharp.fluid.src}
                        alt="Marketing Review Taylor Dental Care"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Taylor <br />
                        Dental Care
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Taylor.childImageSharp.fluid.src}
                            alt="Marketing Review Taylor Dental Care"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Taylor Dental Care
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>2 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>2 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          I have worked with Francesco at 3 separate dental
                          offices over the course of 8 years. If that doesn't
                          tell you that their program works, I don't know what
                          will. Francesco has great customer service and follows
                          up throughout the set up to make sure things are going
                          well. If I ever have issues, I can contact him or
                          email their customer support team and my questions or
                          website changes are handled quickly.
                        </p>

                        <p>
                          Their contract is lengthy, and a little complicated,
                          so read it well to make sure you understand what you
                          are signing. Your "online" phone number will change
                          for their tracking purposes, you'll have a little
                          recorded message at the beginning of patient calls
                          saying that call will be recorded, and your website
                          will have copy and pasted material as another reviewer
                          said. But that matters little when the new patients
                          call after having been engaged on your website.
                        </p>

                        <p>
                          We have been consistently getting heavy web traffic
                          (this is tracked and they'll show you the metrics --
                          it' not just a verbal monthly follow up like I had
                          previously had with SEO companies), and more new
                          patients since the website launched. We are getting
                          what we paid for, and will continue to utilize their
                          services. They are up to date on all the google
                          algorithms, and gave us ideas to keep the "freshness"
                          up on our website, our google business listing and
                          social media. I highly recommend their services!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Daniel.childImageSharp.fluid.src}
                        alt="Marketing Review Daniel Savarino"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Daniel <br />
                        Savarino
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Daniel.childImageSharp.fluid.src}
                            alt="Marketing Review Daniel Savarino"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Daniel Savarino
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>6 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>6 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          I have been working with doctor genius for about 6
                          months. I opened my sports medicine practice back in
                          July. I found doctor genius on Facebook and spoke with
                          Francesco. He went over my current site and discussed
                          how he could help improve my Google ranking. What I
                          really liked about them was they were not trying to
                          push their most expensive package, in fact they were
                          stressing to start with the basics and upgrade
                          gradually as I grow. Whenever I have a question, if I
                          send an email I always get an immediate call back from
                          Francesco, which I find amazing as most other
                          companies I work with take days to respond if at all.
                          Most of the website work has been with Shanyn who has
                          also been great. She is responsive and listens to my
                          suggestions. I have the blogs set so I can review them
                          before they go up which I like because I like to have
                          my own spin put in as well. I recently upgraded to the
                          Gold package and I am looking forward to seeing how
                          much more business we get!!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Christina.childImageSharp.fluid.src}
                        alt="Marketing Review Christina Guilin"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Christina
                        <br /> Guilin
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Christina.childImageSharp.fluid.src}
                            alt="Marketing Review Christina Guilin"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Christina Guilin
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>2 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>2 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          I have just recently started working with Doctor
                          Genius, specifically with Dartangnan Johnson and my
                          experience so far has been nothing but stellar! We had
                          a lot of turnover with our marketing the last 1-2
                          years, and were struggling to find a team who really
                          understood our needs and expectations. We really hit
                          it out of the park being connected to Dartangan and
                          Doctor Genius, because their experience and knowledge
                          with Google is what sets them apart from other
                          marketers. The resources provided to clients are
                          wonderful tools to stay on top of your practice and
                          numbers. Thank you Dartangan, our future looks bright
                          with you!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Erika.childImageSharp.fluid.src}
                        alt="Marketing Review Erika Rodriguez"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Erika
                        <br /> Rodriguez
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Erika.childImageSharp.fluid.src}
                            alt="Marketing Review Erika Rodriguez"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Erika Rodriguez
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>3 Weeks Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>3 Weeks Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          I have been working with Doctor Genius for sometime
                          now and can honestly say this is by far, the BEST team
                          to have by your side. Besides increasing our numbers,
                          they have always put our needs and wants first. Doctor
                          Genius has educated us through out our entire journey
                          together and we are a better company because of it. A
                          special recognition goes to Mr. Shawn S. who has gone
                          above and beyond for us and helped us see the light at
                          the end of a dark,dark tunnel. And for that, Thank you
                          Shawn for helping us show the world who we are.
                          Blessings!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Roberto.childImageSharp.fluid.src}
                        alt="Marketing Review Roberto Bellegarrigue"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Roberto
                        <br />
                        Bellegarrigue
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Roberto.childImageSharp.fluid.src}
                            alt="Marketing Review Roberto Bellegarrigue"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Roberto Bellegarrigue
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>4 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>4 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          Been working with them for 2 years now. My web
                          visibility has increased and my new patients have
                          doubled as a result. They're always available to talk
                          if you have any issues or questions. Two thumbs up!!
                          Just ask for Francesco, he's my account manager and
                          he'll take good care of you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Justine.childImageSharp.fluid.src}
                        alt="Marketing Review Justine Schepis"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Justine
                        <br />
                        Schepis
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Justine.childImageSharp.fluid.src}
                            alt="Marketing Review Justine Schepis"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Justine Schepis
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>10 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>10 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          I started using Doctor Genius to improve my google
                          presence and increase my monthly number of new
                          patients. They told me it would take 3-4 months to see
                          results. Its been about 2 now that my google presence
                          has been cleaned up and my website is up and running
                          and I am starting to see people come in the door who
                          found us solely on google.
                        </p>

                        <p>
                          We are happy and have now upgraded our package with
                          them.The team is really nice and caring and good with
                          following up and explaining everything to you.
                          Francesco was the first person I worked with and he is
                          wonderful. He really took the time to explain
                          everything. Although it is early in the process, what
                          he said would happen after cleaning up our internet
                          presence is starting to unfold. I have also worked
                          with Brandon, Shawn, Victoria, and Kylie, all of which
                          have been a pleasure to work with.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Alexandra.childImageSharp.fluid.src}
                        alt="Marketing Review Alexandra Ramsahai D.M.D"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Justine
                        <br />
                        Schepis
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Alexandra.childImageSharp.fluid.src}
                            alt="Marketing Review Alexandra Ramsahai D.M.D"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Alexandra Ramsahai D.M.D
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>5 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>5 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          The customer service is awesome! We have had a great
                          start and we continue to grow and develop. Thanks
                          francesco and everyone at DocGenius that make
                          communication a breeze.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop
                }
              >
                <div className="col-lg-1" />
                <div className="col-sm-12 col-md-10 col-lg-12">
                  <div className={DemoPageStyles.reviewSection + " review"}>
                    <div className={DemoPageStyles.author + " author"}>
                      <img
                        src={images.Diamond.childImageSharp.fluid.src}
                        alt="Marketing Review Diamond Head Dental Care"
                        className={DemoPageStyles.portrait + " portrait"}
                      />
                      <p>
                        Diamond Head <br />
                        Dental Care
                      </p>
                    </div>
                    <div className={DemoPageStyles.body + " body"}>
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          DemoPageStyles.mobileReviewHead +
                          " mobile-review-head"
                        }
                      >
                        <div
                          className={
                            DemoPageStyles.portraitContainer +
                            " col-sm-2 portrait-container"
                          }
                        >
                          <img
                            src={images.Diamond.childImageSharp.fluid.src}
                            alt="Marketing Review Diamond Head Dental Care"
                            className={DemoPageStyles.portrait + "portrait "}
                          />
                        </div>
                        <div
                          className={
                            DemoPageStyles.bioContainer +
                            " col-sm-9 offset-sm-1 bio-container"
                          }
                        >
                          <p
                            className={
                              DemoPageStyles.mobileName + " mobile-name"
                            }
                          >
                            Diamond Head Dental Care
                          </p>
                          <div
                            className={
                              DemoPageStyles.mobileStars + " mobile-stars"
                            }
                          >
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                            <img src={star} alt="Star" />
                          </div>
                          <div
                            className={
                              DemoPageStyles.mobileDate + " mobile-date"
                            }
                          >
                            <p>11 Months Ago</p>
                          </div>
                        </div>
                      </div>

                      <div className={DemoPageStyles.stars + " stars"}>
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                      </div>
                      <div className={DemoPageStyles.date + " date"}>
                        <p>11 Months Ago</p>
                      </div>
                      <div className={DemoPageStyles.content + " content"}>
                        <p>
                          Doctor Genius was a game changer for our office, we
                          saw a SIGNIFICANT increase in new patient counts and
                          online search results. We doubled our new patient
                          counts within a few months of starting with Doctor
                          Genius, with half of the credit due to their online
                          optimization and service. Shawn Stiffler has been an
                          excellent guiding force as we ramped up this service
                          and when we decided to upgrade the service after one
                          year with them. Thank you! Krista
                        </p>
                      </div>
                    </div>
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

export default DemoPage

export const ImageQuery = graphql`
  query DemoImages {
    Dennis: file(relativePath: { eq: "marketing-review-dennis-baik.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Taylor: file(
      relativePath: { eq: "marketing-review-taylor-dental-care.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Daniel: file(relativePath: { eq: "marketing-review-daniel-savarino.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Christina: file(
      relativePath: { eq: "marketing-review-christina-guilin.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Erika: file(relativePath: { eq: "marketing-review-erika-rodriguez.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Roberto: file(
      relativePath: { eq: "marketing-review-roberto-bellegarrigue.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Justine: file(
      relativePath: { eq: "marketing-review-justine-schepis.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Alexandra: file(
      relativePath: { eq: "marketing-review-alexandra-ramasahai.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Diamond: file(
      relativePath: { eq: "marketing-review-diamond-head-dental-care.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sslBadge: file(relativePath: { eq: "ssl-logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pixelMap: file(relativePath: { eq: "pixel-map.png" }) {
      childImageSharp {
        fluid(maxWidth: 1707) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

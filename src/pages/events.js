import React from "react"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Countdown, { zeroPad } from "react-countdown-now"

import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import InnerTitle from "../components/inner-title"
import RequestDemoFooter from "../components/request-demo-footer"

import "../styles/event-listing.scss"
import PageStyles from "./events.module.scss"
import RowStyles from "../components/Row.module.scss"

const EventPage = ({ data }) => {
  // Globals
  const images = data
  let upcoming_events = []
  let past_events = []
  let styleBackgroundImage
  let featured_event

  let date = new Date()
  let todays_date =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2)

  //Sort Upcoming and Past events based on event_date
  for (let h = 0; h < data.all_events.edges.length; h++) {
    let e_date = data.all_events.edges[h].node.event_date[0].replace(/-/g, "")
    if (Number(e_date) > Number(todays_date)) {
      upcoming_events.push(data.all_events.edges[h])
    } else {
      past_events.push(data.all_events.edges[h])
    }
  }

  const eventTimeLineBg = images.eventTimelineBg.childImageSharp.fluid.src
  const eventTimeLineStyles = {
    backgroundImage: "url(" + eventTimeLineBg + ")",
    backgroundRepeat: "no-repeat",
  }

  // Adds data to featured_event if there currently is none
  if (data.featured_event.edges.length === 1) {
    featured_event = data.featured_event.edges[0].node
    if (featured_event.start_time[0] === "") {
      featured_event.start_time = "00:01"
    }
  } else {
    featured_event = {
      dummy_data: true,
      end_time: "",
      event_city: "",
      event_date: "2026-01-01",
      event_details_text:
        "Keep and eye out for new events hosted by Doctor Genius and our sponsers.",
      event_title: "Our Events",
      featured_event: [""],
      register_url: "",
      start_time: "00:01",
      slug: "",
    }
  }

  let date_and_time =
    featured_event.event_date + " " + featured_event.start_time
  let countdown_date_and_time = new Date(date_and_time).getTime()

  // Adds static bg if there is not a featured event
  if (featured_event.dummy_data) {
    styleBackgroundImage = images.standardHeroBg.childImageSharp.fluid
  } else {
    styleBackgroundImage =
      featured_event.all_image_urls.hero_image_url.localFile.childImageSharp
        .fluid
  }

  // Converts date from YYYY-MM-DD to MM, DD
  const format_date_short = date => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    let string_date = date
      .toString()
      .replace(/-0+/g, "-")
      .split(["-"])
    const month = months[string_date[1] - 1],
      day = string_date[2]
    const formatted_date = "" + month + " " + day
    return formatted_date
  }

  // Converts date from YYYY-MM-DD to MM DD, YYYY
  const format_date_long = date => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    let string_date = date
      .toString()
      .replace(/-0+/g, "-")
      .split(["-"])
    const month = months[string_date[1] - 1],
      day = string_date[2],
      year = string_date[0]
    const formatted_date = "" + month + " " + day + ", " + year
    return formatted_date
  }

  // Handles output of days/hours/minutes/seconds on Event Countdown section
  const day_renderer = ({ days }) => {
    return <p className={PageStyles.days + " days"}>{zeroPad(days, 2)}</p>
  }

  const hours_renderer = ({ hours }) => {
    return <p className={PageStyles.hours + " hours"}>{zeroPad(hours, 2)}</p>
  }

  const minutes_renderer = ({ minutes }) => {
    return (
      <p className={PageStyles.minutes + " minutes"}>{zeroPad(minutes, 2)}</p>
    )
  }

  const seconds_renderer = ({ seconds }) => {
    return (
      <p className={PageStyles.seconds + " seconds"}>{zeroPad(seconds, 2)}</p>
    )
  }

  // Converts Military time(13:30) to Standard(1:30PM)
  const convert_time = time => {
    time = time.toString()
    time = time.split(":")

    let hours = Number(time[0])

    let time_value

    if (hours > 0 && hours <= 12) {
      time_value = "" + hours
    } else if (hours > 12) {
      time_value = "" + (hours - 12)
    } else if (hours === 0) {
      time_value = "12"
    }

    time_value += hours >= 12 ? "pm" : "am"
    return time_value
  }

  const defaultUpcomingEventImage =
    data.defaultUpcomingImg.childImageSharp.fluid.src

  // Handles output of each upcoming event
  const display_upcoming_events = upcoming_events
    .slice(0)
    .reverse()
    .map(function(event) {
      if (upcoming_events.length >= 1) {
        return (
          <div
            className={
              PageStyles.dgEventHolder +
              " col-sm-10 col-md-6 col-lap-3 dg-event-holder"
            }
            key={event.node.slug}
          >
            <div className={PageStyles.dgEvent + " card dg-event"}>
              <img
                className="card-img-top"
                src={
                  event.node.all_image_urls.featured_image_url_large != null
                    ? event.node.featured_media.localFile.childImageSharp.fluid
                        .src
                    : defaultUpcomingEventImage
                }
                alt="Upcoming Event"
              />
              <div className="card-body">
                <h3 className="card-title">{event.node.event_title}</h3>
                <p>
                  {event.node.include_location[0] !== ""
                    ? event.node.event_city + ", " + event.node.event_state
                    : "Webinar - Online"}
                </p>
                <p className={PageStyles.cardEventDate + " card-event-date"}>
                  {format_date_long(event.node.event_date)}
                </p>
                <Link
                  className={
                    PageStyles.button +
                    " " +
                    PageStyles.flat +
                    " " +
                    PageStyles.transparent +
                    " " +
                    PageStyles.eventMoreInfoBtn +
                    " event-more-info-btn"
                  }
                  to={`/events/` + event.node.slug}
                >
                  + More Info
                </Link>
              </div>
            </div>
          </div>
        )
      } else {
        return <span></span>
      }
    })

  ///Handles output of the last 4 events prior to todays date
  const display_past_events = () => {
    return (
      <div className="col-lap-10 offset-lap-1 col-md-12">
        <div
          className={
            RowStyles.row + " " + PageStyles.singularEvent + " singular-event"
          }
        >
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[0].node.slug}>
              <img
                src={
                  past_events[0].node.featured_media != null
                    ? past_events[0].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : past_events[0].node.featured_media == null
                    ? past_events[0].node.all_image_urls.hero_image_url
                        .localFile.childImageSharp.fluid.src
                    : past_events[0].node.all_image_urls.hero_image_url == null
                    ? defaultUpcomingEventImage
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div
            className={
              PageStyles.pastEventTitleAndDesc +
              " col-sm-10 col-md-6 past-event-title-and-desc"
            }
          >
            <span
              className={
                PageStyles.noHover +
                " " +
                PageStyles.pastEventDate +
                " " +
                PageStyles.whiteText
              }
            >
              {format_date_short(past_events[0].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[0].node.slug}>
              <p className={PageStyles.peTitle + " pe-title"}>
                {past_events[0].node.event_title}
              </p>
            </Link>
            {past_events[0].node.event_subtitle !== "" && (
              <p className={PageStyles.peDesc + " pe-desc"}>
                {past_events[0].node.event_subtitle}
              </p>
            )}
          </div>
        </div>

        <div
          className={
            RowStyles.row + " " + PageStyles.singularEvent + " singular-event"
          }
        >
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[1].node.slug}>
              <img
                src={
                  past_events[1].node.featured_media != null
                    ? past_events[1].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div
            className={
              PageStyles.pastEventTitleAndDesc +
              " col-sm-10 col-md-6 past-event-title-and-desc"
            }
          >
            <span
              className={
                PageStyles.noHover +
                " " +
                PageStyles.pastEventDate +
                " " +
                PageStyles.whiteText
              }
            >
              {format_date_short(past_events[1].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[1].node.slug}>
              <p className={PageStyles.peTitle + " pe-title"}>
                {past_events[1].node.event_title}
              </p>
            </Link>
            {past_events[1].node.event_subtitle !== "" && (
              <p className={PageStyles.peDesc + " pe-desc"}>
                {past_events[1].node.event_subtitle}
              </p>
            )}
          </div>
        </div>

        <div
          className={
            RowStyles.row + " " + PageStyles.singularEvent + " singular-event"
          }
        >
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[2].node.slug}>
              <img
                src={
                  past_events[2].node.featured_media != null
                    ? past_events[2].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div
            className={
              PageStyles.pastEventTitleAndDesc +
              " col-sm-10 col-md-6 past-event-title-and-desc"
            }
          >
            <span
              className={
                PageStyles.noHover +
                " " +
                PageStyles.pastEventDate +
                " " +
                PageStyles.whiteText
              }
            >
              {format_date_short(past_events[2].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[2].node.slug}>
              <p className={PageStyles.peTitle + " pe-title"}>
                {past_events[2].node.event_title}
              </p>
            </Link>
            {past_events[2].node.event_subtitle !== "" && (
              <p className={PageStyles.peDesc + " pe-desc"}>
                {past_events[2].node.event_subtitle}
              </p>
            )}
          </div>
        </div>

        <div
          className={
            RowStyles.row + " " + PageStyles.singularEvent + " singular-event"
          }
        >
          <div className="col-sm-10 col-md-6 past-event-image">
            <Link to={"/events/" + past_events[3].node.slug}>
              <img
                src={
                  past_events[3].node.featured_media != null
                    ? past_events[3].node.featured_media.localFile
                        .childImageSharp.fluid.src
                    : defaultUpcomingEventImage
                }
                alt="Past Event"
              />
            </Link>
          </div>
          <div
            className={
              PageStyles.pastEventTitleAndDesc +
              " col-sm-10 col-md-6 past-event-title-and-desc"
            }
          >
            <span
              className={
                PageStyles.noHover +
                " " +
                PageStyles.pastEventDate +
                " " +
                PageStyles.whiteText
              }
            >
              {format_date_short(past_events[3].node.event_date)}
            </span>
            <Link to={"/events/" + past_events[3].node.slug}>
              <p className={PageStyles.peTitle + " pe-title"}>
                {past_events[3].node.event_title}
              </p>
            </Link>
            {past_events[3].node.event_subtitle !== "" && (
              <p className={PageStyles.peDesc + " pe-desc"}>
                {past_events[3].node.event_subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={PageStyles.eventsPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="event-listing">
        <Helmet>
          <title>Events | Doctor Genius</title>
          <meta name="description" content="Doctor Genius | Event" />
        </Helmet>
        <div>
          <BackgroundImage fluid={styleBackgroundImage}>
            <div className={PageStyles.hero + " hero"}>
              <div className={PageStyles.heroOverlay + " hero-overlay"}>
                {/* Hero will be a layout component */}

                <Container>
                  <div className={RowStyles.row + " justify-content-start"}>
                    <div className="col-sm-11 col-md-9 col-lap-6">
                      <div
                        className={
                          PageStyles.dgCategoryHolder + " dg-category-holder"
                        }
                      >
                        <h1
                          className={
                            PageStyles.button +
                            " " +
                            PageStyles.dgCategory +
                            " " +
                            PageStyles.whiteText
                          }
                        >
                          Doctor Genius Events
                        </h1>
                      </div>
                      <div className={PageStyles.titles + " titles"}>
                        <h2>{featured_event.event_title}</h2>
                        <p className={PageStyles.eventDesc + " event-desc"}>
                          {featured_event.event_details_text}
                        </p>
                      </div>
                      <div className={PageStyles.ctaBtns + " cta-btns"}>
                        {featured_event.register_url !== "" &&
                          (featured_event.register_url[0] !== "" && (
                            <a
                              className={
                                PageStyles.registerNowBtn +
                                " " +
                                PageStyles.whiteText
                              }
                              href={featured_event.register_url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {featured_event.register_button_text === ""
                                ? "Register Now"
                                : featured_event.register_button_text}
                            </a>
                          ))}
                        {featured_event.slug !== "" && (
                          <Link
                            className={
                              PageStyles.button +
                              " " +
                              PageStyles.flat +
                              " " +
                              PageStyles.transparent +
                              " " +
                              PageStyles.heroMoreInfoBtn
                            }
                            to={`/events/` + featured_event.slug}
                          >
                            + More Info
                          </Link>
                        )}
                      </div>
                    </div>
                    {featured_event.dummy_data !== true && (
                      <div
                        className={
                          PageStyles.eventCountdown +
                          " col-sm-11 col-md-9 col-lap-6 event-countdown"
                        }
                      >
                        <h3>Next Event Starts:</h3>
                        <div
                          className={PageStyles.spacer + " " + PageStyles.solid}
                        ></div>
                        <div className={RowStyles.row}>
                          <div
                            className={
                              PageStyles.timeHolder + " col-sm-3 time-holder"
                            }
                          >
                            <Countdown
                              date={countdown_date_and_time}
                              renderer={day_renderer}
                            />
                            <p className={PageStyles.labels + " labels"}>
                              Days
                            </p>
                          </div>
                          <div
                            className={
                              PageStyles.timeHolder + " col-sm-3 time-holder"
                            }
                          >
                            <Countdown
                              date={countdown_date_and_time}
                              renderer={hours_renderer}
                            />
                            <p className={PageStyles.labels + " labels"}>
                              Hours
                            </p>
                          </div>
                          <div
                            className={
                              PageStyles.timeHolder + " col-sm-3 time-holder"
                            }
                          >
                            <Countdown
                              date={countdown_date_and_time}
                              renderer={minutes_renderer}
                            />
                            <p className={PageStyles.labels + " labels"}>
                              Minutes
                            </p>
                          </div>
                          <div
                            className={
                              PageStyles.timeHolder + " col-sm-3 time-holder"
                            }
                          >
                            <Countdown
                              date={countdown_date_and_time}
                              renderer={seconds_renderer}
                            />
                            <p className={PageStyles.labels + " labels"}>
                              Seconds
                            </p>
                          </div>
                          <div
                            className={
                              PageStyles.heroDateAndTime +
                              " col-sm-10 hero-date-and-time"
                            }
                          >
                            <span>
                              {format_date_long(featured_event.event_date)}
                            </span>{" "}
                            {featured_event.start_time !== "00:01" ? (
                              <span>
                                <span className={PageStyles.dot + " dot"}>
                                  &middot;
                                </span>{" "}
                                <span className="event-time">
                                  {featured_event.start_time !== "" && (
                                    <span className="start-time">
                                      {convert_time(featured_event.start_time)}
                                    </span>
                                  )}
                                  {featured_event.end_time !== "" && (
                                    <span className="end-time">
                                      -{convert_time(featured_event.end_time)}
                                    </span>
                                  )}
                                </span>
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Container>
              </div>
            </div>
          </BackgroundImage>
          <Main>
            <Container>
              <div className="content-main">
                <div
                  className={
                    PageStyles.upcomingEvents + " content-block upcoming-events"
                  }
                >
                  <div className={RowStyles.row}>
                    <div
                      className={
                        PageStyles.introSection +
                        " col-sm-11 col-md-10 col-lap-9 intro-section"
                      }
                    >
                      <InnerTitle title="Upcoming Events" centered />
                      <p>
                        Below is information on our upcoming events that can
                        cover a variety of topics about benefiting a private
                        practice through online marketing. Each conference will
                        have a unique focus and purpose, teaming up with
                        successful professionals within the industry. For more
                        information, follow the link to register.
                      </p>
                    </div>
                  </div>
                  <div className={RowStyles.row}>
                    <div
                      className={
                        PageStyles.eventCards +
                        " col-sm-11 col-md-9 col-lap-12 event-cards"
                      }
                    >
                      <div className={RowStyles.row}>
                        {display_upcoming_events}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={PageStyles.spacer + " " + PageStyles.solid}
                ></div>

                <div
                  className={
                    RowStyles.row + " " + PageStyles.featuredPartnersRow
                  }
                >
                  <div className="col-sm-12">
                    <div className="content-block">
                      <InnerTitle title="Featured Sponsers" centered />
                    </div>
                  </div>
                  <div className={RowStyles.row}>
                    <div className="col-sm-10 col-md-10 col-lap-10 col-lg-11">
                      <div className={RowStyles.row}>
                        <div
                          className={
                            PageStyles.logoPartnershipItem +
                            " logo-partnership-item col-sm-10 col-md-6 col-lap-3"
                          }
                        >
                          <div className={PageStyles.iconWrapper}>
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={images.boaLogo.childImageSharp.fluid.src}
                              alt="Digital Marketing Partner Bank of America"
                            />
                          </div>
                        </div>
                        <div
                          className={
                            PageStyles.logoPartnershipItem +
                            " logo-partnership-item col-sm-10 col-md-6 col-lap-3"
                          }
                        >
                          <div className={PageStyles.iconWrapper}>
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={
                                images.pattersonLogo.childImageSharp.fluid.src
                              }
                              alt="Digital Marketing Partner Patterson Companies, Inc."
                            />
                          </div>
                        </div>
                        <div
                          className={
                            PageStyles.logoPartnershipItem +
                            " logo-partnership-item col-sm-10 col-md-6 col-lap-3"
                          }
                        >
                          <div className={PageStyles.iconWrapper}>
                            <img
                              className={PageStyles.imgIcon + " img-icon"}
                              src={
                                images.pulseCheckLogo.childImageSharp.fluid.src
                              }
                              alt="Digital Marketing Partner PulseCheck"
                            />
                          </div>
                        </div>
                        <div
                          className={
                            PageStyles.logoPartnershipItem +
                            " logo-partnership-item col-sm-10 col-md-6 col-lap-3"
                          }
                        >
                          <div className={PageStyles.iconWrapper}>
                            <img
                              className={
                                PageStyles.imgIcon +
                                " " +
                                PageStyles.googlePartnerIcon +
                                " img-icon google-partner-icon"
                              }
                              src={images.googleLogo.childImageSharp.fluid.src}
                              alt="Google Partner"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={PageStyles.spacer + " " + PageStyles.solid}
                ></div>

                <div className={PageStyles.pastEvents + " past-events"}>
                  <div className={RowStyles.row}>
                    <div className="col-sm-11 col-md-11 col-lap-9 center">
                      <InnerTitle
                        title="Past Events"
                        centered
                        id={PageStyles.pastEventsTitle}
                      />
                      <p
                        className={
                          PageStyles.pastEventDesc + " past-event-desc"
                        }
                      >
                        At Doctor Genius, we understand that the digital
                        marketing platform is always changing and therefore,
                        offer events collaborating with other professionals in
                        specific fields. Here is a timeline of past events that
                        we have hosted on various topics pertaining to private
                        practices.
                      </p>
                    </div>
                  </div>

                  <div className={RowStyles.row}>
                    <div
                      className={
                        PageStyles.pastEventsTimeline +
                        " col-lap-10 col-lg-9 col-md-11 past-events-timeline"
                      }
                      style={eventTimeLineStyles}
                    >
                      <div className={RowStyles.row}>
                        {display_past_events()}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={PageStyles.spacer + " " + PageStyles.solid}
                ></div>

                {/* Begin Demo Footer */}
                <RequestDemoFooter eventsPage smWidth="11" />
                {/* End Demo Footer */}
              </div>
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default EventPage

export const pageQuery = graphql`
  query {
    featured_event: allWordpressWpEvents(
      filter: { featured_event: { eq: "1" } }
    ) {
      edges {
        node {
          ...eventListing
        }
      }
    }

    all_events: allWordpressWpEvents(
      filter: { featured_event: { eq: "0" } }
      sort: { fields: event_date, order: DESC }
    ) {
      edges {
        node {
          ...eventListing
        }
      }
    }
    boaLogo: file(relativePath: { eq: "bankofamerica.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattersonLogo: file(relativePath: { eq: "pattersoncompanies.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    googleLogo: file(relativePath: { eq: "googlepartner.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pulseCheckLogo: file(relativePath: { eq: "pulsecheckurgentcare.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    standardHeroBg: file(relativePath: { eq: "partnerships-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eventTimelineBg: file(relativePath: { eq: "event-timeline-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 858) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    defaultUpcomingImg: file(relativePath: { eq: "default-upcoming-img.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

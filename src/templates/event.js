import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import RequestDemoFooter from "../components/request-demo-footer"

import SpeakerPlaceholder from "../img/profile-placeholder.png"

import "../styles/event-post.scss"
import PageStyles from "./event.module.scss"
import RowStyles from "../components/Row.module.scss"

const EventPage = ({ data }) => {
  const event_details = data.focus_event
  const speaker_details = data.speakers_data.speaker_items
  //Dynamically add BG image from event data
  const heroDefaultBg = data.heroDefaultBg.childImageSharp.fluid.src
  let styleBackgroundImage = {
    backgroundImage: "url(" + heroDefaultBg + ")",
  }

  function get_time_zone() {
    if (event_details.time_zone !== null) {
      return event_details.time_zone[0] === "EST"
        ? "EST"
        : event_details.time_zone[0] === "CST"
        ? "CST"
        : event_details.time_zone[0] === "MST"
        ? "MST"
        : "PST"
    } else {
      return "PST"
    }
  }

  // If there is a hero bg image selected then set that instead
  if (event_details.all_image_urls.hero_image_url != null) {
    styleBackgroundImage = {
      backgroundImage:
        "url(" +
        event_details.all_image_urls.hero_image_url.localFile.childImageSharp
          .fluid.src +
        ")",
    }
  }

  //Handles formatting of date from Javascript ISO standard to full month, day, year.
  const format_date = date => {
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

  //Handles conversion of Military time to standard.
  const convert_time = time => {
    time = time.toString()
    time = time.split(":")

    let hours = Number(time[0])
    let minutes = Number(time[1])

    let time_value

    if (hours > 0 && hours <= 12) {
      time_value = "" + hours
    } else if (hours > 12) {
      time_value = "" + (hours - 12)
    } else if (hours === 0) {
      time_value = "12"
    }

    time_value += minutes < 10 ? ":0" + minutes : ":" + minutes
    time_value += hours >= 12 ? " PM" : " AM"
    return time_value
  }

  //Handles output of address or webinar distinction
  const display_location = (street_address, city, state) => {
    if ((street_address[0], city[0], state[0] === "")) {
      return <span>Online - Webinar</span>
    } else {
      return (
        <span>
          {event_details.event_street_address}, {event_details.event_city}{" "}
          {event_details.event_state}
        </span>
      )
    }
  }

  //Handles output of h1 li's
  const display_h1_information = () => {
    let h1_lis = []
    let li_item = "information_h1_li_"
    for (let i = 1; i <= 4; i++) {
      li_item = li_item + i
      if (event_details[li_item][0] !== "") {
        h1_lis.push(event_details[li_item][0])
      }
      li_item = "information_h1_li_"
    }
    return (
      <ul>
        {h1_lis.map(li_item => (
          <li key={h1_lis.indexOf(li_item)}>{li_item}</li>
        ))}
      </ul>
    )
  }

  //Handles output of h2 li's
  const display_h2_information = () => {
    let h2_lis = []
    let li_item = "information_h2_li_"
    for (let i = 1; i <= 4; i++) {
      li_item = li_item + i
      if (event_details[li_item][0] !== "") {
        h2_lis.push(event_details[li_item][0])
      }
      li_item = "information_h2_li_"
    }
    return (
      <ul>
        {h2_lis.map(li_item => (
          <li key={h2_lis.indexOf(li_item)}>{li_item}</li>
        ))}
      </ul>
    )
  }

  //Find number of speakers in this event and put into a new array
  const event_speakers = () => {
    //Create new array with all speaker data intact
    let speaker_items = []
    for (let i = 1; i <= 13; i++) {
      let temp_path = "wordpress_" + i
      if (speaker_details[0][temp_path]) {
        speaker_items.push(speaker_details[0][temp_path])
      }
    }
    return speaker_items
  }

  // Generic function to sort array based off an object's name(key)
  const map_order = (arr, order, key) => {
    arr.sort((a, b) => {
      let A = a[key]
      let B = b[key]
      if (order.indexOf(A) > order.indexOf(B)) {
        return 1
      } else {
        return -1
      }
    })
    return arr
  }

  // Function to sort speaker array based off "order"
  const sort_speakers = arr => {
    let current_order_array = []
    let speaker_order = []

    arr.map(speaker => {
      let number = speaker.order
      current_order_array.push(number)
      return true
    })

    speaker_order = current_order_array.sort()
    arr = map_order(arr, speaker_order, "order")
    return arr
  }

  const speakers = sort_speakers(event_speakers())

  // Handles displaying of the speaker section if speakers are present
  const display_speakers = () => {
    return (
      <div
        className={
          event_details.include_speakers[0] === "1"
            ? RowStyles.row +
              " " +
              RowStyles.padded +
              " " +
              PageStyles.speakerDetails +
              " content-block speaker-details"
            : "d-none"
        }
      >
        <div className="col-sm-12 col-lap-4">
          <h2>{event_details.speaker_section_title}:</h2>
          <h3>{event_details.speaker_section_subtitle}</h3>
        </div>
        <div className="col-sm-7 col-md-8 col-lap-8">
          <div
            className={
              RowStyles.row +
              " " +
              PageStyles.speakerProfiles +
              " speaker-profiles"
            }
          >
            {speaker_holder}
          </div>
        </div>
      </div>
    )
  }

  // Handles output of each speaker
  const speaker_holder = speakers.map(function(speaker) {
    if (speakers.length > 1) {
      return (
        <div
          className={
            PageStyles.speakerHolder +
            " col-sm-12 col-md-6 col-lap-3 speaker-holder"
          }
          key={speaker.speaker_name}
        >
          {speaker.speaker_profile_image_url ? (
            <div className="speaker-img-wrapper">
              <Img
                fluid={
                  speaker.speaker_profile_image_url.localFile.childImageSharp
                    .fluid
                }
                className="mx-auto d-block"
                alt="Speaker Profile"
              />
            </div>
          ) : (
            <div className="speaker-img-wrapper">
              <img src={SpeakerPlaceholder} className="mx-auto d-block" />
            </div>
          )}

          <p>{speaker.speaker_name}</p>
        </div>
      )
    } else {
      return <div key={speaker.order}></div>
    }
  })

  // Determines whether the information image is present and handles displaying/hiding it
  const display_information_section = () => {
    if (event_details.all_image_urls.information_image_url != null) {
      if (
        event_details.all_image_urls.information_image_url.source_url !== ""
      ) {
        return (
          <div>
            <div className={PageStyles.spacer + " " + PageStyles.solid}></div>
            <div
              className={
                RowStyles.row +
                " " +
                RowStyles.padded +
                " " +
                PageStyles.listedItems +
                " content-block listed-items"
              }
            >
              <div className="col-sm-11 col-md-9 col-lap-6">
                <h2>{event_details.information_heading1}</h2>
                {display_h1_information()}
                <h2>{event_details.information_heading2}</h2>
                {display_h2_information()}
              </div>
              <div
                className={
                  PageStyles.contentImage +
                  " col-lap-6 content-image d-none d-lap-block d-lg-block d-xl-block"
                }
              >
                <img
                  src={
                    event_details.all_image_urls.information_image_url.localFile
                      .childImageSharp.fluid.src
                  }
                  alt={
                    event_details.all_image_urls.information_image_url.alt_text
                  }
                />
              </div>
            </div>
          </div>
        )
      }
    } else {
      return (
        <div>
          <div className={PageStyles.spacer + " " + PageStyles.solid}></div>
          <div
            className={
              RowStyles.row +
              " " +
              RowStyles.padded +
              " content-block listed-items"
            }
          >
            <div className="col-sm-11 col-md-9 col-lap-7">
              <h2>{event_details.information_heading1}</h2>
              {display_h1_information()}
              <h2>{event_details.information_heading2}</h2>
              {display_h2_information()}
            </div>
            <div class="d-none"></div>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={PageStyles.eventDetailPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="event-post">
        <Helmet>
          <title>Event Details | Doctor Genius</title>
          <meta name="description" content="Doctor Genius | Event." />
        </Helmet>
        <div>
          <div
            className={PageStyles.hero + " hero"}
            style={styleBackgroundImage}
          >
            <div className={PageStyles.heroOverlay + " hero-overlay"}>
              {/* Hero will be a layout component */}

              <Container>
                <div
                  className={
                    RowStyles.row + " " + PageStyles.heroRow + " hero-row"
                  }
                >
                  <div className="col-sm-12 col-md-9 col-lap-8">
                    <div
                      className={
                        event_details.event_strapline[0] !== ""
                          ? PageStyles.continueEduClassHolder +
                            " continue-edu-class-holder"
                          : "d-none"
                      }
                    >
                      <span
                        className={
                          PageStyles.continueEduClass +
                          " " +
                          PageStyles.whiteText +
                          " continue-edu-class"
                        }
                      >
                        {event_details.event_strapline}
                      </span>
                    </div>
                    <div className={PageStyles.titles + " titles"}>
                      <h1>{event_details.event_title}</h1>
                      <h2>{event_details.event_subtitle}</h2>
                    </div>
                    <div
                      className={
                        event_details.register_url[0] !== ""
                          ? PageStyles.registerNowBtnHolder +
                            " register-now-btn-holder"
                          : "d-none"
                      }
                    >
                      <a
                        className={
                          PageStyles.registerNowBtn +
                          " " +
                          PageStyles.whiteText +
                          " register-now-btn"
                        }
                        href={event_details.register_url[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {event_details.register_button_text[0] === ""
                          ? "Register Now"
                          : event_details.register_button_text[0]}
                      </a>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
          <Main>
            <Container>
              <div className="main-content">
                <div className={RowStyles.row + " " + RowStyles.padded}>
                  <div className="col-sm-11 col-md-9 col-lap-6">
                    <div
                      className={
                        PageStyles.eventDetails + " content-block event-details"
                      }
                    >
                      <h3>Event Details</h3>
                      <p>{event_details.event_details_text}</p>
                    </div>
                  </div>
                  <div className="col-sm-11 col-md-9 col-lap-6">
                    <div
                      className={
                        RowStyles.row +
                        " " +
                        PageStyles.eventDate +
                        " event-date valign-wrapper"
                      }
                    >
                      <div
                        className={PageStyles.date320 + " col-sm-12 col-md-10"}
                      >
                        <div
                          className={
                            RowStyles.row + " " + PageStyles.card + " card"
                          }
                        >
                          <div
                            className={
                              PageStyles.cardBody +
                              " card-body col-sm-11 col-lap-12 col-lg-10"
                            }
                          >
                            <p className={PageStyles.cardText + " card-text"}>
                              Date: {format_date(event_details.event_date)}
                            </p>
                            <p className={PageStyles.cardText + " card-text"}>
                              {event_details.start_time[0] !== ""
                                ? "Time: " +
                                  convert_time(event_details.start_time) +
                                  " to " +
                                  convert_time(event_details.end_time)
                                : "Time: TBA"}
                              <span className={PageStyles.cardText}>
                                &nbsp;{get_time_zone()}
                              </span>
                            </p>
                            <p className={PageStyles.cardText + " card-text"}>
                              <span>Location: </span>
                              {display_location(
                                event_details.event_street_address,
                                event_details.event_city,
                                event_details.event_state
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {event_details.include_information[0] === "1" &&
                display_information_section()}

              <div
                className={
                  event_details.include_speakers[0] === "1"
                    ? PageStyles.spacer + " " + PageStyles.solid
                    : "d-none"
                }
              ></div>

              {display_speakers()}

              <div className={PageStyles.spacer + " " + PageStyles.solid}></div>

              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  PageStyles.dgMarketingSolutions +
                  " content-block dg-marketing-solutions"
                }
              >
                <div className="col-sm-11 col-md-9 col-lap-12">
                  <h2>
                    Doctor Genius
                    <br />
                    Marketing Solutions
                  </h2>
                  <div
                    className={
                      RowStyles.row +
                      " " +
                      PageStyles.dgDictionary +
                      " dg-dictionary"
                    }
                  >
                    <div
                      className={
                        PageStyles.dictionaryCol + " col-lap-6 dictionary-col"
                      }
                    >
                      <h4>Website</h4>
                      <p>
                        Our websites are power-packed with fresh and unique
                        content tailored to your practice and services
                      </p>
                      <h4>Branding</h4>
                      <p>
                        Delivering effective brand strategies that gives
                        practices a major edge in competitive markets
                      </p>
                      <h4>Social Media</h4>
                      <p>
                        Original patient education content is posted to your
                        social media profiles to generate general interest in
                        your medical treatments and services
                      </p>
                      <h4>Search Marketing</h4>
                      <p>
                        Narrow down your successful keywords, who is clicking on
                        them, and which keywords yield the highest number of new
                        patient inquiries
                      </p>
                      <h4>Hyper-Local Targeting</h4>
                      <p>
                        We increase the focus of who we are targeting to a small
                        geographic region near your practice
                      </p>
                      <h4>Lead Tracking</h4>
                      <p>
                        Get a detailed breakdown of your patient inquiries and
                        their disposition. Determine new or returning patients
                        to better track your Return On Investment (ROI)
                      </p>
                      <h4>Security</h4>
                      <p>
                        We are always first in line when it comes to running the
                        latest technology. In addition to our servers being in
                        the best location possible, we are also using the best
                        software available
                      </p>
                    </div>
                    <div
                      className={
                        PageStyles.dictionaryCol + " col-lap-6 dictionary-col"
                      }
                    >
                      <h4>Genius Portal</h4>
                      <p>
                        Get the information you need about your website and
                        performance in one easy-to-use dashboard
                      </p>
                      <h4>Rank Report</h4>
                      <p>
                        We provide reporting and analytics to keep you
                        up-to-date on your first page placement for targeted
                        keywords
                      </p>
                      <h4>Review Management</h4>
                      <p>
                        9 out of 10 customers read reviews before making a
                        purchasing decision. Stay informed of what patients are
                        saying about your practice
                      </p>
                      <h4>HOSTING</h4>
                      <p>
                        Get reviews from your existing patients fast with our
                        streamlined SMS and email services
                      </p>
                      <h4>Practice Promoter</h4>
                      <p>
                        Get reviews from existing patients fast with your
                        streamlined SMS and e-mail services
                      </p>
                      <h4>Recall</h4>
                      <p>
                        We have knowledge of each practice, which involves the
                        clear understanding of their industry and answering the
                        questions of their patient needs
                      </p>
                      <h4>Retention</h4>
                      <p>
                        Our goal is to help health practices retain as many
                        customers as possible, often through customer loyalty
                        and brand loyalty initiatives
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={PageStyles.spacer + " " + PageStyles.solid}></div>

              {/* Begin Demo Footer */}
              <RequestDemoFooter eventsPage smWidth="11" />
              {/* End Demo Footer */}
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default EventPage

export const pageQuery = graphql`
  query($currentID: Int) {
    focus_event: wordpressWpEvents(wordpress_id: { eq: $currentID }) {
      ...eventPost
    }
    speakers_data: wordpressWpEvents(wordpress_id: { eq: $currentID }) {
      ...speakers
    }
    heroDefaultBg: file(relativePath: { eq: "marketing-solutions.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

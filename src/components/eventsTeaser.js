import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from "./events-teaser.module.scss"
import rightChevron from "../img/right-chevron.svg"

import eventsStyles from "../components/events-teaser.module.scss"
import RowStyles from "../components/Row.module.scss"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        events: allWordpressWpEvents(
          sort: { fields: [date], order: [DESC] }
          limit: 4
        ) {
          edges {
            node {
              ...eventListing
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
      }
    `}
    render={data => (
      <div className={eventsStyles.eventsSection + " events-section"}>
        <div
          className={
            RowStyles.row +
            " " +
            RowStyles.padded +
            " " +
            RowStyles.mediumTop +
            " row padded medium-top"
          }
        >
          <div className="col-lg-12">
            <div className={eventsStyles.titleHolder + " title-holder"}>
              <h3 className={eventsStyles.blogHeading + " blog-heading"}>
                Webinars & Events
              </h3>
              <div className={eventsStyles.moreEvents + " more-events"}>
                <Link to={"/events"}>
                  View More
                  <img src={rightChevron} alt="View More Events" />
                </Link>
              </div>
            </div>
            <div
              className={
                eventsStyles.spacer +
                " " +
                eventsStyles.solid +
                " " +
                eventsStyles.small +
                " spacer solid small"
              }
            />
          </div>
          {data.events.edges.map(({ node }) => (
            <div className="col-sm-12 col-md-3 col-lg-3" key={node.slug}>
              <Link
                to={`/events/` + node.slug}
                className={styles.hoverUnderline}
              >
                <div className={styles.eventWrapper + " event-wrapper"}>
                  <Img
                    fluid={
                      node.all_image_urls.hero_image_url
                        ? node.all_image_urls.hero_image_url.localFile
                            .childImageSharp.fluid
                        : data.standardHeroBg.childImageSharp.fluid
                    }
                    alt="Recent Event"
                  />
                </div>

                <p
                  className={
                    styles.eventThumbnailTitle + " event-thumbnail-title"
                  }
                >
                  {node.event_title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )}
  />
)

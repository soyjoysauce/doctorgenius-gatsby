import React, { Component } from "react"
import { Link } from "gatsby"

// Images - Marketing Solutions Pages
import contentMarketingIcon from "../img/contract.svg"
import responsiveWebsitesIcon from "../img/website.svg"
import digitalAdvertisingIcon from "../img/digital-advertising.svg"
import onlineReputationIcon from "../img/online-reputation.svg"
import ourTechnologyIcon from "../img/our-technology.svg"
import hostingSolutionsIcon from "../img/hosting-solutions.svg"
import pxMarketingIcon from "../img/icon/px-nav.svg"

// Images - Our Clients Pages
import dentalPractices from "../img/icon/tooth-shine-nav.svg"
import urgentCare from "../img/icon/urgent-care-nav.svg"
import chiropractorPractices from "../img/icon/chiropractor-nav.svg"
import cosmeticSurgeons from "../img/icon/surgeon-nav.svg"
import healthcareMarketing from "../img/icon/sphygmomanometer-nav.svg"

import SecondaryNavStyles from "./SecondaryNavigation.module.scss"

import $ from "jquery"

class SecondaryNavigation extends Component {
  constructor(props) {
    super(props)

    // Configuration object used to serve the menu items in each page
    this.navItemsConfiguration = {
      marketingSolutions: [
        {
          url: "/marketing-solutions/websites",
          source: responsiveWebsitesIcon,
          alt: "Responsive Websites",
          text: "Responsive Websites",
        },
        {
          url: "/marketing-solutions/content-marketing",
          source: contentMarketingIcon,
          alt: "Content Marketing",
          text: "Content Marketing",
        },
        {
          url: "/marketing-solutions/digital-advertising",
          source: digitalAdvertisingIcon,
          alt: "Digital Advertising",
          text: "Digital Advertising",
        },
        {
          url: "/marketing-solutions/online-reputation-management",
          source: onlineReputationIcon,
          alt: "Online Reputation",
          text: "Online Reputation",
        },
        {
          url: "/marketing-solutions/our-technology",
          source: ourTechnologyIcon,
          alt: "Our Technology",
          text: "Our Technology",
        },
        {
          url: "/marketing-solutions/hosting-solutions",
          source: hostingSolutionsIcon,
          alt: "Hosting Solutions",
          text: "Hosting Solutions",
        },
        {
          url: "/marketing-solutions/px-package",
          source: pxMarketingIcon,
          alt: "Patient Experience Package",
          text: "PX Package",
        },
      ],
      ourClients: [
        {
          url: "/our-clients/dental-practices",
          source: dentalPractices,
          alt: "Dental Practices",
          text: "Dental Practices",
        },
        {
          url: "/our-clients/urgent-care-clinics",
          source: urgentCare,
          alt: "Urgent Care Clinics",
          text: "Urgent Care Clinics",
        },
        {
          url: "/our-clients/chiropractor-practices",
          source: chiropractorPractices,
          alt: "Chiropractor Practices",
          text: "Chiropractor Practices",
        },
        {
          url: "/our-clients/cosmetic-surgeons",
          source: cosmeticSurgeons,
          alt: "Cosmetic Surgeons",
          text: "Cosmetic Surgeons",
        },
        {
          url: "/our-clients/healthcare-marketing",
          source: healthcareMarketing,
          alt: "Healthcare Marketing",
          text: "Healthcare Marketing",
        },
      ],
    }
  }

  componentDidMount() {
    $(document).ready(function() {
      document.addEventListener("scroll", function(e) {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        const scrolled = winScroll / height

        if (
          typeof document.querySelector(
            `.${SecondaryNavStyles.secondaryNav}`
          ) !== "undefined" &&
          document.querySelector(`.${SecondaryNavStyles.secondaryNav}`) !== null
        ) {
          var navBottom = document
            .querySelector(`nav.navbar`)
            .getBoundingClientRect().bottom
          var secondaryNavTop = document
            .querySelector(`.${SecondaryNavStyles.secondaryNav}`)
            .getBoundingClientRect().top
          var heroBottom = document
            .querySelector(".hero")
            .getBoundingClientRect().bottom
        }

        if (
          typeof document.querySelector(
            `.${SecondaryNavStyles.secondaryNav}`
          ) !== "undefined" &&
          document.querySelector(`.${SecondaryNavStyles.secondaryNav}`) !== null
        ) {
          if (heroBottom <= navBottom) {
            document
              .querySelector(`.${SecondaryNavStyles.secondaryNavTarget}`)
              .classList.add(`${SecondaryNavStyles.secondaryNavStuck}`)
            document.querySelector(".hero").classList.add("shift-down")
          } else {
            document
              .querySelector(`.${SecondaryNavStyles.secondaryNavTarget}`)
              .classList.remove(`${SecondaryNavStyles.secondaryNavStuck}`)
            document.querySelector(".hero").classList.remove("shift-down")
          }
        }
      })
    })
  }

  render() {
    return (
      <div
        className={
          SecondaryNavStyles.secondaryNavTarget + " secondary-nav-target"
        }
      >
        <div className={SecondaryNavStyles.secondaryNav + " secondary-nav"}>
          {this.navItemsConfiguration[this.props.pageType].map(item => (
            <div
              className={
                (item.text === this.props.pageTitle
                  ? SecondaryNavStyles.active + " active "
                  : "") +
                SecondaryNavStyles.panel +
                " panel"
              }
            >
              <div className={SecondaryNavStyles.iconWrapper + " icon-wrapper"}>
                <Link to={item.url}>
                  <img
                    className={SecondaryNavStyles.imgIcon + " img-icon"}
                    src={item.source}
                    alt={item.alt}
                  />
                </Link>
              </div>
              <Link to={item.url} className={SecondaryNavStyles.subtleLink}>
                <p>{item.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default SecondaryNavigation

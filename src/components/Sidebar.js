import React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import Container from "../components/Container"

import house from "../img/icon/house.svg"
import marketingSolutions from "../img/icon/statistics.svg"
import ourClients from "../img/icon/our-clients.svg"
import plans from "../img/icon/pricing.svg"
import resources from "../img/icon/resources.svg"
import freeDemo from "../img/icon/video-options.svg"
import contact from "../img/icon/email.svg"
import downArrow from "../img/icon/down-arrow.svg"
import dismissIcon from "../img/icon/dismiss-white.svg"
import facebook from "../img/icon/facebook-white.svg"
import twitter from "../img/icon/twitter-white.svg"
import instagram from "../img/icon/instagram-white.svg"
import linkedin from "../img/icon/linkedin-white.svg"
import youtube from "../img/icon/youtube-white.svg"
import company from "../img/icon/hotel.svg"

import SidebarStyles from "./Sidebar.module.scss"

import $ from "jquery"

const ListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <Link to={props.to} activeClassName="active" partiallyActive={true}>
      {props.children}
    </Link>
    {}
  </li>
)

const SideNavListLink = props => (
  <li className={props.className}>
    <div className={SidebarStyles.navIconWrapper + " nav-icon-wrapper"}>
      <div className={SidebarStyles.iconWrapper}>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          <img
            className={SidebarStyles.imageIcon + " image-icon"}
            src={props.iconSubnav}
            alt="Navigation Icon"
          />
        </Link>
      </div>
    </div>
    <div className={SidebarStyles.dropdownLinks + " dropdown-links"}>
      <Link to={props.to} activeClassName="active" partiallyActive={true}>
        {props.children}
      </Link>
    </div>
    {}
  </li>
)

const MarketingSolutionsSideNavListLink = props => (
  <li className={props.className}>
    <div className={SidebarStyles.navIconWrapper + " nav-icon-wrapper"}>
      <div className={SidebarStyles.iconWrapper}>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          <img
            className={SidebarStyles.imageIcon + " image-icon"}
            src={props.iconSubnav}
            alt="Marketing Solutions Icon"
          />
        </Link>
      </div>
    </div>
    <div className={SidebarStyles.dropdownLinks + " dropdown-links"}>
      <div>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          {props.children}
        </Link>
        <span
          className={SidebarStyles.downArrowContainer + " down-arrow-container"}
        >
          <img
            className={SidebarStyles.downArrow + " down-arrow"}
            src={downArrow}
            alt="Down Arrow Icon"
          />
        </span>
      </div>
      <ul>
        <ListLink
          to="/marketing-solutions/websites"
          activeClassName="active"
          partiallyActive={true}
        >
          Responsive Websites
        </ListLink>
        <ListLink
          to="/marketing-solutions/content-marketing"
          activeClassName="active"
          partiallyActive={true}
        >
          Content Marketing
        </ListLink>
        <ListLink
          to="/marketing-solutions/digital-advertising"
          activeClassName="active"
          partiallyActive={true}
        >
          Digital Advertising
        </ListLink>
        <ListLink
          to="/marketing-solutions/online-reputation-management"
          activeClassName="active"
          partiallyActive={true}
        >
          Online Reputation
        </ListLink>
        <ListLink
          to="/marketing-solutions/our-technology"
          activeClassName="active"
          partiallyActive={true}
        >
          Our Technology
        </ListLink>
        <ListLink
          to="/marketing-solutions/hosting-solutions"
          activeClassName="active"
          partiallyActive={true}
        >
          Hosting Solutions
        </ListLink>
        <ListLink
          to="/marketing-solutions/px-package"
          activeClassName="active"
          partiallyActive={true}
        >
          PX Package
        </ListLink>
      </ul>
    </div>
  </li>
)

const WhoWeServeSideNavListLink = props => (
  <li className={props.className}>
    <div className={SidebarStyles.navIconWrapper + " nav-icon-wrapper"}>
      <div className={SidebarStyles.iconWrapper}>
        <Link
          to={props.to}
          className=""
          activeClassName="active"
          partiallyActive={true}
        >
          <img
            className={SidebarStyles.imageIcon + " image-icon"}
            src={props.iconSubnav}
            alt="Who We Serve Icon"
          />
        </Link>
      </div>
    </div>
    <div className={SidebarStyles.dropdownLinks + " dropdown-links"}>
      <div>
        <Link
          to={props.to}
          className="sidenav-link-dropdown"
          activeClassName="active"
          partiallyActive={true}
        >
          {props.children}
        </Link>
        <span
          className={SidebarStyles.downArrowContainer + " down-arrow-container"}
        >
          <img
            className={SidebarStyles.downArrow + " down-arrow"}
            src={downArrow}
            alt="Down Arrow Icon"
          />
        </span>
      </div>
      <ul>
        <ListLink
          to="/our-clients/dental-practices"
          activeClassName="active"
          partiallyActive={true}
        >
          Dental Practices
        </ListLink>
        <ListLink
          to="/our-clients/cosmetic-surgeons"
          activeClassName="active"
          partiallyActive={true}
        >
          Cosmetic Surgeons
        </ListLink>
        <ListLink
          to="/our-clients/urgent-care-clinics"
          activeClassName="active"
          partiallyActive={true}
        >
          Urgent Care Clinics
        </ListLink>
        <ListLink
          to="/our-clients/healthcare-marketing"
          activeClassName="active"
          partiallyActive={true}
        >
          Healthcare Marketing
        </ListLink>
        <ListLink
          to="/our-clients/chiropractor-practices"
          activeClassName="active"
          partiallyActive={true}
        >
          Chiropractor Practices
        </ListLink>
      </ul>
    </div>
  </li>
)

const CompanySideNavListLink = props => (
  <li className={props.className}>
    <div className={SidebarStyles.navIconWrapper + " nav-icon-wrapper"}>
      <div className={SidebarStyles.iconWrapper}>
        <Link
          to={props.to}
          className="nav-disable-link-open-dropdown-icon"
          activeClassName="active"
          partiallyActive={true}
        >
          <img
            className={SidebarStyles.imageIcon + " image-icon"}
            src={props.iconSubnav}
            alt="Company Icon"
          />
        </Link>
      </div>
    </div>
    <div className={SidebarStyles.dropdownLinks + " dropdown-links"}>
      <div>
        <Link
          to={props.to}
          className="nav-disable-link-open-dropdown"
          activeClassName="active"
          partiallyActive={true}
        >
          {props.children}
        </Link>
        <span
          className={SidebarStyles.downArrowContainer + " down-arrow-container"}
        >
          <img
            className={SidebarStyles.downArrow + " down-arrow"}
            src={downArrow}
            alt="Down Arrow Icon"
          />
        </span>
      </div>
      <ul>
        <ListLink to="/company" activeClassName="active" partiallyActive={true}>
          About
        </ListLink>
        {/* Hidden until the content for page is finalized */}
        <ListLink
          to="/partnerships"
          activeClassName="active"
          partiallyActive={true}
        >
          Partnerships
        </ListLink>
      </ul>
    </div>
  </li>
)

const ResourcesSideNavListLink = props => (
  <li className={props.className}>
    <div className={SidebarStyles.navIconWrapper + " nav-icon-wrapper"}>
      <div className={SidebarStyles.iconWrapper}>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          <img
            className={SidebarStyles.imageIcon + " image-icon"}
            src={props.iconSubnav}
            alt="Resources Icon"
          />
        </Link>
      </div>
    </div>
    <div className={SidebarStyles.dropdownLinks + " dropdown-links"}>
      <div>
        <Link to={props.to} activeClassName="active" partiallyActive={true}>
          {props.children}
        </Link>
        <span
          className={SidebarStyles.downArrowContainer + " down-arrow-container"}
        >
          <img
            className={SidebarStyles.downArrow + " down-arrow"}
            src={downArrow}
            alt="Down Arrow Icon"
          />
        </span>
      </div>
      <ul>
        <ListLink to="/blog" activeClassName="active" partiallyActive={true}>
          The Study
        </ListLink>
        {/* Hidden until the content for page is finalized */}
        {/*<ListLink
            to="/intentional-404/"
            activeClassName="active"
            partiallyActive={true}
          >
            Webinars
          </ListLink>*/}
        <ListLink
          to="/case-study"
          activeClassName="active"
          partiallyActive={true}
        >
          Case Studies
        </ListLink>
        <ExternalListLink
          className=""
          to="https://portal.doctorgenius.com/login"
        >
          Client Portal
        </ExternalListLink>
        {/* Hidden until the content for page is finalized */}
        {/*<ListLink
            to="/intentional-404/"
            activeClassName="active"
            partiallyActive={true}
          >
            Knowledge Base
          </ListLink>*/}
        {/* Hidden until the content for page is finalized */}
        {/*<ListLink
            to="/intentional-404/"
            activeClassName="active"
            partiallyActive={true}
          >
            eBooks and Whitepapers
          </ListLink>*/}
      </ul>
    </div>
  </li>
)

const ExternalLink = props => (
  <li className={props.className}>
    <a href={props.to} target="_blank" rel="noreferrer noopener">
      <div className={SidebarStyles.iconWrapper}>
        <img className="img-icon" src={props.source} alt={props.alt} />
      </div>
    </a>
  </li>
)

const ExternalListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <a href={props.to}>{props.children}</a>
    {}
  </li>
)

class Sidebar extends Component {
  componentDidMount() {
    $(document).ready(function() {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      // let vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      // document.getElementById("sidebar").style.setProperty("--vh", `${vh}px`)
      $(".dropdown-heading").click(function(event) {
        event.stopPropagation()
      })

      $(".nav-disable-link-open-dropdown-icon").click(function(event) {
        event.preventDefault()
        var thisDropdownList = $(this)
          .parent()
          .parent()
          .siblings(".dropdown-links")
          .children("ul")
        var thisDropdownTitle = $(this).parents(".nav-item")
        if (thisDropdownTitle.hasClass("show")) {
          thisDropdownTitle.removeClass("show")
          thisDropdownList.slideUp(500)
        } else {
          $(".sidebar .dropdown-links ul")
            .not(thisDropdownList)
            .slideUp(500)
          thisDropdownTitle.addClass("show")
          thisDropdownList.slideDown(500)
        }
      })
      $(".nav-disable-link-open-dropdown").click(function(event) {
        event.preventDefault()
        var thisDropdownList = $(this)
          .parent()
          .siblings("ul")
        var thisDropdownTitle = $(this).parents(".nav-item")
        if (thisDropdownTitle.hasClass("show")) {
          thisDropdownTitle.removeClass("show")
          thisDropdownList.slideUp(500)
        } else {
          $(".sidebar .dropdown-links ul")
            .not(thisDropdownList)
            .slideUp(500)
          thisDropdownTitle.addClass("show")
          thisDropdownList.slideDown(500)
        }
      })
      // END - Disable the title icon for the dropdown menu

      $(`.${SidebarStyles.dismiss}, .${SidebarStyles.overlay}`).on(
        "click",
        function() {
          // hide sidebar
          $(".sidebar").removeClass(`${SidebarStyles.active} active`)
          // hide overlay
          $(`.${SidebarStyles.overlay}`).removeClass(
            `${SidebarStyles.active} active`
          )
        }
      )

      $("#sidenav-trigger").on("click", function() {
        // open sidebar
        $(".sidebar").addClass(`${SidebarStyles.active} active`)
        // fade in the overlay
        $(`.${SidebarStyles.overlay}`).addClass(
          `${SidebarStyles.active} active`
        )
        $(".collapse.in").toggleClass("in")
        $("a[aria-expanded=true]").attr("aria-expanded", "false")
      })

      // Controls toggling the dropdown items on dropdown arrow click
      $(".sidebar .dropdown-links .down-arrow-container").on(
        "click",
        function() {
          var thisDropdownList = $(this)
            .parent()
            .siblings("ul")
          var thisDropdownTitle = $(this).parents(".nav-item")
          $(".sidebar .dropdown-links ul")
            .not(thisDropdownList)
            .slideUp(500)
          if (thisDropdownTitle.hasClass("show")) {
            thisDropdownTitle.removeClass("show")
            thisDropdownList.slideUp(500)
          } else {
            thisDropdownList.slideDown(500)
            thisDropdownTitle.addClass("show")
            $(".sidebar .dropdown-links ul")
              .not(thisDropdownList)
              .parents(".nav-item")
              .removeClass("show")
          }
        }
      )
    })
  }

  render() {
    return (
      <div>
        <nav className={SidebarStyles.sidebar + " sidebar"}>
          <button
            className={SidebarStyles.dismiss + " dismiss"}
            id=""
            type="button"
            data-toggle=""
            aria-label=""
          >
            <img
              className={SidebarStyles.dismissIcon + " dismiss-icon"}
              src={dismissIcon}
              alt="Dismiss Icon"
            />
          </button>

          <ul className={SidebarStyles.navbarNav + " navbar-nav"}>
            <SideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle=""
              iconSubnav={house}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/"
            >
              Home
            </SideNavListLink>
            <MarketingSolutionsSideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle="dropdown"
              iconSubnav={marketingSolutions}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/marketing-solutions"
            >
              Marketing Solutions
            </MarketingSolutionsSideNavListLink>
            <WhoWeServeSideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle="dropdown"
              iconSubnav={ourClients}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/our-clients/dental-practices"
            >
              Our Clients
            </WhoWeServeSideNavListLink>
            <SideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle="dropdown"
              iconSubnav={plans}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/plans"
            >
              Plans
            </SideNavListLink>
            <CompanySideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle="dropdown"
              iconSubnav={company}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/company"
            >
              Company
            </CompanySideNavListLink>
            <ResourcesSideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle="dropdown"
              iconSubnav={resources}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/blog"
            >
              Resources
            </ResourcesSideNavListLink>
            <SideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle="dropdown"
              iconSubnav={freeDemo}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/demo"
            >
              Free Demo
            </SideNavListLink>
            <SideNavListLink
              className={SidebarStyles.navItem + " nav-item"}
              dataToggle="dropdown"
              iconSubnav={contact}
              // data-toggle="collapse"
              // aria-expanded="false"
              to="/contact"
            >
              Contact
            </SideNavListLink>
          </ul>
          <div
            className={
              SidebarStyles.socialMediaContainer + " social-media-container"
            }
          >
            <ul className={SidebarStyles.socialMedia + " social-media"}>
              <ExternalLink
                to="https://www.facebook.com/DoctorGeniusMarketing"
                source={facebook}
                alt="Facebook logo icon"
                className={
                  SidebarStyles.socialLinkContainer + " social-link-container"
                }
              />
              <ExternalLink
                to="https://twitter.com/DoctorGeniusCA"
                source={twitter}
                alt="Twitter logo icon"
                className={
                  SidebarStyles.socialLinkContainer + " social-link-container"
                }
              />
              <ExternalLink
                to="https://www.instagram.com/doctor.genius/"
                source={instagram}
                alt="Instagram logo icon"
                className={
                  SidebarStyles.socialLinkContainer + " social-link-container"
                }
              />
              <ExternalLink
                to="https://www.linkedin.com/company/doctor-genius"
                source={linkedin}
                alt="LinkedIn logo icon"
                className={
                  SidebarStyles.socialLinkContainer + " social-link-container"
                }
              />
              <ExternalLink
                to="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos"
                source={youtube}
                alt="Youtube logo icon"
                className={
                  SidebarStyles.socialLinkContainer + " social-link-container"
                }
              />
            </ul>
          </div>
        </nav>
        <div className={SidebarStyles.overlay + " overlay"} />
      </div>
    )
  }
}

export default Sidebar

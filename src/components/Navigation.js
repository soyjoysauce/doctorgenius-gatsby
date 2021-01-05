import React from "react"
import { Component } from "react"
import { Link } from "gatsby"
import Container from "../components/Container"
import Sidebar from "../components/Sidebar"

import ourTech from "../img/icon/our-technology-white.svg"
import responsiveWebsites from "../img/icon/website-white.svg"
import contentMarketing from "../img/icon/contract-white.svg"
import onlineReputation from "../img/icon/online-reputation-white.svg"
import digitalAdvertising from "../img/icon/digital-advertising-white.svg"
import hostingSolutions from "../img/icon/hosting-solutions-white.svg"
import dentalPractices from "../img/icon/tooth.svg"
import cosmeticSurgeons from "../img/icon/surgeon.svg"
import urgentCare from "../img/icon/urgent-care.svg"
import healthcareMarketing from "../img/icon/sphygmomanometer.svg"
import caseStudy from "../img/icon/briefcase.svg"
import theStudy from "../img/icon/the-study-white.svg"
import company from "../img/icon/hotel.svg"
import contactUs from "../img/icon/contact-us-white.svg"
import loginPortalIcon from "../../public/icon/icon-portal.svg"
import eventsIcon from "../img/icon/calendar-white.svg"
import pxIcon from "../img/icon/px-nav-white.png"

import "bootstrap/dist/js/bootstrap.min.js"
// import "../../static/scripts/navigationFunctionality.js"
import NavStyles from "./Navigation.module.scss"
import RowStyles from "../components/Row.module.scss"

import $ from "jquery"

const ListLink = props => (
  <li className={props.className} data-toggle={props.dataToggle}>
    <Link
      to={props.to}
      activeClassName={NavStyles.active + " active"}
      partiallyActive={true}
    >
      {props.children}
    </Link>
    {}
  </li>
)

const OurClientsListLink = props => (
  <li className={NavStyles.dropdown + " " + props.dataToggle}>
    <Link
      className={NavStyles.dropdownHeading + " dropdown-heading"}
      to={props.to}
      activeClassName={NavStyles.active + " active"}
      partiallyActive={true}
      data-toggle={props.dataToggle}
    >
      {props.children}
    </Link>
    <div
      className={
        NavStyles.dropdownMenu + " dropdown-menu caret who-we-serve-dropdown"
      }
    >
      <div className={RowStyles.row}>
        <div className="col-sm-12">
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/our-clients/dental-practices">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={dentalPractices}
                        alt="Dental Practices Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Dental Practices
                    </span>
                    <p>Bringing in new dental patients every day</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/our-clients/cosmetic-surgeons">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={cosmeticSurgeons}
                        alt="Cosmetic Surgeons Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Cosmetic Surgeons
                    </span>
                    <p>Attract new patients to your office</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/our-clients/urgent-care-clinics">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={urgentCare}
                        alt="Urgent Care Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Urgent Care Clinics
                    </span>
                    <p>
                      Grow your Urgent Care Center and accelerate your revenue
                      cycle
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/our-clients/healthcare-marketing">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={healthcareMarketing}
                        alt="Healthcare Marketing Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Healthcare Marketing
                    </span>
                    <p>
                      Complete marketing specific to healthcare industry needs
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/our-clients/chiropractor-practices">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={ourTech}
                        alt="Chiropractic Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Chiropractor Practices
                    </span>
                    <p>
                      Stretch your online reach and increase your new patient
                      calls
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <div
                className={
                  NavStyles.dropdownContentBlock + " dropdown-content-block"
                }
              >
                <Link className="" to={props.to} />
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {}
  </li>
)

const MarketingSolutionsListLink = props => (
  <li className={NavStyles.dropdown + " " + props.dataToggle}>
    <Link
      className={NavStyles.dropdownHeading + " dropdown-heading"}
      to={props.to}
      activeClassName={NavStyles.active + " active"}
      partiallyActive={true}
      data-toggle={props.dataToggle}
    >
      {props.children}
    </Link>
    <div
      className={
        NavStyles.dropdownMenu +
        " dropdown-menu caret marketing-solutions-dropdown"
      }
    >
      <div className={RowStyles.row}>
        <div className="col-sm-12">
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/websites">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={responsiveWebsites}
                        alt="Marketing Solutions Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Responsive Websites
                    </span>
                    <p>Beautiful, High Performing Websites Built to Convert</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link
                className=""
                to="/marketing-solutions/online-reputation-management"
              >
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={onlineReputation}
                        alt="Online Reputation Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Online Reputation
                    </span>
                    <p>
                      We direct your customers in a stepped out process that
                      gets you reviews
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/content-marketing">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={contentMarketing}
                        alt="Content Marketing Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                      to="/marketing-solutions/content-marketing"
                    >
                      Content Marketing
                    </span>
                    <p>Target ROI Focused Keywords for Google Search</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/our-technology">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={ourTech}
                        alt="Our Technology Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Our Technology
                    </span>
                    <p>Experience our performance-based marketing program</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/digital-advertising">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={digitalAdvertising}
                        alt="Digital Advertising Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Digital Advertising
                    </span>
                    <p>
                      Expanding your digital reach and drawing in new patients
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/hosting-solutions">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={hostingSolutions}
                        alt="Hosting Solutions Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Hosting Solutions
                    </span>
                    <p>Enterprise Power for Medical Practice Websites</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/marketing-solutions/px-package">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={pxIcon}
                        alt="PX Package Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      PX Package
                    </span>
                    <p>Explore our new Patient Experience Package details.</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {}
  </li>
)

const CompanyListLink = props => (
  <li className={NavStyles.dropdown + " " + props.dataToggle}>
    <Link
      className={NavStyles.dropdownHeading + " dropdown-heading disable-link"}
      to={props.to}
      activeClassName={NavStyles.active + " active"}
      partiallyActive={true}
      data-toggle={props.dataToggle}
    >
      {props.children}
    </Link>
    <div
      className={
        NavStyles.dropdownMenu + " dropdown-menu caret resources-dropdown"
      }
    >
      <div className={RowStyles.row}>
        <div className="col-sm-12">
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/company">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <img
                      className={NavStyles.imageIcon + " image-icon"}
                      src={company}
                      alt="Company Icon"
                    />
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      About
                    </span>
                    <p>
                      Offering high-end marketing services to health
                      professionals
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/partnerships">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={caseStudy}
                        alt="Case Studies Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Partnerships
                    </span>
                    <p>Establishing value-added partnerships</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6 ">
              <Link className="" to="/contact">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <img
                      className={NavStyles.imageIcon + " image-icon"}
                      src={contactUs}
                      alt="Contact Us Icon"
                    />
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Contact Us
                    </span>
                    <p>Have a question? Send us a message</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6 ">
              <Link className="" to="/events">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <img
                      className="image-icon"
                      src={eventsIcon}
                      alt="Events Page Icon"
                    />
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Events
                    </span>
                    <p>
                      Stay up to date with Doctor Genius and all future events
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {}
  </li>
)

const StudySingleListLink = props => (
  <li className={NavStyles.dropdown + " " + props.dataToggle}>
    <Link
      className={NavStyles.dropdownHeading + " dropdown-heading"}
      to={props.to}
      activeClassName={NavStyles.active + " active"}
      partiallyActive={true}
      data-toggle={props.dataToggle}
    >
      {props.children}
    </Link>
    <div
      className={
        NavStyles.dropdownMenu + " dropdown-menu caret resources-dropdown"
      }
    >
      <div className={RowStyles.row}>
        <div className="col-sm-12">
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            <div className="col-sm-6">
              <Link className="" to="/blog">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <img
                      className={NavStyles.imageIcon + " image-icon"}
                      src={theStudy}
                      alt="The Study Icon"
                    />
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      The Study
                    </span>
                    <p>
                      Education on all things digital marketing and practice
                      management
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link className="" to="/case-study">
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={caseStudy}
                        alt="Case Study Icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Case Studies
                    </span>
                    <p>
                      See Doctor Genius Action Plan to address one doctor’s
                      needs
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            {/* Hidden until the content for page is finalized */}
            {/*<div className="col-sm-6">
            <div className="nav-icon-wrapper">
                <div className={NavStyles.iconWrapper}>
                <img className="image-icon" src={webinars} />
                </div>
            </div>
            <div className="dropdown-content-block">
                <Link className="" to="/intentional-404">
                Webinars
                </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                volutpat mi sit amet.
                </p>
            </div>
            </div>*/}
          </div>
          <div
            className={
              NavStyles.dropdownRow + " " + RowStyles.row + " dropdown-row"
            }
          >
            {/* Hidden until the content for page is finalized */}
            {/*<div className="col-sm-6">
            <div className="nav-icon-wrapper">
                <div className={NavStyles.iconWrapper}>
                <img className="image-icon" src={caseStudy} />
                </div>
            </div>
            <div className="dropdown-content-block">
                <Link className="" to="/case-study">
                Case Studies
                </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                volutpat mi sit amet.
                </p>
            </div>
            </div>*/}
            {/* Hidden until the content for page is finalized */}
            {/*<div className="col-sm-6">
            <div className="nav-icon-wrapper">
                <div className={NavStyles.iconWrapper}>
                <img className="image-icon" src={info} />
                </div>
            </div>
            <div className="dropdown-content-block">
                <Link className="" to="/intentional-404">
                Knowledge Base
                </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                volutpat mi sit amet.
                </p>
            </div>
            </div>*/}
            {/*</div>*/}
            {/*<div className="row dropdown-row">*/}
            {/* Hidden until the content for page is finalized */}
            {/*<div className="col-sm-6">
            <div className="nav-icon-wrapper">
                <div className={NavStyles.iconWrapper}>
                <img className="image-icon" src={ourTech} />
                </div>
            </div>
            <div className="dropdown-content-block">
                <Link className="" to="/intentional-404">
                eBooks &amp; Whitepapers
                </Link>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                volutpat mi sit amet.
                </p>
            </div>
            </div>*/}
            <div className="col-sm-6">
              <a
                className=""
                href="https://portal.doctorgenius.com/login"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  className={
                    NavStyles.dropdownItemBlock + " dropdown-item-block"
                  }
                >
                  <div
                    className={NavStyles.navIconWrapper + " nav-icon-wrapper"}
                  >
                    <div className={NavStyles.iconWrapper}>
                      <img
                        className={NavStyles.imageIcon + " image-icon"}
                        src={loginPortalIcon}
                        alt="Client portal icon"
                      />
                    </div>
                  </div>
                  <div
                    className={
                      NavStyles.dropdownContentBlock + " dropdown-content-block"
                    }
                  >
                    <span
                      className={
                        NavStyles.dropdownContentTitle +
                        " dropdown-content-title"
                      }
                    >
                      Portal Login
                    </span>
                    <p>
                      Login for clients to our performance-based marketing
                      program
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6">
              <div
                className={
                  NavStyles.dropdownContentBlock + " dropdown-content-block"
                }
              >
                <Link className="" to={props.to} />
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {}
  </li>
)

class Navigation extends Component {
  componentDidMount() {
    $(document).ready(function() {
      window.addEventListener("scroll", event => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > 0 && winScroll < 100) {
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.add(`${NavStyles.mainNavbarStuck}`)
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.add(`${NavStyles.stuckMidway}`)
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.remove(`${NavStyles.stuckFully}`)
        } else if (winScroll >= 100) {
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.add(`${NavStyles.mainNavbarStuck}`)
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.add(`${NavStyles.stuckFully}`)
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.remove(`${NavStyles.stuckMidway}`)
        } else {
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.remove(`${NavStyles.mainNavbarStuck}`)
          document
            .querySelector(`nav.${NavStyles.navbar}`)
            .classList.remove(`${NavStyles.stuckMidway}`)
        }
      })
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      // let vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      // document.getElementById("sidebar").style.setProperty("--vh", `${vh}px`)

      $(document).ready(function() {
        function toggleDropdown(e) {
          const _d = $(e.target).closest(`.${NavStyles.dropdown}`),
            _m = $(`.${NavStyles.dropdownMenu}`, _d)
          setTimeout(
            function() {
              const shouldOpen = e.type !== "click" && _d.is(":hover")
              _m.toggleClass(`${NavStyles.show}`, shouldOpen)
              _d.toggleClass(`${NavStyles.show}`, shouldOpen)
              $('[data-toggle="dropdown"]', _d).attr(
                "aria-expanded",
                shouldOpen
              )
            },
            e.type === "mouseleave" ? 100 : 0
          )
        }

        $("body")
          .on("mouseenter mouseleave", `.${NavStyles.dropdown}`, toggleDropdown)
          .on("click", `.${NavStyles.dropdownMenu} a`, toggleDropdown)
      })

      $(`.${NavStyles.dropdownHeading}`).click(function(event) {
        event.stopPropagation()
      })

      // START - Disable the title icon for the dropdown menu
      $(".disable-link").click(function(event) {
        event.preventDefault()
      })
      // END - Disable the title icon for the dropdown menu
    })
  }

  render() {
    return (
      <div className={NavStyles.navigationWrapper + " navigation-wrapper"}>
        <Sidebar />
        <nav
          className={
            NavStyles[this.props.navType + "Nav"] +
            " " +
            NavStyles.navbar +
            " " +
            RowStyles.rowStyling +
            " navbar navbar-default navbar-expand-lap fixed-top"
          }
        >
          {/* Pass the container classname down to the Container Component*/}
          <Container
            parentClassNames={
              NavStyles.container + " " + NavStyles.containerFluid
            }
          >
            <button
              className={NavStyles.navbarToggler + " navbar-toggler"}
              id="sidenav-trigger"
              type="button"
              data-toggle="collapse"
              // data-target="#navbarSupportedContent"
              // aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className={NavStyles.navbarTogglerIcon + " navbar-toggler-icon"}
              />
            </button>
            <div className={NavStyles.logo + " logo"}>
              <Link to="/">
                <div
                  className={NavStyles.logoHolder + " navbar-brand logo-holder"}
                />
              </Link>
            </div>

            <div
              className={
                NavStyles.mainLinks +
                " " +
                NavStyles.navbarCollapse +
                " main-links collapse navbar-collapse"
              }
              id="navbarSupportedContent"
            >
              <ul className={NavStyles.navbarNav + " navbar-nav"}>
                <MarketingSolutionsListLink
                  className={
                    NavStyles.dropdown +
                    " nav-item dropdown marketing-solutions-dropdown"
                  }
                  dataToggle="dropdown"
                  to="/marketing-solutions"
                >
                  Marketing Solutions
                </MarketingSolutionsListLink>
                <OurClientsListLink
                  className={
                    NavStyles.dropdown +
                    " nav-item dropdown who-we-serve-dropdown"
                  }
                  dataToggle="dropdown"
                  to="/our-clients/dental-practices"
                >
                  Our Clients
                </OurClientsListLink>

                <ListLink className="" to="/plans">
                  Plans
                </ListLink>
                <CompanyListLink
                  className={
                    NavStyles.dropdown + " nav-item dropdown company-dropdown"
                  }
                  dataToggle="dropdown"
                  to="/company"
                >
                  Company
                </CompanyListLink>
                <StudySingleListLink
                  className={
                    NavStyles.dropdown + " nav-item dropdown resources-dropdown"
                  }
                  dataToggle="dropdown"
                  to="/blog"
                >
                  Resources
                </StudySingleListLink>
              </ul>
            </div>
            <div className={NavStyles.contactLinks + " contact-links"}>
              <ul
                className={NavStyles.mainContactLinks + " main-contact-links"}
              >
                <li className={NavStyles.phone + " phone"}>
                  <a href="tel:877-477-2311">
                    <div
                      className={
                        NavStyles.phoneHolder +
                        " " +
                        NavStyles.phone +
                        " phone phone-holder"
                      }
                    />
                    877.477.2311
                  </a>
                </li>
                <ListLink
                  to="/demo"
                  className={
                    NavStyles.navButton +
                    " " +
                    NavStyles.freeDemoButton +
                    " " +
                    NavStyles.button +
                    " " +
                    NavStyles.transparent +
                    " free-demo-button"
                  }
                >
                  Free Demo
                </ListLink>
              </ul>
              <ul className={NavStyles.demoOnly + " demo-only"}>
                <li className="call">Call For Demo!</li>
                <a
                  href="tel:877-477-2311"
                  className={
                    NavStyles.navButton +
                    " " +
                    NavStyles.freeDemoButton +
                    " " +
                    NavStyles.button +
                    " " +
                    NavStyles.transparent +
                    " free-demo-button"
                  }
                >
                  877.477.2311
                </a>
              </ul>
            </div>
          </Container>
        </nav>
      </div>
    )
  }
}

export default Navigation

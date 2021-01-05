import React from "react"
import { Link } from "gatsby"

import Container from "../components/Container"
import logoWhite from "../img/icon/logo-white.svg"
import ringingPhoneIcon from "../img/icon/ringing-phone.svg"
import envelopeIcon from "../img/icon/mail.svg"
import mapPin from "../img/icon/map-pin.svg"
import facebookIcon from "../img/icon/facebook-circle.svg"
import twitterIcon from "../img/icon/twitter-circle.svg"
import instagramIcon from "../img/icon/instagram-circle.svg"
import linkedinIcon from "../img/icon/linkedin-circle.svg"
import youtubeIcon from "../img/icon/youtube-circle.svg"

import FooterStyles from "./Footer.module.scss"
import RowStyles from "./Row.module.scss"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const ListLinkNoPrefetch = props => (
  <li>
    <a href={props.to}>{props.children}</a>
  </li>
)

const ExternalLink = props => (
  <li>
    <a href={props.to}>{props.children}</a>
  </li>
)

export default ({ children }) => (
  <footer className={FooterStyles.FooterStyling + " " + RowStyles.rowStyling}>
    <Container>
      <div
        className={
          RowStyles.row +
          " " +
          RowStyles.padded +
          " " +
          RowStyles.tallTop +
          " " +
          FooterStyles.paddedFooterRow +
          " " +
          FooterStyles.footerRow
        }
      >
        <div className="col-sm-12 col-lg-4">
          <img
            src={logoWhite}
            className={FooterStyles.logo + " " + FooterStyles.imgResponsive}
            alt="Our Logo"
          />
        </div>
        <div
          className={
            FooterStyles.footerPageLinks +
            " d-none d-sm-none d-md-block col-sm-12 col-md-6 col-lg-4 footer-page-links"
          }
        >
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/marketing-solutions">Marketing Solutions</ListLink>
            <ListLinkNoPrefetch to="/our-clients/dental-practices">
              Our Clients
            </ListLinkNoPrefetch>
            <ListLink to="/plans">Plans</ListLink>
            <ListLink to="/company">Company</ListLink>
            <ListLink to="/blog">Resources</ListLink>
            <ListLink to="/demo">Free Demo</ListLink>
            <ListLinkNoPrefetch to="/contact">Contact</ListLinkNoPrefetch>
            <ExternalLink to="https://portal.doctorgenius.com/login">
              Portal Login
            </ExternalLink>
          </ul>
        </div>
        <div className="col-10 col-sm-10 col-md-6 col-lg-4">
          <div
            className={FooterStyles.footerContactRow + " footer-contact-row"}
          >
            <div
              className={
                FooterStyles.footerIconWrapper + " footer-icon-wrapper"
              }
            >
              <img
                className={FooterStyles.imgIcon + " img-icon"}
                src={ringingPhoneIcon}
                alt="Phone Icon"
              />
            </div>
            <p
              className={
                FooterStyles.footerContactDetails + " footer-contact-details"
              }
            >
              &#40;877&#41; 477-2311
            </p>
          </div>
          <div
            className={FooterStyles.footerContactRow + " footer-contact-row"}
          >
            <div
              className={
                FooterStyles.footerIconWrapper + " footer-icon-wrapper"
              }
            >
              <img
                className={FooterStyles.imgIcon + " img-icon"}
                src={envelopeIcon}
                alt="Envelope Icon"
              />
            </div>
            <p
              className={
                FooterStyles.footerContactDetails + " footer-contact-details"
              }
            >
              support@doctorgenius.com
            </p>
          </div>
          <div
            className={FooterStyles.footerContactRow + " footer-contact-row"}
          >
            <div
              className={
                FooterStyles.footerIconWrapper + " footer-icon-wrapper"
              }
            >
              <img
                className={FooterStyles.imgIcon + " img-icon"}
                src={mapPin}
                alt="Map Icon"
              />
            </div>
            <address
              className={
                FooterStyles.footerContactDetails + " footer-contact-details"
              }
            >
              2 S Pointe Dr #200
              <br />
              Lake Forest, CA 92630
            </address>
          </div>
          <div className={FooterStyles.socialMediaRow + " social-media-row"}>
            <div
              className={FooterStyles.socialMediaItem + " social-media-item"}
            >
              <a href="https://www.facebook.com/DoctorGeniusMarketing">
                <img src={facebookIcon} alt="Facebook Icon" />
              </a>
            </div>
            <div
              className={FooterStyles.socialMediaItem + " social-media-item"}
            >
              <a href="https://twitter.com/DoctorGeniusCA">
                <img src={twitterIcon} alt="Twitter Icon" />
              </a>
            </div>
            <div
              className={FooterStyles.socialMediaItem + " social-media-item"}
            >
              <a href="https://www.instagram.com/doctor.genius/">
                <img src={instagramIcon} alt="Instagram Icon" />
              </a>
            </div>
            <div
              className={FooterStyles.socialMediaItem + " social-media-item"}
            >
              <a href="https://www.linkedin.com/company/doctor-genius">
                <img src={linkedinIcon} alt="LinkedIn Icon" />
              </a>
            </div>
            <div
              className={FooterStyles.socialMediaItem + " social-media-item"}
            >
              <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos">
                <img src={youtubeIcon} alt="Youtube Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          RowStyles.row + " " + RowStyles.padded + " " + RowStyles.shortTop
        }
      >
        <div className="col-sm-12">
          <div className={FooterStyles.footerSubrow + " footer-subrow"}>
            <div className="copyright-section">
              &copy;{new Date().getFullYear()} Doctor Genius. All Rights
              Reserved.
            </div>
            <div className={FooterStyles.legalLinks + " legal-links"}>
              <ListLink to="/privacy-policy">Privacy Policy</ListLink>
              {/* Waiting for page content before we show this link */}
              {/*<span> | </span>
              <ListLink to="/">Terms and Conditions</ListLink>*/}
            </div>
          </div>
        </div>
      </div>
      {children}
    </Container>
  </footer>
)

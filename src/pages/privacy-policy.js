import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import InnerTitle from "../components/inner-title.js"
import Hero from "../components/Hero"

import "../styles/privacy-policy.scss"
import PageStyles from "./privacy-policy.module.scss"
import RowStyles from "../components/Row.module.scss"

const heroConfig = {
  pageType: "privacyPolicy",
  strapline: "Privacy Policy",
  title: [<span>Our Privacy </span>, "Policy"],
  content: ["Effective Date:", <br />, "October 26, 2018"],
}

const PrivacyPolicy = data => {
  return (
    <div className={PageStyles.privacyPolicyPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="privacy-policy">
        <Helmet>
          <title>Privacy Policy Doctor Genius in Lake Forest, CA 92630</title>
          <meta
            name="description"
            content="Privacy policy of Doctor Genius located in in Lake Forest, CA 92630."
          />
        </Helmet>
        <div className={PageStyles.privacyPolicy + " privacy-policy"}>
          <BackgroundImage
            fluid={data.data.heroBg.childImageSharp.fluid}
            className={PageStyles.gbiPrivacyPolicy + ` gbi-privacy-policy`}
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
                <div className="col-sm-8">
                  <p>
                    Your privacy is important to our Company (or “we”, “us” or
                    “our”). We want to be clear how we use the information of
                    our Customer (or “you” or “your”), and the ways in which you
                    can protect your privacy.
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
                <div className="col-sm-8">
                  <div className="content-block">
                    <InnerTitle
                      title="Our Privacy Policy Explains:"
                      inContentBlock
                      underlined
                      centered
                    />
                  </div>
                </div>
              </div>
              <div className={RowStyles.row}>
                <div className="col-sm-6">
                  <div className="accented-paragraph">
                    <p>
                      Your privacy is important to our Company (or “we”, “us” or
                      “our”). We want to be clear how we use the information of
                      our Customer (or “you” or “your”), and the ways in which
                      you can protect your privacy.
                    </p>
                  </div>
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
                <div className="col-sm-8">
                  <div className="content-block">
                    <div className={PageStyles.policyTable + " policy-table"}>
                      <ul>
                        <li>
                          What information we collect and why we collect it.
                        </li>
                        <li>
                          How we use that information and when we disclose it.
                        </li>
                        <li>How to access and update your information.</li>
                        <li>The steps we take to protect your information.</li>
                      </ul>
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
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="col-sm-8">
                  <div className="content-block">
                    <p>
                      This Privacy Policy applies to the information that we
                      obtain through your use of the Services. Please
                      familiarize yourself with our policies, and if you have
                      any questions contact us at
                      <a href="mailto:support@doctorgenius.com">
                        support@doctorgenius.com
                      </a>{" "}
                      or mailing us at:
                    </p>

                    <address>
                      Doctor Genius
                      <br />
                      2 S Pointe Dr #200
                      <br />
                      Lake Forest, CA 92630
                      <br />
                    </address>
                    <p>
                      This policy is incorporated into and is subject to our
                      Terms of Service accessible at{" "}
                      <a href="https://www.doctorgenius.com/termsofservice">
                        https://www.doctorgenius.com/termsofservice
                      </a>
                    </p>
                  </div>
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
                <div className="col-sm-8">
                  <div className="content-block">
                    <InnerTitle
                      title="Information We Collect:"
                      inContentBlock
                      underlined
                      centered
                    />
                    <ol>
                      <li>
                        <h4>Information you provide to us</h4>
                        <p>
                          <b>Account and Profile Information:</b> We collect
                          information about you and your company when you
                          register for an account, make a purchase, create or
                          modify your profile. Information we collect may
                          include your name, username, address, email address,
                          phone number, and payment card details. You may
                          provide this information directly through our Services
                          or in some cases another user (such as an
                          administrator) creating an account on your behalf may
                          provide it. If you provide information (including
                          personal information) about someone else, you confirm
                          that you have the authority to act for them and to
                          consent to the collection and use of their personal
                          information as described in this Privacy Policy.{" "}
                        </p>
                        <p>
                          <b>Content:</b> We collect and store content that you
                          create, input, submit, post, upload, transmit, or
                          store in the process of using our Services, including
                          information from end users of any application that you
                          develop using our Services and/or that we host on your
                          behalf. Such content may include any personal or other
                          sensitive information submitted using our Services,
                          such as regulatory compliance materials.{" "}
                        </p>
                        <p>
                          <b>Other submissions:</b> We collect other data that
                          you may submit to our Services or us directly, such as
                          when you request customer support or communicate with
                          us via email or social media sites.
                        </p>
                      </li>
                      <li>
                        <h4>
                          Information we collect from your use of our Services
                        </h4>
                        <p>
                          <b>Web Logs and Analytics Information:</b> We record
                          certain information and store it in log files when you
                          interact with our Services. This information may
                          include Internet protocol (IP) or other device
                          addresses or ID numbers as well as browser type,
                          Internet service provider, URLs of referring/exit
                          pages, operating system, date/time stamp, information
                          you search for, locale and language preferences, your
                          mobile carrier, and system configuration information.
                          We and our analytics providers also collect and store
                          analytics information when you use our Services to
                          help us improve our Services.{" "}
                        </p>

                        <p>
                          <b>Cookies and Other Tracking Technologies:</b> We use
                          various technologies to collect information, including
                          cookies that we save to your computer or mobile
                          device. Cookies are small data files stored on your
                          hard drive or in device memory. We use cookies to
                          improve and customize our Services and your
                          experience; to allow you to access and use the
                          Services without re-entering your username or
                          password; and to count visits and understand which
                          areas and features of the Services are most popular.
                          We may also associate the information we store in
                          cookies with personal information you submit while on
                          our Services. You can instruct your browser, by
                          changing its options, to stop accepting cookies or to
                          prompt you before accepting a cookie from websites you
                          visit. If you do not accept cookies, however, you may
                          not be able to use all aspects of our Services.
                        </p>
                      </li>
                      <li>
                        <h4>Information we collect from other sources</h4>
                        <p>
                          <b>Information from third party services:</b> We may
                          obtain information, including personal information,
                          from third parties such as our service providers, and
                          combine it with other information we collect from you.{" "}
                        </p>
                        <p>
                          <b>How We Use Information We Collect: </b>
                        </p>
                        <p>
                          <b>
                            We may use the information we collect for a variety
                            of purposes, including to:
                          </b>
                        </p>
                        <ul>
                          <li>
                            Provide, operate, maintain, improve, personalize,
                            and promote our Services
                          </li>
                          <li>
                            Develop new products, services, features, and
                            functionality;
                          </li>
                          <li>Enable you to access and use our Services;</li>
                          <li>
                            Process and complete transactions, and send you
                            related information, including purchase
                            confirmations and invoices;
                          </li>
                          <li>
                            Communicate with you, including responding to your
                            comments, questions, and requests; providing
                            customer service and support; providing you with
                            information about services, including technical
                            notices, updates, security alerts, administrative
                            messages, or advertising or marketing messages; and
                            providing other news or information about us and our
                            select partners;
                          </li>
                          <li>
                            Monitor and analyze trends, usage, and activities in
                            connection with our services and investigate and
                            prevent fraudulent transactions, unauthorized access
                            to our Services, and other illegal activities.
                          </li>
                        </ul>
                        <p>
                          We may also use the information we collect for other
                          purposes about which we notify you.{" "}
                        </p>
                        <p>
                          <b>
                            We may share your information in the following ways:{" "}
                          </b>
                          With your express consent: We will share your personal
                          information with companies, organizations, or
                          individuals not specified herein only when we have
                          your consent to do so.{" "}
                        </p>
                        <p>
                          <b>Your use:</b> When you use our Services, certain
                          features allow you to make some of your content
                          accessible to the public or other users of the
                          Services. We urge you to consider the sensitivity of
                          any information prior to sharing it publicly or with
                          other users.{" "}
                        </p>

                        <p>
                          <b>Access by your administrator </b>
                          <br /> Your account owner or administrator may be able
                          to:
                        </p>

                        <ul>
                          <li>
                            Access information in and about your account with
                            Vendor;
                          </li>
                          <li>
                            Disclose, restrict, or access information that you
                            have provided or that is made available to you when
                            using your account, including your content; and
                            Control how your account may be accessed or deleted.
                          </li>
                        </ul>
                        <p>
                          <b>Service Providers, Business Partners and Others</b>
                          :
                          <br />
                          This site is being monitored by one or more
                          third-party monitoring software(s), and may capture
                          information about your visit that will help us improve
                          the quality of our service. You may control the data
                          being collected from your visit by visiting
                          www.pixelID.io through a universal consumer options
                          page located at{" "}
                          <a
                            href="https://pixelid.io/T/unsub.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://pixelid.io/T/unsub.html
                          </a>
                          .
                        </p>
                        <p>
                          We may share your information with service providers
                          and other third parties who perform services on our
                          behalf, such as infrastructure, analytics, marketing,
                          and advertising services. We provide your payment
                          information to our service providers for payment
                          processing and verification. Service providers such as
                          analytics providers may collect information about your
                          online activities over time and across different
                          online services when you use our Services. Our
                          third-party service providers, including payment
                          gateways and other payment transaction processors,
                          have their own privacy policies in respect to the
                          information we are required to provide to them for
                          your purchase-related transactions. For these
                          providers, we recommend that you read their privacy
                          policies so you can understand the manner in which
                          your personal information will be handled by these
                          providers. We are not responsible for the privacy
                          practices of other sites and encourage you to read
                          their privacy statements.{" "}
                        </p>
                        <p>
                          <b>
                            Compliance with Laws and Law Enforcement Requests;
                            Protection of Our Rights:{" "}
                          </b>
                          <br />
                          We may disclose your information (including your
                          personal information) to a third party if:
                        </p>
                        <ul>
                          <li>
                            We believe that disclosure is reasonably necessary
                            to comply with any applicable law, regulation, legal
                            process or governmental request;
                          </li>
                          <li>To enforce our agreements and policies;</li>
                          <li>
                            To protect the security or integrity of our products
                            and services;
                          </li>
                          <li>
                            To protect the property, rights, and safety of
                            Vendor, our customers or the public from harm or
                            illegal activities;
                          </li>
                          <li>
                            To respond to an emergency which we believe in the
                            good faith requires us to disclose information to
                            assist in preventing the death or serious bodily
                            injury of any person; or to investigate and defend
                            ourselves against any third-party claims or
                            allegations.
                          </li>
                        </ul>
                      </li>
                      <p>
                        <b>Business Transfers:</b>
                        <br /> We may share or transfer your information
                        (including your personal information) in connection
                        with, or during negotiations of, any merger, sale of
                        company assets, financing, or acquisition of all or a
                        portion of our business to another company. We will
                        notify you of such a change in ownership or transfer of
                        assets by posting a notice on our website.{" "}
                      </p>
                      <p>
                        <b>Aggregate or Non-Personally identifying Data:</b>
                        <br />
                        We may share aggregate or other non-personal
                        information—information that does not directly identify
                        you—with third parties in order to improve the overall
                        experience of our Services.
                      </p>

                      <p>
                        <b>The Choices You Have With Your Information</b>
                        <br />
                        You may decline to share certain personal information
                        with us, in which case we may not be able to provide to
                        you some of the features and functionality of our
                        Services. You may update or correct your personal
                        information at any time by accessing the account
                        settings page on the mobile application or within the
                        System. You may opt out of receiving promotional
                        communications from us by using the unsubscribe link
                        within each email. Even after you opt out from receiving
                        promotional messages from us, you will continue to
                        receive administrative messages from us regarding the
                        Services.
                      </p>

                      <p>
                        <b>Children’s Privacy</b>
                        <br />
                        Our Services are not directed to individuals under 13.
                        We do not knowingly collect personal information from
                        children under 13. If we become aware that a child under
                        13 has provided us with personal information, we will
                        take steps to delete such information. If you become
                        aware that a child has provided us with personal
                        information, please contact us at info@doctorgenius.com.
                      </p>

                      <p>
                        <b>International Users</b>
                        <br />
                        Our Services are hosted in the United States and
                        intended only for users located within the United
                        States. If you choose to use the Services from the
                        European Union or other regions of the world with laws
                        governing data collection and use that may differ from
                        U.S. law, then please note that you are transferring
                        your information outside of those regions to the United
                        States for storage and processing. By providing your
                        information, you consent to any transfer and processing
                        in accordance with this Policy.
                      </p>

                      <p>
                        <b>California Privacy Rights</b>
                        <br />
                        California Civil Code Section 1798.83 permits our
                        customers who are California residents to request
                        certain information regarding our disclosure of personal
                        information to third parties for their direct marketing
                        purposes. To make such a request, please contact us at
                        info@doctorgenius.com.
                      </p>

                      <p>
                        <b>Changes to this Privacy Policy</b>
                        <br />
                        We may change this Privacy Policy from time to time. If
                        we make any changes, we will notify you by revising the
                        version and effective date at the top of this Privacy
                        Policy and, in some cases, where appropriate we may
                        provide you with additional notice (such as adding a
                        statement to the log-in screen or sending you an email
                        notification). Your continued use of our Services after
                        the revised Policy has become effective indicates that
                        you have read, understood, and agreed to the current
                        version of this Policy.
                      </p>

                      <p>
                        <b>Contact Information</b>
                        <br />
                        Please contact us with any questions or comments about
                        this Policy, your personal information, our use and
                        disclosure practices, or your consent choices by email
                        at info@doctorgenius.com.
                      </p>
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

export default PrivacyPolicy

export const ImageQuery = graphql`
  query TermsOfServiceImages {
    heroBg: file(relativePath: { eq: "privacy-policy-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

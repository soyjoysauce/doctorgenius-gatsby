import React from "react"
import { Helmet } from "react-helmet"
import {graphql} from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import Hero from "../components/Hero"

import "../styles/terms-of-service.scss"
import PageStyles from "./termsofservice.module.scss"
import RowStyles from '../components/Row.module.scss'

const heroConfig = {
  pageType: "termsOfService",
  strapline: "Terms Of Service",
  title: [<span>Terms </span>, "Of Service"],
  content: ["Effective Date:", <br />, "October 26, 2018"],
}

const TermsOfService = data => {
  return (
    <div className={PageStyles.termsOfServicePage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="termsofservice">
        <Helmet>
          <title>
          Terms Of Service Doctor Genius in Lake Forest, CA 92630
          </title>
          <meta name="description" content="Terms Of Service of Doctor Genius located in Lake Forest, CA 92630." />
        </Helmet>
        <div className={PageStyles.termsOfService + " termsofservice"}>
          <BackgroundImage fluid={data.data.heroBg.childImageSharp.fluid} className={PageStyles.gbiTos + " gbi-tos"}>
          <Hero
              pageType={heroConfig.pageType}
              strapline={heroConfig.strapline}
              title={heroConfig.title}
              content={heroConfig.content}
            />
          </BackgroundImage>
          <Main>
            <Container>
              <div className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.tallTop +
                  " " +
                  RowStyles.shortBottom
                }>
                <div class="col-sm-8">
                  <p>
                  These Terms of Service are part of the Marketing Plan Agreement between Company
                  (sometimes herein referred to as “Doctor Genius” or “we” or “our” or “us”) and
                  Customer (which is sometimes referred to as “you” or “your”). The Company’s Services
                  are governed by these Terms of Service. All capitalized words used but not defined
                  herein shall have the meaning given them in the Order. As used in these Terms of
                  Service, “Agreement” means the Marketing Plan Agreement including the Order and
                  these Terms and Conditions and any document or policy referenced herein.
                  </p>
                  <p>
                  EACH PARTY ACKNOWLEDGES THAT IT HAS READ THESE TERMS OF SERVICE AND THE DOCUMENTS
                  REFERENCED HEREIN (ALL OF WHICH BY THIS REFERENCE ARE INCORPORATED HEREIN AND
                  MADE A PART HEREOF), UNDERSTANDS IT, AND AGREES TO BE BOUND BY THEM.
                  </p>
                  <p>
                  Company reserves the right to modify these Terms of Service and any marketing
                  plans affecting the Services, including any schedule referenced herein, at any
                  time upon written notice to Customer. If we make any changes, we will notify you
                  by revising the version and its effective date and adding a statement to the log-in
                  screen or sending you an email notification, as applicable. Customer’s continued use
                  of the Services after any such modification and notice shall be conclusively deemed
                  its acceptance of all such modifications. Customer’s only right with respect to any
                  dissatisfaction with any modifications made pursuant to this provision is to terminate
                  Customer’s Marketing Plan Agreement in accordance with these Terms of Service.
                  Notwithstanding the foregoing, Company may not revise the terms of the Order except
                  by written agreement signed by duly authorized representatives of Customer and Company. </p>
                </div>
              </div>

              <div className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " " +
                  RowStyles.shortBottom
                }>
                <div class="col-sm-8">
                  <div class="content-block">

                    <ol>
                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>DEFINITIONS</span> - The following capitalized
                        terms will have the following meanings whenever used in this Agreement.</h4>
                        <p>
                          <b>1.1 “<u>BAA</u>”</b> means the Business Associate Agreement posted at&nbsp;
                          <a href="/baa/">https://doctorgenius.com/BAA</a>.
                        </p>
                        <p>
                          <b>1.2 “<u>Customer Data</u>”</b> means text and data in electronic form
                          on the Website input or collected through the Website by or from Customer
                          or Customer’s Users. Customer Data also includes Company’s Advertising Materials.
                        </p>
                        <p>
                          <b>1.3 “<u>Company Content</u>”</b> means text, graphics and data in electronic
                          form on the Website prepared and input by Company.
                        </p>
                        <p>
                          <b>1.4 “<u>Dashboard</u>”</b> means Doctor Genius’ proprietary marketing and analytic
                          software tools made available to Customer upon account activation to evaluate
                          the performance and efficacy of the Website.
                        </p>
                        <p>
                          <b>1.5 “<u>Order</u>”</b> is defined in the Plan Order attached to the Marketing
                          Plan Agreement executed by Customer and Company to which these Terms of Services
                          are incorporated by reference.
                        </p>
                        <p>
                          <b>1.6 “<u>Privacy Policy</u>”</b> means Company’s privacy policy posted at&nbsp;
                          <a href="/privacy-policy/">https://doctorgenius.com/privacy</a>.
                        </p>
                        <p>
                          <b>1.7 “<u>Service</u>”</b> means the Service as specified in the Order, as
                          supplemented by Section 2 below.
                        </p>
                        <p>
                          <b>1.8 “<u>User</u>”</b> means any individual who uses the Website who is a
                          prospective or actual patient of Customer’s business.
                        </p>
                        <p>
                          <b>1.9 “<u>Website</u>”</b> means the Website Framework, including Company
                          Content, accessible via the Domain Name registered by Company or Customer
                          hosted by Company.
                        </p>
                        <p>
                          <b>1.10 “<u>Website Framework</u>”</b> means the structure and layout including
                          the look and feel of the Website prepared by Company.
                        </p>
                        <p>
                          <b>1.11 “<u>EC-AUP</u>”</b> means the Electronic Communications and Acceptable
                          Use Policy posted at <a href="/ec-aup/">https://doctorgenius.com/EC-AUP</a>.
                          This policy applies only to Customers who use Company’s Practice AI to send
                          electronic communications to Customer’s Users.
                        </p>
                      </li>

                      <li>
                        <h4>
                          <span class={PageStyles.termsBlue + " terms-blue"}>THE SERVICE</span>
                        </h4>
                        <p>
                          <b>2.1 <u>General</u>:</b> During the Term, Company will use commercially
                          reasonable efforts to provide Customer the Services pursuant to:
                          <ol class={PageStyles.termsListAlpha + " terms-list-alpha"}>
                            <li>the terms of any outstanding Order.</li>
                            <li>these Terms of Service, including the terms of any policy and agreement
                              referenced herein, as the same may be updated from time to time as provided
                              herein.</li>
                          </ol>
                        </p>

                        <p>
                          <b>2.2 <u>Website Framework Development</u>:</b> The Website Framework is an
                          essential and mandatory element of the Services. Upon Company’s development
                          and Customer’s approval thereof, Customer will use, as its exclusive website,
                          the Website including the Website Framework prepared by Company using
                          Company’s proprietary technology.
                        </p>

                        <p>
                          <b>2.3 <u>Development Timeframe</u>:</b> A tentative first showcase preview
                          of the initial draft of the Website Framework will be made available to you
                          for your review within a reasonable time after you approve of the following
                          elements, which we will discuss with your designated representative prior
                          to and during development:
                          <ol class={PageStyles.termsListAlpha + " terms-list-alpha"}>
                            <li>Conceptual Framework Elements</li>
                            <li>Keywords</li>
                            <li>Domain Name</li>
                            <li>Sitemap Selection (see paragraph 2.4 below)</li>
                            <li>Company Content</li>
                            <li>Images</li>
                            <li>Google+ Account Access</li>
                            <li>Social Media Account Access</li>
                            <li>Customer Logo</li>
                          </ol>
                          If you do not approve any of the above listed elements within 60 days of your
                          account activation, Company will make a default decision for each unapproved
                          element based on its experience and belief of the most appropriate settings
                          for your business. <br/><br/>The Website Framework will be developed and deployed
                          to display publicly, online at the discretion of Doctor Genius, within a
                          reasonable time based on the number of elements and complexity of the requested
                          Website Framework. Prior to FINAL launch (or the “go live” date) of your Doctor
                          Genius Website development, you will be given the number of opportunities
                          included in your Plan Features to review and request revisions, edits or
                          other modifications.
                        </p>

                        <p>
                          <b>2.4 <u>Sitemap</u>:</b> The Sitemap referenced in subsection <b>2.3(d)</b> above
                          is the number of pages that will be migrated or copied over to your Website
                          Framework from any web property you own. We will not proceed to copy and
                          transfer pages and the content thereof from existing web pages without the
                          proper request from you, subject to limitations imposed by any third party’s
                          copyrights. Content and page migration requests are limited to the number of
                          pages included in your Plan Features.
                        </p>

                        <p>
                          <b>2.5 <u>Google+ Local Optimization</u>:</b> If included in your Plan Features,
                          Google+ Local page optimization is offered by Doctor Genius through a Local PIN
                          number verification process. Doctor Genius may provide sufficient optimization
                          to the Google+ Local page by way of instructional support guidance tips and
                          suggestions. If no access to Google+ Local page can be provided or obtained to
                          implement updates, changes or edits, this feature not affect any other required
                          element of the Services provided by Company. If included in your Plan Features,
                          you are solely responsible for allowing the access required to the Google+ Local
                          profile, sufficient enough to implement the changes edits and updates recommended
                          by Doctor Genius development and support teams.
                        </p>

                        <p>
                          <b>2.6 <u>Call Tracking Number</u>:</b> Call tracking phone numbers are issued and
                          used with all Doctor Genius Marketing Plans. A local telephone number (or a phone
                          number from the closest geographical area to your business, if and as available)
                          will be used to display publicly throughout the Website including the principal
                          website, landing page, social media profiles and any other Website property.
                          We use call tracking in your Marketing Plan to track and quantify our client
                          results. Doctor Genius will sell or transfer ownership on any call tracking
                          phone numbers, except that Doctor Genius retains ownership of critical phone
                          numbers in highly saturated areas.
                        </p>

                        <p>
                          <b>2.7 <u>Customer Data and Advertising Materials</u>:</b> The Customer agrees to
                          submit to Doctor Genius, as and when requested by Doctor Genius, any Customer
                          Data and (collectively, “Advertising Materials”): any advertising and promotions
                          materials including text, graphics and other content which Customer wants on the
                          Website or posted on social media; provided, however, Doctor Genius as the right,
                          at any time, to deny or prevent use of any Customer Data if and to the extent
                          the same fails to meet the Uniform Advertising Specifications of Doctor Genius.
                          “Uniform Advertising Specifications” means, with respect to Customer Data, it:
                          <ol class={PageStyles.termsListAlpha + " terms-list-alpha"}>
                            <li>conforms to the technical requirements of Doctor Genius</li>
                            <li>is legal, true and not misleading and harmful or offensive because it is
                              defamatory, obscene, prurient, abusive, invasive of privacy, or otherwise is
                              objectionable; and</li>
                            <li>it will not damage, interfere with, surreptitiously intercept, or expropriate
                              any component of our “System” (our network, computer or communications system,
                              software, or network) or computing device, or includes viruses, Trojan horses,
                              worms, time bombs, or cancelbots</li>
                          </ol>
                        </p>

                        <p>
                          <b>2.8 <u>Dashboard</u>:</b> As and when permitted by Doctor Genius, upon account
                          activation by Doctor Genius, Customer may access the Dashboard available to Customer
                          in accordance with these Terms of Service and any other rules and policies of Doctor
                          Genius then in effect. Access requires that Customer establish password which Customer
                          agrees to safeguard against unauthorized use. Customer may authorize its employees or
                          subcontractors to use the Dashboard on its behalf provided:
                          <ol class={PageStyles.termsListAlpha + " terms-list-alpha"}>
                            <li>Customer is and hereby agrees to be responsible for the actions of persons to
                              whom it provides the password and authorizes to access the Dashboard and</li>
                            <li>each such person agrees to be bound all restrictions contained or referenced
                              in these Terms of Service.</li>
                          </ol>
                        </p>

                        <p>
                          <b>2.9 <u>Hosting Services and Updates</u>:</b> The Services are hosted on our System.
                          Doctor Genius may update the features, functionality of the System and Dashboard at
                          any time, and from time to time, in its sole discretion.
                        </p>

                        <p>
                          <b>2.10 <u>Practice AI</u>:</b> If Customer uses Company’s Practice AI service,
                          whether or not included in Customer’s Marketing Plan, the use of such service shall
                          be subject to the terms of the EC-AUP.
                        </p>

                        <p>
                          <b>2.11 <u>Customer Requests Beyond Plan Features</u>:</b> Doctor Genius will notify you
                          of any services you request that are not included in your Plan Features to which Customer
                          Development Fees may apply. Custom Development Fees will not be charged until the nature
                          and scope of such extra services is mutually agreed in writing and completed by Company.
                        </p>

                        <p>
                          <b>2.12 <u>Service Fees</u>:</b> Customer will pay Company when due the Fees stated in
                          the Order (individually or collectively, the “Fees”). All Fees are payable to Company
                          up front or at the beginning of any recurring period (per terms of the Order) by way
                          of Customer’s credit card electronic debit from Customer’s bank account, which Customer
                          agrees to keep current until all Fees due Company are paid. Unless otherwise stated in
                          the Order, Company reserves the right to change the Fees or applicable charges and to
                          institute new charges during the Term of Service, upon thirty (30) days prior notice
                          to Customer (which may be sent by email). If Customer believes that Company has billed
                          Customer incorrectly, Customer must contact Company no later than 60 days after the
                          closing date on the first billing statement in which the error or problem appeared, in
                          order to receive an adjustment or credit. Inquiries should be directed to Company’s
                          customer support department. <br/><br/>For payment methods other than credit cards,
                          or if your credit card is unusable, full payment of Fees due Company must be received
                          by Company within thirty (30) days from the due date thereof. Unpaid amounts are
                          subject to a late charge of 1.5% per month on any outstanding balance, or the maximum
                          permitted by law, whichever is lower, plus all expenses of collection. Customer shall
                          be responsible for all taxes associated with Services other than U.S. taxes based on
                          Company’s net income. Fees and charges stated in the Order or due under this these
                          Terms of Service are nonrefundable.
                        </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>CUSTOMER DATA & PRIVACY</span></h4>
                        <p>
                          <b>3.1 <u>Use of Customer Data</u>:</b> Unless it receives Customer’s prior written
                          consent, Company: (a) will not access, process, or otherwise use the Services or
                          Customer Data other than as permitted hereunder; (b) will not cause any unauthorized
                          access to Customer Data. However, Company may disclose Customer Data as required by
                          applicable law or by proper legal or governmental authority, subject to the terms of
                          the BAA. Company will give Customer prompt notice of any such legal or governmental
                          demand and reasonably cooperate with Customer in any effort to seek a protective
                          order or otherwise to contest such required disclosure, at Customer’s expense.
                        </p>

                        <p>
                          <b>3.2 <u>Privacy Policy</u>:</b> The Privacy Policy applies only to Company’s
                          own website and does not apply to any Customer’s Website or any third-party website
                          or service linked thereto.
                        </p>

                        <p>
                          <b>3.3 <u>Risk of Exposure</u>:</b> Customer recognizes and agrees that hosting data online
                          involves risks of unauthorized disclosure or exposure and that, in accessing and using the
                          Website, Customer assumes such risks. Company offers no representation, warranty, or guarantee
                          that Customer Data will not be exposed or disclosed through errors or the actions of third parties.
                        </p>

                        <p>
                          <b>3.4 <u>Data Accuracy</u>:</b> Company will have no responsibility or liability for the
                          accuracy of data uploaded to the Website by Customer, including without limitation Customer
                          Data and any other data uploaded by Users.
                        </p>

                        <p>
                          <b>3.5 <u>Customer Data</u>:</b> Company takes seriously the security of Customer Data and, thus, has
                          taken measures Company deems reasonable and necessary to safeguard the Customer Data on
                          Company’s servers against loss or unauthorized exposure. Any time Company is required
                          to return Customer Data following termination of the Services, Company will do so on a
                          SQL Server MDF file, and unless earlier returned or destroyed as agreed by Company and
                          Customer, Company will return all Customer Data and destroy all other whole or partials
                          copies thereof in its possession promptly following the 30th day after termination of
                          the Services.
                        </p>

                        <p>
                          <b>3.6 <u>Protected Health Information</u>:</b> If Customer Data includes any Protected
                          Health Information (as defined in the BAA, the privacy and security of such information
                          shall be governed by the terms of the BAA.
                        </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>CUSTOMER’S OBLIGATIONS & RESTRICTIONS </span></h4>
                        <p>
                          <b>4.1 <u>Timely Cooperation</u>: </b> Receipt end enjoyment of the full benefits
                          of the Service requires your cooperation, approval, transfer of DNS, adherence
                          to all tracking protocol (including call tracking), and active participation with
                          or of or regarding any request or requirement relating to the Services made
                          by Doctor Genius Website development or support team staff.
                        </p>

                        <p>
                          <b>4.2 <u>Restrictions</u>: </b> Customer agrees that it will not or permit others
                          to: (a) share Company’s non-public information with any third party without consent
                          of Company; (b) use the Services in order to build a competitive product or service,
                          or to copy any ideas, features, functions of the Website Framework for use not in
                          connection with the Website we prepare for your use; (c) discover or attempt to discover,
                          or assist or permit any person to discover or attempt to discover, by any means
                          whatsoever the source code (the human-readable form) of any element of Service or
                          software made available for your use; (d) access, process, or otherwise use the Services
                          or Customer Data other than as permitted hereunder; or (e) circumvent or disable any
                          security or features of the Service.
                        </p>

                        <p>
                          <b>4.3 <u>Unauthorized Access</u>: </b> Both parties will take reasonable steps to
                          prevent unauthorized access to Customer Data, including without limitation by protecting
                          its passwords and other log-in information. Either party will notify the other party
                          immediately of any known or suspected unauthorized use of such data or breach of its
                          security and will use all reasonable means to stop said use or breach.
                        </p>

                        <p>
                          <b>4.4 <u>Compliance with Laws</u>: </b> During the Term of Service both Parties will
                          comply with all applicable laws, including without limitation laws governing the
                          protection of personally identifiable information and other laws applicable to the
                          protection of Customer Data.
                        </p>

                        <p>
                          <b>4.5 <u>Users & System Access</u>: </b> Customer is responsible and liable for Users’
                          use of the System, including without limitation unauthorized User conduct and the
                          requirements of this Agreement applicable to Customer.
                        </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>IP RIGHTS & FEEDBACK</span></h4>

                        <p>
                          <b>5.1 <u>Company’s IP Rights</u>:</b> Company retains all right, title, and interest
                          in and to the Website Framework and Company Content, including without limitation all
                          software and technical data used to develop the Website and all graphics, user
                          interfaces, or any components of the foregoing or any logos, trademarks, service marks
                          or other designations (whether or not registered) used by Company, including, but not
                          limited to, the name and mark Doctor Genius, used by Company (collectively, “Company IP”).
                          This Agreement does not grant Customer any intellectual property license or rights in
                          or to any Company IP.
                        </p>

                        <p>
                          <b>5.2 <u>Customer’s IP Rights</u>:</b> Customer retains all right, title, and interest
                          in and to Customer Data and Customer Content and any logos, trademarks, service marks
                          or other designations (whether or not registered) used by Customer in connection with
                          is business (excluding Company IP) (collectively, “Customer IP”). This Agreement does
                          not grant Company any intellectual property license or rights in or to any Customer IP
                          other such rights to use Customer IP as is necessary for Company to perform this Agreement.
                        </p>

                        <p>
                          <b>5.3 <u>Non-Exclusive License</u>:</b> So long as Customer has paid all Fees as and when
                          due during the Term of Service, and thereafter in exchange for payment of the applicable
                          Optional Fees after the Term of Service, Company hereby grants Customer the exclusive right
                          and license to use the Website and Company Content for Customer’s internal business purposes.
                          This right and license is transferable to any third party owned or controlled by Customer.
                        </p>

                        <p>
                          <b>5.4 <u>Feedback</u>:</b> Company has not agreed to and does not agree to treat as
                          confidential any Feedback (as defined below) Customer provide to Company, and nothing
                          in this Agreement or in the Parties’ dealings arising out of or related to the Services
                          will restrict Company’s right to use, profit from, disclose, publish, keep secret, or
                          otherwise exploit Feedback, without compensating or crediting Customer or the source in
                          question. Notwithstanding the provisions of Article 6 below, Feedback will not be considered
                          Confidential Information, provided information Customer transmits with Feedback or related to
                          Feedback may be considered Confidential Information. (“Feedback” refers to any suggestion or
                          idea for improving or otherwise modifying any of Company’s products or services.)
                        </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>CONFIDENTIAL INFORMATION:</span></h4>
                          <p>“Confidential Information” refers
                          to the following items either party discloses to the other: (a) any document either party marks
                          “Confidential”; (b) any information either party orally designates as “Confidential” at the
                          time of disclosure, provided the disclosing party confirms such designation in writing within
                          5 business days; and (c) any other nonpublic, sensitive information Customer should reasonably
                          consider a trade secret or otherwise confidential. Notwithstanding the foregoing, Confidential
                          Information does not include information that: (i) is in either party’s possession at the time
                          of disclosure; (ii) is independently developed by either party without use of or reference to
                          Confidential Information; (iii) becomes known publicly, before or after disclosure, other than
                          as a result of either party’s improper action or inaction; or (iv) is approved for release in
                          writing by either party in accordance with this agreement.</p>

                          <p>
                            <b>6.1 <u>Nondisclosure</u>:</b> Neither party will use Confidential Information for any
                            purpose other than for performing their respective express obligations in these Terms of
                            Service (the “Purpose”). Neither party: (a) will disclose Confidential Information to any
                            employee or contractor of Customer unless such person needs access in order to facilitate
                            the Purpose and executes a nondisclosure agreement with the disclosing party with terms no
                            less restrictive than those of this Article 6; and (b) will not disclose Confidential Information
                            to any other third party without either party’s prior written consent. Without limiting the
                            generality of the foregoing, the parties will protect Confidential Information with the same
                            degree of care it uses to protect its own confidential information of similar nature and
                            importance, but with no less than reasonable care. Each party will promptly notify the other
                            party of any misuse or misappropriation of Confidential Information that comes to their attention.
                            Notwithstanding the foregoing, either party may disclose Confidential Information as required by
                            applicable law or by proper legal or governmental authority. Each party will give the other party
                            prompt notice of any such legal or governmental demand and reasonably cooperate with the other party
                            in any effort to seek a protective order or otherwise to contest such required disclosure, at their
                            own expense.
                          </p>

                          <p>
                            <b>6.2 <u>Injunction</u>:</b> The parties agree that breach of this Section 6 would cause the
                            non-breaching party irreparable injury, for which monetary damages would not provide adequate
                            compensation, and that in addition to any other remedy, the non-breaching party will be entitled
                            to injunctive relief against such breach or threatened breach, without proving actual damage or
                            posting a bond or other security.
                          </p>

                          <p>
                            <b>6.3 <u>Termination & Return</u>:</b> With respect to each item of Confidential Information,
                            the obligations related to Confidential Information constituting either party’s trade secrets
                            will continue so long as such information remains subject to trade secret protection pursuant to
                            applicable law. Upon termination of this Agreement, the non-disclosing party will return all copies
                            of Confidential Information to the other party or certify, in writing, the destruction thereof.
                          </p>

                          <p>
                            <b>6.4 <u>Retention of Rights</u>:</b> This Agreement does not transfer ownership of Confidential
                            Information or grant a license thereto. The parties will retain all right, title, and interest
                            in and to all Confidential Information.
                          </p>

                          <p>
                            <b>6.5 <u>Exception & Immunity</u>:</b> Pursuant to the Defend Trade Secrets Act of 2016,
                            18 USC Section 1833(b), both parties acknowledge that, notwithstanding the foregoing or
                            any other provision of this Agreement:
                            <ol class={PageStyles.termsListAlpha + " terms-list-alpha"}>
                              <li><b>Immunity:</b> An individual shall not be held civilly liable under any Federal or
                              State trade secret law for the disclosure of a trade secret that: (A) is made (i) in confidence
                              to a Federal, State, or local government official, either directly or indirectly, or to an
                              attorney; and (ii) solely for the purpose of reporting or investigating a suspected violation of
                              law; or (B) is made in a complaint or other document filed in a lawsuit or other proceeding, if
                              such filing is made under seal.</li>
                              <li><b>Use of Trade Secret Information in Anti-Retaliation Lawsuit:</b> An individual who files a
                              lawsuit for retaliation by an employer for reporting a suspected violation of law may disclose the
                              trade secret to the attorney of the individual and use the trade secret information in the court
                              proceeding, if the individual: (A) files any document containing the trade secret under seal; and
                              (B) does not disclose the trade secret, except pursuant to court order.</li>
                            </ol>
                          </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>REPRESENTATIONS & WARRANTIES</span></h4>

                        <p>
                          <b>7.1 <u>From Company</u>:</b> Company represents and warrants that it is the owner Company IP or
                          the recipient of a valid license thereto, and that it has and will maintain the full power and
                          authority to grant the rights granted in this Agreement without the further consent of any third
                          party. In the event of a breach of the warranty in this Section 7.1, or if in Company’s opinion
                          the Website or Company Content is likely to become the subject of an infringement claim, Company
                          may, at its option and own expense: (a) secure for Customer the right to continue using the same;
                          (b) replace or modify it to make it non-infringing; or (c) terminate the infringing features thereof.
                          In conjunction with Customer’s right to terminate for breach where applicable, and notwithstanding
                          anything in the Agreement to the contrary, the preceding sentence states Company’s sole obligation
                          and liability, and Customer’s sole and exclusive remedy, for breach of the warranty in this Section
                          7.1 and for potential or actual intellectual property infringement.
                        </p>

                        <p>
                          <b>7.2 <u>From Customer</u>:</b> Customer represents and warrants that: (a) it has the full right
                          and authority to enter into, execute, and perform its obligations under this Agreement and that no
                          pending or threatened claim or litigation known to it would have a material adverse impact on its
                          ability to perform as required by the Agreement; (b) it has accurately identified itself and it
                          has not provided any inaccurate information about itself or its business; and (c) if an entity,
                          it is a corporation, limited liability company or another entity validly existing and in good
                          standing under applicable law.
                        </p>

                        <p>
                          <b>7.3:</b> In addition, Customer represents and warrants to and agrees with Company that: (i)
                          Customer is solely responsible for all Customer Data available on the Website, (ii) Customer is
                          the sole and exclusive owner of all such Customer Data or Customer has all rights, licenses,
                          consents and releases that are necessary to make such data available on the Website, (iii) neither
                          the Customer Data nor Customer’s making it available through the Website will infringe,
                          misappropriate or violate a third party’s proprietary or intellectual property rights, or rights of
                          publicity or privacy, or result in the violation of any applicable law or regulation to which Customer
                          or the Customer Data is subject, and (iv) if Customer uses Company’s Practice AI service, that Customer
                          will only send electronic communications on those of its Users who have consented in advance to receive
                          such communications.
                        </p>

                        <p>
                          <b>7.4 <u>Warranty Disclaimers</u>:</b> Except to the extent set forth in Section 7.1, CUSTOMER ACCEPTS
                          THE SERVICES AND WEBSITE “AS IS” AND AS AVAILABLE, WITH NO REPRESENTATION OR WARRANTY OF ANY KIND,
                          EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                          A PARTICULAR PURPOSE, OR NONINFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS, OR ANY IMPLIED WARRANTY
                          ARISING FROM STATUTE, COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. WITHOUT LIMITING
                          THE GENERALITY OF THE FOREGOING: (a) COMPANY HAS NO OBLIGATION TO INDEMNIFY OR DEFEND CUSTOMER OR USERS
                          AGAINST CLAIMS RELATED TO INFRINGEMENT OF INTELLECTUAL PROPERTY; (b) COMPANY DOES NOT REPRESENT OR WARRANT
                          THAT THE SERVICE OR WEBSITE OR COMPANY CONTENT OR ANY COMPANY IP WILL PERFORM WITHOUT INTERRUPTION OR ERROR;
                          AND (c) COMPANY DOES NOT REPRESENT OR WARRANT THAT THE WEBSITE IS SECURE FROM HACKING OR OTHER UNAUTHORIZED
                          INTRUSION OR THAT CUSTOMER DATA WILL REMAIN PRIVATE OR SECURE.
                        </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>INDEMNIFICATION:</span></h4>
                        <p>Customer will defend, indemnify, and hold harmless Company
                          and the Company Associates (as defined below) against any <b>“Indemnified Claim,”</b> meaning any third party claim,
                          suit, or proceeding arising out of or related to Customer’s alleged or actual use of, misuse of, or failure to
                          use the Services, Website or Company IP, including without limitation: (a) claims by Users or by Customer’s
                          employees, as well as by Customer’s own customers; (b) claims related to unauthorized disclosure or exposure of
                          personally identifiable information or other private information, including Customer Data, caused by Customer,
                          its employees, subcontractors, agents and/or Users; (c) claims related to infringement or violation of a copyright,
                          trademark, trade secret, or privacy or confidentiality right by written material, images, logos or other content
                          uploaded to the Website through Customer’s account, including without limitation by Customer Data; and (d) claims
                          that use of the Website through Customer’s account harasses, defames, or defrauds a third party. Indemnified Claims
                          include, without limitation, claims arising out of or related to Customer’s negligence. Customer’s obligations set
                          forth in this Section 8 include retention and payment of attorneys and payment of court costs, as well as settlement
                          at Customer’s expense and payment of judgments. Company will have the right, not to be exercised unreasonably, to
                          reject any settlement or compromise that requires that it admit wrongdoing or liability or subjects it to any ongoing
                          affirmative obligations. (“<b>Company Associates</b>” mean Company’s officers, directors, managers, members, subcontractors,
                          agents, successors, and assigns and those of any affiliate of the Company.)</p>

                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>LIMITATION OF LIABILITY</span></h4>

                        <p>
                          <b>9.1 <u>Exclusion of Consequential Damages</u>:</b> IN NO EVENT WILL COMPANY BE LIABLE TO CUSTOMER FOR ANY
                          CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO THE AGREEMENT
                          INCLUDING WITHOUT LIMITATION THE WEBSITE OR SERVICES.
                        </p>

                        <p>
                          <b>9.2 <u>Clarifications & Disclaimers</u>:</b> THE LIABILITIES LIMITED BY THIS ARTICLE 9 APPLY: (a) TO LIABILITY
                          FOR NEGLIGENCE; (b) REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, STRICT PRODUCT LIABILITY, OR
                          OTHERWISE; (c) EVEN IF COMPANY IS ADVISED IN ADVANCE OF THE POSSIBILITY OF THE DAMAGES IN QUESTION AND EVEN IF
                          SUCH DAMAGES WERE FORESEEABLE; AND (d) EVEN IF CUSTOMER’S REMEDIES FAIL OF THEIR ESSENTIAL PURPOSE. If applicable
                          law limits the application of the provisions of this Article 9, Company’s liability will be limited to the maximum
                          extent permissible, and in any case the Company’s monetary liability under the Agreement to Customer and others,
                          in the aggregate, shall not exceed the Fees paid by Customer for the Service. For the avoidance of doubt, Company’s
                          liability limits and other rights set forth in this Article 9 apply likewise to Company Associates.
                        </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>Term & Termination</span></h4>

                        <p>
                          <b>10.1 <u>Term</u>:</b> The Term of Service commence on the Effective Date (as defined in the Order) and continue
                          until terminated as provided herein.
                        </p>

                        <p>
                          <b>10.2 <u>Termination for Any Reason</u>:</b> Customer may terminate the Agreement at any time, in writing, for
                          any reason effective as stated in the Order.
                        </p>

                        <p>
                          <b>10.3 <u>Termination for Cause</u>:</b> Notwithstanding any contrary provision in Section 10.2 or the Order,
                          either party may terminate the Agreement for a Term of Service other than monthly for the other’s material
                          breach of the Agreement by written notice. Such notice will specify in detail the nature of the breach and
                          will be effective 30 days (or for non-payment of Fees, 10 days) after such notice, or more if specified in
                          the notice, unless the other party cures the breach within such time.
                        </p>

                        <p>
                          <b>10.4 <u>Effects of Termination</u>:</b> Upon termination of this Agreement, all rights of Customer to access
                          and use the Website (excluding Customer Content and Customer Data) and all Services will cease, and Customer
                          shall delete, destroy, or return all copies of Company’s confidential information in its possession or control,
                          except that the following provisions will survive any termination of the Agreement: (a) any payment obligations
                          of Customer accruing before termination; and (b) the terms of Sections 4.2, 5, 6, 7.3, 7.4 and 8 through 11
                          inclusive, except the terms of Section 5.3 shall terminate upon non-payment when due of the applicable Optional
                          Fees stated therein.
                        </p>
                      </li>

                      <li>
                        <h4><span class={PageStyles.termsBlue + " terms-blue"}>MISCELLANEOUS</span></h4>
                        <p>
                          <b>11.1 <u>Independent Contractors</u>:</b> The parties are independent contractors and will so represent
                          themselves in all regards. Neither party is the agent of the other, and neither may make commitments on
                          the other’s behalf.
                        </p>

                        <p>
                          <b>11.2 <u>Notices</u>:</b> Company may send notices pursuant to this Agreement to Customer’s email contact
                          points stated in the Order, and such notices will be deemed received 24 hours after they are sent. Customer
                          must send notices pursuant to this Agreement to
                          <a href="mailto:Support@doctorgenius.com">Support@doctorgenius.com</a> (for technical and administrative
                          support), or <a href="mailto:info@doctorgenius.com">info@doctorgenius.com</a> (for all other purposes) and
                          such notices will be deemed received 24 hours after they are sent.
                        </p>

                        <p>
                          <b>11.3 <u>Force Majeure</u>:</b> No delay, failure, or default, other than a failure to pay fees when due,
                          will constitute a breach of this Agreement to the extent caused by acts of war, terrorism, hurricanes, earthquakes,
                          other acts of God or of nature, strikes or other labor disputes, riots or other acts of civil disorder, embargoes,
                          or other causes beyond the performing party’s reasonable control.
                        </p>

                        <p>
                          <b>11.4 <u>Assignment & Successors</u>:</b> Customer may not assign this Agreement or any of its rights or obligations
                          hereunder without Company’s express written consent which shall not be unreasonably withheld. Except to the extent
                          forbidden in this Section 11.4, this Agreement will be binding upon and inure to the benefit of the parties’ respective
                          successors and permitted assigns.
                        </p>

                        <p>
                          <b>11.5 <u>Severability</u>:</b> To the extent permitted by applicable law, the parties hereby waive any provision
                          of law that would render any clause of this Agreement invalid or otherwise unenforceable in any respect. In the event
                          that a provision of this Agreement is held to be invalid or otherwise unenforceable, such provision will be interpreted
                          to fulfill its intended purpose to the maximum extent permitted by applicable law, and the remaining provisions of this
                          Agreement will continue in full force and effect.
                        </p>

                        <p>
                          <b>11.6 <u>No Waiver</u>:</b> Neither party will be deemed to have waived any of its rights under this Agreement by lapse
                          of time or by any statement or representation other than by an authorized representative in an explicit written waiver.
                          No waiver of a breach of this Agreement will constitute a waiver of any other breach of this Agreement.
                        </p>

                        <p>
                          <b>11.7 <u>Choice of Law & Jurisdiction</u>:</b> This Agreement and all claims arising out of or related to this Agreement
                          will be governed solely by the internal laws of the State of California, including without limitation applicable federal law,
                          without reference to: (a) any conflicts of law principle that would apply the substantive laws of another jurisdiction to the
                          parties’ rights or duties; (b) the 1980 United Nations Convention on Contracts for the International Sale of Goods; or (c)
                          other international laws. This Section 11.7 governs all claims arising out of or related to this Agreement, including without
                          limitation tort claims.
                        </p>

                        <p>
                          <b>11.8 <u>Conflicts</u>:</b> In the event of any conflict between these Terms of Service and any Company policy posted online,
                          including without limitation the Privacy Policy, the terms of these Terms of Service will control. The terms of the BAA will
                          control over any directly conflicting term of such policies and these Terms of Service.
                        </p>

                        <p>
                          <b>11.9 <u>Construction</u>:</b> The parties agree that the terms of the Agreement result from negotiations between them.
                          This Agreement will not be construed in favor of or against either party by reason of authorship.
                        </p>

                        <p>
                          <b>11.10 <u>Compliance with U.S. Export Laws</u>:</b> Exports of any products, materials and data exchanged under the Agreement
                          (if any) may be subject to the export laws of the United States including the United States International Traffic in Arms Regulations
                          (the “ITAR” as defined in 22 CFR 120-130), the Export Administration Regulations (as defined in 15 CFR 730-774), the Export
                          Administration Act, the Trading with the Enemy Act, and the International Emergency Economic Powers Act. Customer agrees to not
                          export, re-export, disclose or transfer any such materials or data directly or indirectly without compliance with these
                          and any other applicable laws and regulations. Customer recognizes that providing, in any manner, information
                          constituting “technology” and/or “technical data” (as defined at 15 CFR 772; 22 CFR 120.10) to a foreign person,
                          as defined in the ITAR at 22 CFR 120.16, is an “export” that may require prior authorization and licensing from the
                          United States Government. Customer agrees and warrants that no regulated product, materials or technical data exchanged
                          between the parties (if any) shall be accessed or provided, in any manner, to foreign persons in the United States or
                          abroad without prior, written authorization as required by the United States Government.
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

export default TermsOfService

export const ImageQuery = graphql`
  query PrivacyPolicyImages {
    heroBg: file(relativePath: { eq: "privacy-policy-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
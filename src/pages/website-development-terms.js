import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import InnerTitle from "../components/inner-title.js"
import Hero from "../components/Hero"

import PageStyles from "./website-development-terms.module.scss"
import RowStyles from "../components/Row.module.scss"

const heroConfig = {
  pageType: "websiteDevelopmentTerms",
  strapline: "Website Development Terms",
  title: [<span>Website </span>, "Development Terms"],
  content: [
    "Doctor Genius makes every effort to create a site that is personalized to your individual practice.",
  ],
}

const PrivacyPolicy = data => {
  console.log(data)
  return (
    <div
      className={
        PageStyles.websiteDevelopmentTermsPage + " " + RowStyles.rowStyling
      }
    >
      <DefaultPageLayout location="website-development-terms">
        <Helmet>
          <title>
            Website Development Terms | Doctor Genius in Lake Forest, CA 92630
          </title>
          <meta
            name="description"
            content="Website Development Terms of Doctor Genius located in in Lake Forest, CA 92630."
          />
        </Helmet>
        <div className="website-developement-terms">
          <BackgroundImage
            fluid={data.data.heroBg.childImageSharp.fluid}
            className={PageStyles.gbiWebDev + ` gbi-privacy-policy`}
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
                <div className="col-sm-10 col-md-8">
                  <div className="content-block">
                    <InnerTitle
                      title="Items that are included in building your website:"
                      inContentBlock
                      underlined
                      centered
                    />
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
                <div className="col-sm-10 col-md-8">
                  <div className="content-block">
                    <div className={PageStyles.listedItems}>
                      <ul>
                        <li>
                          Power pages (Home Page, About Page, Patient
                          Information Page, Contact Page)
                        </li>
                        <li>
                          Deployment of Doctor Genius service pages specific to
                          client's offered services
                        </li>
                        <li>
                          Deployment of service pages specific to client request
                        </li>
                        <li>Menus</li>
                        <li>
                          Migration of up to 18 pages of content from the old
                          client site - does not include obvious stock photos.
                          Each migrated page will receive one Doctor Genius
                          provided stock photo relevant to the migrated content.
                          <li>Up to four images per page</li>
                          <li>Average word count of less than 1,000</li>
                          <li>
                            Word counts in excess of 2,000 words would count as
                            multiple pages
                          </li>
                        </li>
                        <li>
                          Swap up to four unique client practice photos per
                          service page
                        </li>
                        <li>
                          Swap up to 20 stock photos when Shutterstock ID # and
                          specific photo location/page is provided
                        </li>
                        <li>
                          Personalize with colors, logo, and fonts as requested
                        </li>
                        <li>Add unlimited staff photos and bios</li>
                        <li>
                          Before and after gallery limit to 15 patients or 30
                          total before and after photos
                        </li>
                        <li>
                          A limit of 20 reviews
                          <li>
                            Client needs to provide a document containing review
                            text
                          </li>
                        </li>
                        <li>
                          Up to eight hours worked in the customization of the
                          client site.
                        </li>
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
                <div className="col-sm-10 col-md-8">
                  <div className="content-block">
                    <InnerTitle
                      title="Items that will need to be custom bid based on their complexity and the number of hours it will take to complete:"
                      inContentBlock
                      underlined
                      centered
                    />
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
                <div className="col-sm-10 col-md-8">
                  <div className="content-block">
                    <div className={PageStyles.listedItems}>
                      <ul>
                        <li>Migration of pages beyond the initial 18</li>
                        <li>Stock photo swaps beyond the initial 20</li>
                        <li>
                          Re-designing existing functionality (Anything not
                          within the current limits of our Framework)
                          <li>Video in slider</li>
                          <li>New review widget</li>
                          <li>
                            'Make my site look like this other marketing
                            company's'
                          </li>
                          <li>Multi-level popups</li>
                        </li>
                        <li>Layout changes</li>
                        <li>
                          Edit text, merging of multiple text documents or
                          sources into a single page, and the creation of
                          marketing text
                        </li>
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
                <div className="col-sm-10 col-md-8">
                  <div className="content-block">
                    <InnerTitle
                      title="Tasks that we do not do:"
                      inContentBlock
                      underlined
                      centered
                    />
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
                  RowStyles.tallBottom
                }
              >
                <div className="col-sm-10 col-md-8">
                  <div className="content-block">
                    <div className={PageStyles.listedItems}>
                      <ul>
                        <li>
                          Migration of copywritten text, stock photos, and
                          videos
                        </li>
                        <li>
                          Migration of the pages linked to in pages we scrape.
                          If you have a product category overview page that
                          links subordinate service pages, the subordinate pages
                          will not be scraped if the product category page was
                          included in the migration page list. For example,
                          Cosmetic Dentistry Services is a product category
                          page. It is likely to link to many services that are
                          considered cosmetic. If the Cosmetic Dentistry
                          Services page was selected as one of the 18 migrated
                          pages, the subordinate pages that are for each
                          individual service will not be migrated. They would
                          need to be included as one of the 18 pages to be
                          migrated to the new site.
                        </li>
                        <li>Edit out watermarks in photos</li>
                        <li>
                          Deploy the same photo to more that 3 service pages or
                          blogs
                        </li>
                        <li>
                          Include more than 20 patient before and after photos
                          in a gallery
                        </li>
                      </ul>
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

export default PrivacyPolicy

export const ImageQuery = graphql`
  query WebDevImages {
    heroBg: file(relativePath: { eq: "privacy-policy-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

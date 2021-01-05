import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import NewsLetterSignUpForm from "../components/newsletter-form.js"
import RequestDemoFooter from "../components/request-demo-footer"
import Hero from "../components/Hero"
import EventsTeaser from "../components/eventsTeaser"

import twitterIcon from "../img/twitter.svg"
import facebookIcon from "../img/facebook.svg"
import instagramIcon from "../img/instagram.svg"
import leftChevron from "../img/left-chevron.svg"
import rightChevron from "../img/right-chevron.svg"

import "../styles/the-study.scss"
import PageStyles from "./the-study-pagination.module.scss"
import RowStyles from "../components/Row.module.scss"

const heroConfig = {
  pageType: "theStudyPagination",
  strapline: "Resources",
  title: [<span>The</span>, " Study"],
  content:
    "Providing news and education on all things regarding Practice Management and Digital Marketing to help jumpstart your Practice.",
}

const ResponsivePostsColumnHeader = props => (
  <div
    className={
      PageStyles.responsiveTabTrigger +
      " col-sm-12 d-lg-none responsive-tab-trigger"
    }
  >
    <h3
      onClick={props.onClick}
      data-column="latest"
      className={
        (props.currentColumn === "latest"
          ? `${PageStyles.active} active `
          : "") +
        PageStyles.blogHeading +
        " blog-heading"
      }
    >
      Latest Posts
    </h3>
    <h3
      onClick={props.onClick}
      data-column="popular"
      className={
        (props.currentColumn === "popular"
          ? `${PageStyles.active} active `
          : "") +
        PageStyles.blogHeading +
        " blog-heading"
      }
    >
      Popular Posts
    </h3>
    <div
      className={
        PageStyles.spacer + " " + PageStyles.small + " " + PageStyles.solid
      }
    />
  </div>
)
const LatestPostsColumn = props => (
  <div
    className={
      (props.currentColumn === "latest"
        ? `${PageStyles.active} active`
        : `${PageStyles.hidden} hidden`) + " col-sm-12 col-lg-8 latest-posts"
    }
  >
    {props.children}
  </div>
)
const PopularPostsColumn = props => (
  <div
    className={
      (props.currentColumn === "popular"
        ? `${PageStyles.active} active`
        : `${PageStyles.hidden} hidden`) +
      " col-sm-12 col-md-12 col-lg-4 sidebar"
    }
  >
    {props.children}
  </div>
)

class ResponsivePostsColumn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColumn: "latest",
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick(e) {
    this.setState({ currentColumn: e.currentTarget.dataset.column })
  }
  render() {
    //Add the current column to the child components
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { currentColumn: this.state.currentColumn })
    )
    return (
      <>
        <ResponsivePostsColumnHeader
          onClick={this.onClick}
          currentColumn={this.state.currentColumn}
        />
        {childrenWithProps}
      </>
    )
  }
}

const TheStudyPaginationPage = ({ data, pageContext }) => {
  //Isolate the blog and categories routes
  //This should be located globally, or the categories and archive page combined
  const postsPath = "/blog/"
  const categoriesPaths = [
    {
      name: "Digital Marketing",
      slug: "digital-marketing",
      image: data.marketingCategoryImage.childImageSharp.fluid.src,
    },
    {
      name: "Practice Management",
      slug: "practice-management",
      image: data.practiceManagementImage.childImageSharp.fluid.src,
    },
    {
      name: "Genius Lab",
      slug: "genius-lab",
      image: data.geniusLabImage.childImageSharp.fluid.src,
    },
  ]
  // Variables for the next/prev button in pagination
  const isFirst = pageContext.currentPage === 1
  const isLast = pageContext.currentPage === pageContext.numPages
  const prevPage =
    pageContext.currentPage - 1 === 1
      ? "/blog"
      : "/blog/" + (pageContext.currentPage - 1).toString()
  const nextPage = "/blog/" + (pageContext.currentPage + 1).toString()

  // Variables used in the pagination loop
  const currentPage = pageContext.currentPage
  const numPages = pageContext.numPages
  var start
  // Conditionals to choose where to start the pagination links
  if (numPages > 5) {
    if (currentPage - 2 >= 1 && currentPage + 2 <= numPages) {
      start = currentPage - 2
    } else if (currentPage - 2 < 1) {
      start = 1
    } else if (currentPage + 2 > numPages) {
      start = numPages - (pageContext.numPaginationLinks - 1)
    }
  } else {
    start = 1
  }

  //Logic to gather popular posts - if less than four grab the latest posts
  const gather_popular_posts = arr => {
    let popular_posts_length = data.popular.edges.length
    for (let y = 0; popular_posts_length < 4; y++) {
      arr.push(data.latest.edges[y])
      popular_posts_length++
    }
    return arr
  }

  let popular_posts = gather_popular_posts(data.popular.edges)

  return (
    <div
      className={PageStyles.theStudyPaginationPage + " " + RowStyles.rowStyling}
    >
      <DefaultPageLayout>
        <Helmet>
          <title>
            Practice Management & Digital Marketing Blog | The Study
          </title>
          <meta
            name="description"
            content="Actionable advice on how to manage and market your local practice. Start getting the new patients your practice deserves. Practice growth starts here."
          />
        </Helmet>
        <div className="the-study">
          <BackgroundImage fluid={data.heroBg.childImageSharp.fluid}>
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
                  PageStyles.category +
                  " category"
                }
              >
                {categoriesPaths.map(category => (
                  <div className="col-sm-4" key={category.name}>
                    <a href={postsPath + category.slug}>
                      <div
                        className={PageStyles.categoryImage + " category-image"}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className={PageStyles.imgResponsive}
                        />
                        <div
                          className={
                            PageStyles.label + " " + PageStyles.primary
                          }
                        >
                          <p>{category.name}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortTop +
                  " align-items-start"
                }
              >
                <ResponsivePostsColumn>
                  <LatestPostsColumn>
                    <h3
                      className={
                        PageStyles.blogHeading +
                        " blog-heading d-sm-none d-md-block"
                      }
                    >
                      Latest Posts
                    </h3>
                    <div
                      className={
                        PageStyles.spacer +
                        " " +
                        PageStyles.small +
                        " " +
                        PageStyles.solid +
                        " d-sm-none d-md-block"
                      }
                    />

                    {data.latest.edges.map(({ node }) => {
                      // This combs the list of categories attached to a post and returns the first one matching our sleetced Categories
                      // The deprecated categories on dg.com like "DoctorGenius" were causing an error
                      const mainCategory = node.categories.find(c =>
                        categoriesPaths.find(d => d.name === c.name)
                      )
                      // console.log(mainCategory)
                      return (
                        <div
                          className={PageStyles.latestPost + " latest-post"}
                          key={node.title}
                        >
                          <div
                            className={
                              PageStyles.featuredImageHolder +
                              " featured-image-holder"
                            }
                          >
                            <a href={postsPath + node.slug}>
                              {node.featured_media && (
                                <Img
                                  fluid={
                                    node.featured_media.localFile
                                      .childImageSharp.fluid
                                  }
                                />
                              )}
                            </a>
                          </div>
                          <div
                            className={
                              PageStyles.contentHolder + " content-holder"
                            }
                          >
                            <div className={PageStyles.details + " details"}>
                              <p className={PageStyles.date + " date"}>
                                {node.date}
                              </p>
                              <p
                                className={
                                  PageStyles.label + " " + PageStyles.mute
                                }
                              >
                                <a
                                  href={
                                    // This selects the slug from the categories array matching the mainCategory found above
                                    postsPath +
                                    categoriesPaths.find(
                                      i => i.name === mainCategory.name
                                    ).slug
                                  }
                                >
                                  {mainCategory.name}
                                </a>
                              </p>
                            </div>
                            <h4 className={PageStyles.title + " title"}>
                              <a
                                className={PageStyles.notALink}
                                href={postsPath + node.slug}
                                rel="nofollow"
                              >
                                {he.decode(node.title)}
                              </a>
                            </h4>
                            <p
                              className={PageStyles.excerpt + " excerpt"}
                              dangerouslySetInnerHTML={{
                                __html: node.excerpt.replace(
                                  /<a.*?moretag.*?<\/a>/,
                                  '... <a href="' +
                                    postsPath +
                                    node.slug +
                                    '" target="_blank">[ Read More ]</a>'
                                ),
                              }}
                            />
                            <p className="readmore-link"></p>
                          </div>
                        </div>
                      )
                    })}

                    <div className={PageStyles.pagination + " pagination"}>
                      {// Controls the prev button
                      !isFirst && (
                        <Link to={prevPage} rel="prev">
                          <img src={leftChevron} alt="Navigate to Previous" />
                        </Link>
                      )}
                      {}
                      {// Loop to create pagination links based on numOfPages

                      Array.from(
                        { length: pageContext.numPaginationLinks },
                        (_, i) => (
                          <Link
                            key={`pagination-number${i + start}`}
                            to={`/blog${
                              i + start - 1 === 0 ? "" : "/" + (i + start)
                            }`}
                          >
                            <p
                              className={
                                pageContext.currentPage === i + start
                                  ? `${PageStyles.active} active`
                                  : ""
                              }
                            >
                              {i + start}
                            </p>
                          </Link>
                        )
                      )}
                      {// Controls the next button
                      !isLast && (
                        <Link to={nextPage} rel="next">
                          <img src={rightChevron} alt="Navigate to Next" />
                        </Link>
                      )}
                    </div>
                  </LatestPostsColumn>
                  <PopularPostsColumn>
                    <div
                      className={PageStyles.stayConnected + " stay-connected"}
                    >
                      <div className={RowStyles.row}>
                        <div className="col-sm-12">
                          <h3
                            className={
                              PageStyles.blogHeading + " blog-heading "
                            }
                          >
                            Stay Connected
                          </h3>
                          <div
                            className={
                              PageStyles.spacer +
                              " " +
                              PageStyles.small +
                              " " +
                              PageStyles.solid
                            }
                          />
                        </div>
                      </div>
                      <div className={RowStyles.row}>
                        <div className="col-sm-12">
                          <div
                            className={
                              PageStyles.socialIconsWrapper +
                              " social-icons-wrapper"
                            }
                          >
                            <div
                              className={
                                PageStyles.socialIconDetail +
                                " social-icon-detail"
                              }
                            >
                              <img
                                src={facebookIcon}
                                className="social-icon"
                                alt="Facebook"
                              />
                              <p>25k</p>
                              <p
                                className={
                                  PageStyles.socialUnit + " social-unit"
                                }
                              >
                                Likes
                              </p>
                            </div>
                            <div
                              className={
                                PageStyles.socialIconDetail +
                                " social-icon-detail"
                              }
                            >
                              <img
                                src={twitterIcon}
                                className="social-icon"
                                alt="Twitter"
                              />
                              <p>231k</p>
                              <p
                                className={
                                  PageStyles.socialUnit + " social-unit"
                                }
                              >
                                Followers
                              </p>
                            </div>
                            <div
                              className={
                                PageStyles.socialIconDetail +
                                " social-icon-detail"
                              }
                            >
                              <img
                                src={instagramIcon}
                                className="social-icon"
                                alt="Instagram"
                              />
                              <p>80k</p>
                              <p
                                className={
                                  PageStyles.socialUnit + " social-unit"
                                }
                              >
                                Followers
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <NewsLetterSignUpForm />
                    </div>
                    <div className="most-popular">
                      <div
                        className={
                          RowStyles.row +
                          " " +
                          RowStyles.padded +
                          " " +
                          RowStyles.shortTop +
                          " " +
                          RowStyles.shortBottom +
                          " d-sm-none d-lg-block"
                        }
                      >
                        <div className="col-sm-12">
                          <h4
                            className={
                              PageStyles.blogHeading + " blog-heading "
                            }
                          >
                            Most Popular
                          </h4>
                          <div
                            className={
                              PageStyles.spacer +
                              " " +
                              PageStyles.small +
                              " " +
                              PageStyles.solid +
                              " d-md-none"
                            }
                          />
                        </div>
                      </div>
                      <div className={RowStyles.row}>
                        <div className="col-sm-12">
                          {popular_posts.map(({ node }) => (
                            <a href={`/blog/${node.slug}`} key={node.title}>
                              <div
                                className={
                                  PageStyles.popularPost + " popular-post"
                                }
                              >
                                <div
                                  className={
                                    PageStyles.featuredImageHolder +
                                    " featured-image-holder"
                                  }
                                >
                                  {node.featured_media && (
                                    <Img
                                      fluid={
                                        node.featured_media.localFile
                                          .childImageSharp.fluid
                                      }
                                    />
                                  )}
                                </div>
                                <div
                                  className={
                                    PageStyles.contentHolder + " content-holder"
                                  }
                                >
                                  <p
                                    className={
                                      PageStyles.details +
                                      " " +
                                      PageStyles.date +
                                      " d-md-block d-lg-none details date"
                                    }
                                  >
                                    {node.date}
                                  </p>
                                  <h5 className={PageStyles.title + " title"}>
                                    {he.decode(node.title)}
                                  </h5>
                                  <p
                                    className={
                                      PageStyles.details +
                                      " " +
                                      PageStyles.date +
                                      " d-none d-lg-block details date"
                                    }
                                  >
                                    {node.date}
                                  </p>
                                  <p
                                    className={
                                      PageStyles.excerpt +
                                      " excerpt d-md-block d-lg-none"
                                    }
                                    dangerouslySetInnerHTML={{
                                      __html: node.excerpt.replace(
                                        /<a.*?moretag.*?<\/a>/,
                                        '... <a href="' +
                                          postsPath +
                                          node.slug +
                                          '" target="_blank">[ Read More ]</a>'
                                      ),
                                    }}
                                  />
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        PageStyles.categorySection + " category-section"
                      }
                    >
                      <div className={RowStyles.row}>
                        <div className="col-sm-12">
                          <h4
                            className={
                              PageStyles.blogHeading + " blog-heading "
                            }
                          >
                            Category
                          </h4>
                          <div
                            className={
                              PageStyles.spacer +
                              " " +
                              PageStyles.small +
                              " " +
                              PageStyles.solid
                            }
                          />
                          {categoriesPaths.map(category => (
                            <a
                              href={postsPath + category.slug}
                              key={category.name}
                              rel="nofollow"
                            >
                              <span
                                className={
                                  PageStyles.label + " " + PageStyles.primary
                                }
                              >
                                <p>{category.name}</p>
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopularPostsColumn>
                </ResponsivePostsColumn>
              </div>

              <EventsTeaser />

              <RequestDemoFooter smWidth="11" sThin />
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}

export default TheStudyPaginationPage

// Note: The graphQL variable here is automagically passed from gatsby-node.js in context
export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    latest: allWordpressPost(
      sort: { fields: [date], order: [DESC] }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          ...blogPost
        }
      }
    }
    popular: allWordpressPost(
      filter: { categories: { elemMatch: { wordpress_id: { eq: 139 } } } }
      sort: { fields: [date], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          ...blogPost
        }
      }
    }
    events: allWordpressWpEvents(
      sort: { fields: [date], order: [DESC] }
      limit: 4
    ) {
      edges {
        node {
          ...recentEvent
        }
      }
    }
    selectedCategories: allWordpressCategory(
      filter: {
        name: { in: ["Genius Lab", "Practice Management", "Digital Marketing"] }
      }
    ) {
      edges {
        node {
          name
          slug
        }
      }
    }
    marketingCategoryImage: file(
      relativePath: { eq: "digital-marketing-blog.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    practiceManagementImage: file(
      relativePath: { eq: "practice-management-blog.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    geniusLabImage: file(relativePath: { eq: "doctor-genius-blog.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eventsPlaceholder: file(
      relativePath: { eq: "study-archive-events-placeholder-3x2.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroBg: file(relativePath: { eq: "the-study.jpg" }) {
      childImageSharp {
        fluid(quality: 70) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import he from "he"
import Img from "gatsby-image"

import DefaultPageLayout from "../components/DefaultPageLayout"
import Main from "../components/main-content"
import Container from "../components/Container"
import RequestDemoFooter from "../components/request-demo-footer"
import EventsTeaser from "../components/eventsTeaser"

import twitterIcon from "../img/twitter.svg"
import facebookIcon from "../img/facebook.svg"
import leftChevron from "../img/left-chevron.svg"
import rightChevron from "../img/right-chevron.svg"

import "../styles/the-study-post.scss"
import PageStyles from "./post.module.scss"
import RowStyles from "../components/Row.module.scss"

function PostPage({ pageContext, data, location }) {
  const categoriesPaths = [
    {
      name: "Digital Marketing",
    },
    {
      name: "Practice Management",
    },
    { name: "Genius Lab" },
  ]
  const post = data.currentPost

  const mainCategory = post.categories.find(c =>
    categoriesPaths.find(d => d.name === c.name)
  )

  //Create the two necessary parts of the blog post by splitting at the first paragraph
  const content = post.content.split(/(<p>.*?<\/p>)/)
  const intro = content.slice(1, 2).join()
  const remainder = content.slice(2).join("")

  let escapedTitle = post.title.replace(/\s/g, "+")
  let escapedLink = encodeURIComponent(location.href)

  let facebookShareLink =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    escapedLink +
    "&title=" +
    escapedTitle

  /* https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview.html */
  let twitterShareLink =
    "https://twitter.com/intent/tweet?text=Interesting%20Article:%20" +
    escapedTitle +
    "%20(from%20" +
    escapedLink +
    ")%20."
  // console.log()
  // let previousPost = (typeof(pageContext.prevNode) !== 'undefined' || pageContext.prevNode != null) ?
  const previousPost = pageContext.prevNode
    ? "/blog/" + pageContext.prevNode.slug
    : null
  const nextPost = pageContext.nextNode
    ? "/blog/" + pageContext.nextNode.slug
    : null

  return (
    <div className={PageStyles.blogPostPage + " " + RowStyles.rowStyling}>
      <DefaultPageLayout location="theStudyPost">
        <Helmet>
          <title>{post.title} | The Study</title>
          <meta
            name="description"
            content={
              post._yoast_wpseo_metadesc ||
              "Actionable advice on how to manage and market your local practice. Start getting the new patients your practice deserves. Practice growth starts here."
            }
          />
        </Helmet>

        <div className="page-wrapper">
          <div className={PageStyles.heroPadding + " hero-padding"} />
          <Main>
            <Container>
              <div
                className={
                  RowStyles.row +
                  " " +
                  RowStyles.padded +
                  " " +
                  RowStyles.shortBottom
                }
              >
                <div className="col-lg-8">
                  <div className={PageStyles.pagination + " pagination"}>
                    {previousPost != null ? (
                      <a href={previousPost}>
                        <img src={leftChevron} alt="Navigate to Previous" />
                        &nbsp;Back
                      </a>
                    ) : (
                        <p>&nbsp;</p>
                      )}
                    {nextPost != null ? (
                      <a href={nextPost}>
                        Next &nbsp;
                        <img src={rightChevron} alt="Navigate to Next" />
                      </a>
                    ) : (
                        <p>&nbsp;</p>
                      )}
                  </div>
                </div>
              </div>
              <div className={PageStyles.blogHeader + " blog-header"}>
                <div className={RowStyles.row}>
                  <div className="col-lg-9 offset-lg-2">
                    <div
                      className={
                        RowStyles.row +
                        " " +
                        PageStyles.mobileImageRow +
                        " mobile-image-row"
                      }
                    >
                      <div className={PageStyles.imgHolder + " col-xs-12"}>
                        {post.featured_media && (
                          <Img
                            fluid={
                              post.featured_media.localFile.childImageSharp
                                .fluid
                            }
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className={
                        RowStyles.row + " " + PageStyles.upperRow + " upper-row"
                      }
                    >
                      <div className="col-lg-9 order-lg-1 order-sm-3">
                        <h1 className={PageStyles.title + " title"}>
                          {he.decode(post.title)}
                        </h1>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-3 order-sm-1 order-lg-2">
                        <div
                          className={
                            PageStyles.label + " " + PageStyles.primary
                          }
                        >
                          <p>{mainCategory.name}</p>
                        </div>
                      </div>

                      <div className="col-sm-12 col-lg-4 order-sm-4 order-lg-3">
                        <div className={PageStyles.byLine + " byline"}>
                          <p className={PageStyles.date + " date"}>
                            {post.date}
                          </p>
                          <p className="author">{post.author.name}</p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 md-offset-4 col-lg-3 order-sm-1 order-lg-4">
                        <div className={PageStyles.shareIcons + " share-icons"}>
                          <p>Share:</p>
                          <a href={facebookShareLink}>
                            {/* https://www.facebook.com/DoctorGeniusMarketing*/}
                            {/*https://www.facebook.com/sharer/sharer.php?u=
                        http%3A%2F%2Fstackoverflow.com
                        (http://stackoverflow.com)
                        %2Fq%2F20956229%2F1101509&picture=http%3A%2F%2Fwww.applezein.net%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F03%2Ffacebook-logo.jpg
                        (/q/)
                        &title=A+nice+question+about+Facebook
                        &quote=Does+anyone+know+if+there+have+been+recent+changes+which+could+have+suddenly+stopped+this+from+working%3F&description=Apparently%2C+the+accepted+answer+is+not+correct.
*/}
                            <img src={facebookIcon} alt="Facebook" />
                          </a>
                          <a href={twitterShareLink}>
                            <img src={twitterIcon} alt="Twitter" />
                          </a>
                          {/*
                        <a href="https://www.instagram.com/doctor.genius/">
                          <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCEOt77NoRiRrQzDgjpQwDCA/videos">
                          <img src={youtubeIcon} alt="YouTube" />
                        </a>
                        */}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1" />
                  </div>
                  <div className="col-lg-1" />
                </div>
              </div>
              <div className={RowStyles.row}>
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className={PageStyles.spacer + " " + PageStyles.solid} />
                </div>
                <div className="col-lg-1" />
              </div>
              <div className={RowStyles.row}>
                <div className="col-lg-8">
                  <div className={PageStyles.blogContent + " blog-content"}>
                    <div
                      className="intro"
                      dangerouslySetInnerHTML={{ __html: intro }}
                    />

                    <div
                      className={PageStyles.featuredImage + " featured-image"}
                    >
                      {post.featured_media && (
                        <Img
                          fluid={
                            post.featured_media.localFile.childImageSharp.fluid
                          }
                        />
                      )}
                    </div>
                    <div
                      className="remainder"
                      dangerouslySetInnerHTML={{ __html: remainder }}
                    />
                  </div>
                </div>
              </div>

              {post.blog_author &&
                (<div className="d-none">
                  <h4>{post.blog_author}</h4>
                </div>)
              }

              <div
                className={
                  PageStyles.events +
                  " " +
                  PageStyles.fullBleedWrapper +
                  " full-bleed-wrapper pad-md events"
                }
              >
                <div
                  className={
                    PageStyles.greyBackground + " full-bleed grey-background"
                  }
                />
                <div
                  className={
                    PageStyles.fullBleedContentWrapper +
                    " full-bleed-content-wrapper"
                  }
                >
                  <EventsTeaser />
                </div>
              </div>
              {/* Begin Demo Footer */}
              <RequestDemoFooter
                smWidth="9"
                mdWidth="5"
                contentBlockID={PageStyles.demoContentBlock}
              />
              {/* End Demo Footer */}
            </Container>
          </Main>
        </div>
      </DefaultPageLayout>
    </div>
  )
}
export default PostPage

export const pageQuery = graphql`
  query($currentID: Int, $prevID: Int, $nextID: Int) {
    currentPost: wordpressPost(wordpress_id: { eq: $currentID }) {
      ...blogPost
      categories {
        name
      }
    }
    prevPost: wordpressPost(wordpress_id: { eq: $prevID }) {
      ...blogPost
    }
    nextPost: wordpressPost(wordpress_id: { eq: $nextID }) {
      ...blogPost
    }
  }
`

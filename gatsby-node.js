const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Replacing '/' would result in empty string which is invalid
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage)
    createPage(page)
  }
}

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== POSTS (WORDPRESS NATIVE AND ACF) ====

    graphql(
      `
        {
          allWordpressCategory(
            filter: {
              name: {
                in: ["Genius Lab", "Practice Management", "Digital Marketing"]
              }
            }
          ) {
            edges {
              node {
                name
                slug
              }
            }
          }
          allCategoryPostsDigitalMarketing: allWordpressPost(
            filter: {
              categories: { elemMatch: { name: { eq: "Digital Marketing" } } }
            }
          ) {
            totalCount
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }
          allCategoryPostsPracticeManagement: allWordpressPost(
            filter: {
              categories: { elemMatch: { name: { eq: "Practice Management" } } }
            }
          ) {
            totalCount
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }
          allCategoryPostsGeniusLab: allWordpressPost(
            filter: {
              categories: { elemMatch: { name: { eq: "Genius Lab" } } }
            }
          ) {
            totalCount
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }
          latestPosts: allWordpressPost(
            sort: { fields: [date], order: [DESC] }
          ) {
            edges {
              previous {
                slug
                wordpress_id
              }
              next {
                slug
                wordpress_id
              }
              node {
                slug
                wordpress_id
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const postTemplate = path.resolve("./src/templates/post.js")
      const categoryTemplate = path.resolve("./src/templates/categories.js")
      const latestPaginationTemplate = path.resolve(
        "./src/templates/the-study-pagination.js"
      )

      // Create the variables for the pagination pages
      const numPosts = result.data.latestPosts.edges.length
      const numCategories = result.data.allWordpressCategory.edges.length
      const numDigitalMarketingPosts =
        result.data.allCategoryPostsDigitalMarketing.totalCount
      const numPracticeManagementPosts =
        result.data.allCategoryPostsPracticeManagement.totalCount
      const numGeniusLabPosts = result.data.allCategoryPostsGeniusLab.totalCount
      const postsPerPage = 5
      const numPages = Math.ceil(numPosts / postsPerPage)
      const numCategoryPages = {
        digitalMarketing: Math.ceil(numDigitalMarketingPosts / postsPerPage),
        geniusLab: Math.ceil(numGeniusLabPosts / postsPerPage),
        practiceManagement: Math.ceil(
          numPracticeManagementPosts / postsPerPage
        ),
      }

      const numPaginationLinksAll = numPages <= 5 ? numPages : 5
      const numPaginationLinksDigitalMarketing =
        numCategoryPages.digitalMarketing <= 5
          ? numCategoryPages.digitalMarketing
          : 5
      const numPaginationLinksGeniusLab =
        numCategoryPages.geniusLab <= 5 ? numCategoryPages.geniusLab : 5
      const numPaginationLinksPracticeManagement =
        numCategoryPages.practiceManagement <= 5
          ? numCategoryPages.practiceManagement
          : 5

      // We want to create a detailed page for each
      // post node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.latestPosts.edges, edge => {
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: slash(postTemplate),
          context: {
            currentNode: edge.node,
            currentID: edge.node.wordpress_id,
            prevNode: edge.previous,
            prevID: edge.previous ? edge.previous.wordpress_id : null,
            nextNode: edge.next,
            nextID: edge.next ? edge.next.wordpress_id : null,
          },
        })
      })

      // Create the pagination pages for The Study archive
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: slash(latestPaginationTemplate),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            numPaginationLinks: numPaginationLinksAll,
            currentPage: i + 1,
          },
        })
      })

      // Create Category Pages
      // _.each(result.data.allWordpressCategory.edges, edge => {
      //   createPage({
      //     path: `/blog/${edge.node.slug}`,
      //     component: slash(categoryTemplate),
      //     context: edge.node,
      //   })
      // })

      // Create all of the pagination pages for Digital Marketing Category
      Array.from({ length: numCategoryPages.digitalMarketing }).forEach(
        (_, i) => {
          createPage({
            path:
              i === 0
                ? `/blog/digital-marketing`
                : `/blog/digital-marketing/${i + 1}`,
            component: slash(categoryTemplate),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numCategoryPages.digitalMarketing,
              numPaginationLinks: numPaginationLinksDigitalMarketing,
              currentPage: i + 1,
              slug: "digital-marketing",
              name: "Digital Marketing",
            },
          })
        }
      )

      // Create all of the pagination pages for Genius Lab Category
      Array.from({ length: numCategoryPages.geniusLab }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/genius-lab` : `/blog/genius-lab/${i + 1}`,
          component: slash(categoryTemplate),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: numCategoryPages.geniusLab,
            numPaginationLinks: numPaginationLinksGeniusLab,
            currentPage: i + 1,
            slug: "genius-lab",
            name: "Genius Lab",
          },
        })
      })

      // Create all of the pagination pages for Practice Management Category
      Array.from({ length: numCategoryPages.practiceManagement }).forEach(
        (_, i) => {
          createPage({
            path:
              i === 0
                ? `/blog/practice-management`
                : `/blog/practice-management/${i + 1}`,
            component: slash(categoryTemplate),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numCategoryPages.practiceManagement,
              numPaginationLinks: numPaginationLinksPracticeManagement,
              currentPage: i + 1,
              slug: "practice-management",
              name: "Practice Management",
            },
          })
        }
      )

      // Array.from({ length: numPages }).forEach((_, i) => {
      //   createPage({
      //     path:
      //       i === 0
      //         ? `/blog/${edge.node.slug}`
      //         : `/blog/${edge.node.slug}/${i + 1}`,
      //     component: slash(categoryTemplate),
      //     context: {
      //       edgeNode: edge.node,
      //       limit: postsPerPage,
      //       skip: i * postsPerPage,
      //       numPages: numCategoryPages,
      //       numPaginationLinks,
      //       currentPage: i + 1,
      //     },
      //   })
      // })

      resolve()
    })

    // ==== END POSTS ====

    // ==== TAGS ====
    graphql(
      `
        {
          allTags: allWordpressTag {
            edges {
              node {
                slug
                wordpress_id
                count
                name
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const tagTemplate = path.resolve("./src/templates/tags.js")

      // Create the variables for the pagination pages
      const postsPerPage = 5

      // We want to create a archive page for each tag
      // The first loop loops through all of the tags
      // present in WP
      _.each(result.data.allTags.edges, edge => {
        let numPosts = edge.node.count
        let numPages = Math.ceil(numPosts / postsPerPage)
        let numPaginationLinks =
          numPages <= postsPerPage ? numPages : postsPerPage
        // This second loop creates a page for the total number of
        // pagination pages that are required
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0
                ? `/blog/${edge.node.slug}`
                : `/blog/${edge.node.slug}/${i + 1}`,
            component: slash(tagTemplate),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              numPaginationLinks: numPaginationLinks,
              currentPage: i + 1,
              slug: edge.node.slug,
              name: edge.node.name,
            },
          })
        })
      })

      resolve()
    })

    // ==== END TAGS ====

    // ==== EVENTS ====

    graphql(
      `
        {
          allWordpressCategory(filter: { name: { in: "Events" } }) {
            edges {
              node {
                name
                slug
              }
            }
          }
          latestEvents: allWordpressWpEvents(
            sort: { fields: [date], order: [DESC] }
          ) {
            edges {
              node {
                slug
                wordpress_id
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }
      const eventTemplate = path.resolve("./src/templates/event.js")

      // We want to create a detailed page for each
      // event node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.latestEvents.edges, edge => {
        createPage({
          path: `/events/${edge.node.slug}/`,
          component: slash(eventTemplate),
          context: {
            currentNode: edge.node,
            currentID: edge.node.wordpress_id,
          },
        })
      })

      resolve()
    })

    // ==== END EVENTS ====
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: "jQuery",
    },
    module: {
      rules: [
        {
          test: /bootstrap/,
          use: loaders.null(),
        },
      ],
    },
  })
}

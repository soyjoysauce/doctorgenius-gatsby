import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link
          rel="preload"
          as="script"
          href="https://go.doctorgenius.com/analytics?conly=true&visitor_id=404034111&pi_opt_in=&campaign_id=49104&account_id=437692&title=High%20Conversion%20Patient%20Acquisition%20Websites%20%7C%20Performance%2C%20Results%2C%20Excellence&url=https%3A%2F%2Fdoctorgenius.com%2F&referrer=&visitor_id_sign=770c08436bc5d653c9a6de37d1a68bcafdf0e25002f97b05d013c7f168de547d21baf613f668110fd0fabfa74b77ac8533f3691e"
        />
        <link rel="preload" as="script" href="https://pi.pardot.com/pd.js" />
        {/*<link
          rel="preload"
          as="script"
          href="https://stats.g.doubleclick.net"
        />
        <link rel="preload" as="script" href="https://p.adsymptotic.com" /> */}
        <link
          rel="preload"
          as="script"
          href="https://track.gaconnector.com/gaconnector.js"
        />
        {props.headComponents}
        <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossOrigin="anonymous"
          // src="../static/scripts/jquery.min.js"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `

            document.addEventListener("DOMContentLoaded", function() {
              
            })
          `,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

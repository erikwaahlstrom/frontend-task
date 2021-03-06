import "normalize.css"
import React from "react"
import { Helmet } from "react-helmet"

const title = "Frontend task"

export class AppFrame extends React.Component {
  render() {
    return (
      <>
        <Helmet
          {...{ title }}
          htmlAttributes={{ lang: "sv" }}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "HTML,CSS,JavaScript" },
            { name: "author", content: "Erik Wahlstrom" },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=VT323|Montserrat|Lato:300,400,700"
            rel="stylesheet"
          />
        </Helmet>
        <div className="page-wrapper">{this.props.children}</div>
      </>
    )
  }
}

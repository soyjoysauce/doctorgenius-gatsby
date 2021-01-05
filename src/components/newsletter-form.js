import React from "react"

import checkSuccess from "../img/checkSuccess.png"
import xFail from "../img/xFail.png"

import FormStyles from "./newsletter-form.module.scss"
import RowStyles from "../components/Row.module.scss"

import $ from "jquery"

class NewsLetterSignUpForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      validationPassed: false,
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(ev) {
    // trigger ajax loading spiner
    function ajaxLoaderDisplay() {
      $(".rounder").hide()
      $(".newsletter-form").addClass("submitted")
      $(".lds-ellipsis").show()
    }

    function submissionSuccess() {
      setTimeout(() => $(".lds-ellipsis").hide(), 3000)
      setTimeout(() => $(".positive-response").show(), 3000)
      setTimeout(() => clearFormFields(), 3000)
    }

    /* function submissionFail() {
      setTimeout(() => $('.lds-ellipsis').hide(), 3000)
      setTimeout(() => $('.negative-response').show(), 3000)
    } */

    function clearFormFields() {
      $('input[type="email"]').val("")
    }

    ajaxLoaderDisplay()
    //Show success check and clear all form fields
    submissionSuccess()

    // Prevent the button from redirecting
    ev.preventDefault()

    // Set up a new Form object
    const data = new FormData()

    //Add the user-entered data
    data.append("EmailAddress", this.email.value)

    //Convert data into a string for POST request
    let stringData = ""

    // Turn the form body into a string by iterating over the form
    // entries and encoding them as URI components
    Object.keys(Object.fromEntries(data)).forEach(
      e =>
        //console.log(`key=${e}  value=${Object.fromEntries(data)[e]}`)
        (stringData += `${e}=${encodeURIComponent(
          Object.fromEntries(data)[e]
        )}&`)
    )

    // Remove the trailing '&' since there's no additional parameter
    stringData = stringData.replace(/&$/, "")

    //Salesforce integration:
    //https://portal.doctorgenius.com/api/dglead
    //tracking key: a803bcbe-f32d-41b9-81a8-62a4cd6cd446

    //Email to the support team
    //inboundleads@doctorgenius.com, jparmenter@doctorgenius.com
    //<noreply@doctorgenius.com>
    //Doctor Genius "Newsletter Signup"
    //Email:   [EmailAddress]

    // Generate a request to the email server
    fetch("https://nodetest.dgplex.com/newsletter-signup", {
      method: "POST",
      body: stringData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      console.log("NodeTest response:", response)
      response.json().then(body => {
        this.setState({
          email: body.email,
          validationPassed: body.validationPassed,
        })
      })
    })

    //Additional testing endpoint:
    /*fetch("https://ensbiaw1h4in.x.pipedream.asnet", {
      method: "POST",
      body: stringData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      console.log("RequestBin response:", response)
      response.json().then(body => {
        console.log("requestbin body:", body)
      })
    }) */
  }

  render() {
    return (
      <div className={RowStyles.row + " " + FormStyles.newsLetter}>
        <div className="col-sm-12">
          <div className={FormStyles.newsLetterSignup}>
            <h4 className={FormStyles.newsLetterHeading}>Newsletter</h4>
            <p>
              Subscribe to our email newsletter for useful tips and valuable
              resources.
            </p>
            <form
              className={FormStyles.newsLetterForm}
              onSubmit={this.handleFormSubmit}
            >
              <input
                ref={ref => {
                  this.email = ref
                }}
                type="email"
                name="email"
                required
              />
              <button
                type="submit"
                className={FormStyles.button + " " + FormStyles.rounder}
                id="newsletter-signup"
              >
                Submit
              </button>
            </form>
            <div
              style={{ display: "none" }}
              className={FormStyles.ldsEllipsis + " lds-ellipsis"}
            >
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className="positive-response"
              style={{ display: "none", margin: "20px 10px 0" }}
            >
              <img src={checkSuccess} alt="Subscribed!" />
              <p>Subscribed!</p>
            </div>
            <div
              className="negative-response"
              style={{ display: "none", margin: "10px" }}
            >
              <img src={xFail} alt="Submission Failed" />
              <p>
                Submission <br />
                Failed
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsLetterSignUpForm

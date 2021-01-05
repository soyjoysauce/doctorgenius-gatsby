import React from "react"
import { navigate } from "gatsby"

import checkSuccess from "../img/checkSuccess.png"
import xFail from "../img/xFail.png"

import ContactFormStyles from "./contact-form.module.scss"
import RowStyles from "../components/Row.module.scss"

import $ from "jquery"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      phone: "",
      email: "",
      description: "",
      validationPassed: false,
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  focusWithoutScrolling() {
    let x = window.scrollX,
      y = window.scrollY
    $("#input-name").focus()
    window.scrollTo(x, y)
  }

  handleFormSubmit(ev) {
    // trigger ajax loading spiner
    function ajaxLoaderDisplay() {
      $(".submit-contact").hide()
      $(".lds-ellipsis").show()
    }

    function submissionSuccess() {
      setTimeout(() => $(".lds-ellipsis").hide(), 3000)
      setTimeout(() => $(".positive-response").show(), 3000)
      setTimeout(() => clearFormFields(), 3000)
      setTimeout(() => navigate("/confirmation"), 4500)
    }

    /* function submissionFail() {
      setTimeout(() => $('.lds-ellipsis').hide(), 3000)
      setTimeout(() => $('.negative-response').show(), 3000)
    } */

    function clearFormFields() {
      $('input[type="text"]').val("")
      $('input[type="email"]').val("")
      $('input[type="tel"]').val("")
      $('input[type="textarea"]').val("")
    }

    ajaxLoaderDisplay()
    submissionSuccess()

    // Prevent the button from redirecting
    ev.preventDefault()

    // Set up a new Form object
    const data = new FormData()

    //Add the user-entered data
    data.append("FullName", this.name.value)
    data.append("PhoneNumber", this.phone.value)
    data.append("EmailAddress", this.email.value)
    data.append("Description", this.description.value)

    // Add required, internal fields for our Admin connection
    data.append("Status", "New")
    data.append("AccessToken", "a803bcbe-f32d-41b9-81a8-62a4cd6cd446")
    data.append("postToSalesForce", true)
    // data.append("Description", "Form: Contact Us Form")
    data.append("LeadSource", "(New) Main Website Organic")

    //stringData holds the stringified, encoded form data
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

    // Generate a request to the email server
    fetch("https://nodetest.dgplex.com/contact-us", {
      method: "POST",
      body: stringData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(response => {
      console.log("NodeTest response:", response)
      response.json().then(body => {
        this.setState({
          name: body.name,
          phone: body.phone,
          email: body.email,
          description: body.description,
          validationPassed: body.validationPassed,
        })
      })
    })

    // Additional testing endpoint:
    /*fetch("https://en95o1efs05as.x.pipedream.net", {
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

    //Trigger form clearing upon completion of all API calls
    //clearFormFields();
  }

  render() {
    return (
      <div
        className={RowStyles.rowStyling + " " + ContactFormStyles.formWrapper}
      >
        <form
          onLoad={this.focusWithoutScrolling}
          onSubmit={this.handleFormSubmit}
          className={RowStyles.row}
        >
          <div
            className={
              ContactFormStyles.formGroup + " form-group col-sm-11 col-md-9"
            }
          >
            <label htmlFor="input-name">First and Last name</label>
            <input
              ref={ref => {
                this.name = ref
              }}
              type="text"
              className={ContactFormStyles.formControl + " form-control"}
              id="input-name"
              required
            />
          </div>
          <div
            className={
              ContactFormStyles.formGroup + " form-group col-sm-11 col-md-9"
            }
          >
            <label htmlFor="input-phone">Phone Number</label>
            <input
              ref={ref => {
                this.phone = ref
              }}
              type="tel"
              className={ContactFormStyles.formControl + " form-control"}
              id="input-phone"
              required
            />
          </div>
          <div
            className={
              ContactFormStyles.formGroup + " form-group col-sm-11 col-md-9"
            }
          >
            <label htmlFor="input-email">Email</label>
            <input
              ref={ref => {
                this.email = ref
              }}
              type="email"
              className={ContactFormStyles.formControl + " form-control"}
              id="input-email"
              required
            />
          </div>
          <div
            className={
              ContactFormStyles.formGroup + " form-group col-sm-11 col-md-9"
            }
          >
            <label htmlFor="input-name">Description</label>
            <input
              ref={ref => {
                this.description = ref
              }}
              type="textarea"
              className={ContactFormStyles.formControl + " form-control"}
              id="input-description"
              required
            />
          </div>
          <div
            className={
              ContactFormStyles.formGroup + " form-group col-sm-8 col-md-4"
            }
          >
            <button
              type="submit"
              className={
                ContactFormStyles.button +
                " " +
                ContactFormStyles.flat +
                " " +
                ContactFormStyles.submitButton +
                " btn submit-contact"
              }
            >
              Contact Us
            </button>
            <div>
              <div
                style={{ display: "none" }}
                className={ContactFormStyles.ldsEllipsis + " lds-ellipsis"}
              >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div
                className={
                  ContactFormStyles.positiveResponse + " positive-response"
                }
                style={{ display: "none", margin: "10px" }}
              >
                <img src={checkSuccess} alt="Message Sent!" />
                <p className="muted-text">Message Sent!</p>
              </div>
              <div
                className="negative-response"
                style={{ display: "none", margin: "10px" }}
              >
                <img src={xFail} alt="Message Failed" />
                <p className="muted-text">Message Failed</p>
              </div>
            </div>
          </div>

          {/*
          <FormResponse
            name={this.state.name}
            email={this.state.email}
            company={this.state.company}
            phone={this.state.phone}
          />*/}
        </form>
      </div>
    )
  }
}

export default ContactForm

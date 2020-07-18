import React from "react";
import Swal from "sweetalert2";
// import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

class EmailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "", email: "" };
  }
  // saves the user's name entered to state
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  // saves the user's email entered to state
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  // saves the user's message entered to state
  messageChange = (event) => {
    this.setState({ feedback: event.target.value });
  };

  //onSubmit of email form
  handleSubmit = (event) => {
    event.preventDefault();

    //This templateId is created in EmailJS.com
    const templateId = "innovision";

    //This is a custom method from EmailJS that takes the information
    //from the form and sends the email with the information gathered
    //and formats the email based on the templateID provided.
    this.sendFeedback(templateId, {
      message: this.state.feedback,
      name: this.state.name,
      email: this.state.email,
    });
  };

  //Custom EmailJS method
  sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };


  render() {
    return (
      <div className="email-container">
        <div className="email-wrapper">
          <h1 className="email-form-title text-center">SEND US A MESSAGE</h1>
          <form className="test-mailing" onSubmit={this.handleSubmit}>
            <br />
            <div style={{ fontSize: "1.2rem" }}>
              <div className="name-email-wrapper">
                <TextField
                  name="user_name"
                  type="text"
                  id="name"
                  onChange={this.nameChange}
                  required
                  className='name-email-inputs'
                  label="Name"
                />

                <TextField
                  name="user_email"
                  type="text"
                  onChange={this.emailChange}
                  required
                  className='name-email-inputs'
                  id="email"
                  label="Email"
                />
              </div>
              <TextField
                id="message"
                name="message"
                onChange={this.messageChange}
                placeholder="Put your message here"
                required
                className='message-input'
                label="Message"
                multiline
                rowsMax={4}
              />
            </div>
            <div className="text-center" >
            <input type="submit" value="Submit" className="btn-form" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EmailComponent;

import React, { useState } from "react";
import { Paypal } from "./paypal.component";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import "./feedback.styles.scss";

const Feedback = () => {
  const [submitted, setSubmittedState] = useState("");
  const [amount, setAmount] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedState("submitted");
    console.log("submitted...");
    // if (submitted !== "submitted") {     //uncomment to allow emails
    // 	emailjs
    // 		.sendForm(
    // 			"service_bbj10yg",
    // 			"template_ifync5l",
    // 			e.target,
    // 			"user_uLYAClKNSo75N0nWaLUmN"
    // 		)
    // 		.then(
    // 			(result) => {
    // 				console.log(result.text);
    // 			},
    // 			(error) => {
    // 				console.log(error.text);
    // 			}
    // 		);
    // }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="feedback-title">Feedback</label>
        <textarea
          className="feedback-box message"
          name="feedback"
          placeholder="Instant feedback... you will not be redirected."
        />
        <div className="send-button">
          <Button
            variant="contained"
            // color="primary"
            className="contact-submit-button"
            type="submit"
            value="Send"
          >
            Send
          </Button>
        </div>
        <input
          className="donate-box name"
          placeholder="Donate"
          pattern="[0-9]*"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <Paypal amount={amount} />
        {/* <form
					action="https://www.paypal.com/donate"
					method="post"
					target="_blank"
				>
					<input type="hidden" name="business" value="BHM6A6NVZBNC6" />
					<input type="hidden" name="currency_code" value="USD" />
				</form> */}
        {submitted && (
          <div className="success-message">
            SUCCESS<div className="sub-success-message">Talk soon!</div>
          </div>
        )}
      </form>
    </>
  );
};

export default Feedback;

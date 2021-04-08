import React, { useState } from "react";
import { Paypal } from "./paypal.component";
import emailjs from "emailjs-com";
import Button from "@material-ui/core/Button";
import "./emailjs.styles.scss";

const Feedback = () => {
    
  const [submitted, setSubmittedState] = useState("");
  const [amount, setAmount] = useState(5);

	function handleSubmit(e) {
		e.preventDefault();
		setSubmittedState("submitted");
		console.log("submitted...");
		if (submitted !== "submitted") {
			emailjs
				.sendForm(
					"service_bbj10yg",
					"template_ifync5l",
					e.target,
					"user_uLYAClKNSo75N0nWaLUmN"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	}

  return (
    <>
		<form className="contact-form" onSubmit={handleSubmit}>
			<label className="message-title">Feedback</label>
			<textarea
				className="input-box message"
				name="feedback"
				placeholder="Feedback"
			/>
			<Button
				variant="contained"
				color="primary"
				className="contact-submit-button"
				type="submit"
				value="Send"
			>
				Send
			</Button>
      <input 
        className="input-box name"
				placeholder="Donate amount"
        pattern="[0-9]*"
        type="number"
        onChange={e => setAmount(e.target.value)}
      />
		  <Paypal amount={amount} />
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

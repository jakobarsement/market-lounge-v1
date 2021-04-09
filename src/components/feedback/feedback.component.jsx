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
					onChange={(e) => setAmount(e.target.value)}
				/>
				<Paypal amount={amount} />
				<form
					action="https://www.paypal.com/donate"
					method="post"
					target="_blank"
				>
					<input type="hidden" name="business" value="BHM6A6NVZBNC6" />
					<input type="hidden" name="currency_code" value="USD" />
					<input
						type="image"
						src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
						border="0"
						name="submit"
						title="PayPal - The safer, easier way to pay online!"
						alt="Donate with PayPal button"
					/>
					<img
						alt=""
						border="0"
						src="https://www.paypal.com/en_CA/i/scr/pixel.gif"
						width="1"
						height="1"
					/>
				</form>
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

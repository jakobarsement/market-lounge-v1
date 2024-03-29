import { useState } from 'react'
// import { Paypal } from "./paypal.component";
import emailjs from 'emailjs-com'
import Button from '@material-ui/core/Button'
import './FeedbackForm.scss'

const FeedbackForm = () => {
  const [submitted, setSubmittedState] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    setSubmittedState('submitted')
    if (submitted !== 'submitted') {
      emailjs.sendForm('service_nyfzzuc', 'template_gggnm5d', e.target, 'user_uLYAClKNSo75N0nWaLUmN').then(
        (result) => {
          console.info('feedback submission success: ', result.text)
        },
        (error) => {
          console.error('feedback submission error: ', error.text)
        }
      )
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="feedback-title">Feedback</h3>
        <textarea className="feedback-box message" name="feedback" placeholder="Help us help you." />
        <div className="send-button">
          <Button variant="contained" className="contact-submit-button" type="submit" value="Send">
            Send
          </Button>
        </div>
        {/* <input
					className="donate-box name"
					placeholder="Donate"
					pattern="[0-9]*"
					type="number"
					onChange={(e) => setAmount(e.target.value)}
				/>
				<Paypal amount={amount} /> */}
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
            <div className="sub-success-message">Success.</div>
          </div>
        )}
      </form>
    </>
  )
}

export default FeedbackForm

import { useState } from "react";
import Button from "@material-ui/core/Button";
import { API } from "aws-amplify";
import "./email-form.styles.scss";

const EmailForm = () => {
  //begin amplify
  const [userEmail, setUserEmail] = useState("bing@bong.com");
  const [submitted, setSubmittedState] = useState(false);

  function handleUserEmailInputChange(e) {
    setUserEmail(e.target.value);
  }

  function submitEmailToMailchimpApi(e) {
    e.preventDefault();
    if (submitted === false) {
      const customArguments = {
        body: { email: userEmail },
        headers: {}, //optional
      };

      API.post("mailchimpApi", "/mailchimpApi", customArguments)
        .then((response) => {
          console.log(response);
          setSubmittedState(true);
        })
        .catch((error) => {
          console.error(error.response);
        });
    }
  }
  return (
    <form className="email-form" onSubmit={submitEmailToMailchimpApi}>
      <div className="email-input">
        <input onChange={handleUserEmailInputChange} />
        <Button variant="contained" className="" type="submit">
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;

import { useState, useEffect } from "react";
import { API } from "aws-amplify";
import Button from "@material-ui/core/Button";
import "./email-form.styles.scss";

const EmailForm = () => {
  //begin amplify
  const [userEmail, setUserEmail] = useState("bing@bong.com");
  const [apiMsg, setApiMsg] = useState("xxx");
  const [submitted, setSubmittedState] = useState(false);

  function handleUserEmailInputChange(e) {
    setUserEmail(e.target.value);
    console.log(userEmail);
  }

  function submitEmailToMailchimpApi(e) {
    e.preventDefault();
    if (submitted === false) {
      console.log(userEmail);

      const customArguments = {
        body: { email: userEmail },
        headers: {}, //optional
      };

      API.post("mailchimpApi", "/mailchimpApi", customArguments)
        .then((response) => {
          setApiMsg(response.success);
          console.log(response);
          setSubmittedState(true);
        })
        .catch((error) => {
          console.error(error.response);
        });
    }
  }
  return (
    <form className="contact-form" onSubmit={submitEmailToMailchimpApi}>
      <div className="email-input">
        <h1 style={{ backgroundColor: "lightblue" }}>{apiMsg}</h1>
        <input onChange={handleUserEmailInputChange} />
        <Button variant="contained" className="" type="submit" value="Send">
          Send
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;

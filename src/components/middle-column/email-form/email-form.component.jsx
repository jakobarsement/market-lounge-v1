import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./email-form.styles.scss";

const EmailForm = () => {
  const [userEmail, setUserEmail] = useState("");

  const handleEmailChange = (email) => {
    setUserEmail(email);
  };

  return (
    <div className="email-form">
      <div className="title">Receive updates</div>
      <FontAwesomeIcon
        className="fa-arrow"
        icon={faAngleDoubleRight}
      ></FontAwesomeIcon>
      <input
        placeholder="youremail@example.com"
        value={userEmail}
        onChange={({ target }) => handleEmailChange(target.value)}
      />
    </div>
  );
};

export default EmailForm;

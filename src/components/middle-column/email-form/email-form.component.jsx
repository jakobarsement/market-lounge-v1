import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import "./email-form.styles.scss";

const EmailForm = () => {
  return (
    <div className="email-form">
      <div className="title">Receive updates</div>
      <FontAwesomeIcon
        className="fa-arrow"
        icon={faAngleDoubleRight}
      ></FontAwesomeIcon>
      <input placeholder="youremail@example.com" />
    </div>
  );
};

export default EmailForm;

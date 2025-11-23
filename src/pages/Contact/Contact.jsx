import { useState, useContext } from "react";
import { send } from "@emailjs/browser";
import { Helmet } from "react-helmet";
import { strings } from "../../locales/LocalizedStrings";
import { LanguageContext } from "../../context/Language";
import { Send } from "lucide-react";
import toast from "react-hot-toast";
import "./Contact.css";

const emailRegex = new RegExp(
  /^([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/,
  "gm"
);

const Contact = () => {
  // Consume context to trigger re-render on language change
  useContext(LanguageContext);
  
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    message: "",
    sender: "",
  });

  const sendMail = async (e) => {
    e.preventDefault();
    let error = false;
    if (!name) {
      error = true;
      setErrors((prev) => ({ ...prev, name: strings.contact.errors.name }));
    }
    if (message.length < 20) {
      error = true;
      setErrors((prev) => ({
        ...prev,
        message: strings.contact.errors.message,
      }));
    }
    if (!sender.match(emailRegex)) {
      error = true;
      setErrors((prev) => ({
        ...prev,
        sender: strings.contact.errors.email,
      }));
    }
    if (!error) {
      setLoading(true);
      try {
        const response = await send(
          "service_29smvu8",
          "template_kcrbnch",
          {
            from_name: name,
            message,
            reply_to: sender,
          },
          "9S5J3IM99OnP01NLK"
        );
        if (response.status === 200) {
          toast.success(strings.contact.success);
          setName("");
          setMessage("");
          setSender("");
        } else {
          toast.error(strings.contact.errors.form);
        }
      } catch (err) {
        console.error(err);
        toast.error(strings.contact.errors.form);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>{strings.meta.contact}</title>
      </Helmet>
      
      <h1>{strings.navbar.contact}</h1>
      <p className="contact-headline">{strings.contact.headline}</p>

      <form className="contact-form" onSubmit={sendMail}>
        <div className="form-group">
          <label htmlFor="name">{strings.contact.nameLabel}</label>
          <input
            id="name"
            type="text"
            placeholder={strings.contact.namePH}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: "" }));
            }}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">{strings.contact.emailLabel}</label>
          <input
            id="email"
            type="email"
            placeholder={strings.contact.emailPH}
            value={sender}
            onChange={(e) => {
              setSender(e.target.value);
              setErrors((prev) => ({ ...prev, sender: "" }));
            }}
            className={errors.sender ? "error" : ""}
          />
          {errors.sender && <span className="error-message">{errors.sender}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">{strings.contact.messageLabel}</label>
          <textarea
            id="message"
            placeholder={strings.contact.messagePH}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrors((prev) => ({ ...prev, message: "" }));
            }}
            className={errors.message ? "error" : ""}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={loading}
        >
          <Send size={20} />
          {loading ? "Sending..." : strings.contact.send}
        </button>
      </form>

      <p className="linkedin-contact">
        {strings.formatString(
          strings.contact.contactLinkedin,
          <a
            href="https://linkedin.com/in/carlos-lopez-dev"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        )}
      </p>
    </div>
  );
};

export default Contact;

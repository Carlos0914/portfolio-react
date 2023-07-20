import { useState } from "react";
import MainContainer from "../components/MainContainer";
import { send } from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Send } from "@mui/icons-material";
import { Helmet } from "react-helmet";
import { strings } from "../locales/LocalizedStrings";

const FieldsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const emailRegex = new RegExp(
  /^([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/,
  "gm"
);

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    message: "",
    sender: "",
  });

  const sendMail = async () => {
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
        alert(strings.contact.success);
        setName("");
        setMessage("");
        setSender("");
      } else {
        alert(strings.contact.errors.form);
      }
    }
  };

  return (
    <MainContainer>
      <Helmet>
        <title>{strings.meta.contact}</title>
      </Helmet>
      <h2>{strings.navbar.contact}</h2>
      <p>{strings.contact.headline}</p>
      <FieldsContainer>
        <TextField
          fullWidth
          required
          name="nameinput"
          error={Boolean(errors.name)}
          helperText={errors.name}
          InputLabelProps={{ shrink: true }}
          placeholder={strings.contact.namePH}
          value={name}
          label={strings.contact.nameLabel}
          onChange={(e) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: "" }));
          }}
        />
        <TextField
          fullWidth
          required
          error={Boolean(errors.sender)}
          helperText={errors.sender}
          value={sender}
          placeholder={strings.contact.emailPH}
          InputLabelProps={{ shrink: true }}
          label={strings.contact.emailLabel}
          onChange={(e) => {
            setSender(e.target.value);
            setErrors((prev) => ({ ...prev, sender: "" }));
          }}
        />
        <TextField
          fullWidth
          required
          minRows={5}
          error={Boolean(errors.message)}
          helperText={errors.message}
          multiline
          value={message}
          label={strings.contact.messageLabel}
          placeholder={strings.contact.messagePH}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            setMessage(e.target.value);
            setErrors((prev) => ({ ...prev, message: "" }));
          }}
        />
        <Button
          fullWidth
          style={
            !Object.values(errors).some(Boolean)
              ? { backgroundColor: "#535bf2" }
              : {}
          }
          onClick={sendMail}
          disabled={Object.values(errors).some(Boolean)}
          variant="contained"
        >
          <Send style={{ marginRight: 16 }} />
          {strings.contact.send}
        </Button>
      </FieldsContainer>
      <p>
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
    </MainContainer>
  );
};

export default Contact;

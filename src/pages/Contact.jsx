import { useState } from "react";
import MainContainer from "../components/MainContainer";
import { send } from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Send } from "@mui/icons-material";

const sendMail = (name, message, sender) => {
  send(
    "service_29smvu8",
    "template_kcrbnch",
    {
      from_name: name,
      message,
      reply_to: sender,
    },
    "9S5J3IM99OnP01NLK"
  );
};

const FieldsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");

  return (
    <MainContainer>
      <h2>Contact me</h2>
      <p>
        If you have any question or want to discuss any idea, you can send me a message using the form below
      </p>
      <FieldsContainer>
        <TextField
          fullWidth
          name="nameinput"
          InputLabelProps={{ shrink: true }}
          placeholder="Ex. John Doe"
          value={name}
          label="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          value={sender}
          placeholder="Ex. your@mail.com"
          InputLabelProps={{ shrink: true }}
          label="Your email"
          onChange={(e) => setSender(e.target.value)}
        />
        <TextField
          fullWidth
          multiline
          value={message}
          label="Message"
          placeholder="Your message"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          fullWidth
          style={{backgroundColor: "#535bf2"}}
          onClick={() => sendMail(name, message, sender)}
          variant="contained"
        >
          <Send style={{marginRight: 16}}/>
          Send
        </Button>
      </FieldsContainer>
      <p>Alternatively, you can contact me via <a href="https://linkedin.com/in/carlos-lopez-dev" target="_blank" rel="noreferrer">Linkedin</a></p>
    </MainContainer>
  );
};

export default Contact;

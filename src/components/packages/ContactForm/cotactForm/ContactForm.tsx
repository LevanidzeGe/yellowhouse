"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService"; // npm install --save @emailjs/browser
import styles from "./ContactForm.module.css";

type ContactFormProps = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  quantity: string;
  message: string;
  button: string;
  send: string;
  thankYou: string;
  comfirmation: string; // (typo?) consider renaming to confirmation
};

const ContactForm: React.FC<ContactFormProps> = ({
  name,
  email,
  phone,
  date,
  time,
  quantity,
  message,
  button,
  send,
  thankYou,
  comfirmation,
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleErrors = () => {
    setNameError(!nameValue);
    setEmailError(!emailValue || !emailValue.includes("@"));
    setMessageError(!messageValue);
  };

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const onSubmit = form.current
    ? sendEmail(form.current, handleEmailSent)
    : () => {};

  return (
    <div className="container">
      <div className={styles.contactWrapper}>
        <div className={styles.rightSide}>
          <form
            className={`${styles.form} ${emailSent ? styles.none : ""}`}
            ref={form}
            onSubmit={onSubmit}
          >
            <div className={styles.smallInputs}>
              <div className={styles.inputDiv}>
                <input
                  className={`${styles.input} ${styles.miniInput} ${
                    nameError ? styles.inputRed : ""
                  }`}
                  type="text"
                  name="user_name"
                  placeholder={name}
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </div>

              <div className={styles.inputDiv}>
                <input
                  className={`${styles.input} ${styles.miniInput} ${
                    emailError ? `${styles.inputRed} ${styles.emailInput}` : ""
                  }`}
                  type="email"
                  name="user_email"
                  placeholder={email}
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.messageDiv}>
              <textarea
                className={`${styles.textArea} ${styles.input} ${
                  messageError ? styles.inputRed : ""
                }`}
                name="message"
                placeholder={message}
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
              />
            </div>

            <button
              type={
                nameValue && messageValue && emailValue.includes("@")
                  ? "submit"
                  : "button"
              }
              className={`button ${styles.buttonSend} ${
                !buttonDisable ? "button" : "buttonDisabled"
              }`}
              onClick={
                !nameValue || !messageValue || !emailValue.includes("@")
                  ? handleErrors
                  : () => setButtonDisable(true)
              }
            >
              {button}
            </button>
          </form>

          <div className={emailSent ? styles.formSent : styles.hide}>
            <h6 className="header4">{thankYou}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

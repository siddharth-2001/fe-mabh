import InfoBox from "../InfoBox/InfoBox";
import PageSection from "../PageSection/PageSection";
import styles from "./ContactUs.module.scss";
import voltageImg from "../../assets/high-voltage.png";
import bulletImg from "../../assets/bullet.svg";
import BlobContainer from "../BlobContainer/BlobContainer";
import jumpArrowPng from "../../assets/jump-arrow.png";
import GlassContainer from "../GlassContainer/GlassContainer";
import emailjs from "@emailjs/browser";
import { useCallback, useEffect, useState } from "react";

function BenefitsList() {
  return (
    <>
      <div className={styles.benefitList}>
        <div className={styles.benefitItem}>
          <img src={bulletImg} alt="" />
          <span className={styles.benefitText}>24/7 Full Time Support</span>
        </div>
        <div className={styles.benefitItem}>
          <img src={bulletImg} alt="" />
          <span className={styles.benefitText}>Available Worldwide </span>
        </div>
      </div>
    </>
  );
}

interface IInputProps {
  title: string;
  inputName: string;
  handleOnChange: (inputName: string, value: string) => void;
  isTextArea?: boolean;
}

function Input({ title, inputName, handleOnChange, isTextArea }: IInputProps) {
  return (
    <div className={styles.inputContainer}>
      <span className={styles.inputLabel}>{title}</span>
      {isTextArea ? (
        <textarea
          className={styles.inputField}
          rows={5}
          onChange={(e) => {
            handleOnChange(inputName, e.currentTarget.value);
          }}
        />
      ) : (
        <input
          className={styles.inputField}
          type="text"
          onChange={(e) => {
            handleOnChange(inputName, e.currentTarget.value);
          }}
        />
      )}
    </div>
  );
}

export default function ContactUs() {
  function initializeEmailJS() {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      // Do not allow headless browsers
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleFormChange(inputName: string, value: string) {
    setFormData((prevData) => ({
      ...prevData,
      [inputName]: value,
    }));
  }

  const sendEmail = useCallback(
    (name: string, email: string, phone: string, message: string) => {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          name: name,
          email: email,
          phone: phone,
          message: message,
        }
      );

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_MESSAGE_TEMPLATE_ID,
        {
          name: name,
          email: email,
          phone: phone,
          message: message,
        }
      );
    },
    []
  );

  useEffect(() => {
    // Initialize EmailJS SDK
    initializeEmailJS();
  }, []);

  return (
    <PageSection>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <InfoBox icon={voltageImg} text="Contact Now" />
          <div className={styles.title}>Contact Us!</div>
          <span className={styles.subtext}>
            Let’s create something amazing together! Reach out I’d love to hear
            about your project and ideas.
          </span>
          <div className={styles.seperator}></div>
          <BenefitsList />
        </div>
        <div className={styles.formContainer}>
          <BlobContainer>
            <GlassContainer>
              <div className={styles.form}>
                <Input
                  title="Name"
                  inputName="name"
                  handleOnChange={handleFormChange}
                />
                <Input
                  title="Email"
                  inputName="email"
                  handleOnChange={handleFormChange}
                />
                <Input
                  title="Contact Number"
                  inputName="phone"
                  handleOnChange={handleFormChange}
                />
                <Input
                  title="Message"
                  isTextArea={true}
                  inputName="message"
                  handleOnChange={handleFormChange}
                />
                <div
                  className={styles.submitButton}
                  onClick={() => {
                    sendEmail(
                      formData.name,
                      formData.email,
                      formData.phone,
                      formData.message
                    );
                  }}
                >
                  Send Message <img src={jumpArrowPng} alt="" />
                </div>
              </div>
            </GlassContainer>
          </BlobContainer>
        </div>
      </div>
    </PageSection>
  );
}

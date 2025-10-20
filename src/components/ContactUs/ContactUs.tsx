import InfoBox from "../InfoBox/InfoBox";
import PageSection from "../PageSection/PageSection";
import styles from "./ContactUs.module.scss";
import voltageImg from "../../assets/high-voltage.png";
import bulletImg from "../../assets/bullet.svg";
import BlobContainer from "../BlobContainer/BlobContainer";
import jumpArrowPng from "../../assets/jump-arrow.png";
import GlassContainer from "../GlassContainer/GlassContainer";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

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
        <textarea className={styles.inputField} rows={5} onChange={(e) => {handleOnChange(inputName, e.currentTarget.value)}}/>
      ) : (
        <input className={styles.inputField} type="text" onChange={(e) => {handleOnChange(inputName, e.currentTarget.value)}} />
      )}
    </div>
  );
}

export default function ContactUs() {
  function initializeEmailJS() {
    emailjs.init({
      publicKey: "7HyrLNkQgFEmCzW4e",
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

  function sendEmail() {
    emailjs.send("service_dewwux7", "template_aedwimo", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    emailjs.send("service_dewwux7", "template_y1ifema", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    })
  }

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
                <Input title="Name" inputName="name" handleOnChange={handleFormChange} />
                <Input title="Email" inputName="email" handleOnChange={handleFormChange}/>
                <Input title="Contact Number" inputName="phone" handleOnChange={handleFormChange}/>
                <Input title="Message" isTextArea={true} inputName="message" handleOnChange={handleFormChange}/>
                <div className={styles.submitButton} onClick={sendEmail}>
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

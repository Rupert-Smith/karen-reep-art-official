import React from "react";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import SectionTitleBox from "../UI/SectionTitleBox/SectionTitleBox";
import "../../assets/styles/css/main.css";

function Contact(props) {
  return (
    <section id="contact">
      <SectionTitleBox>
        <SectionTitle className="contact-title">Message Karen</SectionTitle>
      </SectionTitleBox>
      <p className="contact-info">
        I am based in Ampthill, Bedfordshire. Feel free to contact me via the
        form below, or alternatively ring me at <strong>07944 872769</strong>
      </p>
      <form className="contact-form-container">
        <div className="contact-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required=""
          ></input>

          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required=""
          ></input>

          <label>Photo (optional)</label>
          <input
            type="file"
            name="myFile"
            accept="image/png, image/jpeg"
          ></input>

          <label>Message</label>
          <textarea name="message" placeholder="Your message"></textarea>

          <label></label>
          <input type="submit" value="Send"></input>
        </div>
      </form>
    </section>
  );
}

export default Contact;

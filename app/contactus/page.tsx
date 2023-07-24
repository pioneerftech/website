import React from "react";
import "./contactus.scss";
import PageSaperator from "@pageSaperator";
import Link from "next/link";

function Contactus() {
  function AiOutlineHome() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
      >
        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
      </svg>
    );
  }

  function AiOutlinePhone() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
      >
        <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
      </svg>
    );
  }

  function AiOutlineMail() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
      >
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
      </svg>
    );
  }

  function AiOutlineSend() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
      >
        <defs />
        <path d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-0.9 3.7-0.5 7.6 1.2 10.9 3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1 3.9-8 0.7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6 295.2-101.3c2.3-0.8 4.2-2.6 5-5 1.4-4.2-0.8-8.7-5-10.2L221.1 403 171 198.2l628 314.9-628.2 313.2z" />
      </svg>
    );
  }

  return (
    <div className="contactus-container">
      <div className="image-container">
        <div className="hero-content f-d-col d-f-c">
          <div className="subheading">
            On Single Click Get In Touch With Us.
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="coutactus-form-container">
        <div className="contactus-form-sub-container">
          <div className="contactus-details-wrap">
            <div className="subheading">Contact Us</div>
            <div className="heading">Get In Touch With Us</div>
            <div className="content">
              We welcome your interest in our work! Please feel free to contact
              us at Pioneer to learn more about our programs and how you can
              support our mission.
            </div>
          </div>
          <div className="contactus-info-wrap">
            <a
              className="nav-item"
              href="https://goo.gl/maps/UtSncS8Ezh3JFnfc9"
              target="_blank"
            >
              <div className="contactus-info-row">
                <div className="contactus-info-icon-wrap">
                  <div className="contactus-info-icon">
                    <AiOutlineHome />
                  </div>
                </div>
                <div className="contactus-info-content">
                  <div className="contactus-info-tag">Our Location</div>
                  <div className="contactus-info-detail">
                    T-10, Dhruta Capital, 635 Budhwar peth, Pune - 411 002.
                  </div>
                </div>
              </div>
            </a>
            <a className="nav-item" href="tel:+91 7070191975" target="_self">
              <div className="contactus-info-row">
                <div className="contactus-info-icon-wrap">
                  <div className="contactus-info-icon">
                    <AiOutlinePhone />
                  </div>
                </div>
                <div className="contactus-info-content">
                  <div className="contactus-info-tag">Phone Number</div>
                  <div className="contactus-info-detail">+91 7070191975</div>
                </div>
              </div>
            </a>
            <a
              className="nav-item"
              href="mailto:pioneerftech@gmail.com"
              target="_self"
            >
              <div className="contactus-info-row">
                <div className="contactus-info-icon-wrap">
                  <div className="contactus-info-icon">
                    <AiOutlineMail />
                  </div>
                </div>
                <div className="contactus-info-content">
                  <div className="contactus-info-tag">Email Address</div>
                  <div className="contactus-info-detail">
                    pioneerftech@gmail.com
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="contactus-form-sub-container">
          <div className="contactus-form-wrap">
            <div className="contactus-form">
              <form>
                <p className="name">
                  <input
                    name="name"
                    type="text"
                    className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                    placeholder="Name"
                    id="name"
                  />
                </p>

                <p className="Number">
                  <input
                    name="Number"
                    type="text"
                    className="validate[required,custom[Number]] feedback-input"
                    id="Number"
                    placeholder="Number"
                  />
                </p>
                <p className="email">
                  <input
                    name="email"
                    type="text"
                    className="validate[required,custom[email]] feedback-input"
                    id="email"
                    placeholder="Email"
                  />
                </p>

                <p className="text">
                  <textarea
                    name="text"
                    className="validate[required,length[6,300]] feedback-input"
                    id="comment"
                    placeholder="Comment"
                  ></textarea>
                </p>
                <div className="submit-btn">
                  <button className="btn d-f-c">
                    Send
                    <AiOutlineSend />
                    <div className="ease"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="span-top-container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="span-bottom-container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contactus;

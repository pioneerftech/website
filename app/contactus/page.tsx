import React from "react";
import "./contactus.scss";
import PageSaperator from "@pageSaperator";

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
          <div className="heading">Contact Us</div>
          <div className="subheading">
            On Single Click Get In Touch With Us.
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">
          We’re looking for unicorns. Are you the one?
        </div>
        <div className="heading">Career</div>
        <div className="content">
          At <span> Pioneer</span>, we believe in creating a positive impact in
          the world by supporting important causes and promoting social change.
          If you're passionate about making a difference and want to work with a
          team of dedicated individuals who share your values, we encourage you
          to explore our career opportunities. As an NGO firm, we offer a
          variety of roles across different departments, including program
          management, fundraising, marketing, and advocacy. We value diversity
          and inclusivity, and welcome applicants from all backgrounds who share
          our commitment to social justice and equality. In addition to
          competitive salaries and benefits, we offer opportunities for
          professional development, networking, and collaboration with other
          organizations and experts in the field. Our team is driven,
          passionate, and always striving to make a meaningful difference in the
          world. If you're interested in joining our team, please visit our
          careers page for current openings and instructions on how to apply. We
          look forward to hearing from you and exploring the possibility of
          working together towards a better world.
        </div>
      </div>
      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">Effective Date : 24-02-2023</div>
        <div className="heading">Privacy Policy for Pioneer</div>
        <div className="content">
          Thank you for visiting our website and for your interest in the work
          of <span> Pioneer</span>. We are committed to protecting your privacy
          and this privacy policy sets out how we collect, use, and protect any
          personal information you provide to us. <br />
          <br />
          <div className="privacy-content-container">
            <span> 1. Information we collect</span>
            We collect information that you provide to us when you visit our
            website, make a donation, or sign up to receive newsletters or other
            information from us. This information may include your name, email
            address, mailing address, and phone number. <br />
            <br />
            <span> 2.Use of information </span>
            We use the information you provide to us to respond to your
            inquiries, process your donations, and provide you with information
            about our programs, events, and other activities. We may also use
            your information to improve our website and communications. <br />
            <br />
            <span>3. Protection of </span>
            information We are committed to protecting your information and take
            reasonable steps to ensure that it is secure. We use secure servers
            and encryption technology to protect your information from
            unauthorized access or disclosure. <br />
            <br />
            <span> 4. Sharing of information </span>
            We do not sell or rent your information to third parties. However,
            we may share your information with trusted partners who assist us in
            our work, such as payment processors or email service providers. We
            require these partners to maintain the confidentiality of your
            information and to use it only for the purposes for which we have
            provided it. <br />
            <br />
            <span> 5. Third-party links</span>
            Our website may contain links to third-party websites that are not
            under our control. We are not responsible for the privacy practices
            or content of these websites. <br />
            <br />
            <span> 6. Cookies</span>
            We may use cookies on our website to improve your experience and to
            track usage. You can choose to accept or decline cookies. Most web
            browsers automatically accept cookies, but you can usually modify
            your browser setting to decline cookies if you prefer. <br />
            <br />
            <span> 7. Your rights</span>
            You have the right to access, modify, or delete the personal
            information we hold about you. If you would like to do so, please
            contact us using the information provided below. <br />
            <br />
            <span> 8.Changes to this policy</span>
            We may update this privacy policy from time to time. Any changes
            will be posted on our website and will take effect immediately upon
            posting. <br />
            <br />
            <span> 9.Contact us</span>
            If you have any questions or concerns about this privacy policy,
            please contact us at GET IN TOUCH. <br />
            <br />
          </div>
          <span>
            Thank you for your interest in our work and for trusting us with
            your personal information.
          </span>
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
            <div className="contactus-info-row">
              <div className="contactus-info-icon-wrap">
                <div className="contactus-info-icon">
                  <AiOutlineHome />
                </div>
              </div>
              <div className="contactus-info-content">
                <div className="contactus-info-tag">Our Location</div>
                <div className="contactus-info-detail">
                  Pune, Pune. Maharashtra
                </div>
              </div>
            </div>
            <div className="contactus-info-row">
              <div className="contactus-info-icon-wrap">
                <div className="contactus-info-icon">
                  <AiOutlinePhone />
                </div>
              </div>
              <div className="contactus-info-content">
                <div className="contactus-info-tag">Phone Number</div>
                <div className="contactus-info-detail">9405829407</div>
              </div>
            </div>
            <div className="contactus-info-row">
              <div className="contactus-info-icon-wrap">
                <div className="contactus-info-icon">
                  <AiOutlineMail />
                </div>
              </div>
              <div className="contactus-info-content">
                <div className="contactus-info-tag">Email Address</div>
                <div className="contactus-info-detail">pioneer@gmail.com</div>
              </div>
            </div>
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

                <div className="submit" id="button-blue">
                  Send
                  <AiOutlineSend />
                  <div className="ease"></div>
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

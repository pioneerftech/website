import React from "react";
import "./footer.scss";
import Image from "next/image";
import LOGO from "../../public/footer/logo.png";

function footer() {
  function FaFacebook() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
      </svg>
    );
  }

  function FaInstagram() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
      >
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
      </svg>
    );
  }

  function FaTwitter() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
      </svg>
    );
  }

  function FaLinkedin() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    );
  }

  function GrMail() {
    return (
      <svg
        stroke="white"
        fill="white"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <path
          fillRule="evenodd"
          d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
        />
      </svg>
    );
  }

  function ImPhone() {
    return (
      <svg
        stroke="white"
        fill="white"
        strokeWidth={0}
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
      >
        <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z" />
      </svg>
    );
  }

  function AiFillHome() {
    return (
      <svg
        stroke="white"
        fill="white"
        strokeWidth={0}
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
      >
        <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
      </svg>
    );
  }

  return (
    <div className="footer-container">
      <div className="footer-main-container" id="contact">
        <div className="footer-second-container">
          <div className="footer-content-container">
            <div className="footer-about-tag">About</div>
            <div className="footer-content">
              <div className="footer-content-row">About Us</div>
              <div className="footer-content-row">Events</div>
              <div className="footer-content-row">Blogs</div>
              <div className="footer-content-row">Our Approach</div>
              <div className="footer-content-row">Our Mission</div>
            </div>
          </div>
        </div>
        <div className="footer-third-container">
          <div className="footer-content-container">
            <div className="footer-content-tag">Contact Us</div>
            <div className="footer-content">
              <div className="contact-container">
                <div className="contact-sub-container1">
                  <div className="social-media-icon">
                    <ImPhone />
                  </div>
                  <div className="social-media-icon">
                    <AiFillHome />
                  </div>
                  <div className="social-media-icon">
                    <GrMail />
                  </div>
                </div>
                <div className="contact-sub-container2">
                  <div className="contact-row">
                    <div className="table-contact-data">7276303453</div>
                  </div>
                  <div className="contact-row">
                    <div className="table-contact-data">
                      Office No.35, C Wing, KK Market, Bibwewadi. Pune-411043.
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="table-contact-data">
                      <a href="mailto:skyline@gmail.com">
                        skyline.enterprises@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-first-container">
          <div className="footer-row">
            <div className="company-logo"></div>
            <div className="title-container">
              <div className="company-title">
                <Image src={LOGO} alt="Pioneer foundation" />
              </div>
              {/* <div className="company-sub-title">enterprises</div> */}
            </div>
          </div>
          <div className="footer-row">
            <div className="company-description">
              Conubia at torquent vivamus bibendum semper nibh.
            </div>
          </div>
          <div className="footer-row">
            <div className="social-icon-container">
              <div className="social-icon ">
                <FaFacebook />
              </div>
              <div className="social-icon ">
                <FaInstagram />
              </div>
              <div className="social-icon ">
                <FaTwitter />
              </div>
              <div className="social-icon ">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
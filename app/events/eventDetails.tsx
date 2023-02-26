import React from "react";
import "./eventDetails.scss";
import Image from "next/image";
import Eventimg1 from "../../public/event/event1.jpg";

function EventDetails({ eventId, setActiveEvent }: any) {
  function BiCalendar() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <path d="M7 11H9V13H7zM7 15H9V17H7zM11 11H13V13H11zM11 15H13V17H11zM15 11H17V13H15zM15 15H17V17H15z" />
        <path d="M5,22h14c1.103,0,2-0.897,2-2V8V6c0-1.103-0.897-2-2-2h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12 C3,21.103,3.897,22,5,22z M19,8l0.001,12H5V8H19z" />
      </svg>
    );
  }

  function BiTime() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
        <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
      </svg>
    );
  }

  function GrLocation() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <path
          fill="none"
          stroke="white"
          strokeWidth={2}
          d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
        />
      </svg>
    );
  }

  return (
    <div className={`events-details-wrapper ${eventId != 0 ? "active" : ""}`}>
      <div className="event-details">
        <div
          className="close-icon d-f-c hover"
          onClick={() => setActiveEvent(0)}
        >
          X
        </div>
        <div className="event-details-sub-container">
          <div className="event-image-container">
            <Image src={Eventimg1} alt="" />
          </div>
        </div>
        <div className="event-details-sub-container">
          <div className="hero-content f-d-col d-f-c">
            <div className="heading">
              A Small Glimpse of How Old Age Homes are changing to Better
            </div>
            <div className="subheading">
              Old age homes are transforming into vibrant communities where
              seniors can thrive. With a focus on wellness, social engagement,
              and personalized care, these facilities are redefining what it
              means to age gracefully.
            </div>
          </div>
          <div className="event-detail-list-wrap">
            <div className="event-detail-list-row">
              <div className="event-detail-icon-wrap">
                <BiCalendar />
              </div>
              <div className="event-detail-content">
                06 March 2023 - 08 March 2023
              </div>
            </div>
            <div className="event-detail-list-row">
              <div className="event-detail-icon-wrap">
                <BiTime />
              </div>
              <div className="event-detail-content">09:00 am to 03:00 pm</div>
            </div>
            <div className="event-detail-list-row">
              <div className="event-detail-icon-wrap">
                <GrLocation />
              </div>
              <div className="event-detail-content">
                Seva Mahatirth Badi, Udaipur
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

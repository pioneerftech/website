import React from "react";
import "./eventDetails.scss";
import Event1 from "./event1";
import Event2 from "./event2";
import Event3 from "./event3";
import Event4 from "./event4";
import Event5 from "./event5";
import Event6 from "./event6";
import Event7 from "./event7";
import Event8 from "./event8";
import Event9 from "./event9";
import Event10 from "./event10";
import Event11 from "./event11";
import Event12 from "./event12";
import Event13 from "./event13";
import Event14 from "./event14";

function EventDetails({ eventId, setActiveEvent }: any) {
  function IoMdClose(props: any) {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" />
      </svg>
    );
  }

  return (
    <div className={`events-details-wrapper ${eventId != 0 ? "active" : ""}`}>
      <div className="event-details">
        {eventId != 0 && (
          <div
            className="close-icon d-f-c hover"
            onClick={() => setActiveEvent(0)}
          >
            <IoMdClose />
          </div>
        )}
        {eventId == 1 && <Event1 />}
        {eventId == 2 && <Event2 />}
        {eventId == 3 && <Event3 />}
        {eventId == 4 && <Event4 />}
        {eventId == 5 && <Event5 />}
        {eventId == 6 && <Event6 />}
        {eventId == 7 && <Event7 />}
        {eventId == 8 && <Event8 />}
        {eventId == 9 && <Event9 />}
        {eventId == 10 && <Event10 />}
        {eventId == 11 && <Event11 />}
        {eventId == 12 && <Event12 />}
        {eventId == 13 && <Event13 />}
        {eventId == 14 && <Event14 />}
      </div>
    </div>
  );
}

export default EventDetails;

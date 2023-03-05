"use client";
import React, { useState } from "react";
import "./events.scss";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import Eventimg1 from "/public/event/Eventimg1.jpg";
import Eventimg2 from "/public/event/Eventimg2.jpg";
import Eventimg3 from "/public/event/Eventimg3.jpg";
import Eventimg4 from "/public/event/Eventimg4.jpg";
import Eventimg5 from "/public/event/Eventimg5.jpg";
import Eventimg6 from "/public/event/Eventimg6.jpg";
import Eventimg7 from "/public/event/Eventimg7.jpg";
import EventDetails from "./eventDetails";

function Events() {
  const [activeEvent, setActiveEvent] = useState(0);
  function BiMessageRoundedDetail() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <path d="M12,2C6.486,2,2,5.589,2,10c0,2.908,1.898,5.515,5,6.934V22l5.34-4.005C17.697,17.852,22,14.32,22,10 C22,5.589,17.514,2,12,2z M12,16h-0.333L9,18v-2.417l-0.641-0.247C5.67,14.301,4,12.256,4,10c0-3.309,3.589-6,8-6s8,2.691,8,6 S16.411,16,12,16z" />
        <path d="M7 7H17V9H7zM7 11H14V13H7z" />
      </svg>
    );
  }

  return (
    <div className="events-container">
      <div className="image-container">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">Events</div>
          <div className="subheading">
            We Are Create Multiple Event Regarding Old Age Home And Chhild
            Education.
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="blog-card-container">
        <div className="blog-card hover" onClick={() => setActiveEvent(7)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg7} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag"></div>
              <div className="image-tag">महाआरोग्य शिबीर</div>
              <div className="image-description">Are Changing To Better</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>12/03/2023</span>
              Event Time - <span>10am to 5pm</span>
            </div>
            <div className="blog-content-tagline">
              पायोनियर एज्युकेशन अँड रिसर्च फाउंडेशन,पुणे यांच्या महाआरोग्य
              शिबिराचे आयोजन.
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div>
        <div className="blog-card hover" onClick={() => setActiveEvent(6)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg6} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag"></div>
              <div className="image-tag">महाआरोग्य शिबीर</div>
              <div className="image-description">Are Changing To Better</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>12/03/2023</span>
              Event Time - <span>10am to 5pm</span>
            </div>
            <div className="blog-content-tagline">
              पायोनियर एज्युकेशन अँड रिसर्च फाउंडेशन,पुणे यांच्या महाआरोग्य
              शिबिराचे आयोजन.
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div>
        <div className="blog-card hover" onClick={() => setActiveEvent(1)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg1} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">How</div>
              <div className="image-tag">Competitive Exams</div>
              <div className="image-description">Are Changing To Better</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>2nd March 2023</span>
            </div>
            <div className="blog-content-tagline">
              A Small Glimpse of How Old Age Homes are changing to Better
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div>
        <div className="blog-card hover" onClick={() => setActiveEvent(2)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg2} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">We Arranged</div>
              <div className="image-tag"> Fundraising Event</div>
              <div className="image-description">For Better Helping Hands</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>12th December 2022</span>
            </div>
            <div className="blog-content-tagline">
              How can Senior Citizens Overcome Stress
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div>
        <div className="blog-card hover" onClick={() => setActiveEvent(3)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg3} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">We Organized</div>
              <div className="image-tag">Student Career Guidance</div>
              <div className="image-description">
                For Better Future Of Youths
              </div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>15th September 2022</span>
            </div>
            <div className="blog-content-tagline">
              Old Age Homes and Its Advantages
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div>
        <div className="blog-card hover" onClick={() => setActiveEvent(4)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg4} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">Run's</div>
              <div className="image-tag">Women Empowerment Camp</div>
              <div className="image-description">
                For Building Self-Confidence
              </div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>08th March 2022</span>
            </div>
            <div className="blog-content-tagline">
              Reasons Why You Must Volunteer for Old Age Homes
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div>
        <div className="blog-card hover" onClick={() => setActiveEvent(5)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg5} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">We Arranged</div>
              <div className="image-tag">Covid Special Activity</div>
              <div className="image-description">
                For Awareness About Health
              </div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>21st April 2020</span>
            </div>
            <div className="blog-content-tagline">
              Things to bear in mind while choosing an old age home
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div>
        {/* <div className="blog-card hover" onClick={() => setActiveEvent(6)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg6} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">For</div>
              <div className="image-tag">Senior Citizens</div>
              <div className="image-description">5 Amazing Activities</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>21st February 2023</span>
            </div>
            <div className="blog-content-tagline">
              5 Amazing Activities for Senior Citizens in Old Age Homes
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div> */}
        {/* <div className="blog-card hover" onClick={() => setActiveEvent(7)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg7} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">Best</div>
              <div className="image-tag">Old Age Home</div>
              <div className="image-description">Support Elderly Pepole.</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>21st February 2023</span>
            </div>
            <div className="blog-content-tagline">
              Elderly people suffering from depression & loneliness
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div> */}
        {/* <div className="blog-card hover" onClick={() => setActiveEvent(8)}>
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={Eventimg8} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">Our</div>
              <div className="image-tag">NGO's Role</div>
              <div className="image-description">
                In Child Education And Women empowerment.
              </div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              Event Date - <span>21st February 2023</span>
            </div>
            <div className="blog-content-tagline">
              Women empowerment, developing old age homes and promoting child
              education
            </div>
          </div>
          <div className="event-btn-wraper">
            <div className="event-btn">
              Event Details
              <span>
                <BiMessageRoundedDetail />
              </span>
            </div>
          </div>
        </div> */}
      </div>
      <EventDetails
        eventId={activeEvent}
        setActiveEvent={(id: any) => setActiveEvent(id)}
      />
    </div>
  );
}

export default Events;

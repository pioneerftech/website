import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg114 from "/public/event/Eventimg114.jpg";

function Event14() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg114} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#FreeCompititiveExamCenter</div>
          <br />
          <div className="subheading">
            "Empowering Dreams, Igniting Minds: Jidnyasa Study Center - Lighting
            the Path for Underprivileged Students."
          </div>
        </div>
        <div className="event-details-venue">
          Date:- 26-02-2023 Time:- 10 AM to 5 PM Venue:- Khairao, Ta-jat,
          Ji-sangli
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          Jidnyasa Competitive Exam Center, established by Pioneer Education and
          Foundation in 2014 at Khairao Taluka Jat, is a beacon of opportunity
          for aspiring students preparing for a range of competitive exams,
          including MPSC, UPSC, IBPS, Police Recruitment, and Army Recruitment.
          Our mission is to empower young minds from rural areas to confidently
          face the challenges of civil services examinations.
          <br />
          <br />
          At Jidnyasa Competitive Exam Center, we believe in providing more than
          just education – we offer a holistic learning experience. With a
          dedicated commitment to our students' success, we go the extra mile to
          ensure they have the resources and support they need. Our students
          gain access to an extensive collection of free reference books that
          cater to various exam syllabi. Additionally, we provide a 24-hour
          study room, enabling students to immerse themselves in focused
          learning at their convenience.
          <br />
          <br />
          Recognizing the evolving nature of competitive exams, we continuously
          update our library with new reference books and periodicals to align
          with changing examination patterns. This proactive approach ensures
          that our students are equipped with the most relevant and up-to-date
          study materials.
          <br />
          <br />
          The Jidnyasa Competitive Exam Center stands as a testament to Pioneer
          Foundation's unwavering commitment to equalizing educational
          opportunities and fostering talent in rural communities. As we nurture
          aspirations and kindle the spirit of achievement, we pave the way for
          a new generation of leaders to rise from the heart of the countryside
          and shine on the national stage.
        </div>
      </div>
    </>
  );
}

export default Event14;

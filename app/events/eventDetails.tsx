import React from "react";
import "./eventDetails.scss";
import Image from "next/image";
import Eventimg1 from "../../public/event/event1.jpg";
import PageSaperator from "@pageSaperator";

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
        <div className="event-details-sub-container">
          <div className="event-image-container">
            <Image src={Eventimg1} alt="" />
          </div>
        </div>
        <div className="event-details-sub-container event-details-content">
          <div className="hero-content f-d-col d-f-c">
            <div className="heading">#PioneerCompetitiveExam2023</div>
            <br />
            <div className="subheading">
              The Pioneer Foundation organized a competitive exam for students
              from grades 6 to 12 in the local community on 2nd March 2023. Over
              200 students from different schools participated in the exam,
              which covered various topics such as mathematics, science, social
              studies, and English. The exam was conducted in an organized and
              fair manner Overall, the event was a great success and a valuable
              experience for the participating students.
            </div>
          </div>
          <div className="event-details-venue">
            2nd March 2023, 09:00 am, Qwality Circle Comunity Center,
            Khairaw.Jat.
          </div>
          <div className="center">
            <PageSaperator />
          </div>
          <div className="width100">
            We would be happy to write an event on a competitive exam that was
            organized by an Pioneer Foundation. On 2nd March 2023, the Pioneer
            Foundation organized a competitive exam for students in the local
            community. The exam was held at the community center and aimed to
            provide students with an opportunity to showcase their knowledge and
            skills. <br />
            <br />
            The exam was open to all students from grades 6 to 12, and the
            topics covered included mathematics, science, social studies, and
            English. The exam was divided into two parts, with the first part
            consisting of multiple-choice questions and the second part
            comprising of short-answer questions. <br />
            <br />
            Over 200 students from different schools in the community
            participated in the exam. The students arrived at the community
            center early in the morning and were welcomed by volunteers from the
            Pioneer Foundation who helped them to register and provided them
            with refreshments.
            <br />
            <br />
            The exam was conducted in a peaceful and organized manner, and the
            students had a positive experience. The Pioneer Foundation ensured
            that the exam was fair, transparent, and without any discrimination.
            The exam results were announced a week later, and the top-performing
            students were awarded prizes and certificates of achievement.
            <br />
            <br /> The Pioneer's aim of organizing this competitive exam was to
            promote education in the community and provide students with an
            opportunity to showcase their knowledge and skills. The Pioneer
            Foundation hopes that such events will encourage students to work
            hard and strive for academic excellence. <br />
            <br /> Overall, the competitive exam organized by the Pioneer was a
            great success and a valuable experience for the participating
            students. The Pioneer Foundation hopes to continue organizing such
            events in the future and make education more accessible and
            enjoyable for the community.
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

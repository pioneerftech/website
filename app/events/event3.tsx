import React from "react";
import Image from "next/image";
import PageSaperator from "@pageSaperator";
import Eventimg3 from "/public/event/Eventimg3.jpg";

function Event3() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg3} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#PioneerFoundationStudentCareerGuidance</div>
          <br />
          <div className="subheading">
            On 10th March 2023, the Pioneer Foundation organized a student
            career guidance session at a local high school. The event aimed to
            provide students with insights into different career paths and equip
            them with the knowledge and resources needed to make informed
            decisions about their future careers. Over 100 students participated
            in the event, which featured a keynote speech by a career counselor
            and a panel discussion with successful professionals from various
            industries. The students actively participated in the discussions
            and gained valuable insights into the world of work. The event was a
            success and a valuable experience for the participating students,
            and the NGO plans to continue organizing similar events in the
            future.
          </div>
        </div>
        <div className="event-details-venue">
          15th September 2022, 11:30 am, Local College, Khairaw.Jat.
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          On 10th March 2023, the Pioneer Foundation organized a student career
          guidance session at the local high school. The event was aimed at
          providing students with guidance and information about various career
          paths they could choose after completing their education. <br />
          <br /> The session began with a keynote speech by a prominent career
          counselor who shared insights on the current job market and the skills
          required to succeed in different fields. This was followed by a panel
          discussion featuring successful professionals from various industries
          who shared their career journeys and answered students' questions.
          <br />
          <br /> The event was attended by over 100 students from the high
          school, who actively participated in the discussions and gained
          valuable insights into the world of work. The NGO also provided
          students with resources and handouts on different careers and
          educational paths. <br />
          <br /> The aim of the NGO in organizing this event was to equip
          students with the knowledge and resources needed to make informed
          decisions about their future careers. The NGO hopes that such events
          will inspire students to pursue their passions and equip them with the
          skills needed to succeed in their chosen careers. <br />
          <br /> Overall, the student career guidance session organized by the
          Pioneer Foundation was a success and a valuable experience for the
          participating students. The NGO plans to continue organizing similar
          events in the future to empower and guide students towards fulfilling
          career paths.
        </div>
      </div>
    </>
  );
}

export default Event3;

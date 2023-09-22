import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg11 from "/public/event/Eventimg11.jpg";

function Event11() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg11} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#FreeCompetitiveExamStudyCenter</div>
          <br />
          <div className="subheading">
            "Unlock Your Potential, Excel in Jidnyasa: The Journey to Success
            Begins Here!"
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
          Jidnyasa Competitive Exam Center: Empowering Dreams, Igniting Success
          in Rural Taluka Jat Since 2014, Pioneer Education and Foundation have
          been driving a transformative initiative - the Jidnyasa Competitive
          Exam Center - at Khairao, Taluka Jat. <br />
          <br /> This center is dedicated to nurturing the aspirations of
          students preparing for a wide spectrum of competitive exams, including
          MPSC, UPSC, IBPS, Police Recruitment, and Army Recruitment. A beacon
          of hope for rural students, Jidnyasa provides a conducive environment
          for intensive exam preparation. Free reference books are offered,
          equipping students with the latest study material aligned with the
          evolving exam patterns. Moreover, the center's 24-hour study room
          fosters an unceasing pursuit of knowledge, allowing dedicated scholars
          to optimize their study hours.
          <br />
          <br /> Recognizing the ever-changing landscape of competitive exams,
          the Pioneer Foundation has continuously expanded the center's library.
          Responding to students' demands, new reference books and periodicals
          are thoughtfully procured, ensuring students have access to the best
          and most up-to-date resources. This visionary endeavor strives to
          bridge the urban-rural divide and empower students from rural areas to
          vie for coveted positions in civil services.
          <br />
          <br /> By providing comprehensive resources, a nurturing environment,
          and guidance from experienced mentors, Jidnyasa serves as a catalyst
          for success, igniting the flames of ambition in the hearts of aspiring
          scholars. As the Jidnyasa Competitive Exam Center stands strong, it
          embodies the commitment of Pioneer Foundation to empower the next
          generation of leaders, who will go on to shape the nation's future
          with their dedication, knowledge, and vision.
          <br />
          <br /> This initiative paves the way for dreams to take flight and
          nurtures a generation of changemakers who will illuminate the path to
          progress and excellence.
        </div>
      </div>
    </>
  );
}

export default Event11;

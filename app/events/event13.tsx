import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg113 from "/public/event/Eventimg113.jpg";

function Event13() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg113} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#YouthDialogueProgram</div>
          <br />
          <div className="subheading">
            "Empowering Voices: Youth Dialogue Program - Building a Better
            Tomorrow."
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
          The "Yuva Savand Karyakram" or Youth Dialogue Programme took place at
          the prestigious Sharad Auditorium of Shivnagar Vidya Prasarak Mandal
          in Malegaon Budruk, Tal. Baramati, Dist. Pune. The event aimed to
          empower college youths by providing insights into diverse career
          opportunities across various fields. <br />
          <br /> During the programme, college youths received specialized
          guidance on career prospects, helping them explore their potential and
          make informed choices for their future. An open and interactive
          dialogue session was conducted, allowing the youths to freely express
          their thoughts, concerns, and aspirations. Dattatray Sangolkar, the
          esteemed founder member of the organization, graced the occasion as
          the chief guest. <br />
          <br />
          His presence brought invaluable wisdom and mentorship to the college
          youths, offering valuable guidance to inspire and motivate them. The
          Youth Dialogue Programme served as a platform to engage with the
          thoughts and perspectives of the younger generation. Discussions
          revolved around the challenges faced by the youth, with a focus on
          addressing their needs, aspirations, and opportunities for personal
          and professional growth.
          <br />
          <br /> Through this empowering initiative, the organizers sought to
          nurture a generation of confident, informed, and motivated youths,
          ready to take on the world and build a brighter tomorrow.
          <br />
          <br /> The event highlighted the organization's commitment to
          fostering a positive and supportive environment, enabling youths to
          unleash their full potential and make meaningful contributions to
          society. As the curtains fell on this inspiring dialogue, the seeds of
          change were sown, promising a future of promising possibilities and
          endless opportunities for the youth of Tal. Baramati Dist. Pune.
        </div>
      </div>
    </>
  );
}

export default Event13;

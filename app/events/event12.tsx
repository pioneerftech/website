import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg11 from "/public/event/Eventimg11.jpg";

function Event12() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg11} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#RunningGroundForYouth</div>
          <br />
          <div className="subheading">
            "To make the country strong, start from yourself"
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
          Empowering Aspirations: Pioneer Foundation's Free Practice Ground for
          Police and Army Recruitment Aspirants. <br />
          <br /> In a remarkable stride towards fostering the dreams of students
          preparing for police and army recruitment, the Pioneer Education and
          Research Foundation has taken a momentous step by establishing a
          dedicated practice ground. This ground serves as an invaluable
          resource for students in rural areas, equipping them with the tools to
          excel in the rigorous selection processes of these esteemed
          professions.
          <br />
          <br /> This thoughtfully designed practice ground boasts two distinct
          running tracks - one 400 meters long and another 100 meters long -
          catering to various aspects of physical fitness crucial for the
          recruitment examinations. From enhancing endurance to refining speed,
          this facility aims to prepare aspirants for every aspect of the
          challenging tests.
          <br />
          <br /> Moreover, to provide a comprehensive training experience, the
          ground is equipped with essential materials such as single-bar,
          double-bar, and balls for ball throwing practice. These provisions
          ensure that students receive a holistic preparation, honing their
          physical capabilities and building the necessary skills to excel in
          their pursuit of a career in the police and army forces.
          <br />
          <br /> With this initiative, Pioneer Foundation strives to bridge the
          gap between urban and rural opportunities, empowering students from
          rural backgrounds to compete on equal footing with their urban
          counterparts. This practice ground will serve as a training hub,
          igniting a spirit of determination and fostering a sense of discipline
          and dedication in the hearts of aspiring recruits.
          <br />
          <br /> As the rural youth seize the advantage of this exceptional
          facility, they will march confidently towards their goals, fuelled by
          the belief that no dream is beyond their reach. Pioneer Foundation's
          commitment to empowering aspirations finds manifestation in this
          endeavor, creating a pathway for the youth to embody strength,
          resilience, and the spirit of service to the nation. Together, they
          shall embrace the challenges, as they prepare to safeguard and serve
          their country with pride and honor.
        </div>
      </div>
    </>
  );
}

export default Event12;

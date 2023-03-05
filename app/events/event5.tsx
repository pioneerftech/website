import React from "react";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import Eventimg5 from "../../public/event/fifthevent.jpg";

function Event5() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg5} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">
            #HealthAndWellnessForAll #CovidSafety #HealthyLiving #MentalWellness
            #StaySafeTogether
          </div>
          <br />
          <div className="subheading">
            Join our two-day Covid-19 social activity camp to learn about Covid
            safety measures, healthy living, and emotional well-being during the
            pandemic. Our camp features interactive sessions, group discussions,
            and hands-on activities led by healthcare and mental health
            professionals. Participants will also learn to prepare healthy meals
            and enjoy a cultural program showcasing the rich heritage of the
            community. The camp is free and open to all members of the
            community. Let's come together to stay safe and healthy during these
            challenging times!
          </div>
        </div>
        <div className="event-details-venue">
          21st April 2020, 11:30 am, Khairaw.Jat.
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          Our NGO, "Health and Wellness for All", is organizing a two-day
          Covid-19 social activity camp to promote Covid safety measures and
          healthy living during the pandemic. The camp aims to educate the
          community about the importance of staying safe, maintaining physical
          and mental well-being, and creating a sense of community during these
          challenging times. <br />
          <br /> Day 1: <br />
          <br /> The first day of the camp will focus on Covid safety measures,
          including hand hygiene, social distancing, and wearing masks.
          Participants will be divided into small groups and assigned a team
          leader who will guide them through the activities. The day will
          feature interactive sessions, group discussions, and hands-on
          activities to teach participants about Covid safety measures. <br />
          <br /> We will have a team of healthcare professionals who will
          provide information on vaccination, testing, and Covid symptoms.
          Participants will have the opportunity to ask questions and engage in
          open discussions. <br />
          <br /> The day will also feature a healthy meal preparation activity,
          where participants will learn to prepare nutritious meals at home. The
          activity will emphasize the importance of healthy eating and physical
          activity for maintaining good health during the pandemic. <br />
          <br /> Day 2: <br />
          <br /> The second day of the camp will focus on mental and emotional
          well-being. We will have a team of mental health professionals who
          will provide information on managing stress, anxiety, and depression
          during the pandemic. <br />
          <br /> The day will feature group therapy sessions, mindfulness
          exercises, and art therapy activities to help participants cope with
          the emotional toll of the pandemic. We will emphasize the importance
          of self-care, self-compassion, and building social support networks.
          <br />
          <br />
          The day will conclude with a cultural program, showcasing the rich
          cultural heritage of the community. Participants will be encouraged to
          maintain safe social distance and wear masks during the program.
          <br />
          <br />
          Overall, our Covid-19 social activity camp aims to promote Covid
          safety measures, healthy living, and emotional well-being during the
          pandemic. The camp will be free and open to all members of the
          community. We believe that by coming together, we can create a sense
          of community, support each other, and stay safe and healthy together.
        </div>
      </div>
    </>
  );
}

export default Event5;

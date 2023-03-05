import React from "react";
import PageSaperator from "@pageSaperator";
import Eventimg4 from "/public/event/Eventimg4.jpg";
import Image from "next/image";

function Event4() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg4} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">
            #WomenEmpowerment #GenderEquality #InternationalWomensDay
          </div>
          <br />
          <div className="subheading">
            The Pioneer Foundation organized a Women Empowerment Camp on 8th
            March 2023 at a local community center in celebration of
            International Women's Day. Over 50 women from the community
            participated in the event, which featured activities and sessions on
            building self-confidence, leadership skills, and financial literacy.
            The camp also included workshops on health and hygiene,
            self-defense, and career guidance for women. Female speakers shared
            their experiences and success stories, inspiring the women to
            believe in themselves and pursue their dreams. The event was a great
            success, providing a platform for women to connect, learn, and grow,
            while promoting gender equality and empowerment.
          </div>
        </div>
        <div className="event-details-venue">
          08th March 2022, 11:30 am, Local Community Center, Khairaw.Jat.
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          On 8th March 2023, the Pioneer Foundation organized a Women
          Empowerment Camp at a local community center in celebration of
          International Women's Day. The event aimed to empower women from the
          local community and promote gender equality. <br />
          <br /> The camp featured various activities and sessions that focused
          on building self-confidence, leadership skills, and financial
          literacy. There were also workshops on health and hygiene,
          self-defense, and career guidance for women. <br />
          <br /> The camp was attended by over 50 women from the community, who
          participated in the activities and sessions with enthusiasm. The
          Pioneer ensured that the event was inclusive and provided a safe space
          for women to express themselves and connect with other women. <br />
          <br /> The Pioneer also invited female speakers who shared their
          experiences and success stories, inspiring the women to believe in
          themselves and pursue their dreams. The speakers also provided
          guidance on how to overcome challenges and obstacles that women often
          face in their personal and professional lives. <br />
          <br /> The Women Empowerment Camp organized by the Pioneer Foundation
          was a great success, and the women who participated left feeling
          empowered and motivated. The Pioneer hopes to continue organizing such
          events in the future to promote gender equality and empower women in
          the community.
          <br />
          <br />
          Overall, the Women Empowerment Camp was a fantastic event that
          provided a platform for women to connect, learn, and grow. The
          Pioneer's efforts to promote gender equality and empower women were
          highly appreciated and praised by the community. Write a short
          description on that event.
        </div>
      </div>
    </>
  );
}

export default Event4;

import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg99 from "/public/event/Eventimg99.jpg";

function Event9() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg99} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#Workshop #WomenEmpowerment</div>
          <br />
          <div className="subheading">
            "Pioneer Foundation's Compassionate Aid: Supporting Needy Patients
            through Chief Minister's Assistance Fund and other Schemes."
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
          On 26th February 2023, a landmark one-day workshop was organized in
          the serene village of Khairao, with the generous support of the
          esteemed Dattopant Thengdi National Labour Education and Development
          Board of the Central Government. <br />
          <br />
          The workshop was designed to empower women by providing valuable
          insights into various employment opportunities, essential laws
          concerning women's rights, and comprehensive information about
          government schemes aimed at uplifting them. This enlightening event
          was graced by the presence of eminent personalities, Mr. Kurwalkar,
          the illustrious Head of Western Maharashtra Dattopant Thengdi National
          Labour Education and Development Board, and Mr. Kiran Kamble, a
          respected figure from Rashtra Seva Dal, Sangli, both of whom served as
          chief guides throughout the workshop. The vibrant gathering comprised
          approximately 300 enthusiastic women hailing from neighboring villages
          like Tonewadi, Yelvi, Kunikonur, and more, all eager to embrace
          newfound knowledge and opportunities for personal and professional
          growth. <br />
          <br />
          Under the inspiring chairmanship of the esteemed Sarpanch of Khairao,
          Indubai Gangane, the program was meticulously conducted, creating an
          atmosphere of empowerment, collaboration, and solidarity among the
          participants. The workshop was further enriched by the presence of
          distinguished guests from the revered Pioneer Foundation. The
          Treasurer, Mr. Sopan Sangolkar, along with esteemed members, Mr.
          Bharat Kshirsagar and Mrs. Sindhutai Karande, actively participated,
          demonstrating the Foundation's unwavering commitment to uplifting
          communities and empowering women. Throughout the day, attendees were
          immersed in insightful sessions, gaining a deeper understanding of
          employment opportunities available to them. They were enlightened
          about the laws safeguarding women's rights and protection, as well as
          the numerous government schemes tailor-made to foster their progress
          and prosperity.
          <br />
          <br /> This transformative workshop served as a powerful platform for
          the women of Khairao and its neighboring villages to enhance their
          knowledge, embrace their potential, and nurture a brighter future. The
          event's success echoed the collective dedication of organizers and
          participants alike, solidifying the significance of empowering women
          for a more inclusive and equitable society. As the sun set on this
          memorable day, the women of Khairao and beyond left the workshop with
          newfound confidence, strengthened by the wisdom they had acquired. The
          seeds of empowerment had been sown, poised to blossom into a future
          where women's voices are heard, dreams are realized, and progress is
          nurtured by unity and knowledge.
        </div>
      </div>
    </>
  );
}

export default Event9;

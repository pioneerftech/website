import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg88 from "/public/event/Eventimg88.jpg";

function Event8() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg88} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#CMMedicalRelief</div>
          <br />
          <div className="subheading">
            "Pioneer Foundation's Compassionate Aid: Supporting Needy Patients
            through Chief Minister's Assistance Fund and other Schemes."
          </div>
        </div>
        <div className="event-details-venue">
          Date:- 12-03-2023 Time:- 10 AM to 5 PM Venue:- Khairao, Ta-jat,
          Ji-sangli
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          Chief Minister's Medical Relief Fund Cell has been established by the
          Government of Maharashtra to provide medical assistance to the poor
          and needy patients.
          <br />
          <br /> In order for the citizens to have complete information about
          this scheme, information was given to the citizens about the diseases
          covered under this scheme, nature of assistance, necessary documents
          etc. Inspite of this citizens were also informed about the Mahatma
          Phule Jan Arogya Yojana in this seminar.
          <br />
          <br /> So far the following patients have been assisted by the Pioneer
          Education and Research Foundation through the Chief Minister's
          Assistance Fund and other schemes.
          <br />
          <br /> 1) Mr. Akshay Dilip Karande, 2) Mrs. Saubai Baburao Khandekar (
          Prani Hospital, Miraj ) 3) Mrs. Asha Omkumar Kotangale (Sarvodaya
          Hospital Brahmapuri), 4) Shri. Vishnu Haribhau Tandale (Ram Mangal
          Heart Foundation, Pune), 5) Mayuresh Santosh Khot ( Yashshri Hospital,
          Miraj ) 6) Arpita Kamble ( Hardikar Hospital, Pune ) 7) Neelam
          Rajendra Kate (KEM Hospital, Pune), 7) Abhijit Balasaheb Adhav
          (Jahangir Hospital Pune) were given the benefit of Chief Minister's
          Assistance Fund and other schemes by Pioneer Foundation.
        </div>
      </div>
    </>
  );
}

export default Event8;

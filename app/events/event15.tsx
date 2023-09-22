import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg8 from "/public/event/Eventimg8.jpg";

function Event15() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg8} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#CataractSurgery</div>
          <br />
          <div className="subheading">
            "Vision Restored, Lives Transformed: Pioneering Cataract Surgeries
            for a Brighter Future."
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
          In the heartwarming aftermath of the Maha Arogya Shivir held on 12th
          March 2023 in Khairao village, the Pioneer Education and Research
          Foundation embraced its noble mission to restore sight and hope for 45
          underprivileged patients diagnosed with cataracts. <br />
          <br /> Realizing the significance of providing timely and expert
          medical assistance to those in need, the Foundation swiftly decided to
          sponsor free cataract surgeries for all 45 patients who were
          discovered to be suffering from this sight-threatening condition. In
          collaboration with two distinguished eye hospitals, Anuradha Eye
          Hospital and Teke Eye Hospital, both located in Sangli, the Foundation
          facilitated 23 life-transforming cataract surgeries over the span of
          10-15 days.
          <br />
          <br /> The list of brave beneficiaries who underwent the cataract
          surgeries reads as follows:
          <br />
          <br />
          <ol>
            <li>Muktabai Bapu Chougule</li>
            <li> Amina Moula Mulani</li>
            <li> Shantanu Malhari Bhande</li>
            <li> Pandurang Bapu Chougule</li>
            <li> Pralhad Parsappa Hegade</li>
            <li> Maruti Laxman Yedave </li> <li>Nana Krushna Kale</li>
            <li> Sundhabai Appa Karande</li>
            <li>Dadasaheb Ramchandra Patil</li>
            <li>Yesabai Kerappa Yedave</li>
            <li>Muktabai Bhimrao Uttare</li>
            <li>Kondabai Sidhu Munje</li>
            <li>Muktabai Sukhdev Kshirsagar</li>
            <li>Dashrath Namdev Aval</li>
            <li>Ashabai Maruti Mane</li>
            <li>Malhari Maruti Hipparkar</li>
            <li>Parubai Sadhu Tone</li>
            <li>Kamlabai Sangolkar</li>
            <li>Chandu Vithal Dombale</li>
            <li>Indabai Hariba Chumbare</li>
            <li>Anusaya Bhagwan Gangane</li>
            <li>Dhondabai Dashrath Kshirsagar</li>
            <li>Shrikant Laxman Dudhal</li>
          </ol>
          <br />
          <br />
          Through these acts of benevolence, the Foundation etched an indelible
          mark on the lives of these individuals, restoring their sight and
          gifting them the promise of a brighter future. Each successful surgery
          embodies the Foundation's unwavering commitment to making a positive
          impact on the lives of those in need, one eye at a time.
          <br />
          <br /> As these 23 brave souls embark on a journey of renewed vision
          and newfound hope, their heartfelt gratitude stands as a testament to
          the power of compassion and the potential to change lives through acts
          of kindness. The Pioneer Education and Research Foundation continues
          to shine as a beacon of hope, illuminating the path towards a better,
          healthier, and more inclusive society.
        </div>
      </div>
    </>
  );
}

export default Event15;

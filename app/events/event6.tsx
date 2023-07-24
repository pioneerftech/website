import React from "react";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import Eventimg6 from "../../public/event/sixthevent.jpg";

function Event6() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg6} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">
            #MahaArogyaShivir #HelthCamp #HealthCampfortheUnderprivileged
          </div>
          <br />
          <div className="subheading">
            The camp provided medical examination and free medications to 1765
            patients. Additionally, seven hundred patients received free
            spectacles, while various laboratory tests, ECG, and other
            diagnostic procedures were performed without any cost. The event was
            inaugurated by District Health Officer Dr. Dilip Mane and attended
            by esteemed guests including Shri. Datta Sangolkar, Amol Dafale, Dr.
            Sanjay Bandgar, Pioneer Foundations office bearers, Mrs. Indubai
            Gangane, and Mrs. Aarati Ankalagi.
          </div>
        </div>
        <div className="event-details-venue">
          12th March 2020, Village- Khairao, Taluka Jat.
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          On 12 March 2023, a free Maha Arogya Shivir (Health Camp) was
          organized at Village- Khairao, Taluka Jat. <br />
          <br />
          In this health camp, 1765 patients were examined and given free
          medicines. Also, free spectacles were distributed to seven hundred
          patients. Various laboratory tests, ECG and other tests of patients
          were done free of cost in the camp. <br />
          <br /> In this camp, well-known paediatrician Dr. Sudhakar Jadhav, Dr.
          Ashok Kharje, Dr. Rahul Sangolkar, Dr. Deepti Patil, Dr. Amol Patil,
          Dr. Srinivasa Ovhal, Dr. Rajendra Dhari etc. renowned doctors were
          participated. Besides this Sudarshan Eye Hospital, Anuradha Eye
          Hospital, Teke Eye Hospital, Bharti Vidyapeeth Medical College, Seva
          Sadan Hospital, Kamal Orthopedic Centre, Siddhivinayak Cancer
          Hospital, Anugraha Drushtidan New Delhi etc. have participated in the
          camp. The camp was inaugurated by District Health Officer Dr. Dilip
          Mane, Shri. Datta Sangolkar (OSD to Hon'ble Minister for Public
          Health, Maharashtra State), Amol Dafale (Assistant Registrar, Jat),
          Dr. Sanjay Bandgar (Taluka Health Officer), Pioneer Foundations office
          bearers, Mrs. Indubai Gangane (Sarpanch, Khairao), Mrs. Aarati
          Ankalagi (Sarpanch, Yelvi) were present for the camp.
          <br />
          <br /> This free health camp benefited the people of rural areas like
          Khairao and its surrounding areas. Villagers were very thankful for
          getting free checkup. treatment, counselling and guidance from expert
          doctors.
        </div>
      </div>
    </>
  );
}

export default Event6;

import React from "react";
import "./gallery.scss";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import childedu from "/public/gallery/childedu.jpg";
import gaushala from "/public/gallery/gaushala.jpg";
import help from "/public/gallery/help.jpg";
import helth from "/public/gallery/helth.jpg";
import oldagehome from "/public/gallery/oldagehome.jpg";
import womenempo from "/public/gallery/womenempo.jpg";
import Child1 from "/public/gallery/childEducation/child1.jpg";
import Child2 from "/public/gallery/childEducation/child2.jpg";
import Child3 from "/public/gallery/childEducation/child3.jpg";
import Child4 from "/public/gallery/childEducation/child4.jpg";
import Health1 from "/public/gallery/healthCare/health1.jpg";
import Health2 from "/public/gallery/healthCare/health2.jpg";
import Health3 from "/public/gallery/healthCare/health3.jpg";
import Health4 from "/public/gallery/healthCare/health4.jpg";
import Women1 from "/public/gallery/womenEmpoverment/women1.jpg";
import Women2 from "/public/gallery/womenEmpoverment/women2.jpg";
import Women3 from "/public/gallery/womenEmpoverment/women3.jpg";
import Women4 from "/public/gallery/womenEmpoverment/women4.jpg";
import Livehood1 from "/public/gallery/liveliHood/livehood1.jpg";
import Livehood2 from "/public/gallery/liveliHood/livehood2.jpg";
import Livehood3 from "/public/gallery/liveliHood/livehood3.jpg";
import Livehood4 from "/public/gallery/liveliHood/livehood4.jpg";
import DonationCamp1 from "/public/gallery/donationCamp/donationcamp1.jpg";
import DonationCamp2 from "/public/gallery/donationCamp/donationcamp2.jpg";
import DonationCamp3 from "/public/gallery/donationCamp/donationcamp3.jpg";
import DonationCamp4 from "/public/gallery/donationCamp/donationcamp4.jpg";
import Studentguidance1 from "/public/gallery/studentGuidance/studentguidance1.jpg";
import Studentguidance2 from "/public/gallery/studentGuidance/studentguidance2.jpg";
import Studentguidance3 from "/public/gallery/studentGuidance/studentguidance3.jpg";
import Studentguidance4 from "/public/gallery/studentGuidance/studentguidance4.jpg";

function Gallery() {
  return (
    <div className="gllery-container">
      <div className="image-container">
        <div className="tag">Gallery</div>
      </div>
      <PageSaperator />
      <div className="container">
        <div className="tag">Child Education</div>
        <div className="box">
          <div className="imgBox">
            <Image src={Child1} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Child2} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Child3} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Child4} alt="" />
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="container">
        <div className="tag">Health Care</div>
        <div className="box">
          <div className="imgBox">
            <Image src={Health1} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Health2} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Health3} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Health4} alt="" />
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="container">
        <div className="tag">Women Empoverment</div>
        <div className="box">
          <div className="imgBox">
            <Image src={Women1} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Women2} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Women3} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Women4} alt="" />
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="container">
        <div className="tag">Live Hood</div>
        <div className="box">
          <div className="imgBox">
            <Image src={Livehood1} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Livehood2} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Livehood3} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Livehood4} alt="" />
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="container">
        <div className="tag">Donation Campaign</div>
        <div className="box">
          <div className="imgBox">
            <Image src={DonationCamp1} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={DonationCamp2} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={DonationCamp3} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={DonationCamp4} alt="" />
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="container">
        <div className="tag">Student Career Guidance</div>
        <div className="box">
          <div className="imgBox">
            <Image src={Studentguidance1} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Studentguidance2} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Studentguidance3} alt="" />
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={Studentguidance4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

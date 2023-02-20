import React from "react";
import "./gallery.scss";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import childedu from "../../public/gallery/childedu.jpg";
import gaushala from "../../public/gallery/gaushala.jpg";
import help from "../../public/gallery/help.jpg";
import helth from "../../public/gallery/helth.jpg";
import oldagehome from "../../public/gallery/oldagehome.jpg";
import womenempo from "../../public/gallery/womenempo.jpg";

function Gallery() {
  return (
    <div className="gllery-container">
      <div className="image-container">
        <div className="tag">Gallery</div>
      </div>
      <PageSaperator />
      <div className="container">
        <div className="box">
          <div className="imgBox">
            <Image src={childedu} alt="" />
          </div>
          <div className="content">
            <div className="gallery-content-tag">Child Education</div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={oldagehome} alt="" />
          </div>
          <div className="content">
            <div className="gallery-content-tag">Old Age Home</div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={help} alt="" />
          </div>
          <div className="content">
            <div className="gallery-content-tag">Helping Needy Pepole</div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={helth} alt="" />
          </div>
          <div className="content">
            <div className="gallery-content-tag">Health And Care</div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={gaushala} alt="" />
          </div>
          <div className="content">
            <div className="gallery-content-tag">Gaushala</div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
            <Image src={womenempo} alt="" />
          </div>
          <div className="content">
            <div className="gallery-content-tag">Women Empowerment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

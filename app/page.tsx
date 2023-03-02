"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "./page.scss";
import PageSaperator from "@pageSaperator";
import Cardicon1 from "../public/home/icon/education.png";
import Cardicon2 from "../public/home/icon/agriculture.png";
import Cardicon3 from "../public/home/icon/ruraldev.png";
import Cardicon4 from "../public/home/icon/womenandfamily.png";
import Cardicon5 from "../public/home/icon/youthdev.png";
import Cardicon6 from "../public/home/icon/healthcare.png";

function FaBookReader(props: any) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z" />
    </svg>
  );
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="image-container">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">Our Helping To The World</div>
          <div className="subheading">
            Empowered women and girls can lift their entire families and
            communities out of poverty.
          </div>
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">About</div>
        <div className="heading">About Pioneer Foundation</div>
        <div className="content">
          The PIONEER EDUCATION & RESEARCH FOUNDATION is established to promote
          education; agriculture, rural and youth development; welfare of child,
          women and family; to promote charity, social reforms of useful
          knowledge without any discrimination ofcaste, creed, language etc.
        </div>
        <div className="read-more d-f-c">
          <div className=" hover-text">Read more...</div>
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap fields-content-wrap d-f-c">
        <div className="heading">Our Work Areas</div>
        <div className="content d-f-c gap-10">
          <div className="field-wrap d-f-c">
            <div className="icon-wrap">
              <Image src={Cardicon1} alt="" />
            </div>
            <div className="details-wrap">
              <div className="heading">EDUCATIONAL</div>
            </div>
          </div>
          <div className="field-wrap d-f-c">
            <div className="icon-wrap">
              <Image src={Cardicon2} alt="" />
            </div>
            <div className="details-wrap">
              <div className="heading">AGRICULTURA LDEVELOPMENT & RESEARCH</div>
            </div>
          </div>
          <div className="field-wrap d-f-c">
            <div className="icon-wrap">
              <Image src={Cardicon3} alt="" />
            </div>
            <div className="details-wrap">
              <div className="heading">RURAL DEVELOPMENT & RESEARCH</div>
            </div>
          </div>
          <div className="field-wrap d-f-c">
            <div className="icon-wrap">
              <Image src={Cardicon4} alt="" />
            </div>
            <div className="details-wrap">
              <div className="heading">WOMAN &FAMILY WELFARE ACTIVITIES</div>
            </div>
          </div>
          <div className="field-wrap d-f-c">
            <div className="icon-wrap">
              <Image src={Cardicon5} alt="" />
            </div>
            <div className="details-wrap">
              <div className="heading">YOUTH DEVELOPMENT ACTIVITIES</div>
            </div>
          </div>
          <div className="field-wrap d-f-c">
            <div className="icon-wrap">
              <Image src={Cardicon6} alt="" />
            </div>
            <div className="details-wrap">
              <div className="heading">HEALTHCARE</div>
            </div>
          </div>
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c parallax">
        <div className="subheading">Our Vision & Mission</div>
        <div className="heading">
          promote education, agriculture, rural and youth development, welfare
          of child, women and family
        </div>
        <div className="content">
          The PIONEER EDUCATION & RESEARCH FOUNDATION is established to promote
          education; agriculture, rural and youth development; welfare of child,
          women and family; to promote charity, social reforms of useful
          knowledge without any discrimination ofcaste, creed, language etc.
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">HEAR FROM OUR BELOVED BENEFICIARIES</div>
        <div className="heading">
          Akshaya Chaitanya is an initiative with its roots in the compassionate
          story of Srila Prabhupada.
        </div>
        <div className="content">
          One day, while looking out of a window in Mayapur, a small hamlet near
          Calcutta, Srila Prabhupada saw a group of children fighting with stray
          dogs over scraps of food. Deeply moved by this incident, he resolved
          to ensure that no one within a ten mile radius of his centre would go
          hungry. This direction to his followers inspired the genesis of
          various charitable feeding initiatives.
        </div>
      </div>
    </div>
  );
}

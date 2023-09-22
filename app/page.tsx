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
import Story1 from "../public/home/Story/firststoryimg.jpg";
import Story2 from "../public/home/Story/secondstoryimg.jpg";
import Story3 from "../public/home/Story/thirdstoryimg.jpg";
import Story4 from "../public/home/Story/forthstoryimg.jpg";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="image-container">
        <div className="tag">
          Education is the most powerful weapon which you can use to change the
          world.
        </div>
        {/* <div className="subtag"></div> */}
        <div className="name-subtag">- Savitribai Phule</div>
      </div>
      <PageSaperator />

      <div className="content-wrap">
        <div className="subheading">About</div>
        <div className="heading">About Pioneer Foundation</div>
        <div className="content-container">
          The PIONEER EDUCATION &amp; RESEARCH FOUNDATION is established to
          promote education agriculture, rural and youth development welfare of
          child, women and family to promote charity, social reforms of useful
          knowledge without any discrimination ofcaste, creed, language etc.
        </div>
        <div className="read-more d-f-c">
          <div className=" hover-text">
            {" "}
            <Link shallow={true} className="nav-item" href="/aboutus">
              Read More ...
            </Link>
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="parallax-main-container d-f-c">
        <div className="parallax">
          <div className="para-content-container">
            <div className="para-sub-container1">
              <div className="content-wrap">
                <div className="subheading">Our Mission</div>
                <div className="heading">
                  We connect people around the world in the fight to end
                  poverty. Working together, we invest in the lives of children
                  and youth, build the healthy environments they need to thrive,
                  and empower them to create lasting change in their own lives
                  and communities.
                </div>
                {/* <div className="content-container">
                  We connect people around the world in the fight to end
                  poverty. Working together, we invest in the lives of children
                  and youth, build the healthy environments they need to thrive,
                  and empower them to create lasting change in their own lives
                  and communities.
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="parallax-main-container d-f-c">
        <div className="parallax">
          <div className="para-content-container">
            <div className="para-sub-container1">
              <div className="content-wrap">
                <div className="subheading">Our Vision </div>
                <div className="heading">
                  A world in which every child attains the right to survival,
                  protection, development and participation.
                </div>
                {/* <div className="content-container">
                  A world in which every child attains the right to survival,
                  protection, development and participation.
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="content-wrap">
        <div className="subheading">What We Do</div>
        <div className="heading">Our Work Areas</div>
      </div>
      <div className="our-work-card-wraper">
        <Link
          shallow={true}
          className="nav-item"
          href="/ourApproach#educational"
        >
          <div className="our-work-cards ">
            <div className="icon-wrap">
              <Image src={Cardicon1} alt="" />
            </div>
            <div className="card-tag">EDUCATIONAL</div>
          </div>
        </Link>

        <Link
          shallow={true}
          className="nav-item"
          href="/ourApproach#healthcare"
        >
          <div className="our-work-cards ">
            <div className="icon-wrap">
              <Image src={Cardicon6} alt="" />
            </div>
            <div className="card-tag">HEALTHCARE</div>
          </div>
        </Link>

        <Link
          shallow={true}
          className="nav-item"
          href="/ourApproach#rural-development"
        >
          <div className="our-work-cards ">
            <div className="icon-wrap">
              <Image src={Cardicon3} alt="" />
            </div>
            <div className="card-tag">RURAL DEVELOPMENT & RESEARCH</div>
          </div>
        </Link>

        <Link
          shallow={true}
          className="nav-item"
          href="/ourApproach#agricultural-development"
        >
          <div className="our-work-cards ">
            <div className="icon-wrap">
              <Image src={Cardicon2} alt="" />
            </div>
            <div className="card-tag">AGRICULTURA LDEVELOPMENT & RESEARCH</div>
          </div>
        </Link>

        <Link
          shallow={true}
          className="nav-item"
          href="/ourApproach#women-&-family-welfare-activities"
        >
          <div className="our-work-cards ">
            <div className="icon-wrap">
              <Image src={Cardicon4} alt="" />
            </div>
            <div className="card-tag">WOMAN &FAMILY WELFARE ACTIVITIES</div>
          </div>
        </Link>

        <Link
          shallow={true}
          className="nav-item"
          href="/ourApproach#youth-development-activities"
        >
          <div className="our-work-cards ">
            <div className="icon-wrap">
              <Image src={Cardicon5} alt="" />
            </div>
            <div className="card-tag">YOUTH DEVELOPMENT ACTIVITIES</div>
          </div>
        </Link>
      </div>
      <PageSaperator />
      <div className="content-wrap">
        <div className="subheading">Hear From Our Some</div>
        <div className="heading">Beloved Beneficiaries</div>
        <div className="story-content-container">
          <div className="content-sub-container">
            <div className="content-wrap">
              <div className="content-tag">
                "From poverty to success : A story of how an Pioneer changed my
                life through education."
              </div>
              <div className="content-description">
                An Pioneer changed my life when they offered educational
                opportunities to children who couldn't afford it. They provided
                me with school supplies, free tuition, and counseling sessions.
                With their support, I excelled in my studies and graduated with
                excellent grades. I even received a scholarship to study at a
                prestigious university and became a successful doctor. I am
                forever grateful to the NGO and now volunteer to help other
                underprivileged children.
              </div>
              <div className="name-tag">- Priya</div>
            </div>
            <div className="content-image-container">
              <Image src={Story1} alt="" />
            </div>
          </div>
          <div className="content-sub-container">
            <div className="content-image-container">
              <Image src={Story2} alt="" />
            </div>
            <div className="content-wrap">
              <div className="content-tag">
                "Empowered by an NGO: A poor woman's journey towards financial
                independence and community leadership."
              </div>
              <div className="content-description">
                Thanks to an Pioneer focused on women's empowerment, I went from
                having no education, skills, or opportunities to owning a
                successful tailoring business and becoming a community leader.
                They provided me with training, equipment, and guidance to
                achieve financial independence and make a difference in the
                lives of other women.
              </div>
              <div className="name-tag">- Archana</div>
            </div>
          </div>
          <div className="content-sub-container">
            <div className="content-wrap">
              <div className="content-tag">
                "Pioneer's support enabled a poor elderly man to rediscover joy
                in life at a caring old age home."
              </div>
              <div className="content-description">
                Thanks to the NGO's assistance, I am now living in a caring and
                clean old age home with a supportive community of fellow
                seniors. I can participate in activities and have rediscovered
                my love for reading and painting. I'm grateful for this
                opportunity and hope others in need receive the same help.
              </div>
              <div className="name-tag">- Vishnu Anna</div>
            </div>
            <div className="content-image-container">
              <Image src={Story3} alt="" />
            </div>
          </div>
          {/* <div className="content-sub-container">
            <div className="content-image-container">
              <Image src={Story4} alt="" />
            </div>
            <div className="content-wrap">
              <div className="content-tag">
                "Empowered by an NGO: A poor woman's journey towards financial
                independence and community leadership."
              </div>
              <div className="content-description">
                Thanks to the Healthcare campaign Pioneer, I was able to get a
                free eye surgery that I couldn't afford. The doctors were kind
                and diagnosed me with cataracts. The surgery was successful, and
                now I can see clearly again. I am so grateful for their
                generosity and hope more people can benefit from their help.
                Thank you to the NGO, doctors, and volunteers for making a
                difference in my life and the lives of others.
              </div>
              <div className="name-tag">- Rameshwar</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

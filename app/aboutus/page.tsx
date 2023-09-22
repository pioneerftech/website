import React from "react";
import "./aboutus.scss";
import PageSaperator from "@pageSaperator";
import cardlogo1 from "../../public/aboutus/our-mission.png";
import cardlogo2 from "../../public/aboutus/our-vision.png";
import cardlogo3 from "../../public/aboutus/our-values.png";
import contentimg from "../../public/aboutus/contentimg.jpg";

import Image from "next/image";

function Aboutus() {
  return (
    <div className="about-container">
      <div className="image-container">
        <div className="tag">About Us</div>
      </div>
      <PageSaperator />
      <div className="heading">
        “It is obvious to make a living by what we get, but it is more obvious
        to make a life by what we give.”
      </div>
      <div className="content-sub-tag">
        Pioneer Foundation would like to ask you, “Have you ever wondered what
        kartavya a Pioneer shall does?” Pioneer Foundation has not only
        wondered, but explored it to experience it! Pioneer has the hands to
        perform his kartavya by helping others. Pioneer has the feet to perform
        his kartavya by hastening to poor and needy. And Pioneer has the head to
        perform his kartavya by considering everyone as inclusive to uplift an
        individual from his state of neediness to a state of self-reliant.
        Founded in 2015, Pioneer Foundation is an Ahmedabad, Gujarat, India,
        based Non-Governmental Organization (NGO) committed to helping
        disadvantaged beings. Each day represents a fresh opportunity to share
        our Vision of creating, ‘The Advantaged Society’; and to live our
        purpose of empowering the possibilities for economically weaker
        communities by supporting them with basic necessities such as education,
        food, health, shelter, etc. to empower them to take charge of their own
        future as our Mission.
      </div>
      <PageSaperator />
      <div className="cards-wraper">
        <div className="cards">
          <div className="card-logo-wrap">
            <Image src={cardlogo1} alt="" />
          </div>
          <div className="card-content-tag">Our Mission</div>
          <div className="card-content-sub-tag">
            We connect people around the world in the fight to end poverty.
            Working together, we invest in the lives of children and youth,
            build the healthy environments they need to thrive, and empower them
            to create lasting change in their own lives and communities.
          </div>
        </div>
        <div className="cards">
          <div className="card-logo-wrap">
            <Image src={cardlogo2} alt="" />
          </div>
          <div className="card-content-tag">Our Vision</div>
          <div className="card-content-sub-tag">
            A world in which every child attains the right to survival,
            protection, development and participation.
          </div>
        </div>
        <div className="cards">
          <div className="card-logo-wrap">
            <Image src={cardlogo3} alt="" />
          </div>
          <div className="card-content-tag">Our Values</div>
          <div className="card-content-sub-tag">
            <ul className="card-content-sub-tag">
              <li>Accountability</li>
              <li>Reliability</li>
              <li>Cost-effectiveness</li>
              <li> Personal service</li>
              <li>Accountability</li>
              <li>Accountability</li>
            </ul>
          </div>
        </div>
      </div>
      <PageSaperator />

      <div className="content-sub-container ">
        <div className="content-wrap">
          <div className="content-description">
            Pioneer Foundation strongly believes that a better, more sustainable
            world will take shape when economically weaker communities will be
            equipped with basic needs and proper resources to sustain their
            lives and to grow. With this, they will gain the power to help
            themselves, their families, and so to the entire communities. This
            is what will lead the transformation and will create The Advantaged
            Society.
            <br />
            <br /> Pioneer Foundation is not just a committed NGO for helping
            only underprivileged human beings, but also an NGO which focuses
            upon enhancing the protection of lives which are of course living
            beings but not human one. Yes! Pioneer Foundation is also an equally
            committed NGO for the basic protection and enhancement of lives of
            Gaumatas via Gaushalas.
            <br />
            <br /> With restoring a sense of self worth and confidence in
            economically weaker communities, Pioneer Foundation is empowering
            possibilities for every disadvantaged being to reach their full
            potential. Pioneer Foundation is enabling Child Education by
            improving access to basic educational needs as well as by
            facilitating education itself; Women Empowerment by supporting the
            growth from stagnation to escalation through a variety of means;
            Health by making vital healthcare accessible as well as by spreading
            awareness about essential preventive healthcare; senior citizens’
            shelter and old age related facilities via Old Age Home; and a step
            forward to help Needy People especially where fundamental economic
            household security is a big challenge.
          </div>
          <div className="content-image-container">
            <Image src={contentimg} alt="" />
          </div>
        </div>
      </div>
      <PageSaperator />
      <div className="heading">Our Team</div>
      <div className="content-sub-tag">
        It allows you to gather monthly subscriptions from fans to help fund
        your creative projects. They also encourage their users to offer rewards
        to fans as a way to repay them for their support.
      </div>
      <div className="ourteam-wraper">
        <div className="ourteam-cards">
          <div className="ourteam-image"></div>
          <div className="name-wraper">
            <svg
              className="xs-svgs"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 270 138"
            >
              <path
                className="fill-red"
                d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z"
                transform="translate(-375 -3294)"
              ></path>
            </svg>
            <div className="name-content">
              <div className="name">Mrs. Priyanka Dattatraya Sangolkar</div>
              <div className="position">President</div>
            </div>
          </div>
        </div>
        <div className="ourteam-cards">
          {" "}
          <div className="ourteam-image"></div>
          <div className="name-wraper">
            <svg
              className="xs-svgs"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 270 138"
            >
              <path
                className="fill-red"
                d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z"
                transform="translate(-375 -3294)"
              ></path>
            </svg>
            <div className="name-content">
              <div className="name">Mr. Parag Vasant Wagh</div>
              <div className="position">Member</div>
            </div>
          </div>
        </div>
        <div className="ourteam-cards">
          {" "}
          <div className="ourteam-image"></div>
          <div className="name-wraper">
            <svg
              className="xs-svgs"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 270 138"
            >
              <path
                className="fill-red"
                d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z"
                transform="translate(-375 -3294)"
              ></path>
            </svg>
            <div className="name-content">
              <div className="name">Mr. Bharat Sakharam Kshirsagar</div>
              <div className="position">Member</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

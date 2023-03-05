import React from "react";
import "./ourApproach.scss";
import Image from "next/image";
import CONTENT1 from "../../public/ourApproach/content1.jpg";
import content2 from "../../public/ourApproach/content2.jpg";
import content3 from "../../public/ourApproach/content3.jpg";
import content4 from "../../public/ourApproach/content4.jpg";
import content5 from "../../public/ourApproach/content5.jpg";
import content6 from "../../public/ourApproach/content6.jpg";
import PageSaperator from "@pageSaperator";

function ourApproach() {
  return (
    <div className="ourApproach-container">
      <div className="image-container">
        <div className="tag">Our Approach</div>
      </div>
      <PageSaperator />
      <div className="content-sub-tag">
        At Pioneer Education & Reserch Foundation, we have mainstreamed our
        means for creating ‘The Advantaged Society’ into approaches for every
        project. We have well-thought proven means for everything from building
        an idea to help to an individual especially from economically weaker
        communities to putting that idea into execution on board. The
        consistency in our approaches guarantees that we deliver a quality
        empowerment every time.
        <br />
        <br />
        As every student cannot be taught in same way for the best output, we
        believe a single approach cannot be applied to each task for the best
        output. This is why Pioneer Education & Reserch Foundation has designed
        customized approaches based on well-versed research for every project to
        meet the needs of each project.
      </div>
      <PageSaperator />

      <div className="content-container">
        <div className="content-sub-container">
          <div className="content-wrap" id="educational">
            <div className="content-tag">Educational</div>
            <div className="content-description">
              As per Pioneer Education & Reserch Foundation, a quality childhood
              education depends on three interacting pillars: the teachers,
              environment, and parents. Of course, the child is always in the
              center of that triangle; requiring an attention to his/her
              distinct interests, skills, and goals. Pioneer Education & Reserch
              Foundation ensures to fulfill the fundamental educational needs by
              facilitating them the accessibility to basic educational needs
              which can ultimately promote learning.
            </div>
          </div>
          <div className="content-image-container">
            <Image src={CONTENT1} alt="" />
          </div>
        </div>
        <div className="content-sub-container">
          <div className="content-image-container">
            <Image src={content2} alt="" />
          </div>
          <div className="content-wrap" id="rural-development">
            <div className="content-tag"> Rural Development & Research</div>
            <div className="content-description">
              At our NGO, we recognize the crucial role that rural development
              and research play in promoting sustainable growth and prosperity
              in rural communities. Our team is committed to conducting research
              that identifies the challenges faced by rural areas and finding
              innovative solutions to address them. We work closely with local
              communities to understand their needs and aspirations, and design
              programs that are tailored to their unique requirements. Our rural
              development initiatives aim to improve access to basic necessities
              like healthcare, education, and clean water, as well as create
              opportunities for livelihood generation.
            </div>
          </div>
        </div>
        <div className="content-sub-container">
          <div className="content-wrap" id="agricultural-development">
            <div className="content-tag">
              Agricultural Development & Research
            </div>
            <div className="content-description">
              At our NGO, we recognize the critical role that agricultural
              development and research play in promoting sustainable growth and
              food security. We conduct research that helps us identify the
              challenges faced by farmers and find innovative solutions to
              address them. Our team works closely with farmers to understand
              their needs and aspirations, and design programs that are tailored
              to their unique requirements. Our agricultural development
              initiatives aim to improve access to essential resources like
              seeds, fertilizer, and irrigation, as well as provide training on
              modern farming techniques.
            </div>
          </div>
          <div className="content-image-container">
            <Image src={content3} alt="" />
          </div>
        </div>
        <div className="content-sub-container">
          <div className="content-image-container">
            <Image src={content4} alt="" />
          </div>
          <div className="content-wrap" id="women-&-family-welfare-activities">
            <div className="content-tag">Women & Family Welfare Activities</div>
            <div className="content-description">
              Pioneer Education & Reserch Foundation is an adamant believer of,
              ‘Strong Women, Strong Communities’. We are approaching women
              empowerment by influencing over needs for education, by
              influencing over creating healthy families, and by influencing
              over strengthening income-generating activities. It is because
              Pioneer Education & Reserch Foundation strongly believes that
              Women Empowerment depends on three pillars: education, quality
              healthcare, and sustainable income-generating activities.
            </div>
          </div>
        </div>
        <div className="content-sub-container">
          <div className="content-wrap" id="healthcare">
            <div className="content-tag"> Health Care</div>
            <div className="content-description">
              Of course! Better health is central to human happiness and
              well-being And since Pioneer Education & Reserch Foundation is
              committed to create, ‘The Advantaged Society’, we are approaching
              to create healthy society by a variety of means; such as by
              facilitating vital healthcare to needy people, by providing
              financial assistance for Dialysis, by helping in provision of
              daily nourishments for patients through meals, and by making the
              availability of essential basic medicines.
            </div>
          </div>
          <div className="content-image-container">
            <Image src={content5} alt="" />
          </div>
        </div>
        <div className="content-sub-container">
          <div className="content-image-container">
            <Image src={content6} alt="" />
          </div>
          <div className="content-wrap" id="youth-development-activities">
            <div className="content-tag">Youth Development Activities</div>
            <div className="content-description">
              Our NGO is dedicated to promoting the positive development of
              young people through a range of dynamic and engaging activities.
              We believe in the power of youth to make positive changes in their
              lives and communities, and our programs reflect this philosophy
              Here are some of our youth development initiatives like
              Educational Support, Career Readiness, Leadership Development,
              Health and Wellness, Community Service, Arts and Culture,
              Financial Literacy, Technology and Innovation etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ourApproach;

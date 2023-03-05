import React from "react";
import Image from "next/image";
import blog_d_5 from "/public/blog/blog_d_5.jpg";
import "../blog-details.scss";

function page() {
  return (
    <div className="blog-details-container">
      <div className="blog-details-wraper">
        <div className="blog-image-container">
          <Image src={blog_d_5} alt="" />
        </div>
        <div className="blog-heading-container">
          <div className="event-details-venue">Pune / 27 February 2023</div>
          <div className="heading">
            Supporting Nonprofits: How Individuals Can Make a Difference
          </div>
          <div className="subheading">
            At our nonprofit organization, we know that individuals have the
            power to make a significant impact in supporting the work of
            nonprofits. Whether it's through donations, volunteering, or
            spreading the word about our mission, every action can help us
            achieve our goals. One of the most effective ways individuals can
            support nonprofits is through financial contributions. Even small
            donations can make a big difference, and regular contributions can
            help nonprofits sustain their programs and services over the
            long-term. Donations can also be directed to specific programs or
            initiatives, allowing individuals to support causes that align with
            their values. Volunteering is another powerful way individuals can
            support nonprofits. By donating their time and skills, volunteers
            can help nonprofits achieve their goals and serve their communities
            more effectively. Volunteers can also gain valuable experience and
            develop new skills, while making a meaningful contribution to their
            community. In addition to financial contributions and volunteering,
            individuals can support nonprofits by spreading the word about their
            work. Sharing information about a nonprofit's mission and impact on
            social media, in conversations with friends and family, or by simply
            wearing a t-shirt or carrying a tote bag with the nonprofit's logo
            can help raise awareness and generate support for the cause. At our
            nonprofit organization, we value the support of individuals who are
            committed to creating positive change in the world. Whether it's
            through donations, volunteering, or spreading the word, every action
            can help us achieve our goals and create a better future for all.
          </div>
        </div>
      </div>
      <div className="blog-content"></div>
    </div>
  );
}

export default page;

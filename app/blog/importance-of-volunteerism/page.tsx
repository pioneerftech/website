import React from "react";
import Image from "next/image";
import "../blog-details.scss";
import blog_d_4 from "/public/blog/blog_d_4.jpg";

function page() {
  return (
    <div className="blog-details-container">
      <div className="blog-details-wraper">
        <div className="blog-image-container">
          <Image src={blog_d_4} alt="" />
        </div>
        <div className="blog-heading-container">
          <div className="event-details-venue">Pune / 27 February 2023</div>
          <div className="heading">
            The Importance of Volunteerism: Our Nonprofit Organization's
            Perspective
          </div>
          <div className="subheading">
            At our nonprofit organization, we rely heavily on the support of
            volunteers to achieve our mission. We know that our work would not
            be possible without the dedication and passion of individuals who
            donate their time and skills to help us make a difference. But
            volunteerism is important for more than just the success of our
            organization. It's also a powerful way for individuals to make a
            difference in their communities and to create positive change in the
            world. Volunteering allows individuals to connect with others and to
            build relationships with like-minded individuals. It can also
            provide a sense of purpose and fulfillment, as individuals see the
            impact of their work firsthand. In addition, volunteering can help
            individuals develop new skills and gain valuable experience. Whether
            it's learning how to organize events, write grant proposals, or work
            with clients, volunteering can provide opportunities for growth and
            development. At our nonprofit organization, we offer a variety of
            volunteer opportunities to individuals who are looking to get
            involved. Whether it's helping out at an event, mentoring a client,
            or assisting with administrative tasks, there are many ways to get
            involved and make a difference. We believe that volunteerism is a
            crucial part of creating a better world for all. By donating our
            time and skills, we can work together to address the issues facing
            our communities and to create a brighter future for generations to
            come.
          </div>
        </div>
      </div>
      <div className="blog-content"></div>
    </div>
  );
}

export default page;

import React from "react";
import Image from "next/image";
import "../blog-details.scss";
import blog_d_2 from "/public/blog/blog_d_2.jpg";

function page() {
  return (
    <div className="blog-details-container">
      <div className="blog-details-wraper">
        <div className="blog-image-container">
          <Image src={blog_d_2} alt="" />
        </div>
        <div className="blog-heading-container">
          <div className="event-details-venue">Pune / 27 February 2023</div>
          <div className="heading">
            Getting Involved in Social Impact Work: Tips and Resources from Our
            Nonprofit Organization
          </div>
          <div className="subheading">
            At our nonprofit organization, we know that social impact work can
            be incredibly rewarding, but it can also be overwhelming to know
            where to start. Whether you're a student, a working professional, or
            someone who is simply looking to give back, there are countless ways
            to get involved and make a difference in your community. Here are
            some tips and resources to help you get started: Identify your
            passion: The first step to getting involved in social impact work is
            to identify what you're passionate about. Are you passionate about
            education, mental health, or the environment? Once you know what you
            care about, you can start to explore organizations and initiatives
            that align with your values. Do your research: Once you've
            identified your passion, it's time to do your research. Look for
            organizations in your community that are working in your area of
            interest. Check out their websites, social media, and annual reports
            to get a sense of their mission, programs, and impact. Start small:
            If you're new to social impact work, it's okay to start small. Look
            for volunteer opportunities or events that align with your
            interests. Attend community meetings or workshops to learn more
            about the issues you care about. Build relationships: Social impact
            work is all about building relationships. Reach out to organizations
            and individuals who are doing the work you care about. Attend
            networking events and connect with like-minded individuals. Stay
            informed: Stay up-to-date on current events and issues related to
            your passion. Read news articles, follow social media accounts, and
            attend relevant events to stay informed. At our nonprofit
            organization, we offer a variety of resources and volunteer
            opportunities for individuals who are interested in social impact
            work. Whether you're looking to volunteer your time, donate to a
            cause, or simply learn more about the work we do, we welcome you to
            join us in creating a better world for all.
          </div>
        </div>
      </div>
      <div className="blog-content"></div>
    </div>
  );
}

export default page;

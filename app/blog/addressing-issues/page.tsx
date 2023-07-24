import React from "react";
import Image from "next/image";
import "../blog-details.scss";
import blog_d_3 from "/public/blog/blog_d_3.jpg";

function page() {
  return (
    <div className="blog-details-container">
      <div className="blog-details-wraper">
        <div className="blog-image-container">
          <Image src={blog_d_3} alt="" />
        </div>
        <div className="blog-heading-container">
          <div className="event-details-venue">Pune / 27 February 2023</div>
          <div className="heading">
            Addressing Current Events and Social Issues: Our Nonprofit
            Organization's Approach
          </div>
          <div className="subheading">
            At our nonprofit organization, we believe that it's important to
            address current events and social issues that align with our mission
            and values. We know that many of the issues facing our society
            today, from racial injustice to climate change, require collective
            action to create lasting change. One way we address these issues is
            by using our platform to raise awareness and educate our community.
            We share news articles and social media posts about current events
            related to our focus areas, and we offer educational resources to
            help individuals understand the issues at hand. In addition, we
            partner with other organizations and community groups to amplify our
            impact. By working together, we can make a greater impact and
            address these issues from multiple angles. At the same time, we
            recognize that these issues are complex and often deeply rooted in
            systemic problems. We believe that it's important to take a nuanced
            approach and to listen to the voices of those most impacted by these
            issues. One of the ways we do this is by hosting community meetings
            and forums to facilitate conversations around these issues. By
            creating a space for dialogue, we can better understand the needs of
            our community and work together to create meaningful change.
            Overall, we believe that addressing current events and social issues
            is an important part of our nonprofit organization's work. By
            staying informed, educating others, and working together with our
            community, we can create a better world for all.
          </div>
        </div>
      </div>
      <div className="blog-content"></div>
    </div>
  );
}

export default page;

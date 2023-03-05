import React from "react";
import Image from "next/image";
import "../blog-details.scss";
import blog_d_7 from "/public/blog/blog_d_7.jpg";

function page() {
  return (
    <div className="blog-details-container">
      <div className="blog-details-wraper">
        <div className="blog-image-container">
          <Image src={blog_d_7} alt="" />
        </div>
        <div className="blog-heading-container">
          <div className="event-details-venue">Pune / 27 February 2023</div>
          <div className="heading">
            Collaborating for Impact: The Power of Nonprofit Partnerships
          </div>
          <div className="subheading">
            At our nonprofit organization, we believe that collaboration is
            essential to achieving our mission and creating lasting change in
            our communities. We know that no one organization can tackle complex
            social issues alone, and that by working together, we can achieve
            greater impact. One way we collaborate with other nonprofits is
            through partnerships. We seek out organizations with complementary
            missions and expertise, and work together to develop joint programs
            and initiatives that address critical community needs. By combining
            our resources and expertise, we can achieve greater impact than we
            could on our own. Another way we collaborate with other nonprofits
            is through coalitions and networks. We join forces with other
            organizations, advocacy groups, and community members to advocate
            for policy change, raise awareness about social issues, and build
            collective power to drive systemic change. Collaboration also allows
            us to learn from other organizations and share best practices. We
            participate in peer learning networks and attend conferences and
            workshops to exchange ideas and knowledge with other nonprofits. At
            our nonprofit organization, we value collaboration and believe that
            it's an essential part of achieving our mission. By working with
            other nonprofits, we can leverage our collective strengths, build
            networks of support, and create lasting change in our communities.
          </div>
        </div>
      </div>
      <div className="blog-content"></div>
    </div>
  );
}

export default page;

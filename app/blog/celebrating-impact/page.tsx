import React from "react";
import Image from "next/image";
import blog_d_1 from "/public/blog/blog_d_1.jpg";
import "../blog-details.scss";

function page() {
  return (
    <div className="blog-details-container">
      <div className="blog-details-wraper">
        <div className="blog-image-container">
          <Image src={blog_d_1} alt="" />
        </div>
        <div className="blog-heading-container">
          <div className="event-details-venue">Pune / 27 February 2023</div>
          <div className="heading">
            Celebrating Impact: How Our Nonprofit Organization is Making a
            Difference
          </div>
          <div className="subheading">
            At our nonprofit organization, we believe in the power of collective
            impact to create positive change in our communities. Since our
            founding, we have been working tirelessly to make a difference in
            the lives of those we serve. Through our programs and initiatives,
            we have helped countless individuals overcome challenges and achieve
            their goals. One of the most rewarding aspects of our work is seeing
            the impact we have on our clients' lives. We have heard countless
            stories of individuals who have turned their lives around thanks to
            our programs. Whether it's providing access to education, mental
            health services, or job training, we know that our work is making a
            tangible difference in our community. Our impact is not just
            anecdotal, however. We also have the statistics to back up our work.
            Through careful tracking and evaluation, we know that our programs
            are achieving measurable results. From increased high school
            graduation rates to improved mental health outcomes, we are proud of
            the impact we have made and continue to make. None of this would be
            possible without the support of our volunteers, donors, and
            community partners. We are grateful for the individuals and
            organizations who share our vision for a better world and work
            alongside us to achieve it. As we reflect on our impact, we are
            humbled by the work that still needs to be done. We know that there
            are countless individuals in our community who are still struggling,
            and we are committed to continuing our work to support them. We look
            forward to the future with optimism, knowing that together, we can
            create a world where everyone has the opportunity to thrive.
          </div>
        </div>
      </div>
      <div className="blog-content"></div>
    </div>
  );
}

export default page;

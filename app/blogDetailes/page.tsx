import React from "react";
import "./blogDetails.scss";
import Image from "next/image";
import Blogimg1 from "/public/blog/blog1.jpg";

function BlogDetails({ blogId, setActiveBlog }: any) {
  return (
    <div className={`blog-details-container ${blogId != 0 ? "active" : ""}`}>
      <div className="blog-details">
        <div className="close-icon d-f-c hover">X</div>
        <div className="blog-details-sub-container">
          <div className="blog-image-container">
            <Image src={Blogimg1} alt="" />
          </div>
        </div>
        <div className="blog-details-sub-container blog-details-content">
          <div className="hero-content f-d-col d-f-c">
            <div className="heading">
              A Small Glimpse of How Old Age Homes are changing to Better
            </div>
            <div className="subheading">
              Old age homes are transforming into vibrant communities where
              seniors can thrive. With a focus on wellness, social engagement,
              and personalized care, these facilities are redefining what it
              means to age gracefully.
            </div>
          </div>
          <div className="blog-details-venue">
            06 March 2023, 09:00 am, Seva Mahatirth Badi, Udaipur
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;

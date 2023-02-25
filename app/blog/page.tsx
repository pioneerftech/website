"use client";
import React from "react";
import "./blog.scss";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import cardimg1 from "../../public/blog/cardimg1.jpg";
import cardimg2 from "../../public/blog/cardimg2.jpg";
import cardimg3 from "../../public/blog/cardimg3.jpg";
import cardimg4 from "../../public/blog/cardimg4.jpg";
import cardimg5 from "../../public/blog/cardimg5.jpg";
import cardimg6 from "../../public/blog/cardimg6.jpg";
import cardimg7 from "../../public/blog/cardimg7.jpg";
import cardimg8 from "../../public/blog/cardimg8.jpg";

function Blog() {
  function FaRegComments() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 576 512"
        height="1em"
        width="1em"
      >
        <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z" />
      </svg>
    );
  }

  function FaRegEye() {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 576 512"
        height="1em"
        width="1em"
      >
        <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
      </svg>
    );
  }

  return (
    <div className="blog-container">
      <div className="image-container">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">Blog</div>
          <div className="subheading">Give a helping hand for poor people</div>
        </div>
      </div>
      <PageSaperator />
      <div className="blog-card-container">
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg1} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">How</div>
              <div className="image-tag">Old Age Home</div>
              <div className="image-description">Are Changing To Better</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              A Small Glimpse of How Old Age Homes are changing to Better
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg2} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">How To</div>
              <div className="image-tag">Senior Citizens</div>
              <div className="image-description">Can Overcome From Stress</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              How can Senior Citizens Overcome Stress
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>{" "}
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg3} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">The</div>
              <div className="image-tag">Old Age Homes</div>
              <div className="image-description">And It's Advantages</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              Old Age Homes and Its Advantages
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>{" "}
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg4} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">5 Reasons</div>
              <div className="image-tag">Become Volunteer</div>
              <div className="image-description">For Old Age Home</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              Reasons Why You Must Volunteer for Old Age Homes
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>{" "}
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg5} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">4 Important</div>
              <div className="image-tag">Old Age Home</div>
              <div className="image-description">Factors To Choose</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              Things to bear in mind while choosing an old age home
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>{" "}
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg6} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">For</div>
              <div className="image-tag">Senior Citizens</div>
              <div className="image-description">5 Amazing Activities</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              5 Amazing Activities for Senior Citizens in Old Age Homes
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg7} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">Best</div>
              <div className="image-tag">Old Age Home</div>
              <div className="image-description">Support Elderly Pepole.</div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              Elderly people suffering from depression & loneliness
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>
        <div className="blog-card hover">
          <div className="blog-image-container">
            <div className="blog-image-wrap">
              <Image src={cardimg8} alt="" />
            </div>
            <div className="image-content-bg">
              <div className="image-sub-tag">Our</div>
              <div className="image-tag">NGO's Role</div>
              <div className="image-description">
                In Child Education And Women empowerment.
              </div>
              <div className="foundation-tag">PIONEER Foundation</div>
            </div>
          </div>
          <div className="blog-content-container">
            <div className="blog-date-depart-wrap">
              21st February 2023 / <span>Old Age Home</span>
            </div>
            <div className="blog-content-tagline">
              Women empowerment, developing old age homes and promoting child
              education
            </div>
          </div>
          <div className="blog-comment-view-wraper">
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegComments />
              </div>
              <div className="comment-view-count">0</div>
              <div className="comment-view-tag">Comment</div>
            </div>
            <div className="blog-comment">
              <div className="comment-view-logo">
                <FaRegEye />
              </div>
              <div className="comment-view-count">112</div>
              <div className="comment-view-tag">Views</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

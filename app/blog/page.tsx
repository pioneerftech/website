"use client";
import React, { useState } from "react";
import "./blog.scss";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import cardimg1 from "/public/blog/cardimg1.jpg";
import cardimg2 from "/public/blog/cardimg2.jpg";
import cardimg3 from "/public/blog/cardimg3.jpg";
import cardimg4 from "/public/blog/cardimg4.jpg";
import cardimg5 from "/public/blog/cardimg5.jpg";
import cardimg6 from "/public/blog/cardimg6.jpg";
import cardimg7 from "/public/blog/cardimg7.jpg";
import cardimg8 from "/public/blog/cardimg8.jpg";
import blog_1 from "/public/blog/blog_1.jpg";
import blog_2 from "/public/blog/blog_2.jpg";
import blog_3 from "/public/blog/blog_3.jpg";
import blog_4 from "/public/blog/blog_4.jpg";
import blog_5 from "/public/blog/blog_5.jpg";
import blog_6 from "/public/blog/blog_6.jpg";
import blog_7 from "/public/blog/blog_7.jpg";
import Link from "next/link";

function Blog() {
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
          <Link href="/blog/celebrating-impact">
            <div className="blog-image-container">
              <div className="blog-image-wrap">
                <Image src={blog_1} alt="" />
              </div>
              {/* <div className="image-content-bg">
                <div className="image-sub-tag">How</div>
                <div className="image-tag">Old Age Home</div>
                <div className="image-description">Are Changing To Better</div>
                <div className="foundation-tag">PIONEER Foundation</div>
              </div> */}
            </div>
            <div className="blog-content-container">
              <div className="blog-date-depart-wrap">
                21st February 2023 / <span>Celebrating Impact</span>
              </div>
              <div className="blog-content-tagline">
                How Our Nonprofit Organization is Making a Difference
              </div>
            </div>
            {/* <div className="blog-comment-view-wraper">
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
            </div> */}
          </Link>
        </div>

        <div className="blog-card hover">
          <Link href="/blog/getting-involved">
            <div className="blog-image-container">
              <div className="blog-image-wrap">
                <Image src={blog_2} alt="" />
              </div>
            </div>
            <div className="blog-content-container">
              <div className="blog-date-depart-wrap">
                21st February 2023 /
                <span>Getting Involved in Social Impact Work</span>
              </div>
              <div className="blog-content-tagline">
                Tips and Resources from Our Nonprofit Organization
              </div>
            </div>
          </Link>
        </div>

        <div className="blog-card hover">
          <Link href="/blog/addressing-issues">
            <div className="blog-image-container">
              <div className="blog-image-wrap">
                <Image src={blog_3} alt="" />
              </div>
            </div>
            <div className="blog-content-container">
              <div className="blog-date-depart-wrap">
                21st February 2023 /
                <span>Addressing Current Events and Social Issues:</span>
              </div>
              <div className="blog-content-tagline">
                Our Nonprofit Organization's Approach
              </div>
            </div>
          </Link>
        </div>

        <div className="blog-card hover">
          <Link href="/blog/importance-of-volunteerism">
            <div className="blog-image-container">
              <div className="blog-image-wrap">
                <Image src={blog_4} alt="" />
              </div>
            </div>
            <div className="blog-content-container">
              <div className="blog-date-depart-wrap">
                21st February 2023 /<span>The Importance of Volunteerism:</span>
              </div>
              <div className="blog-content-tagline">
                Our Nonprofit Organization's Perspective
              </div>
            </div>
          </Link>
        </div>

        <div className="blog-card hover">
          <Link href="/blog/supporting-nonprofits">
            <div className="blog-image-container">
              <div className="blog-image-wrap">
                <Image src={blog_5} alt="" />
              </div>
            </div>
            <div className="blog-content-container">
              <div className="blog-date-depart-wrap">
                21st February 2023 /<span>Supporting Nonprofits:</span>
              </div>
              <div className="blog-content-tagline">
                How Individuals Can Make a Difference
              </div>
            </div>
          </Link>
        </div>

        <div className="blog-card hover">
          <Link href="/blog/showcasing-impact">
            <div className="blog-image-container">
              <div className="blog-image-wrap">
                <Image src={blog_6} alt="" />
              </div>
            </div>
            <div className="blog-content-container">
              <div className="blog-date-depart-wrap">
                21st February 2023 /<span>Showcasing Impact:</span>
              </div>
              <div className="blog-content-tagline">
                How Our Nonprofit Organization Measures Success
              </div>
            </div>
          </Link>
        </div>

        <div className="blog-card hover">
          <Link href="/blog/collaborating-for-impact">
            <div className="blog-image-container">
              <div className="blog-image-wrap">
                <Image src={blog_7} alt="" />
              </div>
            </div>
            <div className="blog-content-container">
              <div className="blog-date-depart-wrap">
                21st February 2023 /<span>Collaborating for Impact:</span>
              </div>
              <div className="blog-content-tagline">
                The Power of Nonprofit Partnerships
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;

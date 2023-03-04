import React from "react";
import Image from "next/image";
import Blogimg1 from "/public/blog/blog1.jpg";
import '../blog-details.scss'

function page() {
    return (
        <div className="blog-details-container">
            <div className="blog-details-wraper">
                <div className="blog-image-container">
                    <Image src={Blogimg1} alt="" />
                </div>
                <div className="blog-heading-container">
                    <div className="event-details-venue">Pune / 27 February 2023</div>
                    <div className="heading">
                        blog2
                    </div>
                    <div className="subheading">
                        Old age homes are transforming into vibrant communities where
                        seniors can thrive. With a focus on wellness, social engagement, and
                        personalized care, these facilities are redefining what it means to
                        age gracefully. Old age homes are transforming into vibrant
                        communities where seniors can thrive. With a focus on wellness,
                        social engagement, and personalized care, these facilities are
                        redefining what it means to age gracefully.
                    </div>
                </div>
            </div>
            <div className="blog-content"></div>
        </div>
    );
}

export default page;

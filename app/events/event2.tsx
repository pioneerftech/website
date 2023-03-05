import React from "react";
import PageSaperator from "@pageSaperator";
import Image from "next/image";
import Eventimg2 from "../../public/event/secondevent.jpg";

function Event2() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg2} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">
            #CommunityFundraiser #DoorToDoorDonations #OutdoorVolunteers
            #DonationBoxes #GivingBack #CharitableEvent
          </div>
          <br />
          <div className="subheading">
            Our Pioneer Foundation held a successful fundraising event where we
            collected donations on doorsteps and outdoors with the help of
            donation boxes. Our volunteers went door-to-door and approached
            people in busy outdoor areas, offering donation boxes as a
            convenient and safe way to contribute. Thanks to the hard work and
            dedication of our volunteers, we were able to collect a significant
            amount of donations and are grateful to our community for their
            generosity and support. We are excited to continue our efforts to
            make a positive impact in the lives of those we serve.
          </div>
        </div>
        <div className="event-details-venue">
          12th December 2022, Khairaw.Jat.
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          Our Pioneer Foundation's recently organized a successful fundraising
          event where we collected donations on doorsteps and outdoors with the
          help of donation boxes. With the ongoing pandemic and social
          distancing measures in place, we wanted to find a safe and effective
          way to continue our fundraising efforts. <br />
          <br /> To start, we created a list of potential donors in the area and
          organized our volunteers into small teams. Some volunteers were
          assigned to go door-to-door, while others were stationed in busy
          outdoor areas like parks and shopping centers. We provided all
          volunteers with donation boxes and information about our Foundation
          and the purpose of the fundraiser. <br />
          <br />
          Our volunteers who went door-to-door introduced themselves and our
          Foundation, explained the fundraiser, and offered the donation boxes
          as a way for people to contribute. Similarly, our outdoor volunteers
          approached people in busy areas and explained the fundraiser, offering
          the donation boxes as a convenient way to contribute.
          <br />
          <br /> We were thrilled to see that many people were eager to support
          our cause and generously donated to the boxes. Thanks to the hard work
          and dedication of our volunteers, we were able to collect a
          significant amount of donations both on doorsteps and outdoors.
          <br />
          <br /> The donation boxes proved to be a convenient and safe way for
          people to contribute, and we are incredibly grateful to our community
          for their generosity and support. Overall, the event was a great
          success, and we are proud of the hard work and dedication of our
          volunteers.
          <br />
          <br /> We are already planning our next fundraising event and are
          excited to continue our efforts to make a positive impact in the lives
          of those we serve. Thank you to everyone who contributed and supported
          our cause.
        </div>
      </div>
    </>
  );
}

export default Event2;

import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg6_d from "/public/event/Eventimg6_d.jpg";

function Event6() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg6_d} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#महाआरोग्यशिबिर #खैराव</div>
          <br />
          <div className="subheading">
            पायोनियर एज्युकेशन अँड रिसर्च फाउंडेशन,पुणे यांच्या वतीने आणि
            सार्वजनिक आरोग्य विभागाच्या सहकार्याने महाआरोग्य शिबिराचे आयोजन
            करण्यात आले आहे.
          </div>
        </div>
        <div className="event-details-venue">
          दिनांक:- 12/03/2023 वेळ:- सकाळी 10 ते सायंकाळी 5 वाजेपर्यंत ठिकाण:-
          खैराव, ता-जत,जि-सांगली
        </div>
        <div className="center">
          <PageSaperator />
        </div>
        <div className="width100">
          पायोनियर एज्युकेशन अँड रिसर्च फाउंडेशन,पुणे यांच्या वतीने आणि
          सार्वजनिक आरोग्य विभागाच्या सहकार्याने महाआरोग्य शिबिराचे आयोजन
          करण्यात आले आहे. ग्रामीण भागातील लोकांना आरोग्याच्या बाबतीतील असलेल्या
          समस्यांसाठी मोठ्या शहरात जाणे खर्चिक राहते त्यामुळे पायोनियर फाउंडेशन
          मोठ्या शहरातील मोठ्या डॉक्टरांना आपल्या गावात घेऊन येत आहे. सर्वांनी
          या महाआरोग्य शिबिराचा लाभ घ्यावा हे आवाहन पायोनियर फाउंडेशन वतीने
          करण्यात येत आहे. #महाआरोग्यशिबिर #खैराव #पायोनियरफाउंडेशन
        </div>
      </div>
    </>
  );
}

export default Event6;

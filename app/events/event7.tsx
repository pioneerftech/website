import PageSaperator from "@pageSaperator";
import React from "react";
import Image from "next/image";
import Eventimg7 from "/public/event/Eventimg7.jpg";

function Event7() {
  return (
    <>
      <div className="event-details-sub-container">
        <div className="event-image-container">
          <Image src={Eventimg7} alt="" />
        </div>
      </div>
      <div className="event-details-sub-container event-details-content">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">#महाआरोग्यशिबिर #खैराव</div>
          <br />
          <div className="subheading">
            पायोनियर एज्युकेशन अँड रिसर्च फाउंडेशन ग्रामीण भागातील कष्टकरी
            वर्गाच्या हितासाठी कायम कटिबद्ध असणार आहे.
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
          पायोनियर एज्युकेशन अँड रिसर्च फाउंडेशन ग्रामीण भागातील कष्टकरी
          वर्गाच्या हितासाठी कायम कटिबद्ध असणार आहे. ग्रामीण भागातील सर्वसामान्य
          लोकांचं जीवनमान उंचावण्यासाठी, त्यांना शासनाच्या विविध योजना व त्यांचा
          लाभ मिळवून देण्यासाठी, कायद्याविषयी जागृती निर्माण करण्यासाठी,त्यांचं
          आरोग्य सदृढ राहावं यासाठी व त्यांच्या मुलाबाळांना चांगल्या दर्जाचे
          शिक्षण मिळावे यासाठी येत्या काळात पायोनियर फाउंडेशनच्या माध्यमातून
          विविध कार्यक्रम घेतले जाणार आहेत.
        </div>
      </div>
    </>
  );
}

export default Event7;

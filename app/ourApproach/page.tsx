import React from 'react'
import './ourApproach.scss';
import Image from 'next/image'
import CONTENT1 from "../../public/howitwork/content1.jpg"; 
import content2 from "../../public/howitwork/content2.jpg";

function ourApproach() {
    return (
        <div className='ourApproach-container'>
            <div className='image-container'>
                <div className='tag'>Our Approach</div>
            </div>
            <div className='content-container'>
                <div className='content-sub-container'>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 01</div>
                        <div className='content-tag'>Our approach <span> To Child Education</span></div>
                        <div className='content-description'>As per Manav Kartavya, a quality childhood education depends on three interacting pillars: the teachers, environment, and parents. Of course, the child is always in the center of that triangle; requiring an attention to his/her distinct interests, skills, and goals. Manav Kartavya ensures to fulfill the fundamental educational needs by facilitating them the accessibility to basic educational needs which can ultimately promote learning.</div>
                    </div>
                    <div className='content-image-container'>
                        <Image src={CONTENT1} alt=""/>
                    </div>
                </div>
                <div className='content-sub-container'>
                    <div className='content-image-container'>
                        <Image src={content2} alt=""/>
                    </div>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 02</div>
                        <div className='content-tag'>Our approach <span>To Women Empowerment</span></div>
                        <div className='content-description'>Manav Kartavya is an adamant believer of, ‘Strong Women, Strong Communities’. We are approaching women empowerment by influencing over needs for education, by influencing over creating healthy families, and by influencing over strengthening income-generating activities. It is because Manav Kartavya strongly believes that Women Empowerment depends on three pillars: education, quality healthcare, and sustainable income-generating activities.</div>
                    </div>
                </div>
                 </div>
        </div>
    )
}

export default ourApproach
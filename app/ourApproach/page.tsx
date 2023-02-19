import React from 'react'
import './ourApproach.scss';
import Image from 'next/image'
import CONTENT1 from "../../public/ourApproach/content1.jpg";
import content2 from "../../public/ourApproach/content2.jpg";
import content3 from "../../public/ourApproach/content3.jpg";
import content4 from "../../public/ourApproach/content4.jpg";
import content5 from "../../public/ourApproach/content5.jpg";
import content6 from "../../public/ourApproach/content6.jpg";
import PageSaperator from '@pageSaperator';



function ourApproach() {
    return (
        <div className='ourApproach-container'>
            <div className='image-container'>
                <div className='tag'>Our Approach</div>
            </div>
            <PageSaperator/>
            <div className='content-sub-tag'>At Manav Kartavya, we have mainstreamed our means for creating ‘The Advantaged Society’ into approaches for every project. We have well-thought proven means for everything from building an idea to help to an individual especially from economically weaker communities to putting that idea into execution on board. The consistency in our approaches guarantees that we deliver a quality empowerment every time.
<br /><br />
As every student cannot be taught in same way for the best output, we believe a single approach cannot be applied to each task for the best output. This is why Manav Kartavya has designed customized approaches based on well-versed research for every project to meet the needs of each project.</div>
            <PageSaperator/>

            <div className='content-container'>
                <div className='content-sub-container'>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 01</div>
                        <div className='content-tag'>Our approach <span> To Child Education</span></div>
                        <div className='content-description'>As per Manav Kartavya, a quality childhood education depends on three interacting pillars: the teachers, environment, and parents. Of course, the child is always in the center of that triangle; requiring an attention to his/her distinct interests, skills, and goals. Manav Kartavya ensures to fulfill the fundamental educational needs by facilitating them the accessibility to basic educational needs which can ultimately promote learning.</div>
                    </div>
                    <div className='content-image-container'>
                        <Image src={CONTENT1} alt="" />
                    </div>
                </div>
                <div className='content-sub-container'>
                    <div className='content-image-container'>
                        <Image src={content2} alt="" />
                    </div>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 02</div>
                        <div className='content-tag'>Our approach <span>To Women Empowerment</span></div>
                        <div className='content-description'>Manav Kartavya is an adamant believer of, ‘Strong Women, Strong Communities’. We are approaching women empowerment by influencing over needs for education, by influencing over creating healthy families, and by influencing over strengthening income-generating activities. It is because Manav Kartavya strongly believes that Women Empowerment depends on three pillars: education, quality healthcare, and sustainable income-generating activities.</div>
                    </div>
                </div>
                <div className='content-sub-container'>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 03</div>
                        <div className='content-tag'>Our approach <span> To Old Age Home</span></div>
                        <div className='content-description'>As globalization is taking place, segmentation of family is natural. As immense improvements in healthcare sector are taking place, increase in the size of elderly population is also natural. But, Manav Kartavya strongly believes that as the segmentation of family as well as the growth in elderly population is increasing, the occurrence of old-age home and senior citizens traffic in it shall not be natural, however, that’s the reality which we are facing today.</div>
                    </div>
                    <div className='content-image-container'>
                        <Image src={content3} alt="" />
                    </div>
                </div>
                <div className='content-sub-container'>
                    <div className='content-image-container'>
                        <Image src={content4} alt="" />
                    </div>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 04</div>
                        <div className='content-tag'>Our approach <span>To Helping Needy Pepole</span></div>
                        <div className='content-description'>When we say, “NEEDY!” It’s actually an inclusive term which covers everything: ranging from poverty, illiteracy, violence against girls and women, child labor, malnourishment, etc. Whatever you can name it under the term, ‘Needy’, but The One and Only solution to transform this which Manav Kartavya feels workable is by uplifting the economic household security through any means. And this is what Manav Kartavya is going to make happen to transform the economically weaker communities to self-reliant communities.</div>
                    </div>
                </div>
                <div className='content-sub-container'>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 05</div>
                        <div className='content-tag'>Our approach <span> To Health</span></div>
                        <div className='content-description'>Of course! Better health is central to human happiness and well-being And since Manav Kartavya is committed to create, ‘The Advantaged Society’, we are approaching to create healthy society by a variety of means; such as by facilitating vital healthcare to needy people, by providing financial assistance for Dialysis, by helping in provision of daily nourishments for patients through meals, and by making the availability of essential basic medicines.</div>
                    </div>
                    <div className='content-image-container'>
                        <Image src={content5} alt="" />
                    </div>
                </div>
                <div className='content-sub-container'>
                    <div className='content-image-container'>
                        <Image src={content6} alt="" />
                    </div>
                    <div className='content-wrap'>
                        <div className='step-tag'>Step 06</div>
                        <div className='content-tag'>Our approach <span>To Gaushala</span></div>
                        <div className='content-description'>Our Vedas and Puranas have considered cow as a celestial being. Further, they have considered cow as a kalpataru that can give us health, wealth, and prosperity. It is the giver of all that is good and the embodiment of all that is divine. All our Gods reside in the body of the cow. So, worshipping cow is the same as worshipping our Gods. But as Britishers invaded India, they opened a large number of slaughterhouses and butchered cows for meat which is still in practice today on a very large scale.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ourApproach
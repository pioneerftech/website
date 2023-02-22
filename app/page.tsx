"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "./page.scss";
import PageSaperator from "@pageSaperator";

function FaBookReader(props: any) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z" />
    </svg>
  );
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="home-page-container">
      <div className="image-container">
        <div className="hero-content f-d-col d-f-c">
          <div className="heading">Our Helping To The World</div>
          <div className="subheading">
            Empowered women and girls can lift their entire families and
            communities out of poverty.
          </div>
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">About Pioneer Foundation</div>
        <div className="heading">
          Access to right food provides for exploring the world of
          opportunities. Hence, serving food is not an end, but a means to an
          end.
        </div>
        <div className="content">
          We are a not-for-profit organisation that builds capacity of
          communities to ensure empowerment for marginalised women and girls.
          Our sustainable and holistic interventions in Health, Livelihood,
          Education and Disaster Relief & Resilience, provide innovative
          solutions to deep-rooted development problems. Along with access to
          the international confederation of expertise, we integrate internal
          knowledge and strong network of partnerships to deliver outcomes at
          scale to varied stakeholders.
        </div>
        <div className="read-more d-f-c">
          <div className=" hover-text">Read more...</div>
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap fields-content-wrap d-f-c">
        <div className="heading">Our Work Areas</div>
        <div className="content d-f-c gap-10">
          <div className="field-wrap d-f-c hover card">
            <div className="icon-wrap">
              <FaBookReader />
            </div>
            <div className="details-wrap">
              <div className="heading">EDUCATION</div>
              <div className="desc">
                Education, nutrition and holistic development of children
              </div>
            </div>
          </div>
          <div className="field-wrap d-f-c hover card">
            <div className="icon-wrap">
              <FaBookReader />
            </div>
            <div className="details-wrap">
              <div className="heading">HEALTHCARE</div>
              <div className="desc">
                Taking healthcare services to doorsteps of hard to reach
                communities{" "}
              </div>
            </div>
          </div>
          <div className="field-wrap d-f-c hover card">
            <div className="icon-wrap">
              <FaBookReader />
            </div>
            <div className="details-wrap">
              <div className="heading">WOMEN EMPOWERMENT</div>
              <div className="desc">
                Empowering adolescent girls & women through community engagement{" "}
              </div>
            </div>
          </div>
          <div className="field-wrap d-f-c hover card">
            <div className="icon-wrap">
              <FaBookReader />
            </div>
            <div className="details-wrap">
              <div className="heading">Livelihood</div>
              <div className="desc">
                Skill training and placement support for underprivileged youth
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">Our Vision</div>
        <div className="heading">
          EMPTY STOMACHS DON’T HEAL. THEY ONLY GROWL.
        </div>
        <div className="content">
          To open up a world of opportunities for every vulnerable by ensuring
          food security.
        </div>
        {/* <div className='read-more d-f-c'><div className=' hover-text'>Read more...</div></div> */}
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">Our Mission</div>
        <div className="heading">
          EMPTY STOMACHS DON’T HEAL. THEY ONLY GROWL.
        </div>
        <div className="content">
          We shall provide food to one lakh beneficiaries everyday across
          different vulnerable situations in Mumbai by 2025.
        </div>
        {/* <div className='read-more d-f-c'><div className=' hover-text'>Read more...</div></div> */}
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">FEED TODAY FOR AN EMPOWERED TOMORROW</div>
        <div className="heading">
          You have a chance today to change someone’s future, just by providing
          food. Don’t let it go.
        </div>
        <div className="content">
          We shall provide food to one lakh beneficiaries everyday across
          different vulnerable situations in Mumbai by 2025.
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">THE INSPIRATION BEHIND OUR EXISTENCE</div>
        <div className="heading">
          Akshaya Chaitanya is an initiative with its roots in the compassionate
          story of Srila Prabhupada.
        </div>
        <div className="content">
          One day, while looking out of a window in Mayapur, a small hamlet near
          Calcutta, Srila Prabhupada saw a group of children fighting with stray
          dogs over scraps of food. Deeply moved by this incident, he resolved
          to ensure that no one within a ten mile radius of his centre would go
          hungry. This direction to his followers inspired the genesis of
          various charitable feeding initiatives.
        </div>
      </div>

      <PageSaperator />
      <div className="content-wrap d-f-c">
        <div className="subheading">HEAR FROM OUR BELOVED BENEFICIARIES</div>
        <div className="heading">
          Akshaya Chaitanya is an initiative with its roots in the compassionate
          story of Srila Prabhupada.
        </div>
        <div className="content">
          One day, while looking out of a window in Mayapur, a small hamlet near
          Calcutta, Srila Prabhupada saw a group of children fighting with stray
          dogs over scraps of food. Deeply moved by this incident, he resolved
          to ensure that no one within a ten mile radius of his centre would go
          hungry. This direction to his followers inspired the genesis of
          various charitable feeding initiatives.
        </div>
      </div>
    </div>
  );
}

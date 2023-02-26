"use client";
import "@styles/globals.scss";
import "@styles/layout.scss";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "../public/logo.png";
import Footer from "@footer/footer";
import PageSaperator from "@pageSaperator";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileNavActive, setmobileNavActive] = useState(false);
  const onNavLinkClick = (event: any) => {
    setmobileNavActive(false);
    !status && document.body.classList.remove("blur");
    setTimeout(() => {
      const element: any = document.getElementById("header");
      element.style.top = "0";
    }, 1000);
  };
  const navClick = (status: any) => {
    setmobileNavActive(status);
    !status && document.body.classList.remove("blur");
  };

  return (
    <html lang="en">
      <head />
      <body>
        <div className="app-contanier">
          <header id="header" className="navigation-ourter-wrap">
            <div className="inner-wrap">
              <Link
                onClick={(event) => {
                  onNavLinkClick(event);
                }}
                className="logo"
                href="/"
              >
                <Image
                  src={LOGO}
                  alt="Pioneer foundation"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />
              </Link>
              <div className="nav-item-wrap">
                <ul>
                  <li className="fadedown-enter-done">
                    <Link
                      onClick={(event) => {
                        onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="fadedown-enter-done">
                    <Link
                      onClick={(event) => {
                        onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="/ourApproach"
                    >
                      Our Approach
                    </Link>
                  </li>
                  <li className="fadedown-enter-done">
                    <Link
                      onClick={(event) => {
                        onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="/aboutus"
                    >
                      About
                    </Link>
                  </li>
                  <li className="fadedown-enter-done">
                    <Link
                      onClick={(event) => {
                        onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="fadedown-enter-done">
                    <Link
                      onClick={(event) => {
                        onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="/events"
                    >
                      Events
                    </Link>
                  </li>
                  <li className="fadedown-enter-done">
                    <Link
                      onClick={(event) => {
                        onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="fadedown-enter-done">
                    <Link
                      onClick={(event) => {
                        onNavLinkClick(event);
                      }}
                      className="nav-item"
                      href="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mobile-nav-wrap fade-enter-done">
                <div>
                  <button
                    className={
                      mobileNavActive
                        ? "mobile-nav-btn"
                        : "mobile-nav-active-btn"
                    }
                    onClick={() => navClick(mobileNavActive ? false : true)}
                  >
                    <div className="ham-box">
                      <div className="ham-box-inner"></div>
                    </div>
                  </button>
                  <aside
                    aria-hidden={mobileNavActive}
                    className={
                      mobileNavActive
                        ? "nav-item-wrap-mobile-active"
                        : "nav-item-wrap-mobile"
                    }
                  >
                    <nav>
                      <ul>
                        <li className="fadedown-enter-done">
                          <Link
                            onClick={(event) => {
                              onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="fadedown-enter-done">
                          <Link
                            onClick={(event) => {
                              onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="/ourApproach"
                          >
                            Our Approach
                          </Link>
                        </li>
                        <li className="fadedown-enter-done">
                          <Link
                            onClick={(event) => {
                              onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="/aboutus"
                          >
                            About
                          </Link>
                        </li>
                        <li className="fadedown-enter-done">
                          <Link
                            onClick={(event) => {
                              onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="gallery"
                          >
                            Gallery
                          </Link>
                        </li>
                        <li className="fadedown-enter-done">
                          <Link
                            onClick={(event) => {
                              onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="/events"
                          >
                            Events
                          </Link>
                        </li>
                        <li className="fadedown-enter-done">
                          <Link
                            onClick={(event) => {
                              onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="/blog"
                          >
                            Blog
                          </Link>
                        </li>
                        <li className="fadedown-enter-done">
                          <Link
                            onClick={(event) => {
                              onNavLinkClick(event);
                            }}
                            className="nav-item"
                            href="/contactus"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </aside>
                </div>
              </div>
            </div>
          </header>
          <main className="site-content">
            {children}
            <PageSaperator />
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}

import React from "react";
import style from "./index.module.scss";
import fLogo from "@/assets/front/images/f-logo.png";
import sectigoL from "@/assets/front/images/copyright/sectigoL.png";
import visa from "@/assets/front/images/copyright/1.png";
import mCard from "@/assets/front/images/copyright/2.png";
import amExp from "@/assets/front/images/copyright/3.png";
import papal from "@/assets/front/images/copyright/4.png";
import finger from "@/assets/front/images/svg/finger.svg";
import arrow from "@/assets/front/images/svg/arrow.svg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { RiTiktokFill } from "react-icons/ri";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { TbMapPin } from "react-icons/tb";
const Footer = () => {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.fopFooter}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className={style.footerLogo}>
                                    <Image alt="" src={fLogo} placeholder="fLogo" />
                                    <p>
                                        Himalayan Leisure, Inc. is Nepal base tour company focused on quality service and a reasonable price. We are focused on customer
                                        satisfaction oriented eco-friendly journeys. We are dedicated to provide you excellent services at a reasonable price.
                                    </p>
                                    <div className={style.footerSocial}>
                                        <p>Find us on Social Media</p>
                                        <ul className="d-flex">
                                            <li>
                                                <Link href={"#"}>
                                                    <FaFacebookF />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <ImInstagram />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <BsTwitter />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <FaYoutube />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <RiTiktokFill />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <AiOutlineGooglePlus />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className={style.WriteUs}>
                                    <h3>
                                        <span className={style.handIcon}>
                                            <Image alt="" src={finger} placeholder="finger" />
                                        </span>
                                        We would like to be in touch. Write us now.{" "}
                                        <span className={style.arrowIcon}>
                                            <Image alt="" src={arrow} placeholder="arrow" />
                                        </span>
                                    </h3>
                                </div>
                                <div className={style.footerNav}>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                                            <div className={style.footerNavLinks}>
                                                <h6>Destinations</h6>
                                                <ul>
                                                    <li>
                                                        <Link href={"#"}>Nepal</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Tibet</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Bhutan</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Multi-countries</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                                            <div className={style.footerNavLinks}>
                                                <h6>Destinations</h6>
                                                <ul className={`d-flex flex-wrap justify-content-between ${style.devideMenu}`}>
                                                    <li>
                                                        <Link href={"#"}>Trekking</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Jungle Safari</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Climbing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Adventure Tours</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Expeditions</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Helicopter Tours</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Sightseeing</Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>Day Tours</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className={`${style.footerNavLinks} ${style.navContact}`}>
                                                <h6>Contact Us</h6>
                                                <ul>
                                                    <li>
                                                        <Link href={"#"}>
                                                            <BiPhoneCall /> +977 98510 94100
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"}>
                                                            <FaRegEnvelope /> info@himalayanleisure.com
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <TbMapPin />
                                                        Bhagwati Marg, Thamel
                                                        <br />
                                                        Kathmandu, Nepal
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.subscriptionArea}>
                                    <div className={`d-flex flex-wrap justify-content-between align-items-center ${style.subscription}`}>
                                        <div className={`d-flex ${style.subscriptionLeft}`}>
                                            <input type="text" placeholder={`emailaddress@domain.com`} className={style.subscriptionInput} />
                                            <button className={style.subscribeBtn}>Subscribe</button>
                                        </div>
                                        <div className={style.subscriptionRight}>
                                            <p>Blank Area for Future Contents</p>
                                        </div>
                                    </div>
                                    <div className={style.newsletterText}>
                                        <p>
                                            By subscribing to the newsletter, you agree with our <Link href={"#"}>privacy policy*</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottomFooter}>
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className={style.copyRight}>
                                    <h6>© Copyright (2023), Himalayan Leisure, Inc. All Rights Reserved</h6>
                                    <p>Unauthorized commercial use of the contents on this website is strictly prohibited.</p>
                                </div>
                            </div>
                            <div className={`col-auto d-flex justify-content-between align-items-center ${style.rightIcon}`}>
                                <div className={style.sectigo}>
                                    <Image alt="" src={sectigoL} placeholder="sectigoL" />
                                </div>
                                <ul className="d-flex">
                                    <li>
                                        <Image alt="" src={visa} placeholder="visa" />
                                    </li>
                                    <li>
                                        <Image alt="" src={mCard} placeholder="mCard" />
                                    </li>
                                    <li>
                                        <Image alt="" src={amExp} placeholder="amExp" />
                                    </li>
                                    <li>
                                        <Image alt="" src={papal} placeholder="papal" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

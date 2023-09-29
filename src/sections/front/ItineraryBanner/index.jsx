import React from "react";
import style from "./index.module.scss";

import itineraryBanner from "@/assets/front/images/itinerary-banner.jpg";

import star from "@/assets/front/images/svg/star.svg";
import starStroke from "@/assets/front/images/svg/star-stroke.svg";
import Image from "next/image";
import Link from "next/link";
import { PiPlayCircleLight } from "react-icons/pi";
import { HiOutlineCamera } from "react-icons/hi2";
import { GoCheckCircle } from "react-icons/go";
const ItineraryBanner = () => {
    return (
        <>
            <section className={style.itineraryBanner} style={{ backgroundImage: `url(${itineraryBanner.src})` }}>
                <div className={`d-flex align-items-end justify-content-between  ${style.ibBanBtm}`}>
                    <div className={style.ibBanLeft}>
                        <h6>
                            <span>50% Off Today</span>
                        </h6>
                        <h5>
                            <span>09 Night / 10 Days</span>
                        </h5>
                        <h3>Ghorepani Poon Hill Trekking</h3>
                        <div className={`d-flex align-items-center ${style.ibStar}`}>
                            <ul className="d-flex">
                                <li>
                                    <Image alt="" src={star} placeholder="star" />
                                </li>
                                <li>
                                    <Image alt="" src={star} placeholder="star" />
                                </li>
                                <li>
                                    <Image alt="" src={star} placeholder="star" />
                                </li>
                                <li>
                                    <Image alt="" src={star} placeholder="star" />
                                </li>
                                <li>
                                    <Image alt="" src={starStroke} placeholder="starStroke" />
                                </li>
                            </ul>
                            <span>Based on 129 Reviews</span>
                        </div>
                    </div>
                    <div className={style.ibBanRight}>
                        <div className={`d-flex justify-content-end ${style.galPrev}`}>
                            <ul className="d-flex">
                                <li>
                                    <Link href={"#"} className={style.viewGalleryBtn}>
                                        <HiOutlineCamera /> View Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#"} className={style.videoPreview}>
                                        <PiPlayCircleLight /> Video Preview
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={style.freeCancellation}>
                            <p>
                                <GoCheckCircle /> Free Cancellation 60 Days Before Departure
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItineraryBanner;

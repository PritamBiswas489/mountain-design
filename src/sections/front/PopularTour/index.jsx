import React from "react";
import style from "./index.module.scss";
import madel from "@/assets/front/images/svg/madel.svg";
import recommended1 from "@/assets/front/images/recommended/1.jpg";
import recommended2 from "@/assets/front/images/recommended/2.jpg";
import recommended3 from "@/assets/front/images/recommended/3.jpg";
import recommended4 from "@/assets/front/images/recommended/4.jpg";
import recommended5 from "@/assets/front/images/recommended/5.jpg";
import recommended6 from "@/assets/front/images/recommended/6.jpg";
import batch from "@/assets/front/images/svg/batch.svg";
import map from "@/assets/front/images/svg/map.svg";
import clock from "@/assets/front/images/svg/clock.svg";
import frame from "@/assets/front/images/svg/frame.svg";
import star from "@/assets/front/images/svg/star.svg";
import starStroke from "@/assets/front/images/svg/star-stroke.svg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const PopularTour = () => {
    return (
        <>
            <section className={style.recommendedTour}>
                <div className="container-fluid">
                    <div className={style.recommendedTourTitleArea}>
                        <div className="row">
                            <div className="col-12">
                                <div className={style.recommendedTourTitle}>
                                    <h4>
                                        <span>LOVED BY THE ADVENTURERS</span>Our Best Selling Tour Packages
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Eleifend id sed urna velit lobortis ut etiam aliquet pulvinar. Adipiscing non tempor malesuada
                                        cursus convallis dignissim.
                                    </p>
                                    <div className={style.recommendedBg}>
                                        <h2>
                                            POPULAR TOURS
                                            <span>
                                                <Image alt="" src={madel} placeholder="madel" width={120} height={120} />
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.recommendedTourBody}>
                        <div className="row g-3">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className={style.recommendedBox}>
                                    <div className={style.recommendedBoxTop}>
                                        <Image alt="" src={recommended1} placeholder="recommended1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className={style.listedOff}>
                                            <ul>
                                                <li>Just Listed</li>
                                                <li>20% OFF</li>
                                            </ul>
                                        </div>
                                        <div className={style.batch}>
                                            <Image alt="" src={batch} placeholder="batch" width={48} height={48} />
                                        </div>
                                        <div className={style.bookQuote}>
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href={"#"} className={style.bookNowBtn}>
                                                        Book Now <BsArrowRight />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"} className={style.getQuoteBtn}>
                                                        Get A Quote <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.recommendedBoxBottom}>
                                        <div className={style.recommendedBoxBottomTop}>
                                            <h5>
                                                Ghorepani Poon Hill Trekking<span>09 DAYS</span>
                                            </h5>
                                            <div className={`d-flex align-items-center ${style.reviewRateing}`}>
                                                <span>
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                                </span>
                                                <p>
                                                    From <span>129</span> Reviews
                                                </p>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${style.placeTime}`}>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={map} placeholder="map" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DESTINATION</h5>
                                                        <h6>Nepal</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={clock} placeholder="clock" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DURATION</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={frame} placeholder="frame" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DIFFICULTY</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.exploreArea}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li>
                                                    From <span>USD</span>
                                                    <del>99,999</del>
                                                    <span>89,999</span>
                                                    <small>/ Per Pax</small>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Explore <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className={style.recommendedBox}>
                                    <div className={style.recommendedBoxTop}>
                                        <Image alt="" src={recommended2} placeholder="recommended2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className={style.listedOff}>
                                            <ul>
                                                <li>20% OFF</li>
                                            </ul>
                                        </div>
                                        <div className={style.batch}>
                                            <Image alt="" src={batch} placeholder="batch" width={48} height={48} />
                                        </div>
                                        <div className={style.bookQuote}>
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href={"#"} className={style.bookNowBtn}>
                                                        Book Now <BsArrowRight />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"} className={style.getQuoteBtn}>
                                                        Get A Quote <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.recommendedBoxBottom}>
                                        <div className={style.recommendedBoxBottomTop}>
                                            <h5>
                                                Everest Base Camp Trek<span>09 DAYS</span>
                                            </h5>
                                            <div className={`d-flex align-items-center ${style.reviewRateing}`}>
                                                <span>
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                                </span>
                                                <p>
                                                    From <span>129</span> Reviews
                                                </p>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${style.placeTime}`}>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={map} placeholder="map" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DESTINATION</h5>
                                                        <h6>Nepal</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={clock} placeholder="clock" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DURATION</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={frame} placeholder="frame" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DIFFICULTY</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.exploreArea}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li>
                                                    From <span>USD</span>
                                                    <del>99,999</del>
                                                    <span>89,999</span>
                                                    <small>/ Per Pax</small>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Explore <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className={style.recommendedBox}>
                                    <div className={style.recommendedBoxTop}>
                                        <Image alt="" src={recommended3} placeholder="recommended3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className={style.listedOff}>
                                            <ul>
                                                <li>Just Listed</li>
                                            </ul>
                                        </div>
                                        <div className={style.batch}>
                                            <Image alt="" src={batch} placeholder="batch" width={48} height={48} />
                                        </div>
                                        <div className={style.bookQuote}>
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href={"#"} className={style.bookNowBtn}>
                                                        Book Now <BsArrowRight />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"} className={style.getQuoteBtn}>
                                                        Get A Quote <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.recommendedBoxBottom}>
                                        <div className={style.recommendedBoxBottomTop}>
                                            <h5>
                                                Chola Pass Trekking<span>09 DAYS</span>
                                            </h5>
                                            <div className={`d-flex align-items-center ${style.reviewRateing}`}>
                                                <span>
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                                </span>
                                                <p>
                                                    From <span>129</span> Reviews
                                                </p>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${style.placeTime}`}>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={map} placeholder="map" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DESTINATION</h5>
                                                        <h6>Nepal</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={clock} placeholder="clock" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DURATION</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={frame} placeholder="frame" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DIFFICULTY</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.exploreArea}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li>
                                                    From <span>USD</span>
                                                    <del>99,999</del>
                                                    <span>89,999</span>
                                                    <small>/ Per Pax</small>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Explore <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className={style.recommendedBox}>
                                    <div className={style.recommendedBoxTop}>
                                        <Image alt="" src={recommended4} placeholder="recommended4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className={style.listedOff}>
                                            <ul>
                                                <li>Just Listed</li>
                                                <li>20% OFF</li>
                                            </ul>
                                        </div>
                                        <div className={style.batch}>
                                            <Image alt="" src={batch} placeholder="batch" width={48} height={48} />
                                        </div>
                                        <div className={style.bookQuote}>
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href={"#"} className={style.bookNowBtn}>
                                                        Book Now <BsArrowRight />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"} className={style.getQuoteBtn}>
                                                        Get A Quote <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.recommendedBoxBottom}>
                                        <div className={style.recommendedBoxBottomTop}>
                                            <h5>
                                                Ghorepani Poon Hill Trekking<span>09 DAYS</span>
                                            </h5>
                                            <div className={`d-flex align-items-center ${style.reviewRateing}`}>
                                                <span>
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                                </span>
                                                <p>
                                                    From <span>129</span> Reviews
                                                </p>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${style.placeTime}`}>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={map} placeholder="map" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DESTINATION</h5>
                                                        <h6>Nepal</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={clock} placeholder="clock" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DURATION</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={frame} placeholder="frame" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DIFFICULTY</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.exploreArea}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li>
                                                    From <span>USD</span>
                                                    <del>99,999</del>
                                                    <span>89,999</span>
                                                    <small>/ Per Pax</small>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Explore <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className={style.recommendedBox}>
                                    <div className={style.recommendedBoxTop}>
                                        <Image alt="" src={recommended5} placeholder="recommended5" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className={style.listedOff}>
                                            <ul>
                                                <li>Just Listed</li>
                                                <li>20% OFF</li>
                                            </ul>
                                        </div>
                                        <div className={style.batch}>
                                            <Image alt="" src={batch} placeholder="batch" width={48} height={48} />
                                        </div>
                                        <div className={style.bookQuote}>
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href={"#"} className={style.bookNowBtn}>
                                                        Book Now <BsArrowRight />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"} className={style.getQuoteBtn}>
                                                        Get A Quote <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.recommendedBoxBottom}>
                                        <div className={style.recommendedBoxBottomTop}>
                                            <h5>
                                                Ghorepani Poon Hill Trekking<span>09 DAYS</span>
                                            </h5>
                                            <div className={`d-flex align-items-center ${style.reviewRateing}`}>
                                                <span>
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                                </span>
                                                <p>
                                                    From <span>129</span> Reviews
                                                </p>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${style.placeTime}`}>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={map} placeholder="map" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DESTINATION</h5>
                                                        <h6>Nepal</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={clock} placeholder="clock" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DURATION</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={frame} placeholder="frame" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DIFFICULTY</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.exploreArea}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li>
                                                    From <span>USD</span>
                                                    <del>99,999</del>
                                                    <span>89,999</span>
                                                    <small>/ Per Pax</small>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Explore <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className={style.recommendedBox}>
                                    <div className={style.recommendedBoxTop}>
                                        <Image alt="" src={recommended6} placeholder="recommended6" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        <div className={style.listedOff}>
                                            <ul>
                                                <li>Just Listed</li>
                                                <li>20% OFF</li>
                                            </ul>
                                        </div>
                                        <div className={style.batch}>
                                            <Image alt="" src={batch} placeholder="batch" width={48} height={48} />
                                        </div>
                                        <div className={style.bookQuote}>
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href={"#"} className={style.bookNowBtn}>
                                                        Book Now <BsArrowRight />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"} className={style.getQuoteBtn}>
                                                        Get A Quote <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={style.recommendedBoxBottom}>
                                        <div className={style.recommendedBoxBottomTop}>
                                            <h5>
                                                Ghorepani Poon Hill Trekking<span>09 DAYS</span>
                                            </h5>
                                            <div className={`d-flex align-items-center ${style.reviewRateing}`}>
                                                <span>
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                                    <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                                </span>
                                                <p>
                                                    From <span>129</span> Reviews
                                                </p>
                                            </div>
                                            <div className={`d-flex justify-content-between align-items-center ${style.placeTime}`}>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={map} placeholder="map" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DESTINATION</h5>
                                                        <h6>Nepal</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={clock} placeholder="clock" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DURATION</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                                <div className={`d-flex align-items-center  ${style.placeTimeBox}`}>
                                                    <div className={style.placeTimeIcon}>
                                                        <span>
                                                            <Image alt="" src={frame} placeholder="frame" width={48} height={48} />
                                                        </span>
                                                    </div>
                                                    <div className={style.placeTimeCont}>
                                                        <h5>DIFFICULTY</h5>
                                                        <h6>09 Days</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style.exploreArea}>
                                            <ul className="d-flex justify-content-between align-items-center">
                                                <li>
                                                    From <span>USD</span>
                                                    <del>99,999</del>
                                                    <span>89,999</span>
                                                    <small>/ Per Pax</small>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Explore <BsArrowRight />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopularTour;

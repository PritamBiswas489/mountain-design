import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

import ni1 from "@/assets/front/images/itinerary/1.svg";
import ni2 from "@/assets/front/images/itinerary/2.svg";
import ni3 from "@/assets/front/images/itinerary/3.svg";
import ni4 from "@/assets/front/images/itinerary/4.svg";
import ni5 from "@/assets/front/images/itinerary/5.svg";
import ni6 from "@/assets/front/images/itinerary/6.svg";
import ni7 from "@/assets/front/images/itinerary/7.svg";
import ni8 from "@/assets/front/images/itinerary/8.svg";
import ni9 from "@/assets/front/images/itinerary/9.svg";
import Image from "next/image";
import Alert from "@/components/front/Alert";
import ovrHhdr1 from "@/assets/front/images/svg/ovr-hdr-1.svg";
import ovrHhdr2 from "@/assets/front/images/svg/ovrHhdr2.svg";
import ovrHhdr3 from "@/assets/front/images/svg/ovrHhdr3.svg";
import ovrHhdr4 from "@/assets/front/images/svg/ovrHhdr4.svg";

import OverviewComponent from "./OverviewComponent";
import { AiOutlineFilePdf } from "react-icons/ai";
import DayBoxOne from "./DayBoxOne";
import DayTwo from "./DayTwo";
import DayboxThree from "./DayboxThree";
import CostingComponent from "./CostingComponent";
import MapComponent from "./MapComponent";
import { RiFolderDownloadLine } from "react-icons/ri";

export const Overview = () => {
    return (
        <>
            <section>
                <section className={`d-flex justify-content-between align-items-center ${style.overviewNavArea}`}>
                    <div className={style.overviewNav}>
                        <ul className="d-flex">
                            <li>
                                <Link href={"#"}>
                                    <span>
                                        <Image alt="" src={ni1} placeholder="ni1" />
                                    </span>{" "}
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <span>
                                        <Image alt="" src={ni2} placeholder="ni2" />
                                    </span>{" "}
                                    Itinerary
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <span>
                                        <Image alt="" src={ni3} placeholder="ni3" />
                                    </span>{" "}
                                    Costing
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <span>
                                        <Image alt="" src={ni4} placeholder="ni4" />
                                    </span>{" "}
                                    Map
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <span>
                                        <Image alt="" src={ni5} placeholder="ni5" />
                                    </span>{" "}
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <span>
                                        <Image alt="" src={ni6} placeholder="ni6" />
                                    </span>{" "}
                                    Gears
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"}>
                                    <span>
                                        <Image alt="" src={ni7} placeholder="ni7" />
                                    </span>{" "}
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.overviewRight}>
                        <ul className="d-flex">
                            <li>
                                <Link href={"#"} className={style.bookNow}>
                                    Book Now{" "}
                                    <span>
                                        <Image alt="" src={ni8} placeholder="ni8" />
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#"} className={style.quickInquiry}>
                                    Quick Inquiry{" "}
                                    <span>
                                        <Image alt="" src={ni9} placeholder="ni9" />
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={style.overviewBody}>
                    <div className="container-fluid p-0 ">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                                <div className={style.itineraryAlert}>
                                    <Alert />
                                </div>
                                <div className={style.overviewBox}>
                                    <div className={style.boxHeader}>
                                        <h4>
                                            <span>
                                                <Image alt="" src={ovrHhdr1} placeholder="ovrHhdr1" />
                                            </span>
                                            Ghorepani Poon Hill Trek Overview
                                        </h4>
                                    </div>
                                    <div className={style.overviewBoxInner}>
                                        <OverviewComponent />
                                    </div>
                                </div>

                                <div className={style.overviewBox}>
                                    <div className={`d-flex justify-content-between align-items-center  ${style.boxHeader}`}>
                                        <h4>
                                            <span>
                                                <Image alt="" src={ovrHhdr2} placeholder="ovrHhdr1" />
                                            </span>
                                            Ghorepani Poon Hill Trek Itinerary
                                        </h4>
                                        <Link href={"#"}>
                                            Download <AiOutlineFilePdf />
                                        </Link>
                                    </div>
                                    <div className={style.overviewBoxInner}>
                                        <div className={style.dayBosArea}>
                                            <DayBoxOne />
                                            <DayTwo />
                                            <DayboxThree />
                                        </div>
                                    </div>
                                </div>

                                <div className={style.overviewBox}>
                                    <div className={style.boxHeader}>
                                        <h4>
                                            <span>
                                                <Image alt="" src={ovrHhdr3} placeholder="ovrHhdr3" />
                                            </span>
                                            Cost Included / Excluded Items
                                        </h4>
                                    </div>
                                    <div className={style.overviewBoxInner}>
                                        <CostingComponent />
                                    </div>
                                </div>

                                <div className={style.overviewBox}>
                                    <div className={`d-flex justify-content-between align-items-center  ${style.boxHeader}`}>
                                        <h4>
                                            <span>
                                                <Image alt="" src={ovrHhdr4} placeholder="ovrHhdr4" />
                                            </span>
                                            Map for Annapurna Circuit Trek
                                        </h4>
                                        <Link href={"#"}>
                                            Download Map <RiFolderDownloadLine />
                                        </Link>
                                    </div>
                                    <div className={style.overviewBoxInner}>
                                        <MapComponent />
                                    </div>
                                </div>
                                {/* <div className="">
                                    <div>
                                        <nav id="navbar-example2" className="navbar navbar-light bg-light">
                                            <a className="navbar-brand" href="#">
                                                Navbar
                                            </a>
                                            <ul className="nav nav-pills">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#fat">
                                                        @fat
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#mdo">
                                                        @mdo
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#mdo3">
                                                        Dropdown
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div data-spy="scroll" data-target="#navbar-example2" data-offset={0}>
                                            <h4 id="fat" style={{ height: "1000px" }}>
                                                @fat
                                            </h4>
                                            <h4 id="mdo" style={{ height: "1000px" }}>
                                                @mdo
                                            </h4>
                                            <h4 id="mdo3" style={{ height: "1000px" }}>
                                                one
                                            </h4>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-12"></div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

import React from "react";
import style from "./index.module.scss";

import infoIcon1 from "@/assets/front/images/information/1.svg";
import infoIcon2 from "@/assets/front/images/information/2.svg";
import infoIcon3 from "@/assets/front/images/information/3.svg";
import infoIcon4 from "@/assets/front/images/information/4.svg";
import infoIcon5 from "@/assets/front/images/information/5.svg";
import infoIcon6 from "@/assets/front/images/information/6.svg";

import flower from "@/assets/front/images/information/flower.svg";
import inf from "@/assets/front/images/information/info.svg";

import Image from "next/image";

const Information = () => {
    return (
        <>
            <section className={style.information}>
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6">
                            <div className={style.infoBox}>
                                <span>
                                    <Image alt="" src={infoIcon1} placeholder="infoIcon1" />
                                </span>
                                <h5>DESTINATION</h5>
                                <h6>Nepal</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6">
                            <div className={style.infoBox}>
                                <span>
                                    <Image alt="" src={infoIcon2} placeholder="infoIcon2" />
                                </span>
                                <h5>ACTIVITY</h5>
                                <h6>Adventure Activities</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6">
                            <div className={style.infoBox}>
                                <span>
                                    <Image alt="" src={infoIcon3} placeholder="infoIcon3" />
                                </span>
                                <h5>DURATION</h5>
                                <h6>12 Days</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6">
                            <div className={style.infoBox}>
                                <span>
                                    <Image alt="" src={infoIcon4} placeholder="infoIcon4" />
                                </span>
                                <h5>
                                    MEALS
                                    <span className="inf">
                                        <Image alt="" src={inf} placeholder="inf" />
                                    </span>
                                </h5>
                                <h6>11B, 12L, 12D</h6>
                                <p>
                                    <Image alt="" src={flower} placeholder="flower" /> Veg and Vegan Available
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6">
                            <div className={style.infoBox}>
                                <span>
                                    <Image alt="" src={infoIcon5} placeholder="infoIcon5" />
                                </span>
                                <h5>
                                    DIFFICULTY
                                    <span className="inf">
                                        <Image alt="" src={inf} placeholder="inf" />
                                    </span>
                                </h5>
                                <h6>11B, 12L, 12D</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-6">
                            <div className={style.infoBox}>
                                <span>
                                    <Image alt="" src={infoIcon6} placeholder="infoIcon6" />
                                </span>
                                <h5>
                                    BEST TIME
                                    <span className="inf">
                                        <Image alt="" src={inf} placeholder="inf" />
                                    </span>
                                </h5>
                                <h6>JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Information;

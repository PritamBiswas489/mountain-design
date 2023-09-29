import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

import activities1 from "@/assets/front/images/activities/1.jpg";
import activities2 from "@/assets/front/images/activities/2.jpg";
import activities3 from "@/assets/front/images/activities/3.jpg";
import activities4 from "@/assets/front/images/activities/4.jpg";
import activities5 from "@/assets/front/images/activities/5.jpg";
import activities6 from "@/assets/front/images/activities/6.jpg";
import activities7 from "@/assets/front/images/activities/7.jpg";
import activities8 from "@/assets/front/images/activities/8.jpg";
import Image from "next/image";

const Activities = () => {
    return (
        <>
            <section className={style.activities}>
                <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities1} placeholder="activities1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Trekking</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities2} placeholder="activities2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Peak Climbing</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities3} placeholder="activities3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Expedition</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities4} placeholder="activities4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Helicopter Tours</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities5} placeholder="activities5" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Sightseeing</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities6} placeholder="activities6" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Safari</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities7} placeholder="activities7" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Adventure Tours</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                            <Link href={"#"} className={`d-flex flex-wrap align-items-center  ${style.activitiesBox}`}>
                                <div className={style.activitiesBoxImg}>
                                    <Image alt="" src={activities8} placeholder="activities8" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </div>
                                <div className={style.activitiesBoxCont}>
                                    <div className="">
                                        <h4>Day Tours</h4>
                                        <p>18 Tours</p>
                                        <p>237 Reviews</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Activities;

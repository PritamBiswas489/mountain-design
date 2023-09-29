import React from "react";
import style from "./index.module.scss";
import duration from "@/assets/front/images/svg/duration.svg";
import deficulty from "@/assets/front/images/svg/deficulty.svg";
import distance from "@/assets/front/images/svg/distance.svg";
import baul from "@/assets/front/images/svg/baul.svg";
import bed from "@/assets/front/images/svg/bed.svg";
import flower from "@/assets/front/images/svg/flower.svg";
import refresh from "@/assets/front/images/svg/refresh.svg";

import gal1 from "@/assets/front/images/gal-1.jpg";
import gal2 from "@/assets/front/images/gal-2.jpg";
import gal3 from "@/assets/front/images/gal-3.jpg";
import gal4 from "@/assets/front/images/gal-4.jpg";

import Image from "next/image";

const DayBoxOne = () => {
    return (
        <>
            <div className={style.dayBox}>
                <h5>
                    <span>Day</span> Arrival in Kathmandu, transfer to the hotel
                </h5>
                <div className={style.dayBoxInner}>
                    <div className={style.numberRound}>
                        <span>01</span>
                    </div>
                    <div className={`d-flex justify-content-between  ${style.durationAttitude}`}>
                        <div className={`d-flex ${style.durationAttitudeBox}`}>
                            <div className={style.dabLeft}>
                                <span>
                                    <Image alt="" src={duration} placeholder="duration" />
                                </span>
                            </div>
                            <div className={style.dabRight}>
                                <h6>DURATION</h6>
                                <p>01 Hour</p>
                            </div>
                        </div>

                        <div className={`d-flex ${style.durationAttitudeBox}`}>
                            <div className={style.dabLeft}>
                                <span>
                                    <Image alt="" src={deficulty} placeholder="deficulty" />
                                </span>
                            </div>
                            <div className={style.dabRight}>
                                <h6>DIFFICULTY</h6>
                                <p>Easy</p>
                            </div>
                        </div>

                        <div className={`d-flex ${style.durationAttitudeBox}`}>
                            <div className={style.dabLeft}>
                                <span>
                                    <Image alt="" src={distance} placeholder="distance" />
                                </span>
                            </div>
                            <div className={style.dabRight}>
                                <h6>DISTANCE</h6>
                                <p>13 KM / 39 FT</p>
                            </div>
                        </div>

                        <div className={`d-flex ${style.durationAttitudeBox}`}>
                            <div className={style.dabLeft}>
                                <span>
                                    <Image alt="" src={duration} placeholder="duration" />
                                </span>
                            </div>
                            <div className={style.dabRight}>
                                <h6>ALTITUDE</h6>
                                <p>5,545M / 17,999 FT</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.dbContent}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Dignissim non et ut sapien dui sed lectus. Lacus et quam et dictum dictumst condimentum nulla proin blandit. Eu
                            tellus vitae odio in quam aliquet. Mattis habitant id sit ac. Pharetra aliquet purus pellentesque amet duis felis. Quisque mattis velit eget ultricies
                            adipiscing in. Arcu semper metus nibh etiam mi. Dignissim gravida massa ultrices sit libero. Ullamcorper non feugiat nunc a id pharetra morbi. Orci
                            sodales fringilla sit mauris quis praesent convallis. In porttitor adipiscing suscipit ut lacinia vel imperdiet. Posuere scelerisque integer sit proin
                            gravida faucibus tincidunt. Tincidunt a platea est ullamcorper porttitor eu lorem tristique.
                        </p>
                    </div>
                    <div className={`d-flex flex-wrap ${style.dbGalleryWrap}`}>
                        <div className={style.dbGallery}>
                            <Image alt="" src={gal1} placeholder="gal1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className={style.dbGallery}>
                            <Image alt="" src={gal2} placeholder="gal2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className={style.dbGallery}>
                            <Image alt="" src={gal3} placeholder="gal3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                        </div>
                        <div className={style.dbGallery}>
                            <Image alt="" src={gal4} placeholder="gal4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                        </div>
                    </div>
                    <div className={style.mealsAccommodation}>
                        <div className={`d-flex align-items-center ${style.mealsAccommodationBox}`}>
                            <span>
                                <Image alt="" src={baul} placeholder="baul" />
                            </span>
                            <h6>
                                Meals Included:<span> Breakfast, Lunch, Dinner</span>
                            </h6>
                            <p className={style.greenBg}>
                                {" "}
                                <Image alt="" src={flower} placeholder="flower" /> Veg and vegan available
                            </p>
                        </div>
                        <div className={`d-flex align-items-center ${style.mealsAccommodationBox}`}>
                            <span>
                                <Image alt="" src={bed} placeholder="bed" />
                            </span>
                            <h6>
                                Accommodation:<span> Hotel Sherpaland with Attached Bathroom</span>
                            </h6>
                            <p className={style.lightBlueBg}>
                                <Image alt="" src={refresh} placeholder="refresh" />
                                Veg and vegan available
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DayBoxOne;

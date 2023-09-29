import React from "react";
import style from "./index.module.scss";
import bg from "@/assets/front/images/review/reviewBg.jpg";
import mrIcon from "@/assets/front/images/svg/mrIcon.svg";
import rvl1 from "@/assets/front/images/review/rvl-1.png";
import rvl2 from "@/assets/front/images/review/rvl-2.png";
import rvl3 from "@/assets/front/images/review/rvl-3.png";

import Link from "next/link";
import ReviewVideo from "@/components/front/include/ReviewVideo";

import Image from "next/image";
import StripeSlider from "@/components/front/StripeSlider";

const Reviews = () => {
    return (
        <>
            <section className={style.reviewArea} style={{ backgroundImage: `url(${bg.src})` }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className={style.reviewLeft}>
                                <div className={style.reviewLeftTop}>
                                    <h2>REVIEWS</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Eleifend id sed urna velit lobortis ut etiam aliquet pulvinar. Adipiscing non tempor malesuada
                                        cursus convallis dignissim.
                                    </p>
                                </div>
                                <div>
                                    <ReviewVideo />
                                </div>
                                <div className={`d-flex justify-content-center ${style.moreReview}`}>
                                    <Link href={"#"} className={style.moreReviewBtn}>
                                        Find More Reviews
                                        <span>
                                            <Image alt="" src={mrIcon} placeholder="mrIcon" width={24} height={24} />
                                        </span>
                                    </Link>
                                </div>
                                <div className={`d-flex justify-content-center ${style.reviewLogo}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image
                                                alt=""
                                                src={rvl1}
                                                placeholder="rvl1"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                alt=""
                                                src={rvl2}
                                                placeholder="rvl2"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                                            />
                                        </li>
                                        <li>
                                            <Image
                                                alt=""
                                                src={rvl3}
                                                placeholder="rvl3"
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: "100%", maxWidth: "100%", height: "auto" }}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <StripeSlider />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;

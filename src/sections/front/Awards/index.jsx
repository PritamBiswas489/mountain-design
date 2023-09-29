import React from "react";
import style from "./index.module.scss";
import Slider from "react-slick";
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import Link from "next/link";
import Image from "next/image";

import awards1 from "@/assets/front/images/awards/1.jpg";
import awards2 from "@/assets/front/images/awards/2.jpg";
import awards3 from "@/assets/front/images/awards/3.jpg";
import awards4 from "@/assets/front/images/awards/4.jpg";
import awards5 from "@/assets/front/images/awards/5.jpg";
import awards6 from "@/assets/front/images/awards/6.jpg";

import madel from "@/assets/front/images/svg/madel.svg";

const Awards = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 884,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section className={style.awardsArea}>
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
                                            OUR AWARDS
                                            <span>
                                                <Image alt="" src={madel} placeholder="cup" width={100} height={100} />
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`awardsAreaSlider ${style.awardsAreaSlider}`}>
                        <div className="row">
                            <div className="col-12">
                                <Slider {...settings}>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards1} placeholder="awards1" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards2} placeholder="awards2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards3} placeholder="awards3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards4} placeholder="awards4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards5} placeholder="awards5" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards6} placeholder="awards6" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards2} placeholder="awards2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className={style.citiesDestinationBox}>
                                        <Link href={"#"}>
                                            <Image alt="" src={awards4} placeholder="awards4" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Awards;

import React, { useEffect } from "react";
import style from "./index.module.scss";
import Slider from "react-slick";

// if (typeof window !== "undefined") {
//     window.$ = window.jQuery = require("jquery");
// }

import stripe1 from "@/assets/front/images/stripe/1.jpg";
import stripe2 from "@/assets/front/images/stripe/2.jpg";
import stripe3 from "@/assets/front/images/stripe/3.jpg";
import stripe4 from "@/assets/front/images/stripe/4.jpg";
import stripe5 from "@/assets/front/images/stripe/5.jpg";

import star from "@/assets/front/images/svg/star.svg";
import starStroke from "@/assets/front/images/svg/star-stroke.svg";
import quoteRight from "@/assets/front/images/svg/quote-r.svg";

// import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
// import OwlCarousel from 'react-owl-carousel';
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const StripeSlider = () => {
    useEffect(() => {
        $(".slider-nav")
            .on("afterChange", function (event, slick, currentSlide, nextSlide) {
                $(".slick-active").removeClass("full-active semi-active");
                $(".slick-active").eq(4).addClass("full-active");
                $(".slick-active").eq(3).addClass("semi-active");
                $(".slick-active").eq(5).addClass("semi-active");
            })
            .trigger("afterChange");
        // $(".slider-nav").on("afterChange", function (event, slick, currentSlide, nextSlide) {
        //     console.log(nextSlide, currentSlide);
        // });
    }, []);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
        afterChange: function () {
            $(".slick-active").removeClass("full-active semi-active");
            $(".slick-active").eq(4).addClass("full-active");
            $(".slick-active").eq(3).addClass("semi-active");
            $(".slick-active").eq(5).addClass("semi-active");
        },

        // autoplay: true,
        // arrows: false,
        // dots: false,
        // slidesToShow: 5,
        // centerPadding: "10px",
        // draggable: false,
        // infinite: true,
        // pauseOnHover: false,
        // swipe: false,
        // touchMove: false,
        // vertical: true,
        // speed: 1000,
        // autoplaySpeed: 2000,
        // useTransform: true,
        // cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        // adaptiveHeight: true,
    };
    return (
        <>
            <section className={`stripeSlider ${style.stripeSlider}`}>
                <Slider {...settings} className="slider-nav">
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe1}
                                placeholder="stripe1"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe2}
                                placeholder="stripe2"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe3}
                                placeholder="stripe3"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe4}
                                placeholder="stripe4"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                                        <Image alt="" src={starStroke} placeholder="starStroke" width={18} height={18} />
                                    </li>
                                </ul>
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe5}
                                placeholder="stripe5"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe3}
                                placeholder="stripe3"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe2}
                                placeholder="stripe2"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe3}
                                placeholder="stripe3"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`d-flex ${style.stripeBox}`}>
                        <div className={style.stripeImg}>
                            <Image
                                alt=""
                                src={stripe4}
                                placeholder="stripe4"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                        <div className={style.stripeContent}>
                            <div className={`d-flex align-items-center ${style.nameStar}`}>
                                <h4>
                                    Incredible EBC 12 Days Hike{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" />
                                    </span>
                                </h4>
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
                                        <Image alt="" src={starStroke} placeholder="starStroke" width={18} height={18} />
                                    </li>
                                </ul>
                            </div>
                            <p>
                                I am back to home after spending 2 weeks in Nepal. I am happy to recommend them to visit Nepal. My holiday was awesome and my guide Bibek did an
                                excellent job
                            </p>
                            <div className={`d-flex align-items-center  ${style.nameDateDes}`}>
                                <h6>Wayde J</h6>
                                <ul className="d-flex">
                                    <li>01 June, 2023</li>
                                    <li>TripAdvisor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </>
    );
};

export default StripeSlider;

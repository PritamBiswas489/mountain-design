import React, { useState } from "react";
// import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import style from "./index.module.scss";
import Slider from "react-slick";

import videoImage1 from "@/assets/front/images/review/1.jpg";
import videoImage2 from "@/assets/front/images/review/2.jpg";
import playBtn from "@/assets/front/images/svg/playBtn.svg";
import quoteLeft from "@/assets/front/images/svg/quote-l.svg";
import quoteRight from "@/assets/front/images/svg/quote-r.svg";
import star from "@/assets/front/images/svg/star.svg";
import starStroke from "@/assets/front/images/svg/star-stroke.svg";

import Image from "next/image";

const ReviewVideo = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="revImgSlider">
                <Slider {...settings}>
                    <div>
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage1}
                                placeholder="videoImage1"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage2}
                                placeholder="videoImage2"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage1}
                                placeholder="videoImage1"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage2}
                                placeholder="videoImage2"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* <OwlCarousel className="owl-theme" {...options}>
                    <div class="item">
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage1}
                                placeholder="videoImage1"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage2}
                                placeholder="videoImage2"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage1}
                                placeholder="videoImage1"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div className={style.videoImg}>
                            <Image
                                alt=""
                                src={videoImage2}
                                placeholder="videoImage2"
                                // width={0}
                                // height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                            />
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                            <div className={style.quoteStar}>
                                <p>
                                    <span>
                                        <Image alt="" src={quoteLeft} placeholder="quoteLeft" width={24} height={24} />
                                    </span>{" "}
                                    Best Day of My Life at the EBC{" "}
                                    <span>
                                        <Image alt="" src={quoteRight} placeholder="quoteLeft" width={24} height={24} />
                                    </span>
                                </p>
                                <div className={`d-flex justify-content-center ${style.star}`}>
                                    <ul className="d-flex">
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={star} placeholder="star" width={24} height={24} />
                                        </li>
                                        <li>
                                            <Image alt="" src={starStroke} placeholder="starStroke" width={24} height={24} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> */}

                <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
            </section>
        </>
    );
};

export default ReviewVideo;

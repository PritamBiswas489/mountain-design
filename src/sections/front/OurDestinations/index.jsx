import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

import desti1 from "@/assets/front/images/destination/1.jpg";
import desti2 from "@/assets/front/images/destination/2.jpg";
import desti3 from "@/assets/front/images/destination/3.jpg";

import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

const OurDestinations = () => {
    return (
        <>
            <section className={style.ourDestinations}>
                <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className={`d-flex align-items-center  ${style.destinationsInnerWgite}`}>
                                <div className={style.diwInner}>
                                    <h4>
                                        <span>checkout</span>Our Destinations
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Sit volutpat donec ut eu consectetur. Posuere auctor convallis imperdiet faucibus vel malesuada
                                        risus eget.
                                    </p>
                                    <Link href={"#"}>
                                        Explore All <GoArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <Link href={"#"} className={style.destinationsInner}>
                                <Image alt="" src={desti1} placeholder="dest" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                <div className={style.destinationsContent}>
                                    <h3>Nepal</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Quam urna id phasellus dui amet blandit auctor arcu duis. Augue aliquam aenean sed pretium arcu
                                        netus.
                                    </p>
                                    <span className="mainBtn">129 Tours</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <Link href={"#"} className={style.destinationsInner}>
                                <Image alt="" src={desti2} placeholder="dest2" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                <div className={style.destinationsContent}>
                                    <h3>Nepal</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Quam urna id phasellus dui amet blandit auctor arcu duis. Augue aliquam aenean sed pretium arcu
                                        netus.
                                    </p>
                                    <span className="mainBtn">9 Tours</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <Link href={"#"} className={style.destinationsInner}>
                                <Image alt="" src={desti3} placeholder="dest3" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                <div className={style.destinationsContent}>
                                    <h3>Nepal</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Quam urna id phasellus dui amet blandit auctor arcu duis. Augue aliquam aenean sed pretium arcu
                                        netus.
                                    </p>
                                    <span className="mainBtn">29 Tours</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurDestinations;

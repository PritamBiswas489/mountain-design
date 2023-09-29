import React from "react";
import style from "./index.module.scss";
import Link from "next/link";

import afi1 from "@/assets/front/images/affiliated/1.png";
import afi2 from "@/assets/front/images/affiliated/2.png";
import afi3 from "@/assets/front/images/affiliated/3.png";
import afi4 from "@/assets/front/images/affiliated/4.png";
import afi5 from "@/assets/front/images/affiliated/5.png";
import afi6 from "@/assets/front/images/affiliated/6.png";

import price from "@/assets/front/images/svg/price.svg";
import team from "@/assets/front/images/svg/team.svg";
import support from "@/assets/front/images/svg/support.svg";
import pack from "@/assets/front/images/svg/package.svg";

import Image from "next/image";

import { HiOutlineArrowRight } from "react-icons/hi2";

const AboutUs = () => {
    return (
        <>
            <section className={style.aboutUs}>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className={style.aboutUsLeft}>
                                <h4>ABOUT US</h4>
                                <h5>
                                    Why Himalayan Leisure is the best
                                    <br />
                                    choice for your adventure in Nepal?
                                </h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Egestas aliquet eleifend blandit gravida. Faucibus non facilisis sed eu consectetur. Nec vel eget
                                    feugiat lectus diam quis enim pharetra. Nulla tincidunt at aliquam gravida cursus et etiam morbi. Euismod hendrerit fames aliquet quis volutpat
                                    vehicula at dolor. Posuere dui dolor mauris metus fermentum. Enim turpis nunc elit tincidunt sapien bibendum sit. Aenean egestas eget dui
                                    condimentum dui vitae sed interdum. Enim tortor cras eget nullam rhoncus adipiscing pellentesque dictum massa. Tincidunt donec a mauris aliquet
                                    urna eget. Interdum amet sit euismod semper amet.{" "}
                                </p>
                                <p>
                                    Pharetra egestas lorem pharetra cursus malesuada sed. Risus molestie commodo est cursus enim phasellus vitae turpis. Condimentum molestie
                                    viverra viverra sit lorem praesent. Tincidunt risus sed amet viverra. Egestas iaculis malesuada augue diam. Sit accumsan molestie purus non
                                    purus dolor amet maecenas eu. Sit at pellentesque rhoncus ut duis lectus sed dolor venenatis. Orci lobortis in egestas eleifend mauris diam
                                    aenean iaculis urna.
                                </p>
                                <Link href={"#"} className={style.readMoreBtn}>
                                    Read More About Us <HiOutlineArrowRight />
                                </Link>
                                <div className={style.affiliated}>
                                    <h6>WE ARE AFFILICATED WITH:</h6>
                                    <ul className="d-flex flex-wrap ">
                                        <li>
                                            <Image alt="" src={afi1} placeholder="afi1" />
                                        </li>
                                        <li>
                                            <Image alt="" src={afi2} placeholder="afi2" />
                                        </li>
                                        <li>
                                            <Image alt="" src={afi3} placeholder="afi3" />
                                        </li>
                                        <li>
                                            <Image alt="" src={afi4} placeholder="afi4" />
                                        </li>
                                        <li>
                                            <Image alt="" src={afi5} placeholder="afi5" />
                                        </li>
                                        <li>
                                            <Image alt="" src={afi6} placeholder="afi6" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="row g-4">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className={`${style.aboutRightBox} ${style.trnfromTop}`}>
                                        <span>
                                            <Image alt="" src={price} placeholder="price" />
                                        </span>
                                        <h4>COMPETITIVE PRICING</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. Nunc sollicitudin ac mauris felis ac. Ultricies augue sed egestas lectus ut lorem ipsum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className={`${style.aboutRightBox} ${style.trnfromBottom}`}>
                                        <span>
                                            <Image alt="" src={team} placeholder="team" />
                                        </span>
                                        <h4>EXPERIENCED TEAM</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. Nunc sollicitudin ac mauris felis ac. Ultricies augue sed egestas lectus ut lorem ipsum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className={`${style.aboutRightBox} ${style.trnfromTop}`}>
                                        <span>
                                            <Image alt="" src={support} placeholder="support" />
                                        </span>
                                        <h4>TIMELY SUPPORT</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. Nunc sollicitudin ac mauris felis ac. Ultricies augue sed egestas lectus ut lorem ipsum.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className={`${style.aboutRightBox} ${style.trnfromBottom}`}>
                                        <span>
                                            <Image alt="" src={pack} placeholder="pack" />
                                        </span>
                                        <h4>HANDCRAFTED PACKAGES</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur. Nunc sollicitudin ac mauris felis ac. Ultricies augue sed egestas lectus ut lorem ipsum.</p>
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

export default AboutUs;

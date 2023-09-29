import React, { useState } from "react";
import style from "./index.module.scss";

import Image from "next/image";
import logo from "@/assets/front/images/logo.png";
import whatsapp from "@/assets/front/images/svg/whatsapp.svg";
import user from "@/assets/front/images/svg/user.svg";
import hamburger from "@/assets/front/images/svg/hamburger.svg";
import Link from "next/link";

import { BsEnvelope } from "react-icons/bs";
import { PiPhoneLight } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";
import { LiaHomeSolid } from "react-icons/lia";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
    const [isClassApplied, setIsClassApplied] = useState(false);

    const handleButtonClick = () => {
        setIsClassApplied(!isClassApplied);
    };
    return (
        <>
            <header className={style.mainHeader}>
                <div className="container-fluid p-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-auto">
                            <div className={style.logo}>
                                <Link href={"/"}>
                                    <Image alt="" src={logo} placeholder="logo" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className={style.headerRightTop}>
                                <div className={`row justify-content-between align-items-center ${style.mobBetween}`}>
                                    <div className={`col-auto ${style.hdrTopLeft}`}>
                                        <ul className="d-flex">
                                            <li>
                                                <Link href={"#"}>
                                                    <BsEnvelope />
                                                    info@himalayanleisure.com
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <PiPhoneLight />
                                                    +977 98510 94157
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`col-auto ${style.hdrTopRight}`}>
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <Link href={"#"}>
                                                    <Image src={whatsapp} placeholder="whatsapp" width={36} height={36} alt="" />
                                                </Link>
                                            </li>
                                            <li>
                                                <select className={style.usd}>
                                                    <option value="">USD</option>
                                                </select>
                                            </li>
                                            <li>
                                                <Link href={"#"}>
                                                    <Image alt="" src={user} placeholder="user" width={36} height={36} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={style.headerRightBottom}>
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-auto">
                                        {/* className={style.navigation} */}
                                        <nav className={`${style.navigation} ${isClassApplied ? style.navOpen : ""}`}>
                                            {/* <div>
                                                <div className={isClassApplied ? "your-class-name" : ""}>
                                                    This div will have the class applied when the button is clicked.
                                                </div>
                                            </div> */}
                                            <button className={style.hamburger} onClick={handleButtonClick}>
                                                <RiMenu3Fill />
                                            </button>
                                            <ul className="d-flex">
                                                <li>
                                                    <Link href={"#"}>
                                                        <LiaHomeSolid className={style.homeIcon} />
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Destinations <FaAngleDown />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Activities <FaAngleDown />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>
                                                        Support <FaAngleDown />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>Blog</Link>
                                                </li>
                                                <li>
                                                    <Link href={"#"}>Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className={`${style.overlay} ${isClassApplied ? style.overlayOpen : ""}`} onClick={handleButtonClick}></div>
                                    </div>
                                    <div className={`col-auto ${style.payHamburger}`}>
                                        <ul className="d-flex align-items-center">
                                            <li>
                                                <Link href={"#"} className={style.payDeposit}>
                                                    Pay Deposit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={"#"} className={style.hamburger}>
                                                    <Image alt="" src={hamburger} placeholder="hamburger" width={59} height={59} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

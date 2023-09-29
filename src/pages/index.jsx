import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import Image from "next/image";
import style from "./index.module.scss";
import Layout from "@/components/front/include/Layout";

import playBtn from "@/assets/front/images/svg/playBtn.svg";

import bg from "@/assets/front/images/home-banner.jpg";
import search from "@/assets/front/images/svg/search.svg";
import clap from "@/assets/front/images/svg/clap.svg";
import OurDestinations from "@/sections/front/OurDestinations";
import Activities from "@/sections/front/Activities";
import RecommendedTour from "@/sections/front/RecommendedTour/Index";
import AboutUs from "@/sections/front/AboutUs";
import PopularTour from "@/sections/front/PopularTour";
import Awards from "@/sections/front/Awards";
import Reviews from "@/sections/front/Reviews";

export default function Home() {
    const [isOpen, setOpen] = useState(false);
    const [text] = useTypewriter({
        words: ["Everest Base Camp Trek", "Annapurna Base Camp Trek", "Langtang Valley Trek", "Island Peak Climbing"],
        loop: true,
        // onLoopDone: () => console.log(`loop completed after 3 runs.`),
    });

    const [isDivVisible, setIsDivVisible] = useState(true);

    // Function to hide the div when clicked
    const handleDivClick = () => {
        setIsDivVisible(false);
    };

    return (
        <>
            <Layout>
                <section className={`d-flex align-items-center justify-content-center ${style.homeBanner}`} style={{ backgroundImage: `url(${bg.src})` }}>
                    <div className={style.banSlogan}>
                        <h2>
                            Start a New<span>Adventure</span>
                        </h2>
                        <h5>Enter your keywords below to find the perfect adventure</h5>
                        <div className={style.homeSearchArea}>
                            <input type="text" placeholder className={style.homeSearch} />
                            <button>
                                <Image alt="" src={search} placeholder="search" width={42} height={42} />
                            </button>
                            {isDivVisible ? (
                                <div className={style.typeWriter} onClick={handleDivClick}>
                                    Ex <span>{text}</span>
                                    <Cursor cursorColor="##ff7900" />
                                </div>
                            ) : null}
                        </div>

                        {/* <div className={style.typingPlaceholderInput}>
                            <input type="text" placeholder="Type something..." className={style.typingPlaceholder} />
                            <button>
                                <Image alt="" src={search} placeholder="search" width={42} height={42} />
                            </button>
                        </div> */}
                    </div>
                    <div className={`d-flex justify-content-between align-items-center ${style.banBottom}`}>
                        <p>
                            <Image alt="" src={clap} placeholder="clap" /> We are hiring innovative candidates. Come and join us.
                        </p>
                        <div className={style.banPlay}>
                            <button className={style.playBtn} onClick={() => setOpen(true)}>
                                <Image alt="" src={playBtn} placeholder="playBtn" />
                            </button>
                        </div>
                    </div>
                </section>
                <OurDestinations />
                <Activities />
                <RecommendedTour />
                <AboutUs />
                <PopularTour />
                <Reviews />
                <Awards />
            </Layout>

            <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
}

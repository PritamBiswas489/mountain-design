import React from "react";
import style from "./index.module.scss";

import Layout from "@/components/front/include/Layout";
import ItineraryBanner from "@/sections/front/ItineraryBanner";
import Information from "@/sections/front/Information";
import { Overview } from "@/sections/front/Overview";

const itinerary = () => {
    return (
        <>
            <Layout>
                <ItineraryBanner />
                <Information />
                <Overview />
            </Layout>
        </>
    );
};

export default itinerary;

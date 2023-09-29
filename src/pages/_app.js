import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/front/font/stylesheet.css";
import "@/assets/front/styles/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "bootstrap/dist/js/bootstrap.min.js";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return <Component {...pageProps} />;
}

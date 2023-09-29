import React from "react";
import style from "./index.module.scss";
import ReactPanZoom from "react-image-pan-zoom-rotate";

const MapComponent = () => {
    return (
        <>
            <div className={style.panZoom}>
                <ReactPanZoom image="https://images.unsplash.com/photo-1551091708-fda32ed3178c" alt="Image alt text" />
            </div>
        </>
    );
};

export default MapComponent;

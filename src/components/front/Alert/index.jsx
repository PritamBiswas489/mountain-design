import React from "react";
import style from "./index.module.scss";
import Image from "next/image";

import bell from "@/assets/front/images/svg/bell.svg";
import { RiCloseCircleFill } from "react-icons/ri";

const Alert = () => {
    return (
        <>
            <div className={`d-flex ${style.itineraryAlertBox}`}>
                <button className={style.closeBtn}>
                    <RiCloseCircleFill />
                </button>
                <div className={style.itineraryAlertLeft}>
                    <span>
                        <Image alt="" src={bell} placeholder="bell" />
                    </span>
                </div>
                <div className={style.itineraryAlertRight}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. <span>Ut eget in molestie enim senectus</span> est risus fringilla quis. Porta aliquet amet in gravida augue mauris
                        odio convallis. Massa et tincidunt tincidunt commodo adipiscing eget est nunc ultricies. Aliquam proin id elit arcu mi porta neque justo amet. Cursus quis
                        sapien sagittis morbi elit. Varius sollicitudin ornare netus tristique libero adipiscing faucibus nunc. Morbi magna facilisis eget egestas in id
                        consectetur. Fusce suspendisse penatibus amet tellus suspendisse mattis magna feugiat id
                    </p>
                </div>
            </div>
        </>
    );
};

export default Alert;

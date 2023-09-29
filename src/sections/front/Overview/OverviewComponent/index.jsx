import React from "react";
import style from "./index.module.scss";

import batch2 from "@/assets/front/images/svg/batch-2.svg";
import Image from "next/image";
import Alert from "@/components/front/Alert";

const OverviewComponent = () => {
    return (
        <>
            <div className={style.overviewContent}>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Sit id vitae massa etiam suspendisse lacus. Sed sed augue mauris eros. Id morbi orci eget nisl varius vel leo. Nunc
                    aenean id consectetur vitae praesent mattis suspendisse pretium. Id faucibus lectus odio mattis cras nullam interdum. Condimentum fermentum orci aliquam varius.
                    Arcu eget ac id in quisque sodales dolor feugiat. Sed aenean ipsum tristique aliquet lectus eu faucibus. Proin nunc semper volutpat amet eget. Augue nulla
                    aliquam sed pulvinar sem amet at urna tincidunt. Urna mauris aliquam quam consectetur arcu dolor et nec. Vulputate pulvinar venenatis consequat nulla libero
                    semper sapien urna quis. Orci hendrerit enim mus faucibus nisl nec hendrerit. Cras nunc proin diam risus eget. Sit faucibus tortor eget orci. Pretium sociis
                    facilisis enim ultricies vel ornare aliquam nibh tempor. Accumsan nam netus sapien scelerisque purus egestas sodales. Cras semper leo aliquet augue metus morbi
                    at tortor. Quam cursus ac libero sit mattis. Massa tincidunt luctus vel quisque eget. Metus tellus ac et scelerisque suspendisse nunc. Blandit bibendum cursus
                    tincidunt varius porta. Arcu ante ut id diam adipiscing rhoncus eget viverra euismod. Aliquet diam in lectus porttitor egestas ullamcorper diam. Ornare laoreet
                    suscipit leo tempus. Lacus enim eleifend tortor sit. Vitae proin massa arcu sed viverra. Eu cursus ut sed ornare nec etiam dignissim vel cursus. Risus cras
                    ultricies convallis volutpat cras tincidunt. Tortor libero mattis mi massa ultrices nec faucibus ut. Rhoncus sed vel at ut at nulla. Nisi ut donec augue
                    lobortis vitae. Donec sapien enim massa arcu eu ac morbi mi. Tristique habitant varius viverra cursus integer non non. Egestas nam malesuada id urna sed nunc
                    mattis aliquam. Augue lorem augue eget pellentesque arcu ut leo. Pretium urna nisi enim tellus integer arcu ac tempus. Suscipit lobortis leo senectus posuere
                    feugiat pellentesque vitae aenean. Id in turpis ullamcorper sit vitae venenatis. Habitasse porttitor netus sed adipiscing mi sit accumsan senectus accumsan.
                    Arcu sociis orci augue quisque ullamcorper dui in at tellus. Fringilla viverra lorem suspendisse ornare mauris curabitur eget feugiat cum. Bibendum nulla morbi
                    imperdiet nunc ullamcorper quis blandit lectus habitant. Dolor lacus enim volutpat mauris maecenas quam nibh. Turpis porta nisi venenatis diam non a velit. Sed
                    convallis non nullam at elementum cras. Tellus feugiat volutpat tortor viverra eleifend amet fusce. Congue ac vel orci id egestas. Morbi adipiscing orci porta
                    vel. Hendrerit dui scelerisque bibendum nunc cum non elit quis. Sed in diam vestibulum tortor ipsum interdum.
                </p>
                <h5>
                    <span>
                        <Image alt="" src={batch2} placeholder="batch2" />
                    </span>{" "}
                    Ghorepani Trek Highlights
                </h5>
                <ul>
                    <li>One of the best short treks of Nepal, popular for hundreds of years</li>
                    <li>Popular among small to big sized groups and families with small kids</li>
                    <li>Stunning Himalayan views of several snowcapped peaks including Mr. Dhaulagiri above 8000 meters</li>
                    <li>Visit to Pokhara; the second most famous city among travelers, known as the city of lakes and has several natural gems and and heritage sites </li>
                    <li>Easy level trekking route suitable for trekkers of all types</li>
                    <li>
                        Thundering rivers, towering waterfalls, dense green forests of Oaks and Rhododendrons, culturally rich villages, beautiful Himalayan views of different
                        peaks
                    </li>

                    <li>Popular among small to big sized groups and families with small kids</li>
                </ul>
                <Alert />
            </div>
        </>
    );
};

export default OverviewComponent;

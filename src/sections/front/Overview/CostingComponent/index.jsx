import React from "react";
import style from "./index.module.scss";

const CostingComponent = () => {
    return (
        <>
            <div className={`${style.greenRedHeighth}`}>
                <div className={style.greenHeight}>
                    <h5>What is Included in the Cost?</h5>
                    <ul>
                        <li>
                            Complementary airport pickup and drop services on a private vehicle including before and after the trek on a private air conditioning vehicle will be
                            provided
                            <span>(4 airport transfers; 2 for international flights and 2 for domestic flights are included)</span>
                        </li>
                        <li>
                            Accommodation in Kathmandu valley at a deluxe hotel including breakfast
                            <span>Hotel Thamel Park or Similar</span>
                        </li>
                        <li>
                            Kathmandu - Lukla - Kathmandu domestic flight tickets
                            <span>(Both way domestic flight tickets are included. Up to 15 kilos per person weight allowance including hand carry)</span>
                        </li>
                        <li>Everest National Park Entry Permit</li>
                        <li>Complimentary welcome or farewell dinner in Kathmandu before or after the trek</li>
                    </ul>
                </div>

                <div className={style.redHeight}>
                    <h5>What is not Included in the Cost?</h5>
                    <ul>
                        <li>
                            International flight tickets, travel insurance of any kind, personal nature expenses, visa fees and any other expenses not mentied in the cost included
                            options
                            <span>
                                Costs are not refunded or cannot be transferred to any other services if you voluntarily leave the trek and wish to return earlier than the
                                scheduled time.
                            </span>
                        </li>
                        <li>
                            Personal nature expenses, bars and beverage bills, hot shower, hot drinks, battery charging, internet, WiFi, drinking water, tipping for guides and
                            porters
                            <span>Hotel Thamel Park or Similar</span>
                        </li>
                        <li>Kathmandu - Lukla - Kathmandu domestic flight tickets</li>
                        <li>Anything not mentioned in cost excludes section</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CostingComponent;

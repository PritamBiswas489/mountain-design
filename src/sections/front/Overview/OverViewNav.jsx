import React, { useEffect, useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

const OverViewNav = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = document.querySelectorAll("section");
            let currentSectionId = null;

            sectionElements.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    currentSectionId = section.id;
                }
            });

            setActiveSection(currentSectionId);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call it once to set the initial active section.

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <ul>
                <li className={activeSection === "section1" ? "active" : ""}>
                    <a href="#section1">Section 1</a>
                </li>
                <li className={activeSection === "section2" ? "active" : ""}>
                    <a href="#section2">Section 2</a>
                </li>
                <li className={activeSection === "section3" ? "active" : ""}>
                    <a href="#section3">Section 3</a>
                </li>
            </ul>
        </nav>
    );
};

export default OverViewNav;

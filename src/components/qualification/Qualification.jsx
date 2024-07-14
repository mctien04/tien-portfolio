import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(2); // Start with Experience section active

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="portfolio">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Experience Section */}
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Front End Software Engineer</h3>
                                <span className="qualification__subtitle">University of Houston - Houston</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May, 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Computer Hardware Engineer - L'SPACE</h3>
                                <span className="qualification__subtitle">NASA - Remote</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May, 2024-Aug, 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Developer Intern</h3>
                                <span className="qualification__subtitle">We Jewelry - Houston, TX</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May, 2022-Aug, 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;

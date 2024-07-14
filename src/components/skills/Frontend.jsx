import React from 'react'
import { Html5Plain } from 'devicons-react';
import { Css3Plain } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { CplusplusOriginal } from 'devicons-react';

import { PythonOriginal } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { JavaOriginal } from 'devicons-react';



const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Programming Languages</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <Html5Plain size="1em" />

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                    <Css3Plain size="1em" />

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                        <JavascriptOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <JavaOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">Java</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                    <PythonOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                        <CplusplusOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">C++</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend
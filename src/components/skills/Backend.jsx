import React from 'react'
import { PythonOriginal } from 'devicons-react';
import { NodejsOriginal } from 'devicons-react';
import { DjangoPlain } from 'devicons-react';
import { FirebaseOriginal } from 'devicons-react';
import { FlaskOriginal } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { TailwindcssOriginal } from 'devicons-react';
import { NextjsPlain } from 'devicons-react';
import { MysqlOriginal } from 'devicons-react';





const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Technologies/Frameworks</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <ReactOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">React</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                        <TailwindcssOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">TailwindCSS</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                        <DjangoPlain size="1em" />

                        <div>
                            <h3 className="skills__name">Django</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <FirebaseOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                        <NextjsPlain size="1em" />

                        <div>
                            <h3 className="skills__name">NextJS</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>

                    <div className="skills__data">
                        <MysqlOriginal size="1em" />

                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <hr style={{ width: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Backend
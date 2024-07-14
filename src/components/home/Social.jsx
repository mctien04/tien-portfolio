import React from 'react'
import CV from '../../assets/Tien_Nguyen_Resume.pdf'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/tienn04/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin"></i>
            </a>

            <a href={CV} className="home__social-icon" target="_blank" rel="noreferrer">
                <i class="uil uil-file-info-alt"></i>
            </a>

            <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social
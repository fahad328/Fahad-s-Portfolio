import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_pic from '../../assets/profile.jpg';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="Theme pattern" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_pic} alt="Profile" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a passionate and results-driven Frontend Developer and Graphic Designer with 2 years of experience in crafting seamless and responsive web applications, as well as gaming logos, overlays, and animations. Over the past two years, I have honed my skills in various aspects of frontend development, including UI Design and Responsive Design, as well as in Adobe Photoshop and Illustrator.</p>
                        <p>I am committed to continuous learning and staying current with the latest industry trend and technologies. This dedication allows me to bring innovative solutions to the table and deliver exceptional results on every project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="skill-item"><p>HTML & CSS</p><hr style={{width:"70%"}}/> </div>
                        <div className="skill-item"><p>React JS</p><hr  style={{width:"60%"}}/></div>
                        <div className="skill-item"><p>Javascript</p><hr  style={{width:"50%"}}/></div>
                        <div className="skill-item"><p>Adobe Photoshop</p><hr  style={{width:"9cls0%"}}/></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
            <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default About;

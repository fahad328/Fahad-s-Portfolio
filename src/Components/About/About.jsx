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
                        <p>I am a passionate and results-driven Frontend Developer with 2 years of experience in crafting seamless and responsive web applications. Over the past two years, I have honed my skills in various aspects of frontend development, including UI/UX Design and Responsive Design.</p>
                        <p>I am committed to continuous learning and staying current with the latest industry trends and technologies. This dedication allows me to bring innovative solutions to the table and deliver exceptional results on every project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="skill-item"><p>HTML & CSS</p><hr style={{width:"70%"}}/> </div>
                        <div className="skill-item"><p>React JS</p><hr  style={{width:"60%"}}/></div>
                        <div className="skill-item"><p>JavaScript</p><hr  style={{width:"50%"}}/></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
            <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>80+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default About;

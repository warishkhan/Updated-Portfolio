import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import mypic from "../../assets/images/MyPic.png";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={mypic} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              {/* <p>
                My name is Warish khan. I am from Dhanbad-Jharkhand. I have completed my bachelor degree from NSHM Knowledge Campus-Durgapur. I belongs to a nuclear family. My strength are I am self motivating person and I have strong communication skill also. My short term goal is to get a job in a reputed Company and long term goal is to achieve a good position like yours. Where i can build my career and help the organisation too. My hobbies are reading books and playing football. Lastly, I am quick learner and believe in learning from my past mistakes and experiences.
              </p> */}
              <p>
                Passionate and dedicated Full Stack Developer with 2+ years of
                experience in developing user-friendly web and mobile
                applications. Proficient in modern front-end and back-end
                technologies, with a strong ability to collaborate in dynamic
                team environments. Committed to continuous learning and staying
                updated with industry trends to deliver exceptional solutions.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

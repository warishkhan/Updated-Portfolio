import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
import RubberBand from "react-reveal/RubberBand";
import { useTheme } from "../../context/ThemeContext";
const WorkExp = () => {
  const [theme] = useTheme();
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          </RubberBand>
          <VerticalTimeline lineColor={theme === 'dark' ? "#138781" : "#1e1e2c"}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000'}}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="May 2024 - present"
              iconStyle={{  background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Frontend Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Social Continent Private Limited, Kharadi-Pune, IN
            </h4>
            <ul style={{
              color: '#000'
            }}>
              <li>Lead the development of mobile applications using React Native, enhancing user experience and engagement.</li>
              <li>Collaborate with cross-functional teams to integrate APIs and ensure seamless functionality across platforms</li>
              <li>Implement responsive design techniques to ensure applications are mobile-friendly and performant.</li>
            </ul>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000' }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Oct 2021 - Nov 2021"
            iconStyle={{ background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Exposys Data Labs, Bengaluru, IN
            </h4>
            <ul  style={{
              color: '#000'
            }}>
              <li>Lead the front-end development for multiple web applications using ReactJS, improving user experience and engagement by 20%.
</li>
<li>Collaborate with back-end developers to integrate APIs, ensuring seamless data flow and functionality.
</li>
<li>Implemented responsive design techniques to ensure applications are mobile-friendly.
</li>
            </ul>
          </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

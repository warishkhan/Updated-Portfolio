import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import RubberBand from "react-reveal/RubberBand";
import { useTheme } from "../../context/ThemeContext";
const Education = () => {
  const [theme] = useTheme();
  return (
    <>
      <div className=" education" id="education">
      <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        </RubberBand>
        <VerticalTimeline lineColor={theme === 'dark' ? "#138781" : "#1e1e2c"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000' }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2022"
            iconStyle={{background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech CSE</h3>
            <h4 className="vertical-timeline-element-subtitle">
              NSHM Knowledge Campus-Durgapur, IN
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000' }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2018"
            iconStyle={{background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Higher secondary education</h3>
            <h4 className="vertical-timeline-element-subtitle">
              DAV MODEL SCHOOL CFRI PO FRI Dhanbad-Jharkhand, IN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* ////////////// */}
        <RubberBand>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certifications
        </h2>
        <hr />
        </RubberBand>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000' }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Nov 2023 - May 2024"
            iconStyle={{background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Internshala</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Full Stack Development Certification
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000' }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jan 2024 - Mar 2024"
            iconStyle={{background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Internshala</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Back-End Web Development Certification
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000' }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Nov 2023 - Dec 2023"
            iconStyle={{background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Internshala</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Front-End Web Development Certification
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: theme === 'dark' ? "#12bdb4" : '#000' }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Sept 2021 - Nov 2021"
            iconStyle={{background: theme === 'dark' ? "#138781" : "#1e1e2c", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Internshala</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Web Development Certification
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;

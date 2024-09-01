import PropTypes from "prop-types";
import React from "react";
import "../Iconbox/Iconbox.scss";

import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const IconCard = ({ data }) => {
  const [theme] = useTheme();

  const [expandedArray, setExpandedArray] = useState([]); // State variable to track expanded state of each icon

  // Effect to initialize expanded state array and fetch data
  useEffect(() => {
    // Initialize expanded state array based on number of services
    if (data.services && data.services.length) {
      const initialExpandedState = data.services.map(() => false);
      setExpandedArray(initialExpandedState);
    }
    // Fetch data
  }, [data.services]); // Dependency array to run effect only when dispatch or data.services changes

  // Function to toggle expanded state of an icon
  const toggleExpanded = (index) => {
    const newExpandedArray = [...expandedArray];
    newExpandedArray[index] = !newExpandedArray[index];
    setExpandedArray(newExpandedArray);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {data.services &&
            data.services.length &&
            data.services.map((element, index) => (
              <div
                className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center flex-wrap-wrap"
                key={index}
                data-aos={element.effect ? element.effect : "zoom-out-up"}
                data-aos-duration={element.duration ? element.duration : "800"}
                data-aos-delay={element.delay ? element.delay : "200"}
              >
                <div className="main-container d-flex justify-content-center align-items-center">
                  <div className="box">
                    <div className="box-content">
                      <div className="front" style={{
                        //  backgroundColor: theme === 'dark' ? '#151b29' : '#fafffe'
                      }}>
                        <div className={`st-iconbox st-style1`}>
                          <div className="st-iconbox-icon">
                            <img src={element.imgLink} alt="Icon" />
                          </div>
                          <h2
                            className="st-iconbox-title"
                            style={{
                              fontSize: 15,
                            }}
                          >
                            {element.title}
                          </h2>
                          {/* <p className="st-iconbox-text mb-1 text-info">{element.charge}</p> */}
                          <div
                            className="st-iconbox-text"
                            style={{
                              fontSize: 13,
                              color: theme === "dark" ? "#fff" : "#000",
                            }}
                          >
                            {element.text}
                          </div>
                        </div>
                      </div>
                      <div className="back" style={{
                        backgroundColor: theme === 'dark' ? '#151b29' : '#f5f7f7'
                      }}>
                        <img
                          src={element.imgLink}
                          alt="Icon"
                          className="rounded back-image"
                        />
                        <p className="st-iconbox-text  text-center  text-info fs-3 fw-bold mb-1 ">
                          {element.price}
                        </p>
                        <p
                          className="st-iconbox-text  text-center mb-1 text-info "
                          style={{
                            fontSize: 13,
                          }}
                        >
                          {element.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="st-height-b30 st-height-lg-b30"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

IconCard.propTypes = {
  data: PropTypes.object, // Prop validation for data
};

export default IconCard;

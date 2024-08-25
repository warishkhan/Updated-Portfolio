import React from "react";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Data from '../../Data.json'
const Contact = () => {
  const [theme] = useTheme();
  const {socialData} = Data;
  console.log(socialData);
  

  return (
    <>
      <div
        className=" contact"
        id="contact"
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#000",
        }}
      >
        <div
          className="card card0"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#000",
            borderColor: theme === "light" ? "#e0e0e0" : "#138781",
            borderWidth: 1,
          }}
        >
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div
                  className="row border-line"
                  style={{
                    borderColor: theme === "light" ? "#e0e0e0" : "#138781",
                    borderWidth: 1,
                  }}
                >
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                      style={{
                        borderRadius: theme === "light" ? 0 : "50%",
                      }}
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <form
                  className="card2 d-flex card border-0 px-4 py-5"
                  action="https://formspree.io/f/xeqbagnz"
                  method="POST"
                  style={{
                    backgroundColor: theme === "light" ? "#fff" : " #000",
                  }}
                >
                  <div
                    className="row"
                    style={{
                      display: "flex",
                      flexDirection: "",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor:
                        theme === "light"
                          ? "#fff"
                          : " rgba(128, 128, 128, 0.101)",
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderRadius: theme === "light" ? 0 : 8,
                    }}
                  >
                    <div className="row">
                      {/* <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/warish-khan-a577b9220/">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/warishkhan?tab=repositories">
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <BsInstagram color="blue" size={30} className="ms-2" />
                      </h6> */}

                      <div className="st-social-info">
                {/* <div className="st-social-text">{subTitle}</div> */}
                <SocialLinks data={socialData} />
              </div>

                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center" style={{
                        color: theme === 'dark' ? '#fff' : '#000'
                      }}>OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                        style={{
                          backgroundColor:
                            theme === "light" ? "#fff" : "#221E2A",
                        }}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="mb-3"
                        style={{
                          backgroundColor:
                            theme === "light" ? "#fff" : "#221E2A",
                        }}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Write your message"
                        className="mb-3"
                        style={{
                          backgroundColor:
                            theme === "light" ? "#fff" : "#221E2A",
                        }}
                      />
                    </div>
                    <div className="row px-3">
                      <button
                        className="button"
                        value="send"
                        style={{
                          backgroundColor:
                            theme === "light" ? "#1e1e2c" : " #138781",
                        }}
                      >
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </form>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

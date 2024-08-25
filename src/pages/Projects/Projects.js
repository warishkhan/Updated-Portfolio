import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
         Here is my top recent projects with github source code link and Netlify domain link.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  
                  <span className="card-detail-badge">React</span>
                  <a href="https://github.com/warishkhan/MyEcommerceApp"><span className="card-detail-badge">Github Link</span></a>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      WarTech Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://monumental-salmiakki-304426.netlify.app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FullStack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Express/Node</span>
                  <span className="card-detail-badge">React</span>
                  {/* <span className="card-detail-badge">Node</span> */}
                  <a href="https://github.com/warishkhan/MyMern-MusicApp"><span className="card-detail-badge">Github Link</span></a>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">WarMusic App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://mern-music-app-lcv6.onrender.com"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                  <a href="https://github.com/warishkhan/Myapi"><span className="card-detail-badge">Github Link</span></a>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Rest-Api</h5>
                  </div>
                  <a className="ad-btn" href="https://api.pujakaitem.com/api/products">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Fullstack</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopbS-aU6vCBNbvxEG_O3z10sa-ZbpOjtkFA&usqp=CAU"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React-Native</span>
                  <span className="card-detail-badge">MongoDB</span>
                  <span className="card-detail-badge">Node</span>
                  <a href="https://github.com/warishkhan/React-Native-Education-App"><span className="card-detail-badge">Github Link</span></a>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Post App</h5>
                  </div>
                  <a className="ad-btn" href="https://expo.dev/accounts/warish_khan/projects/client/builds/6d651b65-c9c8-4746-a51f-991994eb7027">
                    Apk
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://st.depositphotos.com/1144687/1902/i/450/depositphotos_19024147-stock-photo-drawing-city-over-book.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React-Native</span>
                  <a href="https://github.com/warishkhan/React-Native-Education-App"><span className="card-detail-badge">Github Link</span></a>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Education App</h5>
                  </div>
                  <a className="ad-btn" href="https://expo.dev/accounts/warish_khan/projects/education-app/builds/cfcb5989-ae46-4f62-8eaf-8dfa34e3193a">
                    Apk
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src="https://img.freepik.com/free-photo/network-connection-graphic-overlay-background-computer-screen_53876-120776.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <a href="https://github.com/warishkhan/News-App"><span className="card-detail-badge">Github Link</span></a>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">WarTech News-App</h5>
                  </div>
                  <a className="ad-btn" href="https://playful-ganache-e33736.netlify.app/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;

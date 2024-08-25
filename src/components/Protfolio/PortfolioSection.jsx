import PropTypes from 'prop-types';
import './Portfolio.scss';
import { useState, useEffect } from 'react';
import SinglePortfolio from '../Protfolio/SinglePortfolio';
import Modal from '../Modal/Modal';
import { useTheme } from "../../context/ThemeContext";
import RubberBand from "react-reveal/RubberBand";


// Define PortfolioSection component
const PortfolioSection = ({data}) => {
  const [theme] = useTheme();
  
  
  // Define local component state
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  // Load Items logic
  useEffect(() => {
    if (data.portfolioItems) {
      setVisibleItems(data.portfolioItems.sort((a, b) => a.sequence - b.sequence).slice(0, 6));
      setShowLoadMore(data.portfolioItems.length > 6);
    }
  }, [data.portfolioItems]);

  // Function to handle opening modal
  const getData = (imgLink, title, github,live,type) => {
    setTempData([imgLink, title, github,live,type]);
    setModal(true);
  }

  // Function to handle closing modal
  const modalClose = () => {
    setModal(false);
  }

  // Function to load more items
  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = data.portfolioItems.slice(currentLength, currentLength + 6);
    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);

    if (currentLength + 6 >= data.portfolioItems.length) {
      setShowLoadMore(false);
    }
  };

  // Return JSX for rendering component
  return (
    <>
      <section id="projects" className='projectsCon' style={{
        
      }}>
      <RubberBand>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
         Here is my top recent projects with github source code link and Netlify domain link.
        </p>
        </RubberBand>
        <div className="st-height-b100 st-height-lg-b80"></div>
        {/* <SectionHeading title={'Portfolio'} /> */}
        <div className="container">
          <div className="row">
            {visibleItems.map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    style={{
                      backgroundColor:theme==='light'?'#d8d8d8':'#fec544',
                      width:170,
                      padding:10,
                      borderRadius:30
                    }}
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? <Modal img={tempData[0]} title={tempData[1]}  github={tempData[2]} live={tempData[3]} type={tempData[4]}  modalClose={modalClose}/> : ""}
    </>
  );
};

// Define prop types for PortfolioSection component
PortfolioSection.propTypes = {
  data: PropTypes.object,
};

// Export PortfolioSection component
export default PortfolioSection;

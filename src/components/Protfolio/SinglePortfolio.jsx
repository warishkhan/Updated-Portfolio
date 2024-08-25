import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { FaGithub } from "react-icons/fa"; // Import FontAwesome icons
import { useTheme } from "../../context/ThemeContext";


const SinglePortfolio = ({ data, getData }) => {
  // Destructure data object
  const { imgLink, title,github,live,type } = data;
  const [theme] = useTheme();

  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos={"fade-up"}
      data-aos-duration={"500"}
      data-aos-delay={"200"}
    >
      {/* Portfolio item container */}
      <div
        className="st-portfolio-single st-style1"
        onClick={() => getData(imgLink, title,github,live,type)}
      >
        {/* Portfolio item */}
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            {/* Portfolio image */}
            <div className="st-portfolio-img st-zoom-in">
              <img src={ imgLink} alt="portfolio" style={{
                height:"250px"
              }} />
            </div>
            {/* Portfolio item hover effect */}
            <div className="st-portfolio-item-hover">
              {/* Plus circle icon */}
              <Icon icon="mdi:plus-circle" />
              {/* Portfolio title */}
              <h5>{title}</h5>
              {/* Portfolio description */}
              {/* <p>description</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="st-portfolio-btns d-flex justify-content-between align-items-center mb-4">
        <a href={live} className="st-btn st-style2 st-color1 mt-3" style={{
          backgroundColor:theme==='light'?'#d8d8d8':'',
           color:theme==='light'?'#000':''
        }}>
          {type == 'web' ? "Live Url" : "Apk"}
        </a>
        <a href={github} className="st-btn st-style2 st-color3 mt-3" style={{
          backgroundColor:theme==='light'?'#fff':'',
          borderWidth:1,
          borderColor:theme==='light'?'#000':'#fff',
          color:theme==='light'?'#000':'#fff'
        }}>
          <span className="me-1">
            <FaGithub />
          </span>{" "}
          GitHub
        </a>
      </div>
    </div>
  );
};

// PropTypes validation
SinglePortfolio.propTypes = {
  data: PropTypes.object.isRequired, // data prop is required and should be an object
  getData: PropTypes.func.isRequired, // getData prop is required and should be a function
};

export default SinglePortfolio;

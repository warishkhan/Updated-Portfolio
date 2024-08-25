import PropTypes from 'prop-types';
import { Icon } from '@iconify/react'; 
import { useState, useEffect } from 'react'; 
import './Social.scss'



// SocialLinks component definition
const SocialLinks = ({data}) => {
  // Redux state management
  
console.log(window.innerWidth);

  // State to track active link
  const [activeLink, setActiveLink] = useState(0);

  // Function to handle icon hover
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

 

  

  return (
    // Container for social links
    <div className="st-social-link">
      {/* Mapping over social links data and rendering each link */}
      {(data && data.length) && data.map((item, index) => (
        <a
          href={item.link}
          className={index === activeLink ? 'st-social-btn active' : 'st-social-btn'}
          onMouseEnter={() => handleIconHover(index)}
          key={index}
        >
          {/* Social icon */}
          <span className="st-social-icon"><Icon icon={`fa6-brands:${String(item.platform).toLowerCase()}`} /></span>
          {/* Social platform name */}
          <span className="st-icon-name" style={{
            fontSize:  window.innerWidth <= 600 ? '0.7rem':'1rem'
          }}>{item.platform}</span>
        </a>
      ))}
    </div>
  );
}

// PropTypes for type validation
SocialLinks.propTypes = {
  data: PropTypes.array, // Expecting an array of social links data
}

export default SocialLinks; // Exporting SocialLinks component

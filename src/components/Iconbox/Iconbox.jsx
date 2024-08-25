
import "./Iconbox.scss";
import IconCard from "../iconboxCard/IconCard";
import RubberBand from "react-reveal/RubberBand";

const Iconbox = ({data}) => {
  return (
    <section className='projectsCon'>
    <RubberBand>
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          SERVICES
        </h2>
        <hr />
        <p className="pb-3 text-center">
         {/* Here is my top recent projects with github source code link and Netlify domain link. */}
        </p>
        </RubberBand>
      <div className="st-height-b100 st-height-lg-b80"></div>
      <IconCard data={data}/>
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  );
};

export default Iconbox;

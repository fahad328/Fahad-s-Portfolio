import React, { useState } from "react";
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";


const Services = () => {

  const[expendedService, setExpendedService] = useState(null);

  const handleReadMore =(index) => {
  setExpendedService(expendedService === index ? null : index);
};


  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{expendedService === index ? service.s_full_desc : service.s_short_desc}</p>
            <div className="read-more" onClick={() => handleReadMore(index)}>
              <p>{expendedService === index ? "Read less" : "Read more"}</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
    
    );
  }


export default Services;

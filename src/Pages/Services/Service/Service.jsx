import React from "react";

const Service = (props) => {
  const { name, price, img, des } = props.service;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top " alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{des}</p>
          <p className="card-text fw-bold">Price: ${price}</p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-dark w-100">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

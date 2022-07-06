import React from "react";

const Success = () => {
  return (
    <div className="container mx-auto bg-dark text-white py-5 my-5">
      <h1 className="text-center pb-4">My Success in Numbers</h1>
      <div className="d-flex justify-content-around text-center">
        <div>
          <p className="fs-1 fw-bold mb-0">25+</p>
          <p className="fs-2">Years of Experince</p>
        </div>
        <div>
          <p className="fs-1 fw-bold mb-0">80+</p>
          <p className="fs-2">Statisfied Clients</p>
        </div>
        <div>
          <p className="fs-1 fw-bold mb-0">100%</p>
          <p className="fs-2">Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Success;

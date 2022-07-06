import React from "react";
import { Button } from "react-bootstrap";
import google from "../../../assets/images/google.svg";

const GoogleLogin = () => {
  return (
    <div>
      <div>
        <Button
          variant="dark"
          className="w-100 d-inline-flex align-items-center justify-content-center "
        >
          <img src={google} alt="" className="me-2" /> Login With Google
        </Button>
      </div>
    </div>
  );
};

export default GoogleLogin;

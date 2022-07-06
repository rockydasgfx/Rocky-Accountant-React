import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import google from "../../../assets/images/google.svg";
import Loading from "../../../Components/Loading/Loading";
import auth from "../../../firebase.config";

const GoogleLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (loading) {
    return <Loading />;
  }

  const from = location?.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div>
        <Button
          onClick={() => signInWithGoogle()}
          variant="dark"
          className="w-100 d-inline-flex align-items-center justify-content-center "
        >
          <img src={google} alt="" className="me-2" /> Login With Google
        </Button>
      </div>
      <p className="text-denger">{error?.message ? error?.message : ""}</p>
    </div>
  );
};

export default GoogleLogin;

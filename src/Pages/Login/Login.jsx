import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.config";
import GoogleLogin from "./GoogleLogin/GoogleLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading) {
    return <p>login</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const hendleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const hendleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      console.log("email Send");
    } else {
      console.log("Plese Type Your Email");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-5">Login</h1>
      <div className="w-75 mx-auto my-5 ">
        <Form onSubmit={hendleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <p className="text-denger">{error?.message ? error?.message : ""}</p>
        <p>
          Are You New <Link to="/register">Register</Link>
        </p>
        <p>
          Are You New{" "}
          <Button variant="link" onClick={hendleResetPassword}>
            password Reset
          </Button>
        </p>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Login;

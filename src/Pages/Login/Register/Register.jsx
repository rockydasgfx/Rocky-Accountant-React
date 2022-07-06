import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Loading from "../../../Components/Loading/Loading";

const Register = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    return <Loading />;
  }

  const hendleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
    navigate("/home");
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-5">Register</h1>
      <div className="w-75 mx-auto my-5 ">
        <Form onSubmit={hendleRegister}>
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
            Register
          </Button>
        </Form>
        <p className="text-denger">{error?.message ? error?.message : ""}</p>
        <p>
          please <Link to="/login">Login</Link>
        </p>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;

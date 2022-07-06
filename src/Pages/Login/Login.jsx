import { Form, Button } from "react-bootstrap";
import google from "../../assets/images/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center mt-5">Login</h1>
      <div className="w-75 mx-auto my-5 ">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>
        </Form>
        <p>
          Are You New <Link to="/register">Register</Link>{" "}
        </p>
        <div>
          <Button
            variant="dark"
            className="w-100 d-inline-flex align-items-center justify-content-center "
          >
            <img src={google} alt="" className="me-2" /> Login With Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

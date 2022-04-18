import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import SocialLogin from "../../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confPasswordRef = useRef("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading) {
    return <Loading></Loading>;
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confPassword = confPasswordRef.current.value;
    if (password !== confPassword) {
      toast("didnt match password");
      return;
    }
    await createUserWithEmailAndPassword(email, password);

    console.log("Varification Email Sent");

    navigate("/home");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-danger text-center m-3">Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={confPasswordRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Button variant="outline-danger w-50 mx-auto d-block m-3" type="submit">
          Register
        </Button>
      </Form>

      <p>
        Already have account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Log In
        </Link>{" "}
      </p>

      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Register;

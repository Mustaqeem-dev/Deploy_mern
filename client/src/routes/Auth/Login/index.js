import "./components/Login.css";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState("Login");

  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const { email, password } = formData;

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoader("loading...");

    if (!email || !password) {
      toast.error("Please enter all fields");
    } else {
      fetch("https://deploy-mern-api-xi.vercel.app/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          // if (!response.ok) {
          //   toast.error();
          //   return;
          // }
          return response.json(); // Parse the response JSON
        })
        .then((data) => {
          console.log("==data", data);
          if (!data.success) {
            toast.error(data.msg);
            setLoader("Login");
            return;
          }

          // Store the token in local storage
          localStorage.setItem("token", data.token);

          // Store the user data in local storage
          localStorage.setItem("user", JSON.stringify(data.user));

          setFormData(initialFormData);
          setLoader("Login");
          navigate("/jobFeed");
        })
        .catch((error) => {
          // Handle error here
          toast.error("Some error occured");

          console.log("Error sending data:", error);
          setLoader("Login");
        });
    }
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  function registerBtn() {
    navigate("/signUp");
  }

  function forgetPasswordPage() {
    navigate("/forgetPassword");
  }

  // Company Login

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        onClick={handleGoBack}
        style={{ cursor: "pointer" }}
        className="mt-3"
      >
        <p>
          <FaArrowLeft /> <span>Back</span>
        </p>
      </div>
      <div>
        <div class="container Card col-lg-4 pt-2  ">
          <div class="note pb-3">
            <span className="loginHeading "> Apply for Jobs</span>
            {/* <div className="pt-3">
              <button className="LoginBtn mx-2" onClick={handle1}>
                Hire a Team
              </button>
              <button className="LoginBtn mx-2" onClick={handle2}>
                Apply for Jobs
              </button>
            </div> */}
          </div>

          <div>
            <div class="col-sm-10 offset-1 p-2">
              <div className="text-center  form-group">
                <Form onSubmit={handleSubmit}>
                  <p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        className="form-control loginInput"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                      />
                    </Form.Group>
                  </p>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control loginInput"
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text text-center"
                          style={{
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: "17px",
                            right: "0",
                            textAlign: "center",
                          }}
                          onClick={handleTogglePassword}
                        >
                          {showPassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </span>
                      </div>
                    </InputGroup>
                  </Form.Group>

                  <div className="d-flex justify-content-between mt-1">
                    <p className="rememberMe">
                      <input type="checkbox" /> Remember Me
                    </p>
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "#D93F21",
                        fontSize: "14px",
                      }}
                      onClick={forgetPasswordPage}
                    >
                      Recover Password?
                    </a>
                  </div>

                  <button type="submit" className="loginBtn mb-3 mt-2">
                    {loader}
                  </button>
                </Form>
                {/* <div className="text-with-lines py-3">
                  <div className="line"></div>
                  <span className="text">Or continue with</span>
                  <div className="line"></div>
                </div>
                <div className=" d-flex justify-content-center gap-3 ">
                  <div>
                    <button className="inputIcons">
                      <p className="icons">
                        {" "}
                        <FcGoogle fill="#3B5998" size={20} />
                        <span onClick={google}>Google</span>
                      </p>
                    </button>
                  </div>
                  <button className=" inputIcons  ">
                    <p className="icons ">
                      {" "}
                      <FaFacebook fill="#3B5998" size={20} />
                      <span>Facebook</span>{" "}
                    </p>
                  </button>
                </div> */}
                <ToastContainer />
                <div className="accountLink mt-3">
                  Not registered?{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#D93F21",
                      fontSize: "14px",
                    }}
                    onClick={registerBtn}
                  >
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

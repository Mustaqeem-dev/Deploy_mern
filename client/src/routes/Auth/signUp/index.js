import "../Login/components/Login.css";
import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  function loginButton() {
    navigate("/Login");
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  console.log("===password", isValidPassword);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // User Registration

  const [message, setMessage] = useState("");

  const UserRegister = () => {
    return "/login";
  };
  const initialFormData = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "password") {
      // Regex pattern for password validation
      const regexPattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      const isValid = regexPattern.test(value);
      console.log("===", isValid);
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));

      // Update the validity of the password
      setIsValidPassword(isValid);
    } else {
      // For other fields, update the state without validation
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const { email, password, confirmPassword } = formData;
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      toast.error("Please enter all fields");
    }
    // else if (!isValidPassword) {
    //   toast.error(
    //     "password should be one letter, one digit, and is at least 8 characters "
    //   );
    // }
    else {
      fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Something went wrong please try again");
            throw new Error("Error sending data to the backend.");
          }

          setFormData(initialFormData);
          setIsValidPassword(false);
          toast.success("User is registered successfully");
        })
        .catch((error) => {
          // Handle error here

          console.log("Error sending data:", error);
        });
    }
  };

  return (
    <>
      <div>
        <div className="container loginBox Card col-md-4   ">
          <div className="note pt-3 pb-3">
            <span className="loginHeading "> Apply for Jobs</span>
          </div>

          <div>
            <div class="col-sm-10 offset-1 p-2">
              <div class="text-center">
                <Form onSubmit={handleSubmit}>
                  {" "}
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
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicConfirmPassword"
                  >
                    <InputGroup>
                      <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
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
                            backgroundColor: "transparent",
                            position: "absolute",
                            top: "17px",
                            right: "0",
                            textAlign: "center",
                          }}
                          onClick={handleToggleConfirmPassword}
                        >
                          {showConfirmPassword ? (
                            <BsFillEyeFill />
                          ) : (
                            <BsFillEyeSlashFill />
                          )}
                        </span>
                      </div>
                    </InputGroup>
                  </Form.Group>
                  {formData.confirmPassword !== formData.password && (
                    <Form.Text className="text-danger">
                      Passwords do not match.
                    </Form.Text>
                  )}
                  <button
                    type="submit"
                    className="loginBtn mb-3"
                    onClick={UserRegister}
                  >
                    Signup
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
                        <span>Google</span>
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
                <div className="accountLink pt-3">
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={loginButton}
                    style={{
                      textDecoration: "none",
                      color: "#D93F21",
                      fontSize: "14px",
                    }}
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Register;

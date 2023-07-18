import "../Login/components/Login.css";

import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const paramData = useParams();
  const token = paramData && paramData.id;

  console.log("====", token);
  function loginButton() {
    navigate("/Login");
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // User Registration

  const UserRegister = () => {
    return "/login";
  };
  const initialFormData = {
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
  const { password, confirmPassword } = formData;
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please enter all fields");
    }
    // else if (!isValidPassword) {
    //   toast.error(
    //     "password should be one letter, one digit, and is at least 8 characters "
    //   );
    // }
    else {
      let passwords = formData.password;
      fetch("https://deploy-mern-api-xi.vercel.app/user/setPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ token, passwords }),
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Error sending data to the backend.");
            throw new Error("Error sending data to the backend.");
          }

          setFormData(initialFormData);
          toast.success("New Password is set Successfully");
        })
        .catch((error) => {
          // Handle error here
          toast.error("Some error occured");

          console.log("Error sending data:", error);
        });
    }
  };

  return (
    <>
      <div>
        <div className="container loginBox Card col-md-4   ">
          <div className="note pt-3 pb-3">
            <span className="loginHeading "> set New Password</span>
          </div>

          <div>
            <div class="col-sm-10 offset-1 p-2">
              <div class="text-center">
                <Form onSubmit={handleSubmit}>
                  {" "}
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
                  <button className="loginBtn mb-3" onClick={UserRegister}>
                    set Password
                  </button>
                </Form>

                <div className="accountLink pt-3">
                  Back{" "}
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      color: "#D93F21",
                      fontSize: "14px",
                    }}
                    onClick={loginButton}
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

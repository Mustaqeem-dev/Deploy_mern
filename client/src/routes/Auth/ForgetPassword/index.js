import "../Login/components/Login.css";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const { email } = formData;
  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!email ) {
      toast.error("Please enter all fields");
    } else {
      fetch("http://localhost:5000/user/forgetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Some error occured",);
            throw new Error("Error sending data to the backend.");
          }
          return response.json(); // Parse the response JSON
        })
        .then((data) => {
          console.log("==data",data)
          // Check if the response contains the token and user data
          if (data) {
        
            setFormData(initialFormData);
            toast.success("Email is sended on account Please check gmail");
          
   
          }
        })
        .catch((error) => {
          // Handle error here
        
  
          console.log("Error sending data:", error);
        });
    }
  };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  function registerBtn() {
    navigate("/login");
  }

  function jobFeedPage() {
    navigate("/jobFeed");
  }

  // Company Login

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
            <span className="loginHeading ">Recover Password</span>
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
                  </p>

                  <button
                    type="submit"
                    className="loginBtn mb-3 mt-2"
                  >Forget Password</button>
                </Form>

                <div className="accountLink mt-3">
                  Back to{" "}
                  <a
                    onClick={registerBtn}
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
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;

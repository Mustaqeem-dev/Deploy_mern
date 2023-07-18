import "../components/home.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Header() {
  const navigate = useNavigate();
  const [showCarousel, setShowCarousel] = useState(false);
  function loginButton() {
    navigate("/Login");
  }
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");

  };
const user=localStorage.getItem("user") ;
  let data=JSON.parse(user)

  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState(null); // Define the userInfo state variable

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("user-info");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo); // Set the userInfo state variable
      if (parsedUserInfo.company) {
        setEmail(parsedUserInfo.company.comp_Email);
      } else if (parsedUserInfo.user) {
        setEmail(parsedUserInfo.user.user_Email);
      } else if (parsedUserInfo.admin) {
        setEmail(parsedUserInfo.admin.admin_Email);
      }
    }
  }, []);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    },
    image: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
    },
    name: {
      marginRight: '20px',
    }
   
  };







  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Container fluid className="px-5">
          <Navbar.Brand className="logoH text-white" href="#home">
            Job Recruitment
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          {
          !user ? (
            <>
            <Nav className="navBarLinks ms-auto me-3">
              <Nav.Link className="mx-2" href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link className="mx-2" href="#services">
                Services
              </Nav.Link>
              <Nav.Link className="mx-2" href="#whyus">
                Why Us  
          </Nav.Link>    
          <Nav.Link className="mx-2" href="#Newsletter">
                Newsletter  
          </Nav.Link>        
          </Nav>
            <button className="getHiredBtnH mx-1" onClick={loginButton}>
                    Get Hired
                  </button>
                  </>
          ):(
            <Nav className="navBarLinks ms-auto me-3">
             
                  <div>
      <Dropdown>
      <Dropdown.Toggle variant="transparent" id="dropdown-custom">
        <div  style={styles.container}>
       
          <p style={styles.name}>{user && data.email}</p>
         
        </div>
      </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
              
            </Nav>
          )
          }
            

         
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

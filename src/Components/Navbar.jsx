import { useState } from "react";
import { FaMoon, FaBell, FaCog, FaClock, FaSearch } from "react-icons/fa";
import { Badge, InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const profileImage = "https://randomuser.me/api/portraits/men/45.jpg";
  
    return (
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
      
        <h5 className="text-muted m-0">CREATE PRODUCT</h5>
  
       
        <div className="d-flex align-items-center gap-3">
          
          <FaMoon
            className="text-secondary"
            style={{ cursor: "pointer" }}
            onClick={() => setDarkMode(!darkMode)}
          />
  
          
          <div className="position-relative">
            <FaBell className="text-secondary" style={{ cursor: "pointer" }} />
            <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
              3
            </Badge>
          </div>
  
         
          <FaCog className="text-secondary" style={{ cursor: "pointer" }} />
  
        
          <FaClock className="text-secondary" style={{ cursor: "pointer" }} />
  
         
          <img src={profileImage} alt="User" className="rounded-circle" width="35" height="35" />
  
         
          <InputGroup className="ms-2" style={{ maxWidth: "200px" }}>
            <InputGroup.Text className="bg-light border-0">
              <FaSearch className="text-secondary" />
            </InputGroup.Text>
            <FormControl placeholder="Search..." className="border-0 bg-light" />
          </InputGroup>
        </div>
      </div>
    );
  
}

export default Navbar

  import './Header.css'
  import React, { useState, useEffect  } from "react";
  import { Nav, Button, Dropdown } from "react-bootstrap";
  import SignIn from "../Auth/SignIn";
  import SignUp from "../Auth/SignUp";
  import { Link, useLocation } from "react-router-dom";
  import Logo from "../../assets/Images/logo.svg"
  import DefaultUserImg from '../../assets/Images/DefaultUserImg.svg'
  import { useNavigate } from "react-router-dom";
  // import Details from '../../UserDetails.json'

  const Header = () => {
    const userDetailsString = localStorage.getItem('userDetails');
    const userDetails = JSON.parse(userDetailsString);
    // console.log(userDetails.username);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();
    const navigate = new useNavigate();

    useEffect(() => {
      // Set the active link based on the current URL pathname
      setActiveLink(location.pathname);

      // Check if token exists in local storage
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true); // Set isLoggedIn to true if token exists
      } else {
        setIsLoggedIn(false); // Set isLoggedIn to false if token doesn't exist
      }
    }, [location.pathname]);
    
    const Logout = () =>{
      localStorage.removeItem('token')
      localStorage.removeItem("userDetails")
      navigate('/')
    }

    const closeOffcanvas = () => {
      // Close the offcanvas by targeting the offcanvas button and triggering a click event
      const offcanvasButton = document.getElementById("offcanvasToggleButton");
      if (offcanvasButton) {
        offcanvasButton.click();
      }
    };
    const handleNavLinkClick = (path) => {
      setActiveLink(path);
      closeOffcanvas(); // Close the offcanvas after clicking a nav link
    };

    useEffect(() => {
      // Set the active link based on the current URL pathname
      setActiveLink(location.pathname);
    }, [location.pathname]);


    const navItem = isLoggedIn ? [ // If user is logged in, show this set of links
    { name: "Dashboard", path: "/Dashboard" },
    { name: "Orders", path: "/Orders" },
    { name: "Holding", path: "/Holding" },
    { name: "Positions", path: "/Positions" },
    { name: "Bids", path: "/Bids" },
    { name: "Funds", path: "/Funds" }
  ] : [ // If user is not logged in, show this set of links
    { name:'Home', path:'/' },
    { name:'About', path:'/About' },
    { name:'Contact', path:'/Contact' }
  ];


    const handleSignUp = () => {
      // Add sign up logic
    };

    // console.log(Details);  
    // const handleLogout = () => {
    //   setIsLoggedIn(false);
      // Add logout logic
    // };

    return (
      <>

        <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-3 bg-body rounded ">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/#">
            <img src={Logo} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler border-white"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span><i className="fa-solid fa-bars" style={{color: "#3e3569"}}></i></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              // style={{ maxWidth: "250px" }}
            >
              <div className="offcanvas-header ">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={Logo} alt="Logo" />
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  id="offcanvasToggleButton"
                ></button>
              </div>
              <ul className="navbar-nav ms-lg-auto">

              {navItem.map((item, index) => (
                  <li className="nav-item p-2" key={index}>
                    <Link
                      className={`nav-link ${
                        activeLink === item.path ? "active" : ""
                      }`}
                      to={item.path}
                      onClick={() => handleNavLinkClick(item.path)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <Nav>
                  {!isLoggedIn ? (
                    <>
                      <Button
                        className="m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal1"
                        variant="outline-primary"
                        // onClick={handleSignIn}
                      >
                    Sign In
                      </Button>
                      <Button
                        className="m-2"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2"
                        variant="outline-success"
                        onClick={handleSignUp}
                      >
                        Sign Up
                      </Button>
                    </>
                  ) : (
                    <>
                    
                      <li className="nav-item  p-2 d-none d-lg-block">
                        <Link className="nav-link" to="/#">
                          <i
                            className="fa-solid fa-bell"
                            style={{ color: "#4d3a92", fontSize: "1.2em" }}
                          >
                          </i>
                          
                        </Link>
                      </li>
                      <li className="nav-item ">
                        {/* <div
                          className="dropdown d-flex mt-2 border-end-0 border rounded-pill bg-light pe-auto"
                          style={{ borderRadius: "500", cursor: "pointer" }}
                        >
                          <p className="m-2">Pankaj Madan</p>

                          <img
                            src="https://media.licdn.com/dms/image/C5103AQFA9fernfW9Jg/profile-displayphoto-shrink_100_100/0/1556263959618?e=1716422400&v=beta&t=FyreLN0VUL6NwpUdS1W6vMzLgqYcSb8N_dkeVhXGWdA"
                            width="35"
                            height="35"
                            className="rounded-circle m-1"
                            alt=""
                          />
                        </div>
                        <Button
                        className="m-2"
                        variant="outline-danger"
                        onClick={Logout}
                      >
                        Logout
                      </Button> */}

  <Dropdown>
        <Dropdown.Toggle className="p-1 dropdown d-flex bg-light"
                          style={{ borderRadius: "100px", cursor: "pointer", border:"none" }}
                          id="dropdown-basic">
          <p className="m-2" style={{color:'black'}}>{userDetails.username}</p>
          <img
                            // src="https://media.licdn.com/dms/image/C5103AQFA9fernfW9Jg/profile-displayphoto-shrink_100_100/0/1556263959618?e=1716422400&v=beta&t=FyreLN0VUL6NwpUdS1W6vMzLgqYcSb8N_dkeVhXGWdA"
                            src={userDetails.image ? userDetails.image : DefaultUserImg}
                            width="25"
                            height="25"
                            className="rounded-circle m-2"
                            alt=""
                          />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

                      </li>                    
                    </>
                  )}
                </Nav>
              </ul>
            </div>
            {/*  */}

          </div>
        </nav>

        {/* SingUp Model Form */}
        <SignUp/>

        {/* singIn form */}
        <SignIn setIsLoggedIn={setIsLoggedIn}/>
      </>
    );
  };

  export default Header;

// import React, { useState } from 'react';
// import { Navbar, Nav, Button } from 'react-bootstrap';

// const Header = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const handleSignIn = () => {
//         setIsLoggedIn(true);
//     };

//     const handleSignUp = () => {
//         // Add sign up logic
//     };

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         // Add logout logic
//     };

//     return (
//         <>
//             {/* // <Navbar bg="light" expand="lg">
//     //   <Navbar.Brand href="#">My Website</Navbar.Brand>
//     //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     //   <Navbar.Collapse id="basic-navbar-nav">
//     //     <Nav className="mr-auto">
//     //       <Nav.Link href="#">Dashboard</Nav.Link>
//     //       <Nav.Link href="#">Orders</Nav.Link>
//     //       <Nav.Link href="#">Holding Bids</Nav.Link>
//     //     </Nav>
//     //     <Nav>
//     //       {!isLoggedIn ? ( */}
//             {/* //         <>
//     //           <Button variant="outline-primary" onClick={handleSignIn}>Sign In</Button>
//     //           <Button variant="outline-success" onClick={handleSignUp}>Sign Up</Button>
//     //         </>
//     //       ) : (
//     //         <>
//     //           <Nav.Link href="#">Profile</Nav.Link>
//     //           <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
//     //         </>
//     //       )}
//     //     </Nav> */}
//             {/* //   </Navbar.Collapse> */}
//             {/* // </Navbar> */}

//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//                 <div class="container-fluid">
//                     <a class="navbar-brand" href="#">Navbar</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarNav">
//                         <ul class="navbar-nav ms-auto">
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Orders</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Holding</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Positions</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Bids</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link" href="#">Funds</a>
//                             </li>

//                         </ul>

//                         <Nav className='p-2'>
//                             {!isLoggedIn ? (
//                                 <>
//                                     <Button data-bs-toggle="modal" data-bs-target="#exampleModal1" variant="outline-primary" onClick={handleSignIn}>Sign In</Button>
//                                     <Button data-bs-toggle="modal" data-bs-target="#exampleModal2" variant="outline-success" onClick={handleSignUp}>Sign Up</Button>
//                                 </>
//                             ) : (
//                                 <>
//                                     <Nav.Link href="#">Profile</Nav.Link>
//                                     <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
//                                 </>
//                             )}
//                         </Nav>

//                     </div>
//                 </div>
//             </nav>

//             {/* SingUp Model Form */}
//             <div class="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div class="modal-body">
//                             ...
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" class="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* singIn form */}
//             <div class="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         {/* <div class="modal-header"> */}
//                             {/* <h1 class="modal-title fs-5" id="exampleModalLabel">SignIn Form</h1> */}
//                             {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
//                         {/* </div> */}
//                         {/* <div class="modal-body row">
//                             <form className='col-lg-10 m-auto'>
//                                 <div class="form-group">
//                                     <label for="exampleInputEmail1">Email address</label>
//                                     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//                                     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                                 </div>
//                                 <div class="form-group">
//                                     <label for="exampleInputPassword1">Password</label>
//                                     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//                                 </div>
//                                 <div class="form-group form-check">
//                                     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//                                     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//                                 </div>
//                                 <div class="modal-footer">
//                                     <button type="button" class="btn btn-primary">LogIn</button>
//                                 </div>
//                             </form>
//                         </div> */}
//                         <div class="container">
//     <div class="row">
//       <div class="col-md-12">
        
//         {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
//         <div class="card my-5">

//           <h2 class="text-center text-dark mt-5">Login Form</h2>
//           <form class="card-body cardbody-color p-lg-5">


//             {/* <div class="text-center">
//               <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
//                 width="200px" alt="profile"/>
//             </div> */}

//             <div class="mb-3">
//               <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
//                 placeholder="User Name"/>
//             </div>
//             <div class="mb-3">
//               <input type="password" class="form-control" id="password" placeholder="password"/>
//             </div>
//             <div class="text-center"><button type="button" class="btn btn-primary col-12">LogIn</button></div>
//             <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
//               Registered? <a href="#" class="text-dark fw-bold"> Create an
//                 Account</a>
//             </div>
//           </form>
//         </div>

//       </div>
//     </div>
//   </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </>


//     );
// };

// export default Header;


import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  const handleSignUp = () => {
    // Add sign up logic
  };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
    // Add logout logic
  // };

  return (
    <>

      <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-3 bg-body rounded ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          Fantasy Trading
          </a>
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
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Fantasy Trading
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item p-2 ">
                <a className="nav-link active" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
              <li className="nav-item  p-2">
                <a className="nav-link" href="#">
                  Orders
                </a>
              </li>
              <li className="nav-item  p-2">
                <a className="nav-link" href="#">
                  Holding
                </a>
              </li>
              <li className="nav-item  p-2">
                <a className="nav-link " href="#">
                  Positions
                </a>
              </li>
              <li className="nav-item  p-2 ">
                <a className="nav-link" href="#">
                  Bids
                </a>
              </li>
              <li className="nav-item  p-2 ">
                <a className="nav-link" href="#">
                  Funds
                </a>
              </li>

              <Nav>
                {!isLoggedIn ? (
                  <>
                    <Button
                      className="m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      variant="outline-primary"
                      onClick={handleSignIn}
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
                      <a className="nav-link" href="#">
                        <i
                          className="fa-solid fa-bell"
                          style={{ color: "#4d3a92", fontSize: "1.2em" }}
                        >
                        </i>
                        
                      </a>
                    </li>
                    <li className="nav-item ">
                      <div
                        className="dropdown d-flex mt-2 border-end-0 border rounded-pill bg-light pe-auto"
                        style={{ borderRadius: "500", cursor: "pointer" }}
                      >
                        <p className="m-2">Pankaj Madan</p>

                        <img
                          src="https://media.licdn.com/dms/image/C5103AQFA9fernfW9Jg/profile-displayphoto-shrink_100_100/0/1556263959618?e=1716422400&v=beta&t=FyreLN0VUL6NwpUdS1W6vMzLgqYcSb8N_dkeVhXGWdA"
                          width="35"
                          height="35"
                          className="rounded-circle m-1"
                        />
                      </div>
                    </li>

                    
                  </>
                )}
              </Nav>
            </ul>
          </div>
        </div>
      </nav>

      {/* SingUp Model Form */}
      <SignUp/>

      {/* singIn form */}
      <SignIn/>
    </>
  );
};

export default Header;

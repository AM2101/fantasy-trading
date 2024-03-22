import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = () => {
        setIsLoggedIn(true);
    };

    const handleSignUp = () => {
        // Add sign up logic
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Add logout logic
    };

    return (
        <>
            {/* // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="#">My Website</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#">Dashboard</Nav.Link>
    //       <Nav.Link href="#">Orders</Nav.Link>
    //       <Nav.Link href="#">Holding Bids</Nav.Link>
    //     </Nav>
    //     <Nav>
    //       {!isLoggedIn ? ( */}
            {/* //         <>
    //           <Button variant="outline-primary" onClick={handleSignIn}>Sign In</Button>
    //           <Button variant="outline-success" onClick={handleSignUp}>Sign Up</Button>
    //         </>
    //       ) : (
    //         <>
    //           <Nav.Link href="#">Profile</Nav.Link>
    //           <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
    //         </>
    //       )}
    //     </Nav> */}
            {/* //   </Navbar.Collapse> */}
            {/* // </Navbar> */}

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Orders</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Holding</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Positions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Bids</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Funds</a>
                            </li>

                        </ul>

                        <Nav className='p-2'>
                            {!isLoggedIn ? (
                                <>
                                    <Button data-bs-toggle="modal" data-bs-target="#exampleModal1" variant="outline-primary" onClick={handleSignIn}>Sign In</Button>
                                    <Button data-bs-toggle="modal" data-bs-target="#exampleModal2" variant="outline-success" onClick={handleSignUp}>Sign Up</Button>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="#">Profile</Nav.Link>
                                    <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
                                </>
                            )}
                        </Nav>

                    </div>
                </div>
            </nav>

            {/* SingUp Model Form */}
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* singIn form */}
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">SignIn Form</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body row">
                            <form className='col-lg-10 m-auto'>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">LogIn</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>


    );
};

export default Header;
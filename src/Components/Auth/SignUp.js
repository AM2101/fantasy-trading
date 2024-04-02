import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username:"",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = () => {
        const { name, username, email, password, reEnterPassword } = user;
        if (name && username && email && password && password === reEnterPassword) {
            axios.post("http://localhost:8081/api/auth/signup", user)
                .then(res => {
                    // console.log(res);
                    alert("register Successfully");
                    navigate(0);
                    navigate("/Dashboard");
                })
                .catch(err => {
                    console.error("Registration Error: ", err);
                    // Handle error
                });
        } else {
            alert("Invalid input");
        }
    };


  return (
    //             {/* singUp form */}
    <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="container">
            <div className="row">
              <div className="col-md-12">

                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                <div className="card my-5">

                  <h2 className="text-center text-dark mt-5">SignUp Form</h2>
                  <form className="card-body cardbody-color p-lg-5">
                    <div className="mb-3">
                      <input type="text" className="form-control" value={user.name} onChange={handleChange} name="name" aria-describedby=""
                        placeholder="Name" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" value={user.username} onChange={handleChange} name="username" aria-describedby=""
                        placeholder="Username" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" value={user.email} onChange={handleChange} name="email" aria-describedby=""
                        placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" value={user.password} onChange={handleChange} name="password" aria-describedby=""
                        placeholder="Password" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" value={user.reEnterPassword} onChange={handleChange} name="reEnterPassword" placeholder="password" />
                    </div>
                    <div className="text-center"><button type="button" className="btn btn-primary col-12" onClick={register}>Sign Up</button></div>
                    {/* <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                      Registered? <Link href="/#" className="text-dark fw-bold"> Log In</Link> */}
                    {/* </div> */}
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp
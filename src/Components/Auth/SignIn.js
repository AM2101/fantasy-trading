import React ,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignIn() {

  const SignIn = process.env.REACT_APP_AUTH_URL;
  const navigate = useNavigate();


  
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    // console.log(Details.User[0]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };


const login = () => {
  axios.post(`${SignIn}/api/auth/signin`, user)
    .then(res => {
      // console.log(res.data);
      localStorage.removeItem('token')
      const userDetails = res.data;

        // Store user details in local storage
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
      localStorage.setItem('token',res.data.token)
      alert("login succesfully");
      // const userData = res.data;
      // Details.push(userData);
      // setLoginUser(res.data.user);
      navigate(`/Trade`);
      navigate(0);
    })
    .catch(err => {
      console.error("Login Error: ", err);
      alert("An error occurred. Please try again."); // Display a user-friendly error message
    });
};


// const handleCloseModal = () => {
//   const modal = document.getElementById('exampleModal1');
//   if (modal) {
//     modal.classList.remove('show');
//     modal.setAttribute('aria-modal', 'false');
//     modal.setAttribute('style', 'display: none');
//   }
// };

  return (
    //             {/* singIn form */}
    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="container">
            <div className="row">
              <div className="col-md-12">

                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                <div className="card my-5">

                  <h2 className="text-center text-dark mt-5">Login Form</h2>
                  <form className="card-body cardbody-color p-lg-5">


                    {/* <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div> */}

                    <div className="mb-3">
                      <input type="text" name="username" className="form-control" value={user.username} onChange={handleChange} id="Username2" aria-describedby="usernameHelp"
                        placeholder="User Name" />
                    </div>
                    <div className="mb-3">
                      <input type="password" name="password" className="form-control" value={user.password} onChange={handleChange} id="password2" placeholder="password" />
                    </div>
                    <div className="text-center"><button type="button" onClick={login} className="btn btn-primary col-12">LogIn</button></div>
                    {/* <div id="usernameHelp" className="form-text text-center mb-5 text-dark">Not
                      Registered? <a href="/#" className="text-dark fw-bold"> Create an
                        Account</a>
                    </div> */}
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

export default SignIn
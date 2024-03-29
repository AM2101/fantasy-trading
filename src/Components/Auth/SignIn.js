import React from 'react'

function SignIn() {
  return (
    //             {/* singIn form */}
    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                      <input type="text" className="form-control" id="Username2" aria-describedby="emailHelp"
                        placeholder="User Name" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="password2" placeholder="password" />
                    </div>
                    <div className="text-center"><button type="button" className="btn btn-primary col-12">LogIn</button></div>
                    <div id="emailHelp" className="form-text text-center mb-5 text-dark">Not
                      Registered? <a href="/#" className="text-dark fw-bold"> Create an
                        Account</a>
                    </div>
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
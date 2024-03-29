import React from 'react'

function SignUp() {
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
                      <input type="text" className="form-control" id="Username" aria-describedby="emailHelp"
                        placeholder="User Name" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" id="Email" aria-describedby="emailHelp"
                        placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <input type="Number" className="form-control" id="Number" aria-describedby="emailHelp"
                        placeholder="Phone Number" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" id="password" placeholder="password" />
                    </div>
                    <div className="text-center"><button type="button" className="btn btn-primary col-12">Sign Up</button></div>
                    <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                      Registered? <a href="/#" className="text-dark fw-bold"> Log In</a>
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

export default SignUp
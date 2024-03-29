import React from 'react'

function Footer() {
  return (
    <footer className="footer p-3">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                <div className="information">
                    <h6 className="footer-heading text-uppercase  fw-bold">Information</h6>
                    <ul className="list-unstyled footer-link mt-4">
                        <li className="mb-1"><a href="/#" className=" text-decoration-none fw-semibold">Events</a></li>
                        <li className="mb-1"><a href="/#" className=" text-decoration-none fw-semibold">Our Team</a></li>
                        <li className="mb-1"><a href="/#" className=" text-decoration-none fw-semibold">Upcoming Sale</a></li>
                        <li className=""><a href="/#" className=" text-decoration-none fw-semibold">New Launches</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
                <div className="resources">
                    <h6 className="footer-heading text-uppercase  fw-bold">Resources</h6>
                    <ul className="list-unstyled footer-link mt-4">
                        <li className="mb-1"><a href="/#" className=" text-decoration-none fw-semibold">API</a></li>
                        <li className="mb-1"><a href="/#" className=" text-decoration-none fw-semibold">Website Tutorials</a></li>
                        <li className="mb-1"><a href="/#" className=" text-decoration-none fw-semibold">Third Party</a></li>
                        <li className=""><a href="/#" className=" text-decoration-none fw-semibold">Video Lectures</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
              <div className="social">
                  <h6 className="footer-heading text-uppercase  fw-bold">Social</h6>
                  <ul className="list-inline my-4">
                    <li className="list-inline-item"><a href="/#" className=" btn-sm btn btn-primary mb-2"><i className="bi bi-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="/#" className="text-danger btn-sm btn btn-light mb-2"><i className="bi bi-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="/#" className=" btn-sm btn btn-primary mb-2"><i className="bi bi-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="/#" className=" btn-sm btn btn-success mb-2"><i className="bi bi-whatsapp"></i></a></li>
                </ul>
              </div>
          </div>
            <div className="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
              <div className="contact">
                  <h6 className="footer-heading text-uppercase  fw-bold">Contact Us</h6>
                  <address className="mt-4 m-0  mb-1"><i className="bi bi-pin-map fw-semibold"></i> New South Block , Phase 8B , 160055</address>
                  <a href="/#" className=" mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-telephone"></i>  909090XXXX</a>
                  <a href="/#" className=" mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-envelope"></i> xyzdemomail@gmail.com</a>
                  <a href="/#" className=" text-decoration-none fw-semibold"><i className="bi bi-skype"></i> xyzdemomail</a>
              </div>
            </div>
        </div>
    </div>
    <div className="text-center bg-dark text-white mt-4 p-1">
        <p className="mb-0 fw-bold">2023 ©  All Rights Reserved</p>
    </div>
  </footer>
  )
}

export default Footer
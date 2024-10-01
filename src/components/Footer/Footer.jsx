import React from "react";
const Footer = () => {
  return (
    <>
      <footer className="footer pt-4 text-center">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div>
                <h2 className="text-white fw-bold mb-2">Loction</h2>
                <p className="text-white fw-bold mb-2">
                  2215 John Daniel Drive
                </p>
                <p className="text-white fw-bold mb-2">Clark,MO 65243</p>
              </div>
            </div>

            <div className="col-md-4">
              <div>
                <h2 className="text-white fw-bold mb-2">Around The Web</h2>
                <div className="icons d-flex justify-content-center align-items-center mt-2">
                  <div>
                    <i className="fa-brands fa-facebook fa-2xl me-2 text-white"></i>
                  </div>

                  <div>
                    <i className="fa-brands fa-twitter fa-2xl me-2 text-white"></i>
                  </div>

                  <div>
                    <i className="fa-brands fa-linkedin fa-2xl me-2 text-white"></i>
                  </div>

                  <div>
                    <i className="fa-brands fa-google fa-2xl me-2 text-white"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div>
                <h2 className="text-white fw-bold mb-2">About Freelancer</h2>
                <p className="text-white fw-bold mb-2">
                  {" "}
                  Freelance is a free to use, licensed Bootstrap theme created
                  by route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" footer-h py-3">
          <p className="text-white">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;

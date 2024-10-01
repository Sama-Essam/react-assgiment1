import React from "react";
export default function About() {
  return (
    <>
      <section className="vh-100 text-center about d-flex align-items-center justify-content-center ">
        <div>
          <h2 className="fw-bolder text-white mb-5">About Components</h2>
          <div className="icon-b">
            <i className="fa-solid fa-star text-white fa-xl"></i>
          </div>
          <div className="contanier">
            <div className="row">
              <div className="col-md-6">
                <p className="text-white ">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                {" "}
                <p className="text-white ">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

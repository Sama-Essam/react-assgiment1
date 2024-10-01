import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact py-5">
        <h2 className="fw-bolder text-center mb-5">Contact Section</h2>
        <div className="icon-c">
          <i className="fa-solid fa-star text-white fa-xl"></i>
        </div>
        <div className="w-50 m-auto">
          <form action="">
            <input
              type="text"
              placeholder="User Name"
              className="w-100 form-control form-control-lg border-0 border-bottom mb-5"
            />
            <input
              type="number"
              placeholder="User Age"
              className="w-100 form-control form-control-lg border-0 border-bottom mb-5"
            />
            <input
              type="email"
              placeholder="User Email"
              className="w-100 form-control form-control-lg border-0 border-bottom mb-5"
            />
            <input
              type="password"
              placeholder="User Password"
              className="w-100 form-control form-control-lg border-0 border-bottom mb-5"
            />
            <button className="btn submit">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}

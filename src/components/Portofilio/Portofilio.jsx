import React, { useState } from "react";
export default function Portofilio() {
  const [data, setdata] = useState([
    {
      img: "./images/img2.png",
      id: "img1",
    },
    {
      img: "./images/img2.png",
      id: "img2",
    },
    {
      img: "./images/img3.png",
      id: "img3",
    },
    {
      img: "./images/img2.png",
      id: "img4",
    },
    {
      img: "./images/img2.png",
      id: "img5",
    },
    {
      img: "./images/img3.png",
      id: "img6",
    },
  ]);
  return (
    <>
      <section className="port py-5 text-center">
        <h2 className="fw-bolder mb-5">Portfolio Component</h2>
        <div className="contanier">
          <div className="row g-4">
            {data.map((thing) => (
              <>
                <div className="col-md-4">
                  <div className="port-p">
                    <img src={thing.img} alt="" className="w-100 rounded-3 " />
                    <div data-bs-target={"#" + thing.id} data-bs-toggle="modal">
                      <div className="hov rounded-3">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            {data.map((thing) => (
              <>
                <div
                  className="modal fade"
                  id={thing.id}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <img src={thing.img} alt="" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

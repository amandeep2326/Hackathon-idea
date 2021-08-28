import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="page-footer font-small lighten-3 pt-4 text-white">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 ">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
             SURAKSHA
            </h5>
            <p className="text-white">
            Our Prototype Consists of a face mask detection system andthermal processing to detect fever. We are using highly accuratealgorithms and deep learning methods in this prototype.
You can use this in analyzing around 100 patients at the sametime which really helps our hospital management to skip goingthrough each one and check his/her temperature.
It can also use as a system attached to the security camera andcheck on people who are wearing masks and following rules andwho are not.
Recently Majority Countries Faces the most important problemsin covid times that is Vaccine Unavailability.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 ">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
              About
            </h5>

            <ul className="list-unstyled">
              <li>
                <p>
                  <a href="https://www.dtu.ac.in" className="footer-link">
                    {" "}
                     TRIO_KNIGHTS
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="j" className="footer-link">
                    {" "}
                    AMANDEEP SINGH
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/" className="footer-link">
                    {" "}
                    ADITYA KUMAR
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="m" className="footer-link">
                    {" "}
                    KSHITIJ SINGH
                  </Link>
                </p>
              </li>
             
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 ">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
              Address
            </h5>

            <ul className="list-unstyled text-white">
              <li>
                <p>
                  <ion-icon
                    name="business-outline"
                    style={{ color: "white" }}
                  ></ion-icon>{" "}
                  Delhi Technological University,Bawana Road,Near Rohini, Delhi
                  - 110042
                </p>
              </li>
              <li>
                <p>
                  <ion-icon
                    name="mail-outline"
                    style={{ color: "white" }}
                  ></ion-icon>
                  {"  "}
                  amandeepsingh8439@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <ion-icon
                    name="mail-outline"
                    style={{ color: "white" }}
                  ></ion-icon>
                  {"  "}
                  ak511046@gmail.com
                </p>
              </li>
              <li>
                <p>
                  <ion-icon
                    name="mail-outline"
                    style={{ color: "white" }}
                  ></ion-icon>
                  {"  "}
                  kshitij1118@gmail.com
                </p>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
            <h5 className="font-weight-bold text-uppercase mb-4 text-white">
              See More
            </h5>
            <a
              type="button"
              className="btn-floating btn-fb"
              href="https://www.youtube.com"
            >
              <ion-icon
                name="logo-youtube"
                size="large"
                style={{ color: "white" }}
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3 text-white">
        Made with ❤️ by students of Delhi Technological University
        <ul className="student_names">
          <a
            href="http://www.linkedin.com"
            target="_blank"
          >
            Aditya Kumar
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
          >
            Amandeep Singh
          </a>
          <a
            href="http://www.linkedin.com"
            target="_blank"
          >
            Kshitij Singh
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

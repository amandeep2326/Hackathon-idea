import "../styles/Contact.css";
import React, { useState } from "react";
// import { db } from "../firebase.js";

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   db.collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       alert(
  //         "Your Message has been submitted "
  //       );
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };
  return (
    <>
      <div className="container-fluid cf pt-3 pb-1">
        <div className="container con">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-12">
              <div className="row">
                <div className="col-lg-12 col-12 p-0 section-header pt-4">
                  <h2 className="">Contact Us</h2>
                </div>
              </div>

              <div className="row bg-light pt-3 pb-3 mb-4">
                <div className="col-lg-6 col-12">
                  <form>
                    <div className="form-row mb-3">
                      <div className="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Name :"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-row mb-3">
                      <div className="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email :"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Message :"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      class="btn mb-4"
                      style={{ backgroundColor: "lightblue" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

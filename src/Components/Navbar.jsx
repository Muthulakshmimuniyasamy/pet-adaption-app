import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contactus.css"; 

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

   const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = "your_service_id";
    const templateID = "your_template_id";
    const userID = "your_user_id";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Email sent successfully!");
        console.log("Success:", response.status, response.text);
        setFormData({ fullName: "", email: "", phone: "", address: "" });
        setShowPopup(false); // Close popup after successful submission
      })
      .catch((error) => {
        alert("Failed to send email. Please try again.");
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <img
            src="Images/logo.png"
            height={"35px"}
            width={"35px"}
            style={{ marginLeft: "50px" }}
            alt="Logo"
          />
          <ul
            className="navbar-nav mr-auto mt-2 mt-lg-0"
            style={{ marginLeft: "100px" }}
          >
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Adopt
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get Involved
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
          <button
            className="p-2 text-light"
            style={{
              backgroundColor: "#887800",
              width: "150px",
              borderRadius: "10px",
              marginLeft: "600px",
              border: "none",
            }}
            onClick={handlePopupOpen}
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-header">
              <h3>Contact Us</h3>
              <button className="close-button" onClick={handlePopupClose}>
                &times;
              </button>
            </div>
            <div className="popup-content">
              <div className="contact-info d-flex">
                <div className="col-5">
                  <i
                    className="bi bi-house-fill text-light p-2"
                    style={{
                      borderRadius: "50px",
                      backgroundColor: "#FCC201",
                      width: "35px",
                      marginBottom: "10px",
                    }}
                  ></i>
                  <span style={{ marginLeft: "10px" }}>
                    Your Pet Adoption Farm
                  </span>
                  <p style={{ marginTop: "10px" }}>
                    Address: <br />
                    #12, West Garden Street,
                    <br />
                    BKL West Modern City,
                    <br />
                    New York - 49585
                  </p>
                  <img
                    src="Images/popuppic.jpg"
                    alt="Adoption"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="col-7" id="line">
                  <form onSubmit={handleSubmit}>
                    <h4>Connect Us</h4>
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <button type="submit" style={{ float: "right" }}>
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Navbar from "./Mathi";

const ImageFilter = () => {
  const [selectedPetType, setSelectedPetType] = useState("All");

  const petImages = [
    { src: "Images/dog1.jpeg", type: "Dog" },
    { src: "Images/dog2.webp", type: "Dog" },
    { src: "Images/dog3.jpeg", type: "Dog" },
    { src: "Images/dog4.avif", type: "Dog" },
    { src: "Images/dog5.jpeg", type: "Dog" },
    { src: "Images/dog6.jpeg", type: "Dog" },
    { src: "Images/duck.jpeg", type: "Duck" },
    { src: "Images/hen.webp", type: "Hen" },
    { src: "Images/goat.jpeg", type: "Goat" },
    { src: "Images/dog7.avif", type: "Dog" },
    { src: "Images/cat.jpeg", type: "Cat" },
    { src: "Images/dog8.avif", type: "Dog" },
  ];

  const filteredImages =
    selectedPetType === "All"
      ? petImages
      : petImages.filter((image) => image.type === selectedPetType);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "Images/dotpic1.jpeg",
    "Images/dotpic2.jpg",
    "Images/dotpic3.jpeg",
  ];

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  const carouselStyle = {
    textAlign: "center",
    margin: "20px auto",
  };

  const imageStyle = {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const dotsContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  };

  const dotStyle = (isActive) => ({
    width: "10px",
    height: "10px",
    margin: "0 5px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#333" : "#ccc",
    cursor: "pointer",
  });

  const handleClear = () => {
    setSelectedPetType("All");
  };
 
  return (
    <div>
       <Navbar></Navbar>
      <div class="d-flex" 
        style={{ backgroundColor: "#887800", height: "300px" }}>
       
        <div class="col-6 p-4">
          <h1 class="text-light">
            Embarance Endless Love<br></br> with Your New Furry <br></br>Best
            Friend.
          </h1>
          <p class="text-light">
            Embarance endless love with your new furry best friend.<br></br>
            Adopt now and start creating unforgettable memories together.
          </p>
        </div>
        <div class="col-6" style={carouselStyle} >
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            style={imageStyle}/>
          
          <div style={dotsContainerStyle}>
            {images.map((_, index) => (
              <div
                key={index}
                style={dotStyle(currentImage === index)}
                onClick={() => handleDotClick(index)}/>
            ))}
          </div>
          </div>
          </div>
          <div className="container-fluid" 
        style={{ height: "100vh", backgroundColor: "rgb(254,237,202)" }}>
        <div className="container bg-light"
          style={{
            height: "100vh",
            position: "relative",
            bottom: "50px",
            borderRadius: "10px",
          }}>
          <h2 style={{ backgroundColor: "rgb(246,239,197)", padding: "7px" }}>
            Find Your New Best Friend
          </h2>
            <div className="dogbtns d-flex" style={{ marginLeft: "20px" }}>
            <div>
            <p style={{ width: "100px" }}>Pet Type</p>
            <div className="dropdown">
            <button
                  className="btn dropdown dropdown-toggle border"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {selectedPetType}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setSelectedPetType(" All")}
                  > All
                </a>
                <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setSelectedPetType("Dog")}
                >Dogs
                </a>
                <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setSelectedPetType("Goat")}
                > Goat
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => setSelectedPetType("Hen")}
                  >
                    Hen
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "170px" }}>
              <p>Breed</p>
              <div class="dropdown">
                <button
                  class="btn dropdown dropdown-toggle border"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src='Images/logo.png' height={'20px'} width={'20px'}/>
                  All
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"></a>
                  <a class="dropdown-item" href="#"></a>
                  <a class="dropdown-item" href="#"></a>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "170px" }}>
              <p>Gender</p>
              <div class="dropdown">
                <button
                  class="btn dropdown dropdown-toggle border"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="bi bi-gender-neuter"></i>
                  All
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Male
                  </a>
                  <a class="dropdown-item" href="#">
                    Female
                  </a>
                  <a class="dropdown-item" href="#">
                    Others
                  </a>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "160px" }}>
              <p>Age</p>

              <div class="dropdown">
                <button
                  class="btn dropdown dropdown-toggle border"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bi bi-cake-fill"></i>
                  All
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#"></a>
                  <a class="dropdown-item" href="#"></a>
                  <a class="dropdown-item" href="#"></a>
                </div>
              </div>
            </div>
            {/* Conditionally render the Clear button */}
            {selectedPetType !== "All" && (
              <button
                onClick={handleClear}
                style={{
                  borderRadius: "10px",
                  padding: "10px",
                  border: "1px solid #887800  ",
                  width: "200px",
                  marginTop: "27px",
                  marginLeft: "25px",
                }}
              >
                Clear
              </button>
            )}
            <div style={{ marginLeft: "140px" }}>
              <button
                style={{
                  backgroundColor: "#887800",
                  borderRadius: "10px",
                  padding: "10px",
                  border: "none",
                  width: "150px",
                  marginTop: "27px",
                  color: "white",
                  marginLeft: "-85px",
                }}
              >
                Search
              </button>
            </div>
          </div>

          {/* Display filtered images */}
          <div className="dogs" id="pettt">
            {filteredImages.map((image, index) => (
              <img key={index} src={image.src} alt={image.type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFilter;

import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import img from "./img.jpg";

function App() {
  return (
    <>
      <Navbar />
      <div className="main__area">
        <div className="main__sidebar"></div>
        <div className="main__content">
          <div className="content__box">
            <div className="img__container">
              <img src={img} alt="" />
              <div className="btns">
                <button>Join Bootcamp</button>
                <button>Book Now</button>
              </div>
            </div>
            <div className="details__container">
              <din className="sectionOne">
                <h1>Alex</h1>
                <div className="rates">
                  <h3>100$</h3>
                  <p>Per Session</p>
                </div>
                <div className="experience">
                  <h2>5+</h2>
                  <p>Years of Experience</p>
                </div>
                <h3>Certified</h3>
              </din>
              <div className="sectionTwo">
                <h1>About Me</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  ipsam aperiam rerum. Voluptas et eos molestiae magnam non
                  minima, voluptatem nemo earum animi reiciendis est placeat
                  necessitatibus. Excepturi eaque ducimus reprehenderit, quas
                  quos suscipit distinctio? Aut reprehenderit adipisci nihil
                  eius ipsum quod. Assumenda culpa, veniam pariatur incidunt
                  quas eveniet corporis id aliquid. Id cum quidem nobis! Rem
                  amet perferendis laborum.
                </p>
              </div>
              <div className="sectionThree">
                <h1>My Expertise</h1>
                <div className="skills">
                  <span>Zumba</span>
                  <span>Bollyfitx</span>
                  <span>Aerobics</span>
                  <span>Latin salsa</span>
                  <span>Yoga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

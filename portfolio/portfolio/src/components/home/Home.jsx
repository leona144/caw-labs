import React, { useEffect, useRef, useState } from "react";
import AnimatedButton from "../animatedButton/AnimatedButton";
import "./home.css";
import DarkVeil from "./DarkVeil";
import CV from "../../assets/cv.pdf";
import HomeSocials from "./HomeSocials";
import ScrollDownButton from "../scrolldown/ScrollDownButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import codingAnimation from "./web.json";
//import { useLottie } from "lottie-react";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div style={{ paddingBottom: "100px" }}>
        <div
          style={{
            width: "1600px",
            height: "500px",
            position: "absolute",
            paddingBottom: "100px",
          }}
        >
          <DarkVeil />
        </div>
      </div>
      <div ref={homeRef}>
        <div className="container home_container">
          <div className="text-container">
            <h4 className={`hello-text ${isVisible ? "animate-text" : ""}`}>
              Hello I'm
            </h4>

            <h1 className={`name-text ${isVisible ? "animate-text" : ""}`}>
              Lyna Noor
            </h1>

            <h4
              className={`text-light role-text ${
                isVisible ? "animate-text" : ""
              }`}
            >
              Frontend Developer
            </h4>
          </div>

          <div className={`btns ${isVisible ? "animate-buttons" : ""}`}>
            <AnimatedButton><a href="#contact">Let's talk</a></AnimatedButton>
            <AnimatedButton>
              <a href={CV} download>
               Download CV
              </a>
            </AnimatedButton>
          </div>

          <div className="hero-section">
            <div className="lottie-side">
              <DotLottieReact data={codingAnimation} loop autoplay />
            </div>

            <div
              className={`attractive-phrase smaller ${
                isVisible ? "animate-phrase" : ""
              }`}
            >
              <div className="phrase-wrapper smaller">
                <div className="phrase-text">
                  <span className="phrase-main">Let's Build</span>
                  <span className="phrase-highlight">something great</span>
                </div>

                <div className="phrase-details">
                  <div className="detail-item">
                    <div className="detail-icon">🚀</div>
                    <div className="detail-text">Fast & Modern</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon">✨</div>
                    <div className="detail-text">Responsive Design</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon">🎯</div>
                    <div className="detail-text">User-Focused</div>
                  </div>
                </div>

                <div className="phrase-tagline">
                  Transforming ideas into exceptional web experiences
                </div>
              </div>
            </div>
          </div>

          <div className={`scroll_down ${isVisible ? "animate-scroll" : ""}`}>
            <ScrollDownButton />
          </div>

          <HomeSocials />
        </div>
      </div>
    </div>
  );
};

export default Home;

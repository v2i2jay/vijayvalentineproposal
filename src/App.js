import React from "react";
import "./App.css";

const sadViolin = new Audio("/sad-violin.mp3");
sadViolin.volume = 0.4;

function App() {
  const moveNoButton = () => {
    const btn = document.getElementById("no-btn");

    sadViolin.currentTime = 0;
    sadViolin.play();

    btn.style.position = "absolute";
    btn.style.top = Math.random() * 80 + "vh";
    btn.style.left = Math.random() * 80 + "vw";
  };

  return (
    <div style={{ height: "100vh", textAlign: "center" }}>
      <h1>⚠️ EMERGENCY ANNOUNCEMENT ⚠️</h1>

      <h2>
        Miss Githinji(babes),
        <br />
        after extreme overthinking,
        <br />
        emotional suffering,
        <br />
        and unnecessary imagination…
      </h2>

      <h1>Will you be my Valentine? 💘</h1>

      <div style={{ marginTop: "40px" }}>
        <button
          style={{ fontSize: "20px", padding: "12px 25px" }}
          onClick={() =>
            alert(
              "YOU SAID YES 😭💖\nMiss Githinji(babes), I am officially your Valentine."
            )
          }
        >
          Yes 😍
        </button>

        <button
          id="no-btn"
          style={{
            fontSize: "20px",
            padding: "12px 25px",
            marginLeft: "20px",
          }}
          onMouseEnter={moveNoButton}
        >
          No 🙄
        </button>
      </div>
    </div>
  );
}

export default App;

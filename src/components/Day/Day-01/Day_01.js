import React from "react";
import clap from "../../../sounds/clap.wav";
import hihat from "../../../sounds/hihat.wav";
import kick from "../../../sounds/kick.wav";
import openhat from "../../../sounds/openhat.wav";
import boom from "../../../sounds/boom.wav";
import ride from "../../../sounds/ride.wav";
import snare from "../../../sounds/snare.wav";
import tom from "../../../sounds/tom.wav";
import tink from "../../../sounds/tink.wav";

export default class Day_01 extends React.Component {
  componentDidMount() {
    const keys = document.querySelectorAll(".key");
    const removeClass = (e) => {
        e.propertyName === 'transform' && e.target.classList.remove('playing');
    }
    keys.forEach(key => {
        key.addEventListener('transitionend', removeClass)
    })
  }
  render() {
    window.addEventListener("keydown", e => {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      audio && (audio.currentTime = 0); // rewind to the start
      audio && audio.play();
      audio && key.classList.add("playing");
    });

    const clickHandle = e => {
        const keyCode = e.target.getAttribute("data-key");
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      audio.currentTime = 0; // rewind to the start
      audio.play();
      key.classList.add('playing');

    };
    return (
      <div>
        <h1 style={{ color: "white" }}>Day - 01</h1>
        <div className="keys">
          <div className="key" data-key="65" onClick={clickHandle}>
            A
          </div>
          <div className="key" data-key="83" onClick={clickHandle}>
            S
          </div>
          <div className="key" data-key="68" onClick={clickHandle}>
            D
          </div>
          <div className="key" data-key="70" onClick={clickHandle}>
            F
          </div>
          <div className="key" data-key="71" onClick={clickHandle}>
            G
          </div>
          <div className="key" data-key="72" onClick={clickHandle}>
            H
          </div>
          <div className="key" data-key="74" onClick={clickHandle}>
            J
          </div>
          <div className="key" data-key="75" onClick={clickHandle}>
            K
          </div>
          <div className="key" data-key="76" onClick={clickHandle}>
            L
          </div>

          <audio data-key="65" src={clap} />
          <audio data-key="83" src={hihat} />
          <audio data-key="68" src={kick} />
          <audio data-key="70" src={openhat} />
          <audio data-key="71" src={boom} />
          <audio data-key="72" src={ride} />
          <audio data-key="74" src={snare} />
          <audio data-key="75" src={tom} />
          <audio data-key="76" src={tink} />
        </div>
      </div>
    );
  }
}

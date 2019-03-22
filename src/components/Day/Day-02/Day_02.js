import React from "react";

// image
import day2 from '../../../images/day-2-img.jpg'

export default class Day_02 extends React.Component {

  state = {
    spacing: 10,
    blur: 0,
    base: "#ffc600"
  }
  
  spacingUpdate = (e) => {
    const dataSet = e.target.dataset.sizzing || "";
    this.setState({ spacing:  e.target.value });
    document.documentElement.style.setProperty('--spacing', e.target.value + dataSet);
  }
  blurUpdate = (e) => {
    const dataSet = e.target.dataset.sizzing || "";
    this.setState({ blur:  e.target.value });
    document.documentElement.style.setProperty('--blur', e.target.value + dataSet);
  }
  baseUpdate = (e) => {
    this.setState({ base:  e.target.value });
    document.documentElement.style.setProperty('--base', e.target.value );
  }

  render() {
    const { spacing, blur, base } = this.state;
    return (
      <div className="day02">
        <h2>Update CSS Vaiables with <span className="h1">JS</span></h2>
        <div className="controls">
          <label htmlFor='spacing' className="controls__label">Spacing:</label>
          <input
            type="range"
            name="spacing"
            min="0"
            max="200"
            value={spacing}
            data-sizzing="px"
            onChange={this.spacingUpdate}
          />
          
          <label className="controls__label" htmlFor="blur">Blur:</label>
          <input
            type="range"
            name="blur"
            min="0"
            max="25"
            value={blur}
            data-sizzing="px"
            onChange={this.blurUpdate}
          />
          
          <label className="controls__label" htmlFor="base">Base:</label>
          <input type="color" value={base} name="base" onChange={this.baseUpdate} onMouseOver={this.baseUpdate}/>
        </div>
        <img src={day2} className="day-2-img" alt="adventure"/>
      </div>
    );
  }
}

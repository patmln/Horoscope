import "./App.css";
import React, { Component, useState } from "react";
import { post } from "./utils/api";
class Aztro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
      state: "false",
      sign: "",
      day: "today",
    };
  }

  // TODO
  chooseSign = (event) => {
    this.setState({ sign: event.target.name });
    this.fetchData();
  };

  chooseDay = (event) => {
    this.setState({ day: event.target.name });
    this.fetchData();
  };

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve);
    });
  }

  fetchData = async () => {
    await this.setStateAsync({ load: true });
    const { sign, day } = this.state;
    const data = await post(sign, day);

    if (data.current_date != undefined || data.current_date != null) {
      this.setState({ json: data });
    }
    await this.setStateAsync({ load: false });
  };

  // Create a button Component
  // make your button list dynamic, avoid copy and pasting as much as possible

  render() {
    return (
      <div>
        <h1>Daily Horoscopes</h1>
        <div className="signs">
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="aries"
          >
            ♈ Aries
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="taurus"
          >
            ♉︎ Taurus
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="gemini"
          >
            ♊︎ Gemini
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="cancer"
          >
            ♋︎ Cancer
          </button>
          <button className="buttonSigns" onClick={this.chooseSign} name="leo">
            ♌︎ Leo
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="virgo"
          >
            ♍︎ Virgo
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="libra"
          >
            ♎︎ Libra
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="scorpio"
          >
            ♏︎ Scorpio
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="sagittarius"
          >
            ♐︎ Sagittarius
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="capricorn"
          >
            ♑︎ Capricorn
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="aquarius"
          >
            ♒︎ Aquarius
          </button>
          <button
            className="buttonSigns"
            onClick={this.chooseSign}
            name="pisces"
          >
            ♓︎ Pisces
          </button>
        </div>
        <div className="days">
          <button
            className="buttonDays"
            onClick={this.chooseDay}
            name="yesterday"
          >
            Yesterday
          </button>
          <button className="buttonDays" onClick={this.chooseDay} name="today">
            Today
          </button>
          <button
            className="buttonDays"
            onClick={this.chooseDay}
            name="tomorrow"
          >
            Tomorrow
          </button>
        </div>
        <div className="horoscope">
          Current Date: {this.state.json.current_date} <br />
          Compatibility: {this.state.json.compatibility} <br />
          Lucky Number: {this.state.json.lucky_number} <br />
          Lucky Time: {this.state.json.lucky_time} <br />
          Color: {this.state.json.color} <br />
          Date Range: {this.state.json.date_range} <br />
          Mood: {this.state.json.mood} <br />
          Description: {this.state.json.description} <br />
        </div>
      </div>
    );
  }
}

export default Aztro;

import React, { Component } from "react";
import serverUrl from "../constants";
import axios from "axios";
import { league } from "../../players.json";
import "./PlayerShow.css";

const players = league.standard;

class PlayerShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCard: []
    };
    this.getCard = this.getCard.bind(this);
  }
  getCard() {
    axios
      .get(serverUrl + "/players-card" + this.props.match.params.playersId)
      .then(res => {
        this.setState({ playerCard: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getCard();
  }
  render() {
    return (
      <div className="row">
        <div class="card w-75 offset</div>-1">
          <div class="card-body">
            <div class="player-title-show">
              <h1 class="card-title">
                {players.firstName +
                  " " +
                  players.lastName +
                  " " +
                  players.jersey}
              </h1>
            </div>
            <h2>Position: {players.pos}</h2>
            <h2>
              Height: {players.heightFeet + "'" + players.heightInches + '"'}
            </h2>
            <h2>Weight: {players.weightPounds}</h2>
            <h2>Years Pro: {players.yearsPro}</h2>
            <h2>College: {players.collegeName}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerShow;

/* Rookie Year
Years Pro: (if ({players.yearsPro} === 0){
                        return "rookie"
    })else{players.yearsPro}</p>
    */

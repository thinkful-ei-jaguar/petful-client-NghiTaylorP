import React, { Component } from "react";
import welcomeCat from "../img/welcome.jpg";
import ApiService from "../api-service";
import UserContext from "../context";
import "./index.css";

export default class HomePage extends Component {
  static contextType = UserContext;

  addUser = () => {
    let name;
    // Allow user to add name to queue only if user have not adopted before
    if (window.localStorage.getItem("canAdopt") === null) {
      name = prompt("What is your name?");
    } else {
      alert("Each person can only adopt once.");
      this.props.addToQueue();
    }
    // Redirect user to queueu after name is added
    if (name) {
      this.context.updateUser(name);
      // Remove 1 user before adding a user to maintain a set number of users in queue
      ApiService.deleteUsers().then(() =>
        ApiService.postUsers({ name }).then(() => this.props.addToQueue())
      );
    }
  };

  render() {
    return (
      <section className="HomePage">
        <h1>Petful:</h1>
        <p>
          A place to find your next doggo and catto besfriends! Each adoptor can
          bring one doggo, one catto, or one of each home. To help our doggo and
          catto quickly find a home, we made it a rule for the adoptor to only
          claim the next available doggo and catto. The adoption process only
          takes 5 seconds per user. Click "Adopt Now" to be entered in our
          waiting queue!
        </p>
        <img src={welcomeCat} alt="welcome cat" />
        <button type="button" onClick={this.addUser}>
          Adopt now
        </button>
      </section>
    );
  }
}

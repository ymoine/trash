import React from "react";
import "../App.css";
const Home = () => {
  return (
    <div class="form outer">
      <h2>Scribbl</h2>
      <div class="input">
        <div class="inputBox">
          <label for="">Username</label>
          <input type="text" />
        </div>
        <div class="inputBox">
          <input type="submit" name="" value="Jouer" />
        </div>
      </div>
      <div class="social">
        <button>
          <p>Créer une room</p>
        </button>
      </div>
    </div>
  );
};

export default Home;

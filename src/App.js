import {useState} from "react";
import './App.css';

function App() {

  // isMenuOpen is the state, setIsMenuOpen is the fuction
  // Set its state to default to false (it is closed)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen); // Do the opposite of the state of the menu (opened or closed)
  }

  return (
    <div className="App">
      <img
          id="background-image"
          src="https://images-ext-2.discordapp.net/external/T13nNWY7YyBcXiwjnqO5YN3ytF7O1UO5Ir97XakrIw0/https/startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg?width=1182&height=778"
      />
      <header className="header">
        <h1 className="title">Start Bootstrap</h1>
        <nav className={"nav-bar"}>
          <p className="nav-item">Services</p>
          <p className="nav-item">Portfolio</p>
          <p className="nav-item">About</p>
          <p className="nav-item">Team</p>
          <p className="nav-item">Contact</p>
        </nav>
        <img
          className="hamburger"
          src="https://assets.stickpng.com/images/588a64e7d06f6719692a2d11.png"
          onClick={toggleMenu}
        />
        <nav className={`mobile-nav ${isMenuOpen ? null : "mobile-nav-hide"}`}>
          <p className="mobile-nav-item">Services</p>
          <p className="mobile-nav-item">Portfolio</p>
          <p className="mobile-nav-item">About</p>
          <p className="mobile-nav-item">Team</p>
          <p className="mobile-nav-item">Contact</p>
        </nav>
      </header>
      <div className="center">
        <span id="welcome">Welcome To Our Studio!</span>
        <span id="greeting">IT'S NICE TO MEET YOU</span>
        <button id="tell-me-more">TELL ME MORE</button>
      </div>
    </div>
  );
}

export default App;

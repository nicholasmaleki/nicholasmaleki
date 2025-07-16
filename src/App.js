import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles';
import React from 'react';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

const maskGenerator = createDefaultMaskGenerator('9999-9999-9999-9999');


function App() {
  const [value, setValue] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value)
    }
  };

  return (
    <div className="App">
      <div id="particles" onClick={null}>
        <Particles
          params={{
            particles: {
              opacity: 1,
              color: "#4794a4",
              number: {
                value: 180
              },
              size: {
                value: 5,
                random: true
              },
              line_linked: {
                distance: 200,
              },
              move: {
                speed: 1
              },
            },
            background: {
              image: "linear-gradient(135deg, #28292a -100%, #28292a 50%)"
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        >
        </Particles>
      </div>

      <div className="centerdock">

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
          <h1>
            <img id="logo" src="spidr-title.png" alt="Spidr Design" />
          </h1>
          <input name="firstName" type="text" placeholder="First Name" />
          <br></br>
          <input name="lastName" type="text" placeholder="Last Name" />
          <br></br>
          <input name="phoneNumber" type="text" placeholder="Phone Number" />
          <br></br>
          <input name="emailAddress" type="text" placeholder="Email Address" />
          <br></br>
          <input name="costGuess" type="text" placeholder="Guess the air fryer’s cost in dollars." />
          <br></br>
          <MaskedInput
            maskGenerator={maskGenerator}
            value={value}
            onChange={setValue}
            name="spidrPin"
            type="text"
            placeholder="Input a secret 16 digit pin."
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <nav>
          <ul>
          </ul>
        </nav>

      </div>
    </div>
  );
}

export default App;

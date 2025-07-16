import logo from './logo.svg';
import './App.css';
//import Particles from 'react-particles';
import React from 'react';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const maskGenerator = createDefaultMaskGenerator('9999-9999-9999-9999');


function App() {
  const [value, setValue] = React.useState(0);

  // Handle User Input logging to console
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key + ":", value)
    }
  };

  // React Particles
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        // color: {
        //   value: "#28292a",
        // },
        image: "url(/images/airfryerbackground.png)",
        position: "center",
        repeat: "no-repeat",
        size: "cover",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#4794a4",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <div className="App">
      <div id="particles" onClick={null}> 
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

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
          <input name="emailAddress" type="email" placeholder="Email Address" />
          <br></br>
          <input name="costGuess" type="text" placeholder="Guess the air fryer’s cost" />
          <br></br>
          <MaskedInput
            maskGenerator={maskGenerator}
            value={value || ''}
            //defaultValue={""}
            //onChange={setValue} //Fix for the "A component is changing an uncontrolled input to be controlled Error."
            name="spidrPin"
            type="text"
            placeholder="Secret 16 digit pin"
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

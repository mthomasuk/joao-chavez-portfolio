import React, { PureComponent } from "react";
import "./App.css";

import ImageOverlay from "./components/ImageOverlay";

class App extends PureComponent {
  render() {
    return (
      <section className="wrapper">
        <ImageOverlay />
        <div className="container">
          <div className="column">
            Joāo Chaves<br />
            <a>Graphic Design</a>
            <br />
            <a>Music</a>
            <br />
            <a>Guitar Nerd</a>
            <br />
            London<br />
          </div>
          <div className="column">
            Currently at <a>U-Dox</a>
            <br />
            Co-Founder of <a>Studio Pyramid</a>
            <br />
            Founder of <a>Phuzz</a>
            <br />
          </div>
          <div className="column">
            <a>Selected clients:</a>
            <br />
            Adidas Originals<br />
            Dickies<br />
            EBay<br />
            Long Live Southbank<br />
            MINI<br />
            NOS Disco<br />
            Sony Music<br />
            Viva-Radio<br />
          </div>
          <div className="column">
            Any queries or full portfolio<br />
            request please contact me <a>here</a>
          </div>
        </div>
      </section>
    );
  }
}

export default App;

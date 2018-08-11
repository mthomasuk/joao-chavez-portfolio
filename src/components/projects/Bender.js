import React, {PureComponent} from 'react';
import './Bender.css';

class Bender extends PureComponent {

  render() {
    return (
      <div className="projectContainer">
        <div className="fullWidthBackground">
          <img src="../../img/brands/bender-bg.jpg" alt="bender-studios"/>
        </div>
        <div className="projectDetails">
            <div className="projectLeft">
                Project: Bender Mastering Studio Identity<br/>
                Type: Logo, Identity<br/>
                Client: Bender Mastering Studio
            </div>
            <div className="projectRight">
                Visual identity for Bender Mastering Studio.
                BMS is a full-service mastering studio,
                providing attended mastering sessions and online
                mastering services. BMS is the mastering division
                of Estúdios S&aacute; da Bandeira, one of Portugal's
                largest independent recording facilities.
            </div>
        </div>
        <div className="projectDetails">
              <img className="halfWidth" src="../../img/brands/bender-left.jpg" alt="bender-studios" />
              <img className="halfWidth" src="../../img/brands/bender-right.jpg" alt="bender-studios" />
        </div>
        <div className="projectDetails">
              <img src="../../img/BenderMasteringStudio.jpg" alt="bender-studios" />
        </div>
        <div className="fullWidthBackground">
              <img src="../../img/brands/bender-bg-2.jpg" alt="bender-studios"/>
        </div>
        <div className="projectDetails">
              <img src="../../img/brands/bender-last.jpg" alt="bender-studios" />
        </div>
      </div>
    );
  }
}

export default Bender;

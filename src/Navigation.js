import React, {PureComponent} from 'react';
import Bio from './components/Bio';
import Projects from './components/Projects';
import './Navigation.css';

class Navigation extends PureComponent {

  constructor(props) {
      super(props);
      this.state = {
          defaultSection: null,
          displaySection: null,
          displayProject: null
      };
  }

  setDefaultSection = (e) => {
      e.preventDefault();
      this.setState({
          defaultSection: this.state.defaultSection === e.currentTarget.id ? null : e.currentTarget.id
      });
  }

  previewSection = (e) => {
      this.setState({
          displaySection: e.currentTarget.id
      });
  }

  previewSectionOff = (e) => {
      this.setState({
          displaySection: this.state.defaultSection
      });
  }

  showProject = (e) => {
      e.preventDefault();
      this.setState({
          displayProject: e.currentTarget.id
      });
  }

  hideProject = (e) => {
      e.preventDefault();
      this.setState({
          displayProject: null
      });
  }

  render() {

    const { defaultSection, displaySection, displayProject } = this.state;
    const computedStyle = displayProject
      ? displayProject === 'bender'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/BenderMasteringStudio.jpg)' }
      : displayProject === 'basset'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/BassetHounds.jpg)' }
      : displayProject === 'v!tor'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/Vitor.jpg)' }
      : displayProject === 'bat'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/BatAndBall.jpg)' }
      : displayProject === 'interactiv'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/Interactive.jpg)' }
      : displayProject === 'phuzz'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/PHUZZ.jpg)' }
      : displayProject === 'coexist'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/Coexist.jpg)' }
      : displayProject === 'lucid'
      ? { borderTop: '1px solid #000', backgroundImage : 'url(./img/LucidDreaming.jpg)' }
      : null
      : null;

    return (
      <div className="innerContainer">
        <section className="left">
            <a
              className={defaultSection === 'projects' ? 'active' : null}
              id="projects"
              onClick={this.setDefaultSection}
              onMouseOver={this.previewSection}
              onMouseOut={this.previewSectionOff}>
              Projects
            </a>
            <a
              className={defaultSection === 'music' ? 'active' : null}
              id="music"
              onClick={this.setDefaultSection}
              onMouseOver={this.previewSection}
              onMouseOut={this.previewSectionOff}>
              Music
            </a>
            <a
              className={defaultSection === 'contact' ? 'active' : null}
              id="contact"
              onClick={this.setDefaultSection}
              onMouseOver={this.previewSection}
              onMouseOut={this.previewSectionOff}>
              Contact
            </a>
            <a
              className={defaultSection === 'pyramid' ? 'active' : null}
              id="pyramid"
              onClick={this.setDefaultSection}
              onMouseOver={this.previewSection}
              onMouseOut={this.previewSectionOff}>
              Pyramid
            </a>
        </section>
        <section className="right">
            {
              displaySection === 'projects'
                ? <Projects
                    showProject={this.showProject}
                    hideProject={this.hideProject}
                    projectOnTV={computedStyle}
                  />
              : defaultSection === 'projects'
                ? <Projects
                    showProject={this.showProject}
                    hideProject={this.hideProject}
                    projectOnTV={computedStyle}
                  />
              : <Bio />
            }
        </section>
      </div>
    );
  }
}

export default Navigation;

import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

class Projects extends PureComponent {

  render() {

    const { projectOnTV } = this.props;

    return (
      <div className="projects">
        <Link to="/projects/bender">
          <span
            id="bender"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            Bender Mastering Studio
          </span>
        </Link>
        <Link to="/">
          <span
            id="basset"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            Basset Hounds
          </span>
        </Link>
        <Link to="/">
          <span
            id="v!tor"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            V!TOR
          </span>
        </Link>
        <Link to="/">
          <span
            id="bat"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            Bat &amp; Ball
          </span>
        </Link>
        <Link to="/">
          <span
            id="interactiv"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            Interactiv Records
          </span>
        </Link>
        <Link to="/">
          <span
            id="phuzz"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            PHUZZ / Viva-Radio
          </span>
        </Link>
        <Link to="/">
          <span
            id="coexist"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            Coexist Records
          </span>
        </Link>
        <Link to="/">
          <span
            id="lucid"
            onMouseOver={this.props.showProject}
            onMouseOut={this.props.hideProject}>
            Lucid Dreaming
          </span>
        </Link>
        <div className="projectTV" style={projectOnTV}></div>
      </div>
    );
  }
}

export default Projects;

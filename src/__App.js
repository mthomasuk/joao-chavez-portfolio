import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends PureComponent {

  render() {
    return (
      <div className="container">
        <section className="header">
          <Link to="/">Jo&atilde;o Chaves &mdash; Graphic Design &amp; Sound</Link>
        </section>
        {this.props.children}
        <section className="footer">
            <a href="">Tumblr</a>
            <a href="">LinkedIn</a>
            <a href="">Behance</a>
        </section>
      </div>
    );
  }
}

export default App;

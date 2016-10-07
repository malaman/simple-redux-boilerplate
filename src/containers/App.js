import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/CounterActions';
import { Link } from 'react-router';
import Footer from '../components/Footer';
import {MatchWithSubRoutes} from '../routes';
import Counter from '../components/Counter';
import {Match} from 'react-router';
/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, actions, children, routes} = this.props;
    console.log('this.props', this.props);
    return (
      <div className="main-app-container">
        <div className="main-app-nav">
          <div id="main-app-title">Simple Redux Boilerplate</div>
          <div>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/foo">Foo</Link></span>
            <span><Link to="/bar">Bar</Link></span>
          </div>
        </div>
          <div>
            {/* Here's a trick: we pass those props into the children by mapping
              and cloning the element, followed by passing props in. Notice that
              those props have been unpacked above! */}
              {routes.map((route, i) => (
              <MatchWithSubRoutes key={i} {...route} />
              ))}
            {/*{routes.map((child) => {*/}
              {/*console.log('child', child);*/}
              {/*const Component = child.component;*/}
              {/*return React.cloneElement(<Component />, { counter, actions });*/}
            {/*})}*/}
          </div>
          <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

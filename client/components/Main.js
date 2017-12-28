import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> Reduxstagram </Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;

/**
 *  {this.props.children} is gonna be populated by react router and that is going to be
 *  either Single or PhotoGrid but you can't just pass down props like that, so you need to
 *  use this:
 *
 *  React.cloneElement(this.props.children. this.props)
 *
 *  with `this.props` later when we `connect` our `Main` element to the state and action creators in
 *  `App.js` we actually make them all available to both `Single` or `PhotoGrid` child components of
 *  Main. Main actually passes down its props to Single and PhotoGrid this way.
 */
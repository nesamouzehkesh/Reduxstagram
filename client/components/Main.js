import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> Reduxstagram </Link>
        </h1>
        {React.cloneElement(this.props.children. this.props)}
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
 *  the `this.props` will take any props that are coming down from the parent component and pass them
 *  down to either the Single or PhotoGrid component.
 */
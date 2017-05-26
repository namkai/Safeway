import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculateRoute } from '../actions/route_actions';
import RouteMap from './Map';

class App extends Component {
    componentDidMount() {
        this.props.calculateRoute();
    }
  render() {
      console.log(this.props.route, `i'm the route!`)
    return (
      <div className="App">
          <RouteMap/>
      </div>
    );
  }
}



export default connect(({ route }) => ({ route }), { calculateRoute })(App);

import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {marriageLine, marriageSpouse, marriageConnect, marriageSymbol, marriageMargin, marriageLineContainer} from "../../styles";

class Person extends Component {
  render() {
    return (
      <div style={marriageLineContainer}>
        <div style={marriageLine}>
          <div style={marriageSpouse}></div>
          <div style={marriageConnect}></div>
          <FontAwesome style={marriageSymbol} name="venus-mars" />
          <div style={marriageConnect}></div>
          <div style={marriageSpouse}></div>
        </div>
        <div style={marriageMargin}></div>
      </div>
    );
  }
}

export default Person;



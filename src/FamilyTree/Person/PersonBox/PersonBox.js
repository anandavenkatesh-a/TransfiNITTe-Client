import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {nonDescendantLine, descendantLine, personBox, personCard, hasMargin} from "../../styles";

class PersonBox extends Component {
  constructor(props) {
    super(props);
    this.getFormattedName = this.getFormattedName.bind(this);
  }

  render() {
    return (
      <div style={personBox}>
        <div style={this.props.isDescendant ? descendantLine : nonDescendantLine}></div>
        <div style={personCard}>
          <FontAwesome
            style={Object.assign({}, hasMargin, {color: this.props.male ? "deepskyblue": "pink"})}
            name={this.props.male ? "male" : "female"}
          />
          <span style={hasMargin}>{' ' + this.getFormattedName()}</span>
        </div>
      </div>
    );
  }

  getFormattedName() {
    if (this.props.nickname !== undefined) {
      return this.props.nickname;
    }
    if (this.props.firstName === undefined && this.props.lastName === undefined) {
      return "";
    }
    if (this.props.firstName === undefined) {
      return this.props.lastName;
    }
    if (this.props.lastName === undefined) {
      return this.props.firstName;
    }
    return this.props.firstName + ' ' + this.props.lastName;
  }
}

export default PersonBox;
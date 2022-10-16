import React, {Component} from 'react';
import PersonBox from './PersonBox';
import {coupleBox, person} from '../styles';
import MarriageLine from './MarriageLine';
class Person extends Component {
  render() {
    return (
      <div style={person}>
        <div style={coupleBox}>
          <PersonBox
            firstName={this.props.firstName}
            lastName={this.props.lastName}
            nickname={this.props.nickname}
            male={this.props.male}
            isDescendant={this.props.depth > 0}
            isFirst={this.props.isFirst}
            isLast={this.props.isLast}
          />
          {
            this.props.spouse &&
            <PersonBox
              firstName={this.props.spouse.firstName}
              lastName={this.props.spouse.lastName}
              nickname={this.props.spouse.nickname}
              male={!this.props.male}
              isDescendant={false}
              isFirst={this.props.isFirst}
              isLast={this.props.isLast}
            />
          }
        </div>
        {this.props.spouse && <MarriageLine />}
      </div>
    );
  }
}

export default Person;



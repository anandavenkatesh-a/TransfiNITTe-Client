import React, {Component} from 'react';
import {horizontalLine, tree} from './styles';

import Person from './Person';
import ChildrenList from './ChildrenList';

class FamilyTree extends Component {
  render() {
    return (
      <div style={tree}>
        <Person
          firstName={this.props.tree.firstName}
          lastName={this.props.tree.lastName}
          nickname={this.props.tree.nickname}
          male={this.props.tree.male}
          spouse={this.props.tree.spouse}
          depth={this.props.depth}
          isFirst={this.props.isFirst}
          isLast={this.props.isLast}
        />
        { this.props.tree.children && <div style={horizontalLine}></div> }
        {
          this.props.tree.children &&
          <div>
            <ChildrenList
              lastName={this.getChildInheritedLastName()}
              childrenArray={this.props.tree.children}
              parentDepth={this.props.depth}
            />
          </div>
        }
      </div>
    );
  }

  getChildInheritedLastName() {
    if (this.props.tree.male) {
      return this.props.tree.lastName;
    }
    if (this.props.tree.spouse === undefined) {
      return "";
    }
    return this.props.tree.spouse.lastName;
  }
}

export default FamilyTree;

import React, {Component} from 'react';
import FamilyTree from '../FamilyTree';
import {hiddenVerticalLine, visibleVerticalLine, verticalSeparator, verticalLineContainer, childrenList,
  personBoxHeight
} from "../styles";

class ChildrenList extends Component {
  render() {
    let lastName = this.props.lastName;
    let i = 0;
    return <div>
      {
        this.props.childrenArray !== undefined && this.props.childrenArray.map(
          (child, index, array) => (
            <div style={childrenList} key={i++}>
              <div
                style={Object.assign(
                  {},
                  verticalLineContainer,
                  {marginTop: ChildrenList.hasSpouse(child) ? -personBoxHeight : 0}
                )}
              >
                <div style={index === 0 ? hiddenVerticalLine : visibleVerticalLine}></div>
                <div style={verticalSeparator}></div>
                <div style={index === array.length - 1 ? hiddenVerticalLine : visibleVerticalLine}></div>
              </div>
              <FamilyTree
                tree={Object.assign(child, {"lastName": lastName})}
                isFirst={index === 0}
                isLast={index === array.length - 1}
                depth={this.props.parentDepth + 1}
              />
            </div>
          )
        )
      }
    </div>
  }

  static hasSpouse(child) {
    return !!child.spouse;
  }
}

export default ChildrenList;
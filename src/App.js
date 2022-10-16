import React, { Component } from "react";
import FamilyTree from "./FamilyTree";

import data from "../data.json";
import tree from "./tree.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { tree: tree.familyTree };
  }

  build_tree(house_number) {
    var people = {};
    let id = 0;
    for (var peop of data) {
      if (peop["House Number"] == house_number) {
        let p = { ...peop, children: [], spous: [] };
        people[id++] = p;
        p["Husband's Name"];
      }
    }

    for (var id_i in people) {
      for (var id_j in people) {
        if (id_i != id_j) {
          try {
            if (
              people[id_j].Name.toLowerCase() ==
              people[id_i]["Father's Name"].toLowerCase()
            ) {
              people[id_j].children.push(id_i);
            }
          } catch (err) {}

          try {
            if (
              people[id_i].Name.toLowerCase() ==
              people[id_j]["Husband's Name"].toLowerCase()
            ) {
              people[id_i].spous.push(id_j);
            }
          } catch (err) {}
        }
      }
    }

    for (var p in people) {
      if (people[p] != null) {
        for (var c in people[p].children) {
          people[p].children[c] = people[people[p].children[c]];
          //people[p] = null;
        }
        for (var s in people[p].spous) {
          people[p].spous[s] = people[people[p].spous[s]];
          // people[s] = null;
        }
      }
    }

    return people;
  }

  render() {
    let people = this.build_tree(107);
    for (var p in people) {
      console.log(people[p]);
    }
    return (
      <div>
        <FamilyTree tree={this.state.tree} depth={0} />
      </div>
    );
  }
}

export default App;

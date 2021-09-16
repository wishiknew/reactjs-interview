import React, { Component } from "react";

class ShowEmployee extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2 className="text-center">{this.props.Employee.firstName}</h2>
        <h2 className="text-center">{this.props.Employee.lastName}</h2>
        <h2 className="text-center">{this.props.Employee.dob}</h2>
        <h2 className="text-center">{this.props.Employee.designation}</h2>
        <img className="text-center" src={this.props.Employee.image} alt="" />
        <h2 className="text-center">{this.props.Employee.experience}</h2>
      </>
    );
  }
}

export default ShowEmployee;

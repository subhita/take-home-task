import React from "react";

class MainFilter extends React.Component {
  handleChange(event) {
    this.props.updateSearch(event.target.value);
  }

  render() {
    return (
      <div className="main-filter">
        <ul>
          <li>All</li>
          <li>Providers</li>
          <li>Users</li>
        </ul>
      </div>
    );
  }
}

export default MainFilter;

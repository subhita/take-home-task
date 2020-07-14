import React from "react";
import SearchIcon from './../../Images/search/search.png';

class UserFilter extends React.Component {
  handleChange(event) {
    this.props.updateSearch(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <img src={SearchIcon} alt="search" />
        <input
          type="text"
          placeholder="Search providers & users"
          className="input-search"
          onChange={this.handleChange.bind(this)}
          value={this.props.searchText}
        />
      </div>
    );
  }
}

export default UserFilter;

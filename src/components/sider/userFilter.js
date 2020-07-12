import React from "react";
import SearchIcon from "@material-ui/icons/Search";

class UserFilter extends React.Component {
  handleChange(event) {
    this.props.updateSearch(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <SearchIcon />
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

import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import doctorImg from "./../../Images/doctor-placeholder/doctor-placeholder.png";
import peopleImg from "./../../Images/people/people.png";
import DrImg from "./../../Images/doctor/doctor.png";
import addIcon from "./../../Images/add/add.png";
import tickIcon from "./../../Images/tick/tick.png";

class UserList extends React.Component {
  filter(users) {
    if (!this.props.filter) {
      return users;
    }
    return users.filter(
      (user) =>
        user.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0
    );
  }
  handleClick = (userId, type) => (e) => {
    this.props.handleOnClick(userId, type);
  };
  render() {
    return (
      <>
        <List dense>
          {this.filter(this.props.users).map((user) => {
            const labelId = `checkbox-list-secondary-label-${user.id}`;
            return (
              <>
                <ListItem key={user.id} id={user.id} button>
                  <ListItemAvatar>
                    <img
                      alt={`Avatar n°${user.name}`}
                      src={user.type === "doctor" ? doctorImg : peopleImg}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={user.name}
                    secondary={user.specialization}
                  />
                  <ListItemSecondaryAction>
                    {user.type === "doctor" ? (
                      <img src={DrImg} alt="Dr." style={{ marginRight: 10 }} />
                    ) : null}
                    <span>
                      <img
                        src={user.selectedItem ? tickIcon : addIcon}
                        alt="add"
                        edge="end"
                        key={user.id}
                        data-id={user.id}
                        onClick={this.handleClick(user.id, user.type)}
                      />
                    </span>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </>
    );
  }
}

export default UserList;

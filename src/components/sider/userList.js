import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

class UserList extends React.Component {
  filter(users) {
    if (!this.props.filter) {
      return users;
    }
    console.log(users);
    return users.filter(
      (user) =>
        user.providers.toLowerCase().indexOf(this.props.filter.toLowerCase()) >=
        0
    );
  }
  handleClick(user) {
    console.log(user);
  }
  render() {
    return (
      <>
        <List dense>
          {this.filter(this.props.users).map((user) => {
            const labelId = `checkbox-list-secondary-label-${user.providers}`;
            return (
              <>
                <ListItem key={user.providers} button>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${user.providers}`}
                      src={
                        user.type === "doctor"
                          ? "https://www.avatarapi.com/images/person2.jpg"
                          : "https://relayfm.s3.amazonaws.com/uploads/user/avatar/68/user_avatar_Davidsmith_artwork.png"
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    id={labelId}
                    primary={user.providers}
                    secondary={user.specialization}
                  />
                  <ListItemSecondaryAction>
                    {user.type === "doctor" ? <span>Dr.</span> : null}

                    <AddIcon
                      edge="end"
                      // onClick={this.handleClick(user.id)}
                      onClick={this.handleClick(user.id)}
                      style={{ marginBottom: -7 }}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
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

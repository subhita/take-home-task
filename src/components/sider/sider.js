import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UserList from "./userList";
import UserFilter from "./userFilter";
import Divider from "@material-ui/core/Divider";
import "./sider.css";
import DoctorTable from "./DoctorTable";
import UserTable from "./UserTable";
import arrowIcon from './../../Images/arrow/arrow@2x.png';

class Sider extends React.Component {
  constructor() {
    super();
    const USERS = [
      {
        name: "Banko",
        specialization: "Specialist",
        type: "doctor",
        id: 1,
        role: "super admin",
        providerNumber: 123,
        bupaId: "0123",
        account: "5657657676",
        mobileNumber: 9876545678,
        gender: "Female",
        selectedItem: false,
      },
      {
        name: "Pueblo",
        specialization: "User • Female",
        type: "user",
        id: 2,
        role: "admin",
        providerNumber: 123,
        bupaId: "0123",
        account: "",
        mobileNumber: 9876875678,
        gender: "Female",
        selectedItem: false,
      },
      {
        name: "Don Pablo",
        specialization: "Specialist",
        type: "doctor",
        id: 3,
        role: "observer",
        providerNumber: 123,
        bupaId: "0137",
        account: "4546576576",
        mobileNumber: 1236545678,
        gender: "Male",
        selectedItem: false,
      },
      {
        name: "Hava Lama",
        specialization: "General Practice",
        type: "doctor",
        id: 4,
        role: "guest",
        providerNumber: 123,
        bupaId: "0127",
        account: "34567890",
        mobileNumber: 7689545678,
        gender: "Feale",
        selectedItem: false,
      },
      {
        name: "Guillermo Salva",
        specialization: "User • Male",
        type: "user",
        id: 5,
        role: "super admin",
        providerNumber: 123,
        bupaId: "0593",
        account: "456546955769",
        mobileNumber: 4566545678,
        gender: "Male",
        selectedItem: false,
      },
      {
        name: "Salla Rosa",
        specialization: "User • Female",
        type: "user",
        id: 6,
        role: "admin",
        providerNumber: 123,
        bupaId: "0563",
        account: "123456789",
        mobileNumber: 7896545678,
        gender: "Female",
        selectedItem: false,
      },
    ];
    this.state = {
      users: USERS,
      filter: null,
      filterData: USERS,
      currentView: "one",
      doctorTableData: [],
      userTableData: [],
    };
  }
  showA = () => {
    this.setState({
      filterData: this.state.users,
      currentView: "one",
    });
  };
  showB = () => {
    this.setState({
      filterData: this.state.users.filter((e) => e.type === "doctor"),
      currentView: "two",
    });
  };
  showC = () => {
    this.setState({
      filterData: this.state.users.filter((e) => e.type === "user"),
      currentView: "three",
    });
  };

  updateSearch(inputValue) {
    this.setState({
      filter: inputValue,
    });
  }
  handleOnClick(userId, type) {
    this.setState(
      (prevState) => ({
        filterData: prevState.filterData.map((user) => ({
          ...user,
          selectedItem: user.id === userId ? true : user.selectedItem,
        })),
        users: prevState.users.map((user) => ({
          ...user,
          selectedItem: user.id === userId ? true : user.selectedItem,
        })),
      }),
      () => {
        const userListData = this.state.users.filter((item) => {
          return item.id === userId;
        });
        if (type === "doctor") {
          this.setState({
            doctorTableData: this.state.doctorTableData.concat(userListData),
          });
        } else {
          this.setState({
            userTableData: this.state.userTableData.concat(userListData),
          });
        }
      }
    );
  }
  render() {
    return (
      <>
        <Grid container spacing={3} style={{ marginTop: 105 }}>
          <Grid item xs={4}>
            <div className="left-heading">All Providers & users</div>
            <Paper style={{ background: "#202020", color: "white" }}>
              <UserFilter
                updateSearch={this.updateSearch.bind(this)}
                searchText={this.state.filter}
              />
              <Divider />
              <div className="main-filter">
                <ul>
                  <li
                    className={this.state.currentView === "one" ? "active" : ""}
                    onClick={this.showA}
                  >
                    All
                  </li>
                  <li
                    className={this.state.currentView === "two" ? "active" : ""}
                    onClick={this.showB}
                  >
                    Providers
                  </li>
                  <li
                    className={
                      this.state.currentView === "three" ? "active" : ""
                    }
                    onClick={this.showC}
                  >
                    Users
                  </li>
                </ul>
                <span className="location-link">
                <a href="#">Link all providers to this location<img src={arrowIcon} alt="arrow" /></a>
                </span>
              </div>
              <Divider />
              <UserList
                filter={this.state.filter}
                users={this.state.filterData}
                handleOnClick={this.handleOnClick.bind(this)}
              />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper style={{ background: "#121212" }} className="table-paper">
              <DoctorTable products={this.state.doctorTableData} />
              <UserTable usersList={this.state.userTableData} />
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Sider;

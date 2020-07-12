import React from "react";
// import { forwardRef } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import UserList from "./userList";
import UserFilter from "./userFilter";
import Divider from "@material-ui/core/Divider";
// import MaterialTable from "material-table";
// import ClearIcon from '@material-ui/icons/Clear';
// import MainFilter from "./mainFilter";
import "./sider.css";
import Products from "./table";

class Sider extends React.Component {
  constructor() {
    super();
    const USERS = [
      {
        providers: "Banko",
        specialization: "Specialist",
        type: "doctor",
        id: 1,
        role: "super admin",
        pnumber: 123,
        bupaId: "0123",
        bankAccount: "5657657676",
      },
      {
        providers: "Pueblo",
        specialization: "User • Female",
        type: "user",
        id: 2,
        role: "admin",
        pnumber: 123,
        bupaId: "0123",
        bankAccount: "",
      },
      {
        providers: "Don Pablo",
        specialization: "Specialist",
        type: "doctor",
        id: 1,
        role: "observer",
        pnumber: 123,
        bupaId: "0137",
        bankAccount: "4546576576",
      },
      {
        providers: "Hava Lama",
        specialization: "General Practice",
        type: "doctor",
        id: 1,
        role: "guest",
        pnumber: 123,
        bupaId: "0127",
        bankAccount: "",
      },
      {
        providers: "Guillermo Salva",
        specialization: "User • Male",
        type: "user",
        id: 1,
        role: "super admin",
        pnumber: 123,
        bupaId: "0593",
        bankAccount: "456546955769",
      },
      {
        providers: "Salla Rosa",
        specialization: "User • Female",
        type: "user",
        id: 1,
        role: "admin",
        pnumber: 123,
        bupaId: "0563",
        bankAccount: "123456789",
      },
    ];
    const columns = [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ];
    const data = [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
      },
    ];
    this.state = {
      users: USERS,
      filter: null,
      filterData: USERS,
      data: data,
      columns: columns,
    };
  }
  showA = () => {
    this.setState({
      filterData: this.state.users,
    });
  };
  showB = () => {
    this.setState({
      filterData: this.state.users.filter((e) => e.type === "doctor"),
    });
  };
  showC = () => {
    this.setState({
      filterData: this.state.users.filter((e) => e.type === "user"),
    });
  };

  updateSearch(inputValue) {
    this.setState({
      filter: inputValue,
    });
  }

  render() {
    // const tableIcons = {
    //     Delete: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
    //   }
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
                  <li onClick={this.showA}>All</li>
                  <li onClick={this.showB}>Providers</li>
                  <li onClick={this.showC}>Users</li>
                </ul>
                <a href="#">Link all providers & users to this location</a>
              </div>
              <UserList
                filter={this.state.filter}
                users={this.state.filterData}
              />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper style={{ background: "#202020" }} className="table-paper">
              <Products />
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Sider;

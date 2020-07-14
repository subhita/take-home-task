import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
  }
  handleRowDel(product) {
    var index = this.props.usersList.indexOf(product);
    this.props.usersList.splice(index, 1);
    this.setState(this.props.usersList);
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    var usersList = this.props.usersList.slice();
    var newUserList = usersList.map(function (product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ usersList: newUserList });
  }
  render() {
    return (
      <ProductTable
        onProductTableUpdate={this.handleProductTable.bind(this)}
        onRowDel={this.handleRowDel.bind(this)}
        usersList={this.props.usersList}
        filterText={this.state.filterText}
      />
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.usersList.map(function (product) {
      if (product.name.indexOf(filterText) === -1) {
        return false;
      }
      return (
        <ProductRow
          onProductTableUpdate={onProductTableUpdate}
          product={product}
          onDelEvent={rowDel.bind(this)}
          key={product.id}
        />
      );
    });
    return (
      <TableContainer className="user-table">
        {product.length >= 1 ? (
          <Table aria-label="simple table" style={{ minWidth: 100 }}>
            <TableHead>
              <TableCell>Assigned users</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Mobile number</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell></TableCell>
            </TableHead>
            <TableBody>{product}</TableBody>
          </Table>
        ) : null}
      </TableContainer>
    );
  }
}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {
    return (
      <TableRow>
        <EditableCell
        style={{color: "#ffffffe6"}}
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "name",
            value: this.props.product.name,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "role",
            value: this.props.product.role,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "mobileNumber",
            value: this.props.product.mobileNumber,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "gender",
            value: this.props.product.gender,
            id: this.props.product.id,
          }}
        />
        <TableCell>
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            // className="del-btn"
          />
        </TableCell>
      </TableRow>
    );
  }
}
class EditableCell extends React.Component {
  render() {
    return (
      <TableCell>
        <input
          type="text"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onProductTableUpdate}
        />
      </TableCell>
    );
  }
}

export default UserTable;

import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.filterText = "";
    this.state.products = [
      {
        id: 1,
        providerNumber: "345678",
        role: "Super Admin",
        budaId: 12,
        account: "Bank of Sydney (01112348569)",
        name: "Benko",
      },
      {
        id: 2,
        providerNumber: "123456",
        role: "Admin",
        budaId: 15,
        account: "Bank of Londan (456789568569)",
        name: "Don Pablo",
      },
    ];
  }
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value,
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
  }
  render() {
    return (
      <ProductTable
        onProductTableUpdate={this.handleProductTable.bind(this)}
        onRowDel={this.handleRowDel.bind(this)}
        products={this.state.products}
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
    var product = this.props.products.map(function (product) {
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
      <TableContainer>
        <Table aria-label="simple table" style={{ minWidth: 100 }}>
          <TableHead>
            <TableCell>Assigned providers</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Provider No</TableCell>
            <TableCell>BUPA ID (Optional)</TableCell>
            <TableCell>Bank Account</TableCell>
            <TableCell></TableCell>
          </TableHead>
          <TableBody>{product}</TableBody>
        </Table>
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
            type: "providerNumber",
            value: this.props.product.providerNumber,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "budaId",
            value: this.props.product.budaId,
            id: this.props.product.id,
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "account",
            value: this.props.product.account,
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

export default Products;

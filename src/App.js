import "devextreme/dist/css/dx.dark.css";
import "./App.css";
import { service } from "./service";

import DataGrid, {
  Column,
  MasterDetail,
  RequiredRule,
  Editing,
} from "devextreme-react/data-grid";
import DataSource from "devextreme/data/data_source";
import CustomStore from "devextreme/data/custom_store";

import DetailTemplate from "./DetailTemplate";

console.log(service.getOrders());

const dataSource = new DataSource({
  store: new CustomStore({
    key: "OrderID",
    load: () => {
      return service.getOrders();
    },
    insert: (val) => {
      return service.insertOrder(val);
    },
    update: (key, val) => {
      return service.updateOrder(key, val);
    },
    remove: (key) => {
      return service.removeOrder(key);
    },
  }),
});

function App() {
  return (
    <div className="App">
      <DataGrid
        dataSource={dataSource}
        showBorders={true}
        remoteOperations={true}
      >
        <Column dataField="OrderID">
          <RequiredRule />
        </Column>
        <Column dataField="CustomerID" />
        <Column dataField="EmployeeID" />
        <Column dataField="OrderDate" />
        <Column dataField="RequiredDate" />
        <Column dataField="ShippedDate" />
        <Column dataField="ShipVia" />
        <Column dataField="Freight" />
        <Column dataField="ShipName" />
        <Column dataField="ShipAddress" />
        <Column dataField="ShipCity" />
        <Column dataField="ShipRegion" />
        <Column dataField="ShipPostalCode" />
        <Column dataField="ShipCountry" />
        <Column dataField="Customer" />
        <Column dataField="Employee" />
        <Column dataField="Shipper" />
        <Editing
          mode="popup"
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        />
        <MasterDetail enabled={true} component={DetailTemplate} />
      </DataGrid>
    </div>
  );
}

export default App;

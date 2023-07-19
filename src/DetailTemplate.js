import DataGrid, { Editing } from "devextreme-react/data-grid";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { service } from "./service";

function DetailTemplate(data) {
  let orderId = data.data.data.OrderID;
  const dataSource = new DataSource({
    store: new CustomStore({
      load: () => {
        return service.getDetails(orderId);
      },
      insert: (val) => {
        return service.insertDetails(val, orderId);
      },
      update: (key, val) => {
        return service.updateDetails(key, val, orderId);
      },
      remove: (key) => {
        return service.removeDetails(key, orderId);
      },
    }),
  });
  return (
    <div>
      <DataGrid
        showBorders={true}
        remoteOperations={true}
        dataSource={dataSource}
      >
        <Editing
          mode="popup"
          allowAdding={true}
          allowDeleting={true}
          allowUpdating={true}
        />
      </DataGrid>
    </div>
  );
}

export default DetailTemplate;
